import { evalWithPage } from '$lib/server/puppeteer';
import type { RequestHandler } from './$types';

export const POST = (async ({ request }) => {
  const code = await request.text();
  return new Response(evalWithPage(code));
}) satisfies RequestHandler;
