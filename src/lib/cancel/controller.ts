import { CancelToken } from "./token";

export class CancelController {
  #token = new CancelToken();

  get token() {
    return this.#token;
  }

  get isCancelled() {
    return this.#token.cancelled;
  }

  toString() {
    return this.#token.toString();
  }
}
