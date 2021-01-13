const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

var isActive = false;

document.body.addEventListener('click', () => {

	var togglerClicked = false;

	toggleButton.addEventListener('click', () => {;
		isActive = !isActive;
		navbarLinks.classList.toggle('active');
		togglerClicked = true;
	});

	if(isActive && !togglerClicked) {
		navbarLinks.classList.toggle('active');
		isActive = !isActive;
	}
	
}, true);

// Uses GitHub API to get the last commit done on my repo
function get_last_updated() {

	var xhttp = new XMLHttpRequest();

	xhttp.open('GET','https://api.github.com/repos/AnantaSrikar/anantasrikar.github.io/commits', true);
	xhttp.setRequestHeader("Content-Type", "application/json");
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			// Getting the response
			var response = JSON.parse(this.responseText);

			// Getting the last commit details
			var date = new Date(response[0]['commit']['author']['date']);
			
			var update_date_str = date.getDate() + '-' + date.toLocaleString('default', { month: 'short' }) + '-' + date.getFullYear();
			
			// Getting the footer element to modify dynamically
			var footer = document.getElementsByClassName("row")[0].getElementsByTagName("p")[0];
			
			footer.innerHTML += " | Last updated: " + update_date_str;
		}
	};
	
	xhttp.send();
}

// Funtion that gets called everytime a page is loaded
window.onload = function() {
	get_last_updated();
  };