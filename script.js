
	function turnRed() {
		var changeTextColor = document.getElementById("changeText");
		changeTextColor.style.color = "red";
	}


var keywords = document.querySelector('#keywords');
keywords.addEventListener('click', function(event){
	var target = event.target;
	var regex = new RegExp('('+target.textContent+')', 'ig');
	text = text.replace(regex, '<span class="highlight">$1</span>');
	keywords.innerHTML = text;
}, false);
