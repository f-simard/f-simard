// This is an example of a custom element to use Swiper.js. Do not use as-is, it's just an example. You should adapt it to your needs.

class Gallery extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
        this.dataId = this.getAttribute("data-id");
		const swiper = new Swiper(this, {
			slidesPerView: 1.3,
			spaceBetween: 16,
			pagination: {
				el: "#pagination-pet-gallery",
				clickable: true,
			},
			breakpoints: {
				1024: {
					slidesPerView: 2.6,
				},
				1600: {
					slidesPerView: 3.6,
				},
			},
		});
	}
}

export default Gallery;