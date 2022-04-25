"use strict";

const { Client } = require("pg");

(async () => {
  const client = new Client({
    host: "postgres.polyscale.global",
    database: "",
    user: "",
    password: "",
    port: 5432,
    application_name: "",
  });

  console.log("Connecting...");

  await client.connect();

  const res = await client.query("SELECT $1::text as message", [
    "Hello world!",
  ]);

  console.log(res.rows[0].message);

  console.log("Done.");

  await client.end();
})().catch((err) => {
  console.error(err);
});
