interface User {
  name: string;
}

interface Action {
  do(): void;
}

function createUserAction(u: User, a: Action): User & Action {
  return { ...u, ...a };
}

const u = createUserAction({ name: 'joy' }, { do() { } });
