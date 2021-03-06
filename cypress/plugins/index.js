// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
// promisified fs module
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile (file) {
    const pathToConfigFile = path.resolve('../scdemo', 'config', `${file}.json`)
    return fs.readJson(pathToConfigFile)
}

let shouldSkip = false;
module.exports = (on, config) => {
    // accept a configFile value or use development by default
    //  require('cypress-plugin-retries/lib/plugin')(on)
    const file = config.env.configFile || 'local'
    return getConfigurationByFile(file)
}
