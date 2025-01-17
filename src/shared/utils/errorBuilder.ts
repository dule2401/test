export type ErrorState = {
  error: boolean;
  message: string;
};

export class ErrorBuilder {
  _state!: ErrorState;
  get state() {
    return this._state;
  }

  constructor() {}

  valid() {
    this._state = { error: false, message: "" };
    return this;
  }

  invalid({ message }: { message: string }) {
    this._state = {
      error: true,
      message,
    };
    return this;
  }
}
