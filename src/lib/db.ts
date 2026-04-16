import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function getDB() {
  await sql`
    CREATE TABLE IF NOT EXISTS portfolio_items (
      id         TEXT PRIMARY KEY,
      type       TEXT  NOT NULL,
      data       JSONB NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS updates (
      id         TEXT PRIMARY KEY,
      data       JSONB NOT NULL,
      date       TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS posts (
      id           TEXT PRIMARY KEY,
      slug         TEXT UNIQUE NOT NULL,
      data         JSONB NOT NULL,
      published_at TEXT,
      created_at   TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS subscribers (
      email      TEXT PRIMARY KEY,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  return sql;
}

export { sql };
