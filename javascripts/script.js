const toggle_btn = document.querySelector("#checkbox");
toggle_btn.addEventListener("click", () => {
	if (toggle_btn.checked) {
		document.body.classList.add("dark-mode");
	} else {
		document.body.classList.remove("dark-mode");
	}
});
