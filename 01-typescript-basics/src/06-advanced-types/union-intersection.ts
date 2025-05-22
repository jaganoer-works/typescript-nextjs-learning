// ユニオン型（Union Type）
let unionValue: string | number;
unionValue = 'Hello'; // OK
unionValue = 123;     // OK
// value = true; // エラー（stringかnumberのみ許可）

// 関数の引数にユニオン型を使う
function printId(id: string | number) {
  console.log(`ID: ${id}`);
}

printId(101);      // OK
printId('abc123'); // OK

// 型ガード（typeofで型ごとに処理を分ける）
function formatValue(val: string | number) {
  if (typeof val === 'string') {
    return val.toUpperCase();
  } else {
    return val.toFixed(2);
  }
}

console.log(formatValue('hello')); // 'HELLO'
console.log(formatValue(3.14));    // '3.14'

// オブジェクト型のユニオン
interface Dog {
  type: 'dog';
  name: string;
}
interface Cat {
  type: 'cat';
  color: string;
}

type Pet = Dog | Cat;

const pet1: Pet = { type: 'dog', name: 'Pochi' };
const pet2: Pet = { type: 'cat', color: 'black' };

// インターセクション型（Intersection Type）
interface BusinessPartner {
  name: string;
  credit: number;
}
interface Contact {
  email: string;
  phone: string;
}

type Customer = BusinessPartner & Contact;

const customer: Customer = {
  name: 'Tanaka',
  credit: 1000,
  email: 'tanaka@example.com',
  phone: '090-1234-5678'
};

// インターセクション型は「すべての型の要素を持つ」

// タグ付きユニオン型の型ガード実践例
function describePet(pet: Pet) {
  if (pet.type === 'dog') {
    // petはDog型として扱える
    console.log(`犬の名前は${pet.name}です。`);
  } else if (pet.type === 'cat') {
    // petはCat型として扱える
    console.log(`猫の色は${pet.color}です。`);
  }
}

describePet(pet1); // 犬の名前はPochiです。
describePet(pet2); // 猫の色はblackです。

function printLength(val: string | number) {
  if (typeof val === 'string') {
    console.log(val.length); // string型として扱える
  } else {
    console.log(val.toFixed(2)); // number型として扱える
  }
}
printLength('hello'); // 5
printLength(3.14);    // 3.14

interface Car {
  drive(): void;
}
interface Boat {
  sail(): void;
}

function move(vehicle: Car | Boat) {
  if ('drive' in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
} 