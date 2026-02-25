import { Client } from 'pg';
import dotenv from 'dotenv';
import fs from "fs";

dotenv.config();

function createClient() {
  return new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
  });
}

async function createMigrationsTable() {
  const client = createClient();
  await client.connect();

  await client.query(`
    CREATE TABLE IF NOT EXISTS migrations (
      filename VARCHAR(255) PRIMARY KEY,
      created_at TIMESTAMP DEFAULT now()
    );
  `);

  await client.end();
}

async function runMigrations() {
  const client = createClient();
  const migrations = fs.readdirSync('migrations').sort();
  console.log(migrations);
  await client.connect();
  const { rows } = await client.query(`SELECT filename FROM migrations;`);
  const appliedMigrations = rows.map(r => r.filename);

  for (let migrationFile of migrations) {
    if (!appliedMigrations.includes(migrationFile)) {
      const fileContents = fs.readFileSync(`migrations/${migrationFile}`).toString("utf-8");
      await client.query(fileContents)
      await client.query("INSERT INTO migrations (filename) VALUES ($1)", [migrationFile])
      console.log(`Ran migration: ${migrationFile}`)
    } else {
      console.log(`Migration file ${migrationFile} already applied`)
    }
  }

  await client.end();
}

async function main() {
  await createMigrationsTable();
  await runMigrations();
}

main();


