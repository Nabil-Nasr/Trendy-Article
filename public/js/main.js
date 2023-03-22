let mode = document.querySelector(`.mode`);
let root = document.querySelector(`:root`);

{// ================== Add dark-mode ===================
	if (localStorage.mode == "light-mode")
		root.classList.add(localStorage.mode);
	else{
		localStorage.mode = "dark-mode";
		root.classList.add("dark-mode");
	}
	
	mode.addEventListener("click", (eve) => {
		eve.preventDefault();
		if (root.classList.contains(`dark-mode`)) {
			localStorage.mode = "light-mode";
			root.classList.remove("dark-mode");
			root.classList.add("light-mode");
		} else {
			localStorage.mode = "dark-mode";
			root.classList.remove("light-mode");
			root.classList.add("dark-mode");
		}
	});
}

