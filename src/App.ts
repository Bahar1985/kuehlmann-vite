import "./styles/main.scss";
import { getMenu, getCurrentPage, getHeaderClass } from "./Router";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
<section class="${getHeaderClass()}">

	${getMenu()}
</section>
<main>

	${getCurrentPage()}
</main>
<!---------Footer------->
<hr>
<section class="footer">
	<!-- <h4> About us</h4> -->
	<!-- <p> Diplom Ingenieur und Architekt Lutz Kühlmann ist <br> der Kopf der Kühlmann Projektleitung und
		Bauherrenvertretung.</p> -->
	<div class="icons">
		<i class="fa-brands fa-facebook"></i>
		<i class="fa-brands fa-instagram"></i>
		<i class="fa-brands fa-linkedin"></i>
	</div>
	<p>© 2023 Meine Website. Alle Rechte vorbehalten. | <a href="https://www.example.com">Impressum</a> | <a
	 href="https://www.example.com/datenschutz">Datenschutz</a></p>
	<p> Made With <i class="fa-regular fa-heart"></i> by Dci Student</p>
</section>

`;

const navLinks = document.querySelector<HTMLDivElement>("#navLinks");
function showMenu() {
  if (navLinks) {
    navLinks.style.right = "0";
  }
}
function hideMenu() {
  if (navLinks) {
    navLinks.style.right = "-200px";
  }
}
