"use strict";

const db = require("knex")({
  client: "mysql2",
  connection: {
    host: "psedge.global",
    port: 3306,
    user: "[cacheid]-[dbuser]",
    password: "",
    database: "",
  },
});

const main = async () => {
  try {
    const out = await db.raw(`select 1;`);

    console.log(`Done`);
  } catch (e) {
    console.log(e);
  }
};

main();
