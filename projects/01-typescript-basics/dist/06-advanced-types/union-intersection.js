"use strict";
// ユニオン型（Union Type）
let unionValue;
unionValue = 'Hello'; // OK
unionValue = 123; // OK
// value = true; // エラー（stringかnumberのみ許可）
// 関数の引数にユニオン型を使う
function printId(id) {
    console.log(`ID: ${id}`);
}
printId(101); // OK
printId('abc123'); // OK
// 型ガード（typeofで型ごとに処理を分ける）
function formatValue(val) {
    if (typeof val === 'string') {
        return val.toUpperCase();
    }
    else {
        return val.toFixed(2);
    }
}
console.log(formatValue('hello')); // 'HELLO'
console.log(formatValue(3.14)); // '3.14'
const pet1 = { type: 'dog', name: 'Pochi' };
const pet2 = { type: 'cat', color: 'black' };
const customer = {
    name: 'Tanaka',
    credit: 1000,
    email: 'tanaka@example.com',
    phone: '090-1234-5678'
};
// インターセクション型は「すべての型の要素を持つ」
// タグ付きユニオン型の型ガード実践例
function describePet(pet) {
    if (pet.type === 'dog') {
        // petはDog型として扱える
        console.log(`犬の名前は${pet.name}です。`);
    }
    else if (pet.type === 'cat') {
        // petはCat型として扱える
        console.log(`猫の色は${pet.color}です。`);
    }
}
describePet(pet1); // 犬の名前はPochiです。
describePet(pet2); // 猫の色はblackです。
function printLength(val) {
    if (typeof val === 'string') {
        console.log(val.length); // string型として扱える
    }
    else {
        console.log(val.toFixed(2)); // number型として扱える
    }
}
printLength('hello'); // 5
printLength(3.14); // 3.14
function move(vehicle) {
    if ('drive' in vehicle) {
        vehicle.drive();
    }
    else {
        vehicle.sail();
    }
}
const userAlias1 = { name: 'Taro', age: 25 };
let id;
id = 'abc';
id = 123;
// インターセクション型の型エイリアス
// すでに上でCustomerとして定義済み
const customer2 = {
    name: 'Suzuki',
    credit: 2000,
    email: 'suzuki@example.com',
    phone: '000-0000-0000'
};
const fruits = ['apple', 'banana', 'cherry'];
const greetAlias = (name) => `Hello, ${name}`;
console.log(greetAlias('TypeScript')); // Hello, TypeScript 
