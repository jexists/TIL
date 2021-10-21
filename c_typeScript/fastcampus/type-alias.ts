// type alias 타입별칭
// 정의한 타입들을 조합해서 새로운 타입 생성
// 이전에 있던 타입 이름 변경
// 문자열 리터럴타입 조합 등 사용

interface User {
  name: string;
}

interface Action {
  do(): void;
}

type UserAction = User & Action;

function createUserAction(): UserAction {
  return {
    do() {},
    name: ''
  }
}

type StringOrNumber = string | number;

type arr<T> = T[];
type P<T> = Promise<T>;

type User2 = {
  name: string;
  login(): boolean;
}

class UserImpl implements User2 {
  login(): boolean {
    throw new Error("Method not implemented.");
  }
  name: string;
}

type UserState = "Pending" | "Approved" | "Rejected";

function checkUser(user: User2): UserState {
  if (user.login()) {
    return "Approved";
  } else {
    return "Rejected";
  }

}