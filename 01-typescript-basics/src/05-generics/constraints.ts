// ジェネリクスの応用サンプル

// 1. 制約付きジェネリクス（extends）
function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}
logLength('hello');      // OK
logLength([1, 2, 3]);    // OK
// logLength(123);       // エラー

// 2. デフォルト型パラメータ
function toArray<T = string>(value?: T): T[] {
  if (value === undefined) {
    return [];
  }
  return [value];
}
const arr1 = toArray(123);      // Tはnumber
const arr2 = toArray();         // Tはstring（デフォルト）

// 3. 複数の型パラメータと制約
function merge<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b };
}
const merged = merge({ name: 'Taro' }, { age: 20 }); // { name: 'Taro', age: 20 }

// 4. 条件付き型（Conditional Types）
type IsString<T> = T extends string ? 'Yes' : 'No';
type A = IsString<string>; // 'Yes'
type B = IsString<number>; // 'No'

// 5. inferを使った型推論
type ElementType<T> = T extends (infer U)[] ? U : T;
type X = ElementType<string[]>; // string
type Y = ElementType<number>;   // number

// 6. ジェネリクスを使った自作ユーティリティ型
// Pickの自作
// T型からKで指定したプロパティだけを抜き出す
// KはTのキーのいずれかでなければならない

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export type User = { name: string; age: number; email: string };
type UserName = MyPick<User, 'name'>; // { name: string } 