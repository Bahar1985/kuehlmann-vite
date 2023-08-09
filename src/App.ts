import "./styles/main.scss";
import { getMenu, getCurrentPage } from "./Router";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
<section class="header">

	${getMenu()}
</section>
<main>

	${getCurrentPage()}
</main>
`;
