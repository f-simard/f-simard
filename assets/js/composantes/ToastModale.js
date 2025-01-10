class ToastModale {
	#message;
	#type;
	#containerHTML;
	#template;
	#elementHTML;
	#demoCase;
	#autoDestruction;

	constructor(message, demoCase, autoDestruction = true, type = "info") {
		this.#message = message;
		this.#type = type; //Choix de type: info, erreur, succes
		this.#demoCase = demoCase;
		this.#autoDestruction = autoDestruction;
		this.#containerHTML = document.body;
		this.#template = autoDestruction
			? document.querySelector("#template-toastAuto")
			: document.querySelector("#template-toastMan");
		this.#elementHTML;
		this.#render();
	}

	/**
	 * Render toast and remove after 2.65sec
	 */
	#render() {
		let toast = this.#template.content.cloneNode(true);
		toast.querySelector(".toast__message").textContent = this.#message;

		this.#containerHTML.prepend(toast);
		this.#elementHTML = this.#containerHTML.firstElementChild;
		this.#elementHTML.dataset.type = this.#type;
		this.#elementHTML.dataset.demo = this.#demoCase;

		if (!this.#autoDestruction) {
			const btnClose = this.#elementHTML.querySelector("button");
			btnClose.addEventListener("click", this.#close.bind(this));
		}

		if (this.#autoDestruction) {
			setTimeout(() => {
				this.#elementHTML.remove();
			}, 2650);
		}
	}

	#close() {
		this.#elementHTML.dataset.demo = "fullScreenManClose";
		setTimeout(() => {
			this.#elementHTML.remove();
		}, 1525);
	}
}

export default ToastModale;
