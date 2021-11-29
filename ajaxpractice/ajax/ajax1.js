var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function () {
	if(this.readyState == 4 && this.status == 200) {
		console.log(ajax.responseText)
	}
};
ajax.open("GET", "https://codingapple1.github.io/price.json", true);
ajax.send();