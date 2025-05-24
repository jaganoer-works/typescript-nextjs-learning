import { NextResponse } from 'next/server';
import type { HelloResponse } from '@/types/api';

export async function GET() {
  const data: HelloResponse = { message: 'Hello, API!' };
  return NextResponse.json(data);
}
