require('dotenv').config();
const _ = require('lodash');
const PATH = process.env.SHIPYARD_PATH || `${process.cwd()}/shipyard.json`;

/**
 * Creates a new Shipyard JSON file using defaults at a given path
 * @param {string} path
 */
function createFile(path) {
    const fs = require('fs');
    const shipyard = {
        lists: {
            inbox: [],
            projects: [],
            'someday-maybe': [],
            reference: [],
            archive: [],
            trash: []
        },
        config: {}
    }
    const data = JSON.stringify(shipyard);
    fs.writeFileSync(path, data);
    return shipyard;
}

/**
 * Retrieves lists from Shipyard JSON file
 * @returns {Promise<*>}
 */
async function getListsFromFile() {
    const shipyard = require(PATH);
    return _.get(shipyard, 'lists');
}

module.exports = {
    createFile,
    getListsFromFile,
    PATH
};