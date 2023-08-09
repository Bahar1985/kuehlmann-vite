import "./styles/main.scss";
import { getMenu, getCurrentPage, getHeaderClass } from "./Router";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
<section class="${getHeaderClass()}">

	${getMenu()}
</section>
<main>

	${getCurrentPage()}
</main>
`;
