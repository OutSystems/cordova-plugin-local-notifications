const fs = require('fs');
const xml2js = require('xml2js');

module.exports = {
  branches: ['outsystems'],
  repositoryUrl: 'https://github.com/OutSystems/cordova-plugin-local-notifications.git',
  tagFormat: '${version}',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        // Disable BREAKING CHANGE footer parsing so it can never trigger a major bump.
        // This is intentional: this repo is a fork that is meant to on patch-only releases.
        parserOpts: {
          noteKeywords: [],
        },
        releaseRules: [
          { type: 'feat', release: 'patch' },
          { type: 'fix', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'chore', release: 'patch' },
          { type: 'docs', release: 'patch' },
          { type: 'build', release: 'patch' },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: '.',
        npmPublish: false,
      },
    ],
    {
      async prepare(pluginConfig, context) {
        const { nextRelease } = context;
        const version = nextRelease.version;

        const xmlPath = 'plugin.xml';
        const xml = fs.readFileSync(xmlPath, 'utf8');

        const match = xml.match(/^( +)\S/m);
        const indent = match ? match[1].length : 4;
        const parser = new xml2js.Parser();
        const builder = new xml2js.Builder({ renderOpts: { pretty: true, indent: ' '.repeat(indent) } });

        const parsed = await parser.parseStringPromise(xml);
        parsed.plugin.$.version = version;

        const updatedXml = builder.buildObject(parsed);
        fs.writeFileSync(xmlPath, updatedXml);

        console.log(`Updated plugin.xml version to ${version}`);
      },
    },
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'plugin.xml', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    [
      '@semantic-release/github',
      {
        successComment: false,
        failComment: false,
        releasedLabels: false,
        addReleases: 'bottom',
      },
    ],
  ],
};
