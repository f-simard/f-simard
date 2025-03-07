// This is an example of a custom element to use Swiper.js. Do not use as-is, it's just an example. You should adapt it to your needs.

class Swiper extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
        this.dataId = this.getAttribute("data-id");
		const swiper = new Swiper(this, {
            slidesPerView: 1.2,
            spaceBetween: 12,
            navigation: {
                nextEl: `#next-${this.dataId}`,
                prevEl: `#prev-${this.dataId}`,
              },
            breakpoints: {
                1024: {
                    slidesPerView: 3.8,
                },
                1600: {
                    slidesPerView: 4.8,
                }
            }
        });
	}
}