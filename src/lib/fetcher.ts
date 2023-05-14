import { writable, type Readable } from "svelte/store";

const streamToIter = <T>(stream: ReadableStream<T>): AsyncIterable<T> => {
	return {
		async *[Symbol.asyncIterator]() {
			const reader = stream.getReader();
			try {
				while (true) {
					const { done, value } = await reader.read();
					if (done) return;
					yield value;
				}
			} finally {
				reader.releaseLock();
			}
		}
	};
};

export class Fetcher {
  private _done = writable(false);
  private _content = writable("");
	private controller = new AbortController();
  private stream: ReadableStream<string> | undefined;

  public done: Readable<boolean> = this._done;
  public content: Readable<string> = this._content;

	constructor({
		url,
		body
	}: {
		url: string;
		body: string;
	}) {
		const p = fetch(url, {
			method: 'POST',
			body,
			signal: this.controller.signal
		});

		p.then(async (res) => {
      if (!res.body) return;
			this.stream = res.body.pipeThrough(new TextDecoderStream());
			for await (const part of streamToIter(this.stream)) {
				this._content.update(c => c + part);
			}
      this._done.set(true);
		});
	}

  stop() {
    this.controller.abort();
    this.stream?.cancel();
    this._done.set(true);
  }
}
