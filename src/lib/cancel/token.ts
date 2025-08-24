export class CancelToken {
  #cancelled = false;
  #reason?: string;

  cancel(reason?: string) {
    this.#cancelled = true;
    this.#reason = reason;
  }

  get cancelled() {
    return this.#cancelled;
  }

  toString() {
    return `cancelled: ${this.#cancelled}, reason: ${this.#reason}`;
  }
}
