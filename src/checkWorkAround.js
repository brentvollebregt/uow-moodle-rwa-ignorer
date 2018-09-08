if (window.location.origin + window.location.pathname === 'https://elearn.waikato.ac.nz/mod/resource/view.php') {
	var document_link = document.querySelector('div.resourceworkaround > a');
	if (document_link !== null) {
		chrome.storage.sync.get({'skipped': 0, 'enabled': true}, function(obj) {
			if (obj.enabled) {
				window.location.href = document_link.href;
				chrome.storage.sync.set({'skipped': obj.skipped + 1});
			}
		});
	}
}
