ChangeLog
---------

Please also read the [Upgrade Guide](https://github.com/katzer/cordova-plugin-local-notifications/wiki/Upgrade-Guide) for more information.

#### Version 0.9.14 (03.12.2024)
### 25-11-2024
- Android: Fix endless loop of notification permission denial when granting exact alarm permission.

#### Version 0.9.13 (07.10.2024)
### 07-10-2024
- Android: Deliver notifications while app is in foreground if `foreground` option is `true`. [RMET-3699](https://outsystemsrd.atlassian.net/browse/RMET-3699)

#### Version 0.9.12 (27.09.2023)
### 12-09-2023
- Android: Make PendingIntents immutable for Android 14 [RMET-2666](https://outsystemsrd.atlassian.net/browse/RMET-2666)
### 11-09-2023
- Android: Replace dependency on Android Support Libraries with AndroidX [RMET-2823](https://outsystemsrd.atlassian.net/browse/RMET-2823)

#### Version 0.9.11 (28.08.2023)
### 04-08-2023
- Added exact and inexact notifications [RMET-2665](https://outsystemsrd.atlassian.net/browse/RMET-2665)
- Fixed Android 14 bug [RMET-2582](https://outsystemsrd.atlassian.net/browse/RMET-2582)

#### Version 0.9.10 (19.12.2022)
### 16-12-2022
- Removed dependency to jcenter [RMET-2036](https://outsystemsrd.atlassian.net/browse/RMET-2036)

#### Version 0.9.9 (21.09.2022)
- Fix required for Android 13 regarding notification permissions (https://outsystemsrd.atlassian.net/browse/RMET-1833)

#### Version 0.9.8 (04.11.2021)
- New plugin release to include metadata tag in Extensibility Configurations in the OS wrapper

#### Version 0.9.7 (30.09.2021)
- Fix required for Android 12 - Use Activity instead of Service to handle notification clicks (https://outsystemsrd.atlassian.net/browse/RMET-1007)

#### Version 0.9.6 (14.09.2021)
- Changes required for Android 12 - Include SCHEDULE_EXACT_ALARM permission and specify mutability on PendingIntents (https://outsystemsrd.atlassian.net/browse/RMET-822)
- Changes required for Andorid 12 - Change dependecy to cordova-plugin-badge so that MABS 8 build works (because of a gradle file) (https://outsystemsrd.atlassian.net/browse/RMET-822)
- Changes required for Andorid 12 - Do not use notification trampolines for Android >= 12 (https://outsystemsrd.atlassian.net/browse/RMET-822)


#### Version 0.8.5 (22.05.2017)
- iOS 10

#### Version 0.8.4 (04.01.2016)
- Bug fixes
 - SyntaxError: missing ) after argument list

#### Version 0.8.3 (03.01.2016)
- Platform enhancements
 - Support for the `Crosswalk Engine`
 - Support for `cordova-ios@4` and the `WKWebView Engine`
 - Support for `cordova-windows@4` and `Windows 10` without using hooks
- Enhancements
 - New `color` attribute for Android (Thanks to @Eusebius1920)
 - New `quarter` intervall for iOS & Android
 - `smallIcon` is optional (Android)
 - `update` checks for permission like _schedule_
 - Decreased time-frame for trigger event (iOS)
 - Force `every:` to be a string on iOS
- Bug fixes
 - Fixed #634 option to skip permission check
 - Fixed #588 crash when basename & extension can't be extracted (Android)
 - Fixed #732 loop between update and trigger (Android)
 - Fixed #710 crash due to >500 notifications (Android)
 - Fixed #682 crash while resuming app from notification (Android 6)
 - Fixed #612 cannot update icon or sound (Android)
 - Fixed crashing get(ID) if notification doesn't exist
 - Fixed #569 getScheduled returns two items per notification
 - Fixed #700 notifications appears on bootup

#### Version 0.8.2 (08.11.2015)
- Submitted to npm
- Initial support for the `windows` platform
- Re-add autoCancel option on Android
- Warn about unknown properties
- Fix crash on iOS 9
- Fixed webView-Problems with cordova-android 4.0
- Fix get* with single id
- Fix issue when passing data in milliseconds
- Update device plugin id
- Several other fixes

#### Version 0.8.1 (08.03.2015)

- Fix incompatibility with cordova version 3.5-3.0
- Fire `clear` instead of `cancel` event when clicked on repeating notifications
- Do not fire `clear` or `cancel` event when clicked on persistent notifications

### Version 0.8.0 (05.03.2015)

- Support for iOS 8, Android 2 (SDK >= 7) and Android 5
 - Windows Phone 8.1 will be added soon
- New interfaces to ask for / register permissions required to schedule local notifications
 - `hasPermission()` and `registerPermission()`
 - _schedule()_ will register the permission automatically and schedule the notification if granted.
- New interface to update already scheduled|triggered local notifications
 - `update()`
- New interfaces to clear the notification center
 - `clear()` and `clearAll()`
- New interfaces to query for local notifications, their properties, their IDs and their existence depend on their state
 - `isPresent()`, `isScheduled()`, `isTriggered()`
 - `getIds()`, `getAllIds()`, `getScheduledIds()`, `getTriggeredIds()`
 - `get()`, `getAll()`, `getScheduled()`, `getTriggered()`
- Schedule multiple local notifications at once
 - `schedule( [{...},{...}] )`
- Update multiple local notifications at once
 - `update( [{...},{...}] )`
- Clear multiple local notifications at once
 - `clear( [1, 2] )`
- Cancel multiple local notifications at once
 - `cancel( [1, 2] )`
- New URI format to specify sound and image resources
 - `http(s):` for remote resources _(Android)_
 - `file:` for local resources relative to the _www_ folder
 - `res:` for native resources
- New events
 - `schedule`, `update`, `clear`, `clearall` and `cancelall`
- Enhanced event informations
 - Listener will get called with the local notification object instead of only the ID
- Multiple listener for one event
 - `on(event, callback, scope)`
- Unregister event listener
 - `un(event, callback)`
- New Android specific properties
 - `led` properties
 - `sound` and `image` accepts remote resources
- Callback function and scope for all interface methods
 - `schedule( notification, callback, scope )`
- Renamed `add()` to `schedule()`
- `autoCancel` property has been removed
 - Use `ongoing: true` for persistent local notifications on Android
- Renamed repeat intervals
 - `second`, `minute`, `hour`, `day`, `week`, `month` and `year`
- Renamed some local notification properties
 - `date`, `json`, `message` and `repeat`
 - Scheduling local notifications with the deprecated properties is still possible
- [Kitchen Sink sample app](https://github.com/katzer/cordova-plugin-local-notifications/tree/example)
- [Wiki](https://github.com/katzer/cordova-plugin-local-notifications/wiki)
