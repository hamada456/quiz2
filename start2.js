let userName = prompt("名前は？","コアシスタロウ");

if(userName === null || userName === ""){//キャンセルはnullを返す
  window.alert("名前無し、キャンセルは失格です");
  location.href = "https://www.yahoo.co.jp/";//ヤフーへ飛ばす
  throw new Error("デバッグA");//処理を終了
};

let okNg = window.confirm( "「" + userName + "」\nこの名前でいいですか？");
//option + ¥でバックスラッシュ

if(okNg){
  window.alert("問題スタート！！");
}else{
  window.alert("名前を考え直す時間はありません、失格です");
  location.href = "http://www.core-sys.co.jp/index.html";
  throw new Error("デバッグB");
};