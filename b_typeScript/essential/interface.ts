// 타입스크립트서 타입 기술 2가지 방법
// 1. interface
// 2. 타입별칭 type alias

// 타입: 컴파일 타임에 이 값이 있는지 없는지 확인용도 (컴파일 타임에 타입만 검사하는 용도로 사용 )
export type YesOrNo = 'Y' | 'N';
export type DayOfWeek = '월' | '화' | '수' | '목' | '금' | '토' | '일';
const dayOfWeek1: '월' | '화' | '수' | '목' | '금' | '토' | '일' = '월';
const dayOfWeek2: DayOfWeek = '월';

// ENUM타입: 런타임 실제 데이터 (특정값으로 제한하는 기능 유사하지만 실제 데이터)
export enum DayOfTheWeek { '월', '화', '수', '목', '금', '토', '일' }

export type Name = string;
export type Email = string;
export type FooFunction = () => string;

// 타입과 인터페이스 섞어서 사용 가능
export interface IUser {
  readonly id: number;
  readonly name: Name;
  email: string;
  receiveInfo: boolean;
  active: YesOrNo
}

// optional 
// interface는 이름이 중복되면 같이 만들어진거랑 똑같은 효과
// 한개인데 두개로 나눠있는 느낌 (권장X)
export interface IUser {
  address?: string;
}

export type TUser = {
  readonly id: number;
  readonly name: Name;
  email: string;
  receiveInfo: boolean;
  active: YesOrNo
}

// type 중복 금지
// export interface TUser = {
//   address?: string;
// }

// 상속 (인터페이스 확장)
export interface IUserProfile extends IUser {
  profileImage: string;
  github?: string;
  twitter?: string;
}

// intersction 교차 앰퍼센트 merge효과 (인터페이스, 타입 둘다 사용)
export type TUserProfile = IUser & {
  profileImage: string;
  github?: string;
  twitter?: string;
}

export interface Color {
  fontColor: string;
  strokeColor: string;
  borderColor: string;
  backgroundColor: string;
}

export type Display = {
  display: 'none' | 'block';
  visibility: boolean;
  opacity: number;
}

export type Geometry = {
  width: number;
  height: number;
  padding: number;
  margin: number;
}

export interface IStyle extends Color, Display, Geometry {
  tagName: string;
}

export type TStyle = Color & Display & Geometry & {
  tagName: string;
}

export interface IOnlyNumberValueObject {
  [key: string]: number;
}
export type TOnlyBooleanValueObject = {
  [prop: string]: boolean;
  // [prop: string]: any; //모든 객체 (사용X)
}

// 함수 규격
export interface IGetApi {
  (url: string, search?: string): Promise<string>;
  //(인자): 리턴값
}

export type TGetApi = {
  (url: string, search?: string): Promise<string>;
}
// export type FooFunction = () => string;

export interface IRect {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface IRectConstructor {
  new(x: number, y: number, width: number, height: number): IRect
}