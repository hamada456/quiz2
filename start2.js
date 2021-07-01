let userName = prompt("名前は？","コアシスタロウ");

if(userName === null || userName === ""){//キャンセルはnullを返す
  window.alert("達者でね！");
  location.href = "https://www.yahoo.co.jp/";//ヤフーへ飛ばす
  throw new Error("名無しは失格です");//処理を終了
};

let okNg = window.confirm( "「" + userName + "」\nこの名前でいいですか？");//option + ¥でバックスラッシュ

if(okNg){
  window.alert("問題スタート！！");
}else{
  window.alert("達者でね！");
  location.href = "https://www.yahoo.co.jp/";
  throw new Error("名無しは失格です");
};