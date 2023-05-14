import puppeteer, { Browser, Page } from 'puppeteer';
const AsyncFunction = async function () {}.constructor;

export async function withPage(fn: (page: Page) => void) {
	let browser: Browser | undefined;
	try {
		browser = await puppeteer.launch();
		const page = await browser.newPage();
		fn(page);
	} finally {
		await browser?.close();
	}
}

export async function evalWithPage(code: string) {
	withPage((page) => {
		AsyncFunction('page', code)(page);
	});
}
