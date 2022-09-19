"use strict";
// polyscale
const DATABASE_URL = "postgresql://COCKROACH_DB_USERNAME:COCKROACH_DB_PASSWORD@psedge.global:5432/COCKROACH_DATABASENAME?options=--cluster%3DCOCKROACH_DB_CLUSTERNAME&sslmode=require&application_name=POLYSCALE_CACHE_ID";

const { Client } = require("pg");

const client = new Client(DATABASE_URL);

(async () => {
  await client.connect();
  try {
    const results = await client.query("SELECT NOW()");
    console.log(results);
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    client.end();
  }
})();