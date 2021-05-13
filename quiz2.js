//問題文
const question = 'Aは？';
document.getElementById("js-question").innerText = question;
//答え
const correct = "A";
//回答一覧の代入
const answers = [
	"A",
	"B",
	"C",
	"D"
];

const $button0 = document.getElementById("btn0");
const $button1 = document.getElementById("btn1");
const $button2 = document.getElementById("btn2");
const $button3 = document.getElementById("btn3");

$button0.innerText = answers[0];
$button1.innerText = answers[1];
$button2.innerText = answers[2];
$button3.innerText = answers[3];

//クリックイベントと正誤判定のif文
$button0.addEventListener("click",() => {
if (correct === $button0.innerText){
	window.alert("正解");
}else{
	window.alert("不正解");
	}
});

$button1.addEventListener("click",() => {
if (correct === $button1.innerText){
	window.alert("正解");
}else{
	window.alert("不正解");
	}
});

$button2.addEventListener("click",() => {
if (correct === $button2.innerText){
	window.alert("正解");
}else{
	window.alert("不正解");
	}
});

$button3.addEventListener("click",() => {
if (correct === $button3.innerText){
	window.alert("正解");
}else{
	window.alert("不正解");
	}
});
