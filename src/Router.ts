import * as tools from "./tools";

import { Page404 } from "./pages/Page404";
import { PageHome } from "./pages/PageHome";
import { PageProjektleitung } from "./pages/PageProjektleitung";
import { PageReferenzen } from "./pages/PageReferenzen";
import { PageUeberuns } from "./pages/PageUeberuns";
import { PageKontakt } from "./pages/PageKontakt";

const pageNames = [
  "Home",
  "Projektleitung",
  "Referenzen",
  "Über Uns",
  "Kontakt",
];

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = () => {
  switch (currentPageIdCode) {
    case "home":
      return PageHome();
    case "projektleitung":
      return PageProjektleitung();
    case "referenzen":
      return PageReferenzen();
    case "ueberuns":
      return PageUeberuns();
    case "kontakt":
      return PageKontakt();
    default:
      return Page404();
  }
};

const getPageIdCode = (pageName: string) => {
  pageName = tools.cleanCharactersToAscii(pageName);
  return pageName.toLowerCase();
};

export const getMenu = () => {
  const getMenuClass = (pageName: string) => {
    const pageIdCode = tools.cleanCharactersToAscii(pageName.toLowerCase());
    if (pageIdCode === currentPageIdCode) {
      return ` class="active"`;
    } else {
      return "";
    }
  };

  return /*html*/ `
	<nav class="menu">
	<a href="index.html"><img src="images/cropped-kuehlmann_logo-removebg-preview.png"></a>
	<div class="nav-links" id="navLinks">
		<i class="fa fa-times" onclick="hideMenu()"></i>
		<ul>
			${pageNames
        .map(
          (pageName) =>
            `<li><a href="${getPageIdCode(pageName)}"${getMenuClass(
              pageName
            )}>${pageName}</a></li>`
        )
        .join("")}
		</ul>
		</div>
		<i class="fa fa-bars" onclick="showMenu()"></i>
	</nav>
`;
};

function getSmartCurrentPageId() {
  let currentPageIdCode = tools.getCurrentPageIdCode();
  currentPageIdCode =
    currentPageIdCode === ""
      ? tools.cleanCharactersToAscii(pageNames[0].toLowerCase())
      : currentPageIdCode;
  return currentPageIdCode;
}
