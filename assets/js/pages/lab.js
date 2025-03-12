import ToastModale from "../composantes/ToastModale.js";
import Parallax from "../composantes/Parallax.js";
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

window.getRandom = async function generateRandomEpisode() {
	const container = document.querySelector("#container-random");
	container.classList.remove("appear");
	try {
		// Fetch the JSON file
		const response = await fetch("/f-simard/assets/js/data/random.json");

		// Check if response is ok
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		// Parse the JSON
		const data = await response.json();

		// Make sure we have data
		if (!data || data.length === 0) {
			container.innerHTML = `<p>No episodes available.</p>`;
			return;
		}

		// Select a random episode
		const randomIndex = Math.floor(Math.random() * data.length);
		const randomFact = data[randomIndex];

		// Create the HTML for the selected episode
		const content = `
      <h3 class="appear">${randomFact.title}</h3>
      <p class="appear">${randomFact.description}</p>
    `;

		// Update the container with the new HTML
		container.innerHTML = content;
	} catch (error) {
		console.error("Error fetching random fact:", error);
		container.innerHTML = `<p>Erreur au chargement</p>`;
	}

	setTimeout(()=> {container.classList.add("appear")}, 100)
};
