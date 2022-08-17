class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = 'FormatError';
  }
}

const err = new FormatError('ошибка форматирования');
let log;
log = console.log;
log(err.message);
log(err.name);
log(err.stack);
log(err instanceof SyntaxError);