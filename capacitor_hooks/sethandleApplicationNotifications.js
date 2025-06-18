const fs = require('fs');
const path = require('path');

const platform = process.env.CAPACITOR_PLATFORM_NAME;
if (platform != 'ios') {
    // only needed for iOS - to allow for custom handling of notifications different from what capacitor uses.
    return;
}
const projectDirPath = process.env.CAPACITOR_ROOT_DIR;
const configPath = path.resolve(projectDirPath, 'ios', 'App', 'App', 'capacitor.config.json');
console.log('\Local Notifications plugin - running hook before copy for iOS.')

// read the existing config json
let config = {};
try {
  const fileContent = fs.readFileSync(configPath, 'utf-8');
  config = JSON.parse(fileContent);
} catch (e) {
  console.error('\t[ERROR] - Invalid JSON reading and parse - ' + e);
  process.exit(1);
}

// merge the new content with the existing json
const newConfig = {
  ios: {
    handleApplicationNotifications: false
  }
};
config.ios = {
  ...config.ios,
  ...newConfig.ios
};

// Write back to config.json
fs.writeFileSync(configPath, JSON.stringify(config, null, 4));
console.log('\t[SUCCESS] capacitor.config.json updated successfully.');
