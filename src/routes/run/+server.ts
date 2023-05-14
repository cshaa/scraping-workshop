import { evalWithPage } from '$lib/server/puppeteer';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST = (async ({ request }) => {
	const code = await request.text();

	try {
		const result = evalWithPage(code);
		return json({
			success: true,
			result
		});
	} catch (error) {
		return json({
			success: false,
			error
		});
	}
}) satisfies RequestHandler;
