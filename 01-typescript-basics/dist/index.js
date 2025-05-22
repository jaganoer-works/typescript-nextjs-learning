"use strict";
//変数宣言
//letは再代入可能
let str = 'Hello, TypeScript!';
//constは再代入不可能
const count = 10;
//変数の型アノテーション
const message = 'こんにちわ！';
const age = 20;
const isActive = true;
//配列
const numbers = [1, 2, 3];
const names = ['Alice', 'Bob', 'Charlie'];
//オブジェクト
const person = {
    name: 'John',
    age: 30,
};
//関数
function greet(name = 'ゲスト') {
    return `こんにちは、${name}`;
}
//型推論：TypeScriptが型を推論してくれる
//明示的に書くことでより安全でわかりやすいコードになる
const result = greet('Alice');
//any型：型を指定しない場合やどんな型でもOKにしたい場合any型を指定
//なるべく使用しないこと
let value;
value = 'Hello';
value = 123;
//関数の型注釈
function add(a, b) {
    return a + b;
}
//ジェネリック型（Array<型>）の配列
const numberList = [1, 2, 3];
const stringList = ['apple', 'banana', 'cherry'];
//多次元配列
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
];
//配列の要素が複数の型（ユニオン型）
const mixedArray = [1, 'apple', 2, 'banana'];
//タプル：固定長の配列で型を指定
const personTuple = ['Alice', 20];
//オブジェクトリテラル型
const user = {
    name: 'John',
    age: 30,
};
//オプショナルプロパティ（?）
//ageプロパティは省略可能
const optionalUser = {
    name: 'John',
};
//インデックスシグネチャ
//オブジェクトのプロパティ名が動的に変化する場合に使用
const dictionary = {
    apple: 'りんご',
    banana: 'ばなな',
    cherry: 'さくらんぼ',
};
const user2 = {
    name: 'John',
    age: 30,
};
//無名関数・アロー関数
//関数の型注釈を省略して記述できる
const multiply = (a, b) => a * b;
//戻り値がvoidの関数
function logMessage(message) {
    console.log(message);
}
//オプショナル引数・デフォルト引数
//オプショナル引数は関数の引数のうち、省略可能なものを指定
function greet2(name = 'ゲスト') {
    return `こんにちは、${name}!`;
}
const greet3 = (name) => `こんにちは、${name}!`;
//コールバック関数の型注釈
function processUser(user, callback) {
    callback(user);
}
