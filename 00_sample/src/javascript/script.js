// window.alert("Hello"); // LivePreviewで出ない……

/* -----------------基本型と参照型---------------------- */

// var x = 1;
// var y = x;

// x = 2;
// console.log(y);

// var data1 = [0, 1, 2];
// var data2 = data1;

// data1[0] = 5;
// console.log(data2);


/* ------------------再代入不可--------------------- */
// const TAX = 1.08;
// TAX = 1.1; // エラー

// const data = [1, 2, 3];
// data = [4, 5, 6]; // できない=再代入不可,配列そのものを再代入している
// data[1] = 10; // できる 配列はそのまま内容だけ変えられる

// console.log(data);

/* -----------------分割代入---------------------- */

// let data = [56, 40, 26, 82, 19, 17, 73, 99];
// // let [x0, x1, x2, x3, x4, x5, x6, x7] = data;
// let [x0, x1, x2, ...other] = data;

// console.log(x0);
// console.log(other); // 残りの要素をまとめて切り出すこともできる


/* -----------------分割代入（オブジェクト）---------------------- */

// let book = {
//   title: "aaa",
//   publish: 'bbb',
//   price: 2680,
//   other: {keyword: "Java SE 8", logo: "logo.jpg"}
// }
// let { price, title, memo = "なし" } = book;

// console.log(price);
// console.log(memo);
// // console.log(publish); // error
// console.log(book.publish);
// console.log(book.memo); // undefined

// let { title, other, other: { keyword } } = book;

// console.log(title); // aaa
// console.log(other); // {keyword: 'Java SE 8', logo: 'logo.jpg'}
// console.log(keyword); // Java SE 8
// console.log(price); // error
// console.log(book);

// let { title: name, publish: company } = book;

// console.log(name);
// console.log(company);


/* -----------------比較演算子---------------------- */

// console.log(1 == true);
// var data1 = ["Javascript", "Ajax", "ASP.NET"];
// var data2 = ["Javascript", "Ajax", "ASP.NET"];
// console.log(data1 == data2); // false 参照型で、参照値が格納される 異なるアドレスに登録されたものはfalseになる

// console.log("1" == 1); // trueになってしまう
// console.log("1" === 1); // データ型を変換しないので、falseになる
// できるだけ===を使った方がいい

// var x = 80;
// console.log((x >= 70) ? "OK" : "NG"); // 条件演算子 シンプルにかける

// var x = 2;

// if (x === 1) {
//   console.log("Hello");
// }
// x === 2 && console.log("aaa"); //ショートカット演算、&&は左右の式が共にTrueの場合はTrue、右式が実行されるか曖昧になるため避けるべき

// var msg = "";
// msg = msg || "HELLO"; // msgがfalsyな場合にデフォルトとして代入
// console.log(msg);



/* delete演算子 */

// var ary = ["aa", "bb", "cc"];
// console.log(delete ary[0]);
// console.log(ary);

/* typeof演算子 */

// var num = 1;
// console.log(typeof num);


var x = 1;
var y = 2;
// if (x == 2) {
//   console.log("hohe");
// } else {
//   console.log("hoho");
// }

// switch (x) {
//   case 1: console.log("hoge");
//     break;
//   case 2: console.log("2");
//     break;
//   default: console.log("default");
//     break;
// }

// var result = 0;
// for (var i = 0; i < 100; i++){
//   if(i%2===0)
//   {
//     continue;
//   }
//   result += i;
// }

// console.log(result);

// kuku: // for文に名前つけられる
// for (var i = 1; i < 10; i++){
//   for (var j = 1; j < 10; j++){
//     var k = i * j;
//     if (k > 30) { break kuku; }
//     document.write(k + '&nbsp');
//   }
//   document.write('<br />')
// }

// 例外処理
'use strict'; // Strictモード 関数内に記述が望ましい

// var i = 1;
// try {
//   if (i === 1) { throw new Error("miss"); } // 意図的にも出せる
//   i = i * j;
// } catch(e) {
//   console.log(e.message); // Errorオブジェクトがあるとそのmessageを出す
// } finally {
//   console.log("DONE");
// } // ループの中には極力入れない

// var str1 = 'にわにはにわにわとりがいる';
// console.log(str1.indexOf('にわ')); // 0 先頭から検索
// console.log(str1.lastIndexOf('にわ')); // 6 末尾から検索
// console.log(str1.indexOf('にわ', 3)); // 4 ４文字目から右方向
// console.log(str1.lastIndexOf('わ',5)); // 5 ６文字目から左
// console.log(str1.indexOf('ガーデン')); // -1 不一致
// console.log(str1.startsWith('にわ')); // true
// console.log(str1.endsWith('にわ')); // false
// console.log(str1.includes('にわ')); // true
