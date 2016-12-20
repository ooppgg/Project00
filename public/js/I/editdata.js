window.onload = function(){
	var pic = document.getElementById("pic_1");
	var pic2 = document.getElementById("pic_2");
	var pic3 = document.getElementById("pic_3");
	var edit = document.getElementById("edit_pic");
	var cancel = document.getElementById("cancel");
	pic.onclick = function(){
		edit.style.display = "block";
	}
	pic2.onclick = function(){
		edit.style.display = "block";
	}
	pic3.onclick = function(){
		edit.style.display = "block";
	}
	cancel.onclick = function(){
		edit.style.display = "none";
	}
}
