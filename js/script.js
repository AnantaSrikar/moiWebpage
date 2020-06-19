const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
var isActive = false;

toggleButton.addEventListener('click', () => {
	isActive = !isActive;
	navbarLinks.classList.toggle('active');
})

document.body.addEventListener('click', () => {
	if(isActive) {
		navbarLinks.classList.toggle('active');
		isActive = !isActive;
	}
}, true);