//変数宣言
//letは再代入可能
let str = 'Hello, TypeScript!';
//constは再代入不可能
const count = 10;

//変数の型アノテーション
const message: string = 'こんにちわ！';
const age: number = 20;
const isActive: boolean = true;

//配列
const numbers: number[] = [1, 2, 3];
const names: string[] = ['Alice', 'Bob', 'Charlie'];

//オブジェクト
const person: { name: string; age: number } = {
  name: 'John',
  age: 30,
};

//関数
function greet(name: string = 'ゲスト'): string {
  return `こんにちは、${name}`;
}

//型推論：TypeScriptが型を推論してくれる
//明示的に書くことでより安全でわかりやすいコードになる
const result = greet('Alice');

//any型：型を指定しない場合やどんな型でもOKにしたい場合any型を指定
//なるべく使用しないこと
let value: any;
value = 'Hello';
value = 123;

//関数の型注釈
function add(a: number, b: number): number {
  return a + b;
}

//ジェネリック型（Array<型>）の配列
const numberList: Array<number> = [1, 2, 3];
const stringList: Array<string> = ['apple', 'banana', 'cherry'];

//多次元配列
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

//配列の要素が複数の型（ユニオン型）
const mixedArray: (string | number)[] = [1, 'apple', 2, 'banana'];

//タプル：固定長の配列で型を指定
const personTuple: [string, number] = ['Alice', 20];

//オブジェクトリテラル型
const user: { name: string; age: number } = {
  name: 'John',
  age: 30,
};

//オプショナルプロパティ（?）
//ageプロパティは省略可能
const optionalUser: { name: string; age?: number } = {
  name: 'John',
};

//インデックスシグネチャ
//オブジェクトのプロパティ名が動的に変化する場合に使用
const dictionary: { [key: string]: string } = {
  apple: 'りんご',
  banana: 'ばなな',
  cherry: 'さくらんぼ',
};

//型エイリアス
type User = {
  name: string;
  age: number;
};

const user2: User = {
  name: 'John',
  age: 30,
};

//無名関数・アロー関数
//関数の型注釈を省略して記述できる
const multiply = (a: number, b: number) => a * b;

//戻り値がvoidの関数
function logMessage(message: string): void {
  console.log(message);
}

//オプショナル引数・デフォルト引数
//オプショナル引数は関数の引数のうち、省略可能なものを指定
function greet2(name: string = 'ゲスト'): string {
  return `こんにちは、${name}!`;
}

//関数型（型エイリアス）
type GreetFunction = (name: string) => string;
const greet3: GreetFunction = (name) => `こんにちは、${name}!`;

//コールバック関数の型注釈
function processUser(
  user: { name: string; age: number },
  callback: (user: { name: string; age: number }) => void
) {
  callback(user);
}
