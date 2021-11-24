const MockDatabaseService = require("./class.mock.database.service");
<<<<<<< HEAD
const FirestoreDatabaseService = require("./class.firestore.database.service");
let db;
if(!!process.env.TESTING) {
    db = new MockDatabaseService();
} else {
    db = new FirestoreDatabaseService();
}

=======

const db = new MockDatabaseService();
>>>>>>> 222309f52f1a5f664c8e36309dbc794b81acf05a
module.exports = db;
