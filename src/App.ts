import "./styles/main.scss";
import { getMenu, getCurrentPage } from "./Router";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
<section class="header">
	<h1>Info Site</h1>
	${getMenu()}
</section>
<main>
	${getCurrentPage()}
</main>
`;
