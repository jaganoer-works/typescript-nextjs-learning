// ジェネリクス（Generics）の基礎サンプル

// 1. 関数のジェネリクス
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(123);      // Tはnumber
const strValue = identity<string>('hello');  // Tはstring

// 型推論も効く
const bool = identity(true); // Tはboolean

// 2. 配列や複数型パラメータ
function toArrayBasic<T>(item: T): T[] {
  return [item];
}
const arr3 = toArrayBasic(5); // [5]
const arr4 = toArrayBasic('a'); // ['a']

function pair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}
const p = pair<string, number>('foo', 42); // ['foo', 42]

// 3. ジェネリクスの制約（extends）
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
getLength('hello'); // OK
getLength([1, 2, 3]); // OK
// getLength(123); // エラー（number型はlengthを持たない）

// 4. ジェネリクスを使ったインターフェース
interface Box<T> {
  value: T;
}
const box1: Box<number> = { value: 10 };
const box2: Box<string> = { value: 'abc' };

// 5. ジェネリクスを使ったクラス
class DataStore<T> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  getAll(): T[] {
    return this.data;
  }
}
const store = new DataStore<string>();
store.add('hello');
store.add('world');
console.log(store.getAll()); // ['hello', 'world'] 