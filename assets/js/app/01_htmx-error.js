window.addEventListener("htmx:responseError", (event) => {
	console.log(event.detail.xhr.status);
	window.location.href = event.detail.xhr.responseURL;
});
