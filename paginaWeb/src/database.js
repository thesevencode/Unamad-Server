const db = require("../../beacons-db");

const config = {
  url:
    process.env.DB_URL ||
    "mongodb+srv://juan:juan@dbstore-hgmx2.mongodb.net/dbunamad?retryWrites=true&w=majority",

  config: {
    user: process.env.DB_USER || "juan",

    pass: process.env.DB_PASS || "juan"
  }
};

let services = null;

module.exports = async function initDatabase() {
  if (!services) {
    try {
      services = await db(config.url, config.config);
    } catch (e) {
      handleFatalError(e);
    }
  }
  return services; // Organization, User
};

function handleFatalError(err) {
  console.log("ERRORR");
  console.error(err.message);
  console.error(err.stack);
  process.exit(1);
}
