// =============================
// 1. クラスの基本と継承
// =============================
class Person {
  // プロパティの宣言
  name: string;
  age: number;

  // コンストラクタ
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // メソッド
  greet(): string {
    return `こんにちは、私は${this.name}、${this.age}歳です。`;
  }
}

// クラスのインスタンス化
const person1 = new Person('Taro', 25);
console.log(person1.greet()); // こんにちは、私はTaro、25歳です。

// 継承
class Employee extends Person {
  employeeId: number;

  constructor(name: string, age: number, employeeId: number) {
    super(name, age); // 親クラスのコンストラクタ呼び出し
    this.employeeId = employeeId;
  }

  // メソッドのオーバーライド
  greet(): string {
    return `社員番号${this.employeeId}：${this.name}（${this.age}歳）です。`;
  }
}

const employee1 = new Employee('Hanako', 30, 1001);
console.log(employee1.greet()); // 社員番号1001：Hanako（30歳）です。

// =============================
// 2. インターフェースによる型定義（オブジェクトリテラル）
// =============================
interface EmployeeInfo {
  name: string;
  age: number;
  employeeId: number;
  greet(): string;
}

const employeeObj: EmployeeInfo = {
  name: 'Sato',
  age: 28,
  employeeId: 1001,
  greet() {
    return `こんにちは、${this.name}です。`;
  }
};

console.log(employeeObj.greet()); // こんにちは、Satoです。 