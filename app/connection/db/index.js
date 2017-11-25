const mongoose = require('mongoose');
exports.dblog = (app) => {
    try {

        let mongoLog = `mongodb://${app.get('MONGO_HOST_LOG')}:${app.get('MONGO_PORT_LOG')}/${app.get('MONGO_DB_LOG')}`;
        mongoose.Promise = global.Promise;
        let dbLog = mongoose;


        /**
         * makes the connection to the main database.
         * @param {string} mongoUrl - The connection string declared at the beginning of the file.
         * @return {Object} returns the connection object data Base log.
         */
        require('../../schema/log')(dbLog);
        return dbLog.createConnection(mongoLog, { keepAlive: 300000, connectTimeoutMS: 30000, useMongoClient: true });

    } catch (error) {
        console.log('dblog', error);
        throw error;
    }

};