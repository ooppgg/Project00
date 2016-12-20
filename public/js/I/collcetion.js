window.onload = function(){
	var col_need = document.getElementById("col_need");
	var col_buildings = document.getElementById("col_buildings");
	var need = document.getElementById("need");
	var buildings = document.getElementById("buildings");
	
	col_need.onclick = function(){
		col_need.style.color = "#ea5404";
		col_need.style.borderBottom = "1px solid #ea5404";
		col_buildings.style.color = "#323232";
		col_buildings.style.borderBottom = "1px solid #d6d7dc";
		need.style.display = "block";
		buildings.style.display = "none";
	}
	col_buildings.onclick = function(){
		col_buildings.style.color = "#ea5404";
		col_buildings.style.borderBottom = "1px solid #ea5404";
		col_need.style.color = "#323232";
		col_need.style.borderBottom = "1px solid #d6d7dc";
		buildings.style.display = "block";
		need.style.display = "none";
	}
}
