"use strict"

const DefaultSettings = {
  "enabled": true,
  "alerted": true,
  "messager": true,
  "marker": true,
  "upload": true,
  "itemId": 98260,
}

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
    if (from_ver === undefined) {
        // Migrate legacy config file
        return Object.assign(Object.assign({}, DefaultSettings), settings);
    } else if (from_ver === null) {
        // No config file exists, use default settings
        return DefaultSettings;
    } else {        
        if (from_ver < to_ver)
            return Object.assign(Object.assign({}, DefaultSettings), settings);
        // Migrate from older version (using the new system) to latest one
        throw new Error('Settings version is newer than previous this should never be reached!');
    }
}
