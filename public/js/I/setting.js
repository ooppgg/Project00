window.onload = function(){
	var btn = document.getElementById("wipe_btn");
	var wipeW = document.getElementById("wipe_wi");
	var wipeQ = document.getElementById("wipe_quit");
	var cancel = document.getElementById("cancel");
	var cancel2 = document.getElementById("cancel2");
	var confirm = document.getElementById("confirm");
	var set_num = document.getElementById("set_num");
	var quit = document.getElementById("quit");
	btn.onclick = function(){
		wipeW.style.display = "block";
	}
	cancel.onclick = function(){
		wipeW.style.display = "none";
		wipeQ.style.display = "none";
	}
	confirm.onclick = function(){
		wipeW.style.display = "none";
		set_num.style.display = "none";
	}
	quit.onclick = function(){
		wipeQ.style.display = "block";
	}
	cancel2.onclick = function(){
		wipeQ.style.display = "none";
	}
}

