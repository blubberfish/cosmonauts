export abstract class Ether {
  hooks = new Map<
    string,
    Set<{ (event: { source: Ether; data: unknown }): void }>
  >();

  dispatch(event: string, data: unknown) {
    const callbacks = this.hooks.get(event);
    callbacks?.forEach((callback) => callback({ source: this, data }));
  }

  registry = new Map<string, Set<Ether>>();

  register<Complex extends Ether>(complex: Complex) {
    const key = complex.constructor.name;
    let record = this.registry.get(key);
    if (!record) {
      record = new Set();
      this.registry.set(key, record);
    }
    record.add(complex);
    return this;
  }

  use<
    Complex extends Ether,
    EtherType extends { new (): Complex } = { new (): Complex }
  >(ether: EtherType): Complex[] {
    const record = this.registry.get(ether.name);
    return Array.from(record || []) as Complex[];
  }
}
