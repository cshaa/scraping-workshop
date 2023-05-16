import puppeteer, { Browser, Page } from 'puppeteer';
const AsyncFunction = async function () {}.constructor;

export async function withPage(fn: (page: Page) => Promise<void>) {
	let browser: Browser | undefined;
	try {
		browser = await puppeteer.launch({ headless: 'new' });
		const page = await browser.newPage();
		await fn(page);
	} finally {
		await browser?.close();
	}
}

export function evalWithPage(code: string): ReadableStream<string> {
	return new ReadableStream<string>({
		start(controller) {
			const print = (s: unknown) => controller.enqueue(String(s));

			withPage(async (page) => {
				await AsyncFunction('page', 'print', code)(page, print);
			})
				.then(() => {
					try {
						controller.close();
					} catch (_) {}
				})
				.catch((err) => {
					try {
						controller.enqueue(String(err));
						controller.close();
					} catch (_) {}
				});
		}
	});
}
