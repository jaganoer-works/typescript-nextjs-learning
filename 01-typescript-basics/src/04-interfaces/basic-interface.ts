// インターフェースの基本
interface UserInfo {
  name: string;
  age: number;
}

const user1: UserInfo = {
  name: 'Taro',
  age: 25
};

// オプショナルプロパティ（?）
interface Book {
  title: string;
  author?: string; // 省略可能
}

const book1: Book = { title: 'TypeScript入門' };
const book2: Book = { title: 'React実践', author: 'Yamada' };

// メソッドを持つインターフェース
interface Greeter {
  greet(name: string): string;
}

const greeter: Greeter = {
  greet(name) {
    return `こんにちは、${name}さん！`;
  }
};

// インターフェースの拡張
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: 'Sato',
  employeeId: 1001
};

// 配列の型として使う
interface StringArray {
  [index: number]: string;
}

const arr: StringArray = ['a', 'b', 'c'];

// 関数の型として使う
interface Add {
  (a: number, b: number): number;
}

const addNumbers: Add = (a, b) => a + b; 