"use strict";
// ジェネリクス（Generics）の基礎サンプル
// 1. 関数のジェネリクス
function identity(value) {
    return value;
}
const num = identity(123); // Tはnumber
const strValue = identity('hello'); // Tはstring
// 型推論も効く
const bool = identity(true); // Tはboolean
// 2. 配列や複数型パラメータ
function toArrayBasic(item) {
    return [item];
}
const arr3 = toArrayBasic(5); // [5]
const arr4 = toArrayBasic('a'); // ['a']
function pair(a, b) {
    return [a, b];
}
const p = pair('foo', 42); // ['foo', 42]
// 3. ジェネリクスの制約（extends）
function getLength(item) {
    return item.length;
}
getLength('hello'); // OK
getLength([1, 2, 3]); // OK
const box1 = { value: 10 };
const box2 = { value: 'abc' };
// 5. ジェネリクスを使ったクラス
class DataStore {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
}
const store = new DataStore();
store.add('hello');
store.add('world');
console.log(store.getAll()); // ['hello', 'world'] 
