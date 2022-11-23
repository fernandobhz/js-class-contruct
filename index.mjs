class Abc {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.conn = null;
  }

  async init() {
    this.conn = await Promise.resolve({ connected: true });
  }

  static async create(...params) {
    const instance = new this(...params);
    await instance.init();
    return instance;
  }

  toString() {
    return `${a},${b},${c},${conn}`;
  }
}

const { log } = console;

const abc = await Abc.create(1,2,3);
log(abc);
