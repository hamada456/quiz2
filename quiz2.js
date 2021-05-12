
const question = 'Aは？';

document.getElementById("js-question").innerText = question;

const answers = [
	"A",
	"B",
	"C",
	"D"
];

const correct = "A";

document.getElementById("btn0").innerText = answers[0];
document.getElementById("btn1").innerText = answers[1];
document.getElementById("btn2").innerText = answers[2];
document.getElementById("btn3").innerText = answers[3];


if (correct === document.getElementById("btn0").innerText){
	window.alert("正解");
}else{
	window.alert("不正解");
};