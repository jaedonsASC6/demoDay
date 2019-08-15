const dropdown_button = document.getElementById("dropdown_button");
dropdown_button.addEventListener("click", dropdownToggle);
function dropdownToggle() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}