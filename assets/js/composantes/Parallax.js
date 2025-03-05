class Parallax extends HTMLElement {
	constructor() {
		super();
		this.render = this.render.bind(this);
		this.initialTop = 0;
	}

	connectedCallback() {
		window.addEventListener("scroll", () => {
			this.initialTop = this.getBoundingClientRect().top + window.scrollY;
			this.render();
		});
		window.addEventListener("resize", this.render);
		this.initialTop = this.getBoundingClientRect().top + window.scrollY;
	}

	disconnectedCallback() {
		window.removeEventListener("scroll", this.render);
		window.removeEventListener("resize", this.render);
	}

	render() {
		const rect = this.getBoundingClientRect();
		const speed = this.getAttribute("speed") || 0.1;
		const dir = this.getAttribute("dir") || "Y";
		const elementHeight = rect.height;
		const yPos = (window.scrollY - this.initialTop) * speed;
		const adjustedYPos = yPos / elementHeight;

		this.style.transform = `translate${dir}(${adjustedYPos * 75}px)`;
	}
}

export default Parallax