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
    question :"ひらがなはどれ？？？？？",
    correct :"あ",
    answers :["Z","あ","ψ","ム"]
  },
  {
    question :"漢字はどれ？？？？？？？？？？",
    correct :"濱",
    answers :["C","Θ","濱","aaaa"]
  }];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//色々代入
const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズ１問
const setupQuiz = () => {
//問題文の代入
document.getElementById("js-question").innerText = quiz[quizIndex].question;
//回答一覧の代入
let buttonIndex = 0;
while(buttonIndex < buttonLength){
	$button[buttonIndex].innerText = quiz[quizIndex].answers[buttonIndex];
	buttonIndex++;
}
}
setupQuiz();

//クリックイベントと正誤判定のif文
const clickHandler = (e) => {
if (quiz[quizIndex].correct === e.target.innerText){
	window.alert("正解");
	score++;
}else{
	window.alert("不正解");
}

quizIndex++;

//クイズ終了判定と結果
if(quizIndex < quizLength){
	setupQuiz();
	}else{
	window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
		if(quizIndex === score){
			window.alert("満点です、ボーナスステージへ！");
			open("file:///C:/Users/User/workspace/spring1/webtest/study/game.html","_blank");
		}
}
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
	$button[handlerIndex].addEventListener("click",(e) => {
	clickHandler(e);
});
handlerIndex++;
}

