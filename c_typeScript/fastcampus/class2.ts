interface Person {
  name: string;
  say(message: string): void;
}

interface Programmer {
  writeCode(requirment: string): string;
}

class KoreanProgammer implements Person, Programmer {
  constructor(
    public name: string
  ) {

  }
  
  say(message: string): void {
    console.log(message);
  }

  writeCode(requirment: string): string {
    console.log(requirment);
    return requirment + '...';
  }

  loveKimchi() {
    console.log('love kimchi');
    
  }
}

const joy = new KoreanProgammer('joy');

abstract class Korean implements Person {
  public abstract numberForID: number
  constructor(
    public name: string
  ) {

  }
  
  say(message: string): void {
    console.log(message);
  }

  abstract loveKimchi(): void;
  
}

class KoreanProgammer2 extends Korean implements Programmer {
  constructor(
    public name: string,
    public numberForID: number
  ) {
    super(name);
  }
  
  say(message: string): void {
    console.log(message);
  }

  writeCode(requirment: string): string {
    console.log(requirment);
    return requirment + '...';
  }

  loveKimchi() {
    console.log('love kimchi');
  }
}

const joy2 = new KoreanProgammer2('joy', 2222)
// const joy3 = new Korean('joy'); //추상클래스는 만들수 없음