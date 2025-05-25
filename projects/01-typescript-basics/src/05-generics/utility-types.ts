// 標準ユーティリティ型の活用・自作サンプル

// --- サンプル用型定義 ---
type UserList = {
  id: number;
  name: string;
  email?: string;
};

type Status = 'draft' | 'published' | 'deleted';

type UserRole = 'admin' | 'user';

// --- 標準ユーティリティ型の使い方 ---

// Partial: すべてのプロパティをオプショナルに
type UserDraft = Partial<UserList>;

// Required: すべてのプロパティを必須に
type UserRequired = Required<UserList>;

// Readonly: すべてのプロパティをreadonlyに
type UserReadonly = Readonly<User>;

// Pick: 指定したプロパティだけを抜き出す
type UserNameOnly = Pick<UserList, 'name'>;

// Omit: 指定したプロパティを除外
type UserWithoutEmail = Omit<UserList, 'email'>;

// Record: 指定したキーのオブジェクト型を作る
type UserRoleMap = Record<UserRole, UserList>;

// Exclude: ユニオン型から指定した型を除外
type VisibleStatus = Exclude<Status, 'deleted'>;

// Extract: ユニオン型から共通部分だけを抽出
type OnlyDraft = Extract<Status, 'draft' | 'archived'>;

// NonNullable: nullとundefinedを除外
 type Name = string | null | undefined;
type NonNullName = NonNullable<Name>;

// ReturnType: 関数の戻り値型を取得
function getUser(): UserList { return { id: 1, name: 'Taro' }; }
type UserReturn = ReturnType<typeof getUser>;

// Parameters: 関数の引数型（タプル）を取得
type GetUserParams = Parameters<typeof getUser>;

// --- ユーティリティ型の自作例 ---

// Partialの自作
// T型のすべてのプロパティをオプショナルにする
 type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

// Pickの自作
// T型からKで指定したプロパティだけを抜き出す
 type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Omitの自作（PickとExcludeの組み合わせ）
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// Recordの自作
// Kのユニオン型をキー、Tを値とするオブジェクト型
 type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};

// --- 自作型の利用例 ---
type MyUserDraft = MyPartial<UserList>;
type MyUserNameOnly = MyPick<UserList, 'name'>;
type MyUserWithoutEmail = MyOmit<UserList, 'email'>;
type MyUserRoleMap = MyRecord<UserRole, UserList>; 