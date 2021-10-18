
interface DB<T> {
  add(v: T): void;
  get(): T
}

class D<T> implements DB<T> {
  add(v: T): void {
    throw new Error("Method not implemented.");
  }
  get(): T {
    throw new Error("Method not implemented.");
  }
}

interface JSONSerialier {
  serialize(): string;
}

class LocalDB<T extends JSONSerialier> implements DB<T>{
  constructor(
    private localStroageKey: string
  ) {

  }

  add(v: T) {
    localStorage.setItem(this.localStroageKey, v.serialize());
  }

  get(): T {
    const v = localStorage.getItem(this.localStroageKey);
    return (v) ? JSON.parse(v) : null;
  }
}


interface Vegitable {
  v: string;
}

interface Meat {
  m: string;
}

interface Cart2<T> {
  getItem(): T extends Vegitable ? Vegitable : Meat;
}

const cart1: Cart2<Vegitable> = {
  getItem() {
    return {
      v: ''
    }
  }
}

cart1.getItem();