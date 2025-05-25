# PHPとTypeScriptのOOP（オブジェクト指向）構文比較

## 1. クラスの基本構文

### PHP
```php
class User {
    public $name;
    protected $email;

    public function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
    }

    public function greet() {
        return "Hello, {$this->name}!";
    }
}
```

### TypeScript
```typescript
class User {
  public name: string;
  protected email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  public greet(): string {
    return `Hello, ${this.name}!`;
  }
}
```

---

## 2. 継承

### PHP
```php
class Admin extends User {
    public function isAdmin() {
        return true;
    }
}
```

### TypeScript
```typescript
class Admin extends User {
  public isAdmin(): boolean {
    return true;
  }
}
```

---

## 3. アクセス修飾子

| 修飾子      | PHP                        | TypeScript                  |
|-------------|---------------------------|-----------------------------|
| public      | どこからでもアクセス可     | どこからでもアクセス可      |
| protected   | 継承先からアクセス可       | 継承先からアクセス可        |
| private     | クラス内のみアクセス可     | クラス内のみアクセス可      |

---

## 4. インターフェースと実装

### PHP
```php
interface Greeter {
    public function greet($name);
}

class MyGreeter implements Greeter {
    public function greet($name) {
        return "Hello, {$name}!";
    }
}
```

### TypeScript
```typescript
interface Greeter {
  greet(name: string): string;
}

class MyGreeter implements Greeter {
  greet(name: string): string {
    return `Hello, ${name}!`;
  }
}
```

---

## 5. 型指定の違い

| 項目         | PHP                        | TypeScript                  |
|--------------|---------------------------|-----------------------------|
| プロパティ   | 型指定なし（PHP8以降一部可）| 型指定必須                  |
| 引数・戻り値 | 型指定なし（PHP7以降可）   | 型指定必須                  |
| 配列         | array型のみ                | 型付き配列（string[], number[] など）|

---

## 6. まとめ・気づき
- TypeScriptは型安全性が高く、型注釈が必須
- PHPも近年は型指定ができるが、TypeScriptの方が厳密
- クラス・継承・インターフェースの基本構文は似ているが、型の扱いが大きな違い
- アクセス修飾子やimplementsの使い方もほぼ同じ

---

## 参考
- [PHP公式ドキュメント: クラスとオブジェクト](https://www.php.net/manual/ja/language.oop5.php)
- [TypeScript公式: Classes](https://www.typescriptlang.org/docs/handbook/classes.html) 