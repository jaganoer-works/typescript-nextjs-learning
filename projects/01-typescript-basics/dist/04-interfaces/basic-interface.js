"use strict";
const user1 = {
    name: 'Taro',
    age: 25
};
const book1 = { title: 'TypeScript入門' };
const book2 = { title: 'React実践', author: 'Yamada' };
const greeter = {
    greet(name) {
        return `こんにちは、${name}さん！`;
    }
};
const employee = {
    name: 'Sato',
    age: 28,
    employeeId: 1001,
    greet() {
        return `こんにちは、${this.name}です。`;
    }
};
const arr = ['a', 'b', 'c'];
const addNumbers = (a, b) => a + b;
