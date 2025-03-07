import ToastModale from "../composantes/ToastModale.js";
import Parallax from "../composantes/parallax.js";
import Gallery from "../composantes/Gallery.js";

(function () {
	const btnsLaunchToast = document.querySelector(".js-launchToast");

	btnsLaunchToast.addEventListener("click", launchToast);

	function launchToast(event) {
		const trigger = event.target;
		const demoCase = trigger.dataset.demo;

		const autoDestruction = demoCase.includes("Auto");

		const msg = "Ceci est une super modale";

		new ToastModale(msg, demoCase, autoDestruction);
	}
	
window.customElements.define("p-arallax", Parallax);
window.customElements.define("g-allery", Gallery);

})();
