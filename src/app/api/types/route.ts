import { NextResponse } from 'next/server'
import { getConnection } from '@/lib/db'

interface Row {
  types_id: number;
  types_name: string;
  case_id: number;
  title: string;
  content: string;
  image: string;
}

export async function GET() {
  const connection = await getConnection()
  const [rows] = await connection.query(`
      SELECT
          t.id AS types_id,
          t.name AS types_name,
          c.id AS case_id,
          c.title,
          c.content,
          c.image
        FROM types t
        JOIN cases c ON t.id = c.types_id
        ORDER BY t.id, c.id
  `) as [Row[], unknown];

  const map = new Map<number, { id: number; name: string; cases: Array<{ id: number; title: string; content: string; image: string }> }>();
  for (const row of rows) {
    if (!map.has(row.types_id)) {
      map.set(row.types_id, {
        id: row.types_id,
        name: row.types_name,
        cases: []
      });
    }

    map.get(row.types_id)!.cases.push({
      id: row.case_id,
      title: row.title,
      content: row.content,
      image: row.image
    });
  }

  const result = Array.from(map.values());
  console.log(result);
  await connection.end()
  return NextResponse.json(result)
}