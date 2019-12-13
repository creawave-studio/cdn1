$(document).ready(function() {
  $('.set').on('submit', function (e) {
		e.preventDefault();

		const form = this;

		$.ajax({
			type: $(form).attr('method'),
			url: $(form).attr('action'),
			data: $(form).serialize(),
			statusCode: {
				200: (message) => {
					$('input, area', form).val('');
					alert(message);
				},
				403: (jqXHR) => {
					const error = JSON.parse(jqXHR.responseText);
					alert(error.reason);
				}
			}
		});

		return false;
	});
});