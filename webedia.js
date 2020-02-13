var image1 = document.getElementById('img1');
var image2 = document.getElementById('img2');
var image3 = document.getElementById('img3');
var image4 = document.getElementById('img4');
var image5 = document.getElementById('img5');
var image6 = document.getElementById('img6');
var h1 = document.getElementById('target_text');
var number = document.getElementById('target_current_number');
function nextImage() {
	if (image1.classList.contains("active")) {
		image1.classList.remove("active");
		image2.classList.add("active");
		h1.innerHTML = "Movies";
		number.innerHTML = "02";
	} else if (image2.classList.contains("active")) {
		image2.classList.remove("active");
		image3.classList.add("active");
		h1.innerHTML = "Gaming";
		number.innerHTML = "03";
	} else if (image3.classList.contains("active")) {
		image3.classList.remove("active");
		image4.classList.add("active");
		h1.innerHTML = "Food";
		number.innerHTML = "04";
	} else if (image4.classList.contains("active")) {
		image4.classList.remove("active");
		image5.classList.add("active");
		h1.innerHTML = "Glam";
		number.innerHTML = "05";
	} else if (image5.classList.contains("active")) {
		image5.classList.remove("active");
		image6.classList.add("active");
		h1.innerHTML = "Travel";
		number.innerHTML = "06";
	} else {
		image6.classList.remove("active");
		image1.classList.add("active");
		h1.innerHTML = "Engaging Audiences";
		number.innerHTML = "01";
	}
}
function prevImage() {
	if (image1.classList.contains("active")) {
		image1.classList.remove("active");
		image6.classList.add("active");
		h1.innerHTML = "Travel";
		number.innerHTML = "06";
	} else if (image2.classList.contains("active")) {
		image2.classList.remove("active");
		image1.classList.add("active");
		h1.innerHTML = "Engaging Audiences";
		number.innerHTML = "01";
	} else if (image3.classList.contains("active")) {
		image3.classList.remove("active");
		image2.classList.add("active");
		h1.innerHTML = "Movies";
		number.innerHTML = "02";
	} else if (image4.classList.contains("active")) {
		image4.classList.remove("active");
		image3.classList.add("active");
		h1.innerHTML = "Gaming";
		number.innerHTML = "03";
	} else if (image5.classList.contains("active")) {
		image5.classList.remove("active");
		image4.classList.add("active");
		h1.innerHTML = "Food";
		number.innerHTML = "04";
	} else {
		image6.classList.remove("active");
		image5.classList.add("active");
		h1.innerHTML = "Glam";
		number.innerHTML = "05";
	}
}
setInterval(function() {nextImage()}, 10000);
var sld1 = document.getElementById('slider1');
var sld2 = document.getElementById('slider2');
var sld3 = document.getElementById('slider3');
var date = document.getElementById('date_target');
var txtCar = document.getElementById('target_text_carrousel');
var numberCar = document.getElementById('target_number_carrousel');
function nextCar(button) {
	if (sld1.classList.contains("first")) {
		sld1.classList.remove("first");
		sld2.classList.remove("second");
		sld3.classList.remove("third");
		sld1.classList.add("third");
		sld2.classList.add("first");
		sld3.classList.add("second");
		setTimeout(function() {
			date.innerHTML = "13 Mai, 2019";
			txtCar.innerHTML = "Goodwill : la nouvelle offre qui<br/> ancre la communication<br/> corporate dans le réel";
			numberCar.innerHTML = "02";
		}, 400);
	} else if (sld2.classList.contains("first")) {
		sld1.classList.remove("third");
		sld2.classList.remove("first");
		sld3.classList.remove("second");
		sld1.classList.add("second");
		sld2.classList.add("third");
		sld3.classList.add("first");
		setTimeout(function() {
			date.innerHTML = "23 Mai, 2019";
			txtCar.innerHTML = "Avec Webedia, Seelk ambitionne<br/> de devenir la première agence<br/> européenne spécialiste<br/> d'Amazon";
			numberCar.innerHTML = "03";
		}, 400);
	} else {
		sld1.classList.remove("second");
		sld2.classList.remove("third");
		sld3.classList.remove("first");
		sld1.classList.add("first");
		sld2.classList.add("second");
		sld3.classList.add("third");
		setTimeout(function() {
			date.innerHTML = "17 Mai, 2019";
			txtCar.innerHTML = "Avec Quill, Webedia crée le<br/> premier réseau européen de<br/> créateurs de contenus e-<br/>commerce, orientés<br/> performance";
			numberCar.innerHTML = "01";
		}, 400);
	}
	button.style.display = "none";
	setTimeout(function() {
		button.style.display = "block";
	}, 760);
}
var menu = document.getElementById("target_menu");
var bool = "0";
function menuActi() {
	menu.classList.add("menu_active");
}
function menuDesacti() {
	menu.classList.remove("menu_active");
	bool = "0";
}
window.addEventListener("scroll", function() {
	menuActi();
	if (bool=="1") {
		menuActi();
	} else {
		setTimeout(function() {
			menuDesacti();
		}, 2500)
	}
});
var Smenu = document.getElementById("second_menu");
var body = document.getElementById("target_body");
function openMenu() {
	Smenu.classList.add("show_menu");
	body.style = "overflow-y: hidden;";
	document.getElementsByClassName("target_transi")[0].classList.add("active_smenu_1");
	document.getElementsByClassName("target_transi")[1].classList.add("active_smenu_1");
	document.getElementsByClassName("target_transi")[2].classList.add("active_smenu_2");
	document.getElementsByClassName("target_transi")[3].classList.add("active_smenu_2");
}
function closeMenu() {
	Smenu.classList.remove("show_menu");
	body.style = "overflow-y: auto;";
	document.getElementsByClassName("target_transi")[0].classList.remove("active_smenu_1");
	document.getElementsByClassName("target_transi")[1].classList.remove("active_smenu_1");
	document.getElementsByClassName("target_transi")[2].classList.remove("active_smenu_2");
	document.getElementsByClassName("target_transi")[3].classList.remove("active_smenu_2");
}