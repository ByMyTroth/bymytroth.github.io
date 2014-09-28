var box1=document.getElementById('box1')
var menu=document.getElementsByClassName("list-group-item")

function clicker(){
	
var shit=document.getElementById(this.
	hash.split("#").join(""))

	var blox = document.getElementById("box").children
	for (var i=blox.length -1; i >=0; i--){
		blox[i].classList.add('hidden')
	}
	shit.classList.remove('hidden')
}
	for (var i = menu.length - 1; i >= 0; i--) {
		menu[i].addEventListener("click", clicker)
	};