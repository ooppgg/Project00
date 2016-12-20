window.onload = function(){
	var search = document.getElementById("search");
	var search_x = document.getElementById("search_x");
	var search_on = document.getElementById("search_on");
	
	search.onfocus = function(){
		search_x.style.display = "block";
		
	}
	search.onblur = function(){
		search_x.style.display = "none";
	}
	search_x.onclick = function(){
		search.value = " ";
	}
	/*if(search.value == "地铁"){
		search_on.style.display = "block";
	}*/
}
