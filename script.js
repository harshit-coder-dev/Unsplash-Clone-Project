document
	.querySelector(".fa-hamburger-menu")
	.addEventListener("click", function () {
		document.querySelector("#menu").classList.toggle("visible");
	});

const currentUser = localStorage.getItem("name");

if (currentUser) {
	const userNameElem = document.querySelector("#user-name");
	userNameElem.style.display = "inline";
	userNameElem.style.fontStyle = "italic";
	userNameElem.innerText = currentUser;
	const profilePhoto = document.querySelector("#profile-photo");
	profilePhoto.style.display = "inline-block";
	document.querySelector("#vertical-bar").style.display = "none";
	document.querySelector("#forward-slash").style.display = "none";

	document.querySelector(
		"a[href='Login.html']"
	).style.display = "none";

	document.querySelector(
		"a[href='SignUp.html']"
	).style.display = "none";

	document.querySelector(".fa-hamburger-menu").style.marginRight = "70px";
	document.querySelector(".fa-hamburger-menu").style.marginLeft = "40px";

	document.querySelector("#menu").style.right = "60px";
}
