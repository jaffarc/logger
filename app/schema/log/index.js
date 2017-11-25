const { Schema } = require('mongoose');

/**
* @desc Definition of Profile Schema
* @name used
* @memberof documents/Schema#
* @property {string} email - Email is used as a login
* @property {ObjectId} profile - Profile Schema Reference
* @property {boolean} status - Flag indicating whether the document is active or not
*/
const errorSchema = new Schema({
    method: {
        type: String
    },
    body: {
        'metadata': {
            'title': {
                type: String
            },
            'type': {
                type: String
            },
            'icon': {
                type: String
            }
        },

        'error': {
            type: String
        },
        'error_description': {
            type: String
        }

    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    collection: 'error',
    timestamps: true
});

module.exports = (dblog) => dblog.model('error', errorSchema);