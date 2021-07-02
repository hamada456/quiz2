//名前表示
document.getElementById("userName").innerText = "挑戦者： " +userName + "  様";

//問題
const quiz = [
  {
  	question :"Aはどれ？",
  	correct :"A",
  	answers :["A","B","C","D"]
  },
  {
    question :"Bはどれ？？？？？",
    correct :"B",
    answers :["A","B","C","D"]
  },
  {
    question :"Cはどれ？？？？？？？？？？",
    correct :"C",
    answers :["A","B","C","D"]
  }];

//問題文の代入
document.getElementById("js-question").innerText = quiz[0].question;

//回答一覧の代入
const $button = document.getElementsByTagName("button");

let buttonIndex = 0;
let buttonLength = $button.length;
while(buttonIndex < buttonLength){
	$button[buttonIndex].innerText = quiz[0].answers[buttonIndex];
	buttonIndex++;
}

//クリックイベントと正誤判定のif文
$button[0].addEventListener("click",() => {
if (quiz[0].correct === $button[0].innerText){
  window.alert("正解");
}else{
  window.alert("不正解");
  }
});

$button[1].addEventListener("click",() => {
if (quiz[0].correct === $button[1].innerText){
  window.alert("正解");
}else{
  window.alert("不正解");
  }
});

$button[2].addEventListener("click",() => {
if (quiz[0].correct === $button[2].innerText){
  window.alert("正解");
}else{
  window.alert("不正解");
  }
});

$button[3].addEventListener("click",() => {
if (quiz[0].correct === $button[3].innerText){
  window.alert("正解");
}else{
  window.alert("不正解");
  }
});
