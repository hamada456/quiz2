
let burger = document.getElementById("burger");

    burger.onmousedown = function(event){
		console.log("タップされたよ!");
		document.addEventListener("mousemove",onMouseMove);
	}

	burger.ondragstart = function(event){
  		console.log("ドラッグされたよ!");
    }

burger.style.position = "absolute";

let onMouseMove = function(event){
		console.log("ムーブされたよ!");
		let x = event.clientX;
		let y = event.clientY;
		let width = burger.offsetWidth;
		let height = burger.offsetHeight;
		burger.style.top = (y-height/2) + "px";
		burger.style.left = (x-width/2) + "px";
}

