// // Friendの引数は左から「名前」「体力」「攻撃力」「素早さ」「薬草の数」「薬草の回復力」です。
// 引数が何を意味しているかは味方クラスのコンストラクタを見ればわかる。


// キャラクターをインスタンス化する
let friend1 = new Friend("あれす", 180, 66, 13, 2, 45);                   // 味方
let friend2 = new Friend("なーしゃ", 110, 16, 12, 3, 45);                 // 味方
let friend3 = new Friend("だすてん", 140, 43, 11, 1, 45);                 // 味方
let enemy1 = new Troll("トロル", 270, 38, 20, "../image/troll.png");      // 敵
let enemy2 = new Dragon("ドラゴン", 380, 68, 6, "../image/dragon.png");   // 敵


// キャラクター配列をつくる
let characters = [];
characters.push(friend1);     // 味方
characters.push(friend2);     // 味方
characters.push(friend3);     // 味方
characters.push(enemy1);      // 敵
characters.push(enemy2);      // 敵


// ゲーム管理クラスをインスタンス化する
let gameManage = new GameManage();


// コマンドクラスをインスタンス化する
let command = new Command();

// コマンド選択の準備を整える
command.preparation();