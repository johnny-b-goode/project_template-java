function callWebSvc() {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				document.getElementsByTagName("input")[0].setAttribute("value", xhr.responseText);
			}
		}
	};

	xhr.open('GET', document.getElementsByTagName("meta")[0].getAttribute("content") + operation, true);
	xhr.send(null);
}