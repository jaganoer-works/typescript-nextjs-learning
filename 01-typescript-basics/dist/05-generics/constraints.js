"use strict";
// ジェネリクスの応用サンプル
Object.defineProperty(exports, "__esModule", { value: true });
// 1. 制約付きジェネリクス（extends）
function logLength(item) {
    console.log(item.length);
}
logLength('hello'); // OK
logLength([1, 2, 3]); // OK
// logLength(123);       // エラー
// 2. デフォルト型パラメータ
function toArray(value) {
    if (value === undefined) {
        return [];
    }
    return [value];
}
const arr1 = toArray(123); // Tはnumber
const arr2 = toArray(); // Tはstring（デフォルト）
// 3. 複数の型パラメータと制約
function merge(a, b) {
    return { ...a, ...b };
}
const merged = merge({ name: 'Taro' }, { age: 20 }); // { name: 'Taro', age: 20 }
