declare function require(context: string): {
  keys(): string[];
  <T>(id: string): T;
};

declare namespace NodeJS {
  interface Global {
    require: typeof require;
  }
}
