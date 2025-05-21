# TypeScript + Next.js 学習プロジェクト

PHP/Laravelバックエンド開発者からフルスタック開発者へのキャリアアップを目指す学習リポジトリです。TypeScriptとNext.jsを段階的に学習し、最終的にはバッチ処理可視化ダッシュボードを構築します。

## 学習目標

- TypeScriptの基本から実践的な型パターンまでの習得
- ReactコンポーネントのTypeScript対応スキル獲得
- Next.jsでのフルスタックアプリケーション開発能力の習得
- PHPバックエンド開発の経験を活かしたフロントエンド開発スキルの開発
- バッチ処理管理の知見を活かした実用的なダッシュボードの構築

## 学習計画

### 2025年6月: TypeScript基礎の確立

- **第1週 (6/2～6/8)**: TypeScript入門
  - 開発環境セットアップ
  - 基本構文と型アノテーション
  - プリミティブ型、配列、オブジェクト型

- **第2週 (6/9～6/15)**: TypeScriptの高度な機能
  - インターフェースとクラス
  - TypeScriptとPHP/Laravelのクラス構造比較
  - ユニオン型、インターセクション型、型エイリアス

- **第3週 (6/16～6/22)**: 実務的な型パターンとReact基礎
  - ジェネリクスとユーティリティ型
  - React基本コンポーネントの型付け
  - イベントハンドラの型付け

- **第4週 (6/23～6/29)**: React HooksとTypeScript
  - useState/useEffectの型付け
  - useRef/useCallback/useMemoの型付け
  - カスタムフックの作成と型定義

### 2025年7月: Next.jsとアプリケーション構造

- **第1週 (7/1～7/6)**: Next.js入門
  - Next.jsプロジェクト構築
  - ディレクトリ構造とページルーティング
  - 簡単なページの作成と遷移

- **第2週 (7/7～7/13)**: Next.jsのデータ取得
  - getStaticProps/getStaticPaths
  - getServerSideProps
  - SWRによるクライアントサイドデータフェッチング

- **第3週 (7/14～7/20)**: API Routesとプロジェクト構造
  - APIエンドポイント作成
  - タイプセーフなAPIハンドラ
  - フロントエンド・バックエンド間の型共有

- **第4週 (7/21～7/27)**: コンポーネント設計と状態管理
  - Atomic Designの応用
  - コンポーネント分割の判断基準
  - SWR/React Queryによる状態管理

### 2025年8月: ダッシュボードプロジェクト開発

- **第1週 (8/4～8/10)**: バッチジョブモデル設計
  - データモデルの詳細設計
  - APIインターフェース設計
  - ダッシュボードレイアウト基本実装

- **第2週 (8/11～8/17)**: データ可視化コンポーネント
  - recharts/Chart.jsの活用
  - バッチジョブ実行時間グラフ
  - 成功率・失敗率のチャート

- **第3週 (8/18～8/24)**: CRUD機能とリアルタイム更新
  - バッチジョブのCRUD API
  - フォーム実装とバリデーション
  - SWRでのリアルタイム更新

- **第4週 (8/25～8/31)**: フィルタリングと検索機能
  - 検索インターフェース
  - タイプセーフなフィルター
  - ソート機能とページネーション

### 2025年9月: 完成と品質向上

- **第1週 (9/1～9/7)**: レスポンシブデザインと最適化
  - モバイルビュー最適化
  - パフォーマンス分析と改善
  - アクセシビリティ対応

- **第2週 (9/8～9/14)**: テストと品質向上
  - Jest/React Testing Library導入
  - コンポーネントテスト
  - API機能のテスト

- **第3週 (9/15～9/21)**: デプロイと自動化
  - Vercel/Netlifyデプロイ
  - GitHub Actions設定
  - CI/CDパイプライン構築

- **第4週 (9/22～9/28)**: ポートフォリオとしての完成
  - 最終調整とリファクタリング
  - ドキュメント整備
  - 技術的意思決定の文書化

## リポジトリ構造

```
typescript-nextjs-learning/
│
├── README.md                            # プロジェクト概要、学習目標、リポジトリ説明
│
├── learning-logs/                       # 学習記録フォルダ
│   ├── README.md                        # 学習記録の目的と使い方
│   ├── 2025-06/                         # 6月の学習記録
│   │   ├── 2025-06-02.md                # 開発環境セットアップの記録
│   │   ├── 2025-06-04.md                # TypeScript基本構文の学習記録
│   │   ├── 2025-06-06.md                # プリミティブ型/配列/オブジェクト型の学習記録
│   │   ├── 2025-06-09.md                # インターフェースとクラスの学習記録
│   │   └── ...                          # その他の日付のログ
│   │
│   ├── 2025-07/                         # 7月の学習記録
│   │   └── ...
│   │
│   ├── 2025-08/                         # 8月の学習記録
│   │   └── ...
│   │
│   └── 2025-09/                         # 9月の学習記録
│       └── ...
│
├── 01-typescript-basics/                # TypeScript基礎学習
│   ├── README.md                        # このセクションの学習目標と概要
│   ├── package.json                     # 依存パッケージの管理
│   ├── tsconfig.json                    # TypeScript設定
│   │
│   ├── src/
│   │   ├── 01-basic-types/              # 基本型の学習
│   │   │   ├── index.ts                 # エントリーポイント
│   │   │   ├── primitive-types.ts       # プリミティブ型
│   │   │   ├── arrays-tuples.ts         # 配列・タプル
│   │   │   └── objects-interfaces.ts    # オブジェクト・インターフェース
│   │   │
│   │   ├── 02-functions/                # 関数と型
│   │   │   ├── basic-functions.ts       # 基本的な関数定義
│   │   │   ├── function-types.ts        # 関数型
│   │   │   ├── overloads.ts             # 関数オーバーロード
│   │   │   └── rest-params.ts           # レストパラメータ
│   │   │
│   │   ├── 03-classes/                  # クラスと継承
│   │   │   ├── basic-class.ts           # 基本的なクラス
│   │   │   ├── inheritance.ts           # 継承
│   │   │   ├── access-modifiers.ts      # アクセス修飾子
│   │   │   └── static-members.ts        # 静的メンバー
│   │   │
│   │   ├── 04-interfaces/               # インターフェース
│   │   │   ├── basic-interface.ts       # 基本的なインターフェース
│   │   │   ├── extending-interfaces.ts  # インターフェース拡張
│   │   │   ├── implements.ts            # クラスでの実装
│   │   │   └── type-vs-interface.ts     # 型エイリアスとの比較
│   │   │
│   │   ├── 05-generics/                 # ジェネリクス
│   │   │   ├── basic-generics.ts        # 基本的なジェネリクス
│   │   │   ├── constraints.ts           # 制約付きジェネリクス
│   │   │   └── utility-uses.ts          # ユーティリティでの活用
│   │   │
│   │   └── 06-advanced-types/           # 高度な型
│   │       ├── union-intersection.ts    # ユニオン型とインターセクション型
│   │       ├── type-guards.ts           # 型ガード
│   │       ├── utility-types.ts         # ユーティリティ型
│   │       └── mapped-types.ts          # マップド型
│   │
│   └── exercises/                       # 演習問題
│       ├── 01-convert-from-php.ts       # PHPからの変換演習
│       ├── 02-batch-model.ts            # バッチ処理モデル演習
│       └── 03-type-challenges.ts        # 様々な型チャレンジ
│
├── 02-react-typescript/                 # React + TypeScript学習
│   ├── README.md                        # このセクションの学習目標
│   ├── package.json                     # 依存パッケージ
│   ├── tsconfig.json                    # TypeScript設定
│   ├── webpack.config.js                # Webpack設定（またはViteの場合はvite.config.ts）
│   │
│   ├── src/
│   │   ├── index.tsx                    # エントリーポイント
│   │   ├── App.tsx                      # メインアプリケーション
│   │   │
│   │   ├── components/                  # コンポーネント
│   │   │   ├── 01-basic/                # 基本コンポーネント
│   │   │   │   ├── Button.tsx           # ボタンコンポーネント
│   │   │   │   ├── Card.tsx             # カードコンポーネント
│   │   │   │   └── Input.tsx            # 入力コンポーネント
│   │   │   │
│   │   │   ├── 02-props/                # Props学習用
│   │   │   │   ├── PropsBasics.tsx      # 基本的なProps
│   │   │   │   ├── OptionalProps.tsx    # オプショナルProps
│   │   │   │   └── DefaultProps.tsx     # デフォルト値付きProps
│   │   │   │
│   │   │   ├── 03-events/               # イベント処理
│   │   │   │   ├── ButtonEvents.tsx     # ボタンイベント
│   │   │   │   ├── FormEvents.tsx       # フォームイベント
│   │   │   │   └── KeyboardEvents.tsx   # キーボードイベント
│   │   │   │
│   │   │   └── 04-patterns/             # コンポーネントパターン
│   │   │       ├── HOC.tsx              # 高階コンポーネント
│   │   │       ├── RenderProps.tsx      # レンダープロップ
│   │   │       └── CompoundComponents.tsx # 複合コンポーネント
│   │   │
│   │   ├── hooks/                       # React Hooks
│   │   │   ├── 01-useState/             # useState
│   │   │   │   ├── Counter.tsx          # カウンターアプリ
│   │   │   │   └── TypedState.tsx       # 型付きステート
│   │   │   │
│   │   │   ├── 02-useEffect/            # useEffect
│   │   │   │   ├── DataFetcher.tsx      # データ取得
│   │   │   │   └── Cleanup.tsx          # クリーンアップ関数
│   │   │   │
│   │   │   ├── 03-useRef/               # useRef
│   │   │   │   ├── DomRef.tsx           # DOM参照
│   │   │   │   └── MutableRef.tsx       # 可変参照
│   │   │   │
│   │   │   ├── 04-useReducer/           # useReducer
│   │   │   │   ├── BasicReducer.tsx     # 基本的なReducer
│   │   │   │   └── TypedReducer.tsx     # 型付きReducer
│   │   │   │
│   │   │   └── 05-custom-hooks/         # カスタムHooks
│   │   │       ├── useLocalStorage.tsx  # ローカルストレージHook
│   │   │       ├── useFetch.tsx         # データ取得Hook
│   │   │       └── useDebounce.tsx      # デバウンスHook
│   │   │
│   │   └── contexts/                    # Context API
│   │       ├── ThemeContext.tsx         # テーマContext
│   │       ├── UserContext.tsx          # ユーザーContext
│   │       └── typed-context.tsx        # 型付きContext
│   │
│   └── exercises/                       # 演習問題
│       ├── 01-todo-app.tsx              # Todoアプリ
│       ├── 02-form-validation.tsx       # フォームバリデーション
│       └── 03-data-grid.tsx             # データグリッド
│
├── 03-nextjs-basics/                    # Next.js基礎
│   ├── README.md                        # このセクションの学習目標
│   ├── package.json                     # 依存パッケージ
│   ├── tsconfig.json                    # TypeScript設定
│   ├── next.config.js                   # Next.js設定
│   │
│   ├── public/                          # 静的ファイル
│   │   ├── images/                      # 画像ファイル
│   │   └── favicon.ico                  # ファビコン
│   │
│   ├── src/
│   │   ├── pages/                       # ページ
│   │   │   ├── index.tsx                # ホームページ
│   │   │   ├── about.tsx                # Aboutページ
│   │   │   │
│   │   │   ├── api/                     # APIルート
│   │   │   │   └── hello.ts             # 基本的なAPIエンドポイント
│   │   │   │
│   │   │   ├── jobs/                    # 動的ルーティング例
│   │   │   │   ├── index.tsx            # ジョブリストページ
│   │   │   │   └── [id].tsx             # 動的ジョブ詳細ページ
│   │   │   │
│   │   │   └── _app.tsx                 # アプリケーションのラッパー
│   │   │
│   │   ├── components/                  # コンポーネント
│   │   │   ├── Layout.tsx               # レイアウト
│   │   │   ├── Navbar.tsx               # ナビゲーション
│   │   │   └── Footer.tsx               # フッター
│   │   │
│   │   ├── hooks/                       # カスタムフック
│   │   │   └── useSWR.ts                # SWR使用例
│   │   │
│   │   ├── styles/                      # スタイル
│   │   │   ├── globals.css              # グローバルスタイル
│   │   │   └── Home.module.css          # コンポーネントスタイル
│   │   │
│   │   └── utils/                       # ユーティリティ
│   │       ├── api.ts                   # API関連ユーティリティ
│   │       └── helpers.ts               # ヘルパー関数
│   │
│   └── exercises/                       # 演習問題
│       ├── 01-api-routes.md             # APIルート演習
│       ├── 02-ssr-ssg.md                # SSR/SSG演習
│       └── 03-simple-dashboard.md       # 簡易ダッシュボード演習
│
├── 04-batch-dashboard-project/          # メインプロジェクト
│   ├── README.md                        # プロジェクト説明
│   ├── package.json                     # 依存パッケージ
│   ├── tsconfig.json                    # TypeScript設定
│   ├── next.config.js                   # Next.js設定
│   │
│   ├── public/                          # 静的ファイル
│   │
│   ├── src/
│   │   ├── pages/                       # ページコンポーネント
│   │   │   ├── index.tsx                # ダッシュボードホーム
│   │   │   ├── jobs/                    # バッチジョブ関連ページ
│   │   │   │   ├── index.tsx            # ジョブリスト
│   │   │   │   └── [id].tsx             # ジョブ詳細
│   │   │   │
│   │   │   └── api/                     # APIエンドポイント
│   │   │       ├── jobs/                # ジョブ関連API
│   │   │       │   ├── index.ts         # ジョブリスト取得/作成
│   │   │       │   ├── [id].ts          # ジョブ詳細取得/更新/削除
│   │   │       │   └── status.ts        # ジョブステータス更新
│   │   │       │
│   │   │       └── stats/               # 統計情報API
│   │   │           ├── daily.ts         # 日次統計
│   │   │           └── summary.ts       # サマリー統計
│   │   │
│   │   ├── components/                  # コンポーネント
│   │   │   ├── layout/                  # レイアウト関連
│   │   │   │   ├── Layout.tsx           # メインレイアウト
│   │   │   │   ├── Sidebar.tsx          # サイドバー
│   │   │   │   └── Header.tsx           # ヘッダー
│   │   │   │
│   │   │   ├── dashboard/               # ダッシュボード関連
│   │   │   │   ├── StatsCard.tsx        # 統計カード
│   │   │   │   ├── JobsTable.tsx        # ジョブテーブル
│   │   │   │   └── StatusPieChart.tsx   # ステータス円グラフ
│   │   │   │
│   │   │   ├── jobs/                    # ジョブ関連
│   │   │   │   ├── JobCard.tsx          # ジョブカード
│   │   │   │   ├── JobForm.tsx          # ジョブ作成フォーム
│   │   │   │   └── StatusBadge.tsx      # ステータスバッジ
│   │   │   │
│   │   │   └── charts/                  # グラフ関連
│   │   │       ├── ExecutionTimeChart.tsx # 実行時間チャート
│   │   │       ├── SuccessRateChart.tsx # 成功率チャート
│   │   │       └── TrendLineChart.tsx   # トレンドライン
│   │   │
│   │   ├── hooks/                       # カスタムフック
│   │   │   ├── useJobs.ts               # ジョブデータ取得
│   │   │   ├── useStats.ts              # 統計データ取得
│   │   │   └── useJobActions.ts         # ジョブアクション
│   │   │
│   │   ├── types/                       # 型定義
│   │   │   ├── job.ts                   # ジョブ関連の型
│   │   │   ├── stats.ts                 # 統計関連の型
│   │   │   └── api.ts                   # API関連の型
│   │   │
│   │   ├── utils/                       # ユーティリティ
│   │   │   ├── api-client.ts            # API呼び出しユーティリティ
│   │   │   ├── date-formatter.ts        # 日付フォーマッター
│   │   │   └── mock-data.ts             # モックデータ生成
│   │   │
│   │   └── styles/                      # スタイル
│   │       ├── globals.css              # グローバルスタイル
│   │       └── modules/                 # CSSモジュール
│   │
│   ├── .eslintrc.js                     # ESLint設定
│   ├── .prettierrc                      # Prettier設定
│   │
│   └── tests/                           # テスト
│       ├── components/                  # コンポーネントテスト
│       ├── hooks/                       # フックテスト
│       └── pages/                       # ページテスト
│
├── resources/                           # 学習リソース
│   ├── README.md                        # リソース説明
│   │
│   ├── php-ts-comparison/               # PHPとTypeScriptの比較
│   │   ├── 01-syntax.md                 # 構文比較
│   │   ├── 02-typing.md                 # 型システム比較
│   │   ├── 03-oop.md                    # オブジェクト指向比較
│   │   └── 04-async.md                  # 非同期処理比較
│   │
│   ├── cheatsheets/                     # チートシート
│   │   ├── typescript-cheatsheet.md     # TypeScriptチートシート
│   │   ├── react-typescript.md          # React + TypeScriptチートシート
│   │   └── nextjs-patterns.md           # Next.jsパターンチートシート
│   │
│   ├── snippets/                        # コードスニペット
│   │   ├── api-client.ts                # APIクライアント
│   │   ├── form-validation.ts           # フォームバリデーション
│   │   └── batch-processing.ts          # バッチ処理ユーティリティ
│   │
│   └── references/                      # 参考資料
│       ├── books.md                     # 本の推薦リスト
│       ├── websites.md                  # Webサイトリンク集
│       └── tutorials.md                 # チュートリアル集
│
├── .gitignore                          # Git除外ファイル設定
├── .prettierrc                         # Prettier設定
└── .eslintrc.js                        # ESLint設定
```