$(document).ready(check_box);
const dictionarySaveId = {};
function check_box() {
		$('input[type=checkbox]').click (function(event) {
				const target = event.target;
				const name = target.getAttribute('data-name');
				const id = target.getAttribute('data-id');
				if (target.checked) {
						dictionarySaveId[id] = name;
						let h4Add = $('.amenities h4')
						h4Add.text(Object.values(dictionarySaveId) .join(', '));
				} else {
						delete dictionarySaveId[id];
				}
				console.log(dictionarySaveId);
		});
};

$(document).ready(api);
function api() {
		const URL = "http://0.0.0.0:5001/api/v1/status"
		console.log(URL);
		$.get(URL, (data) => {
				console.log(data);
			if(data.status === 'OK'){
					$('#api_status').addClass('available')
			}else{
					$('#api_status').removeClass('available')
			}
	});
};
