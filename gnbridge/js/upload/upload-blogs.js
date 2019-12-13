$(document).ready(function () {
	const blogs_content = $('.blogs-content');
	const lang = blogs_content.attr('data-value');
	let count = 0;

	$('.upload-blogs').on('click', function (e) {
		e.preventDefault();
		const _this = this;

		$(_this).prop('disabled', true);
		count += 6;

		$.ajax({
			type: "POST",
			url: "/upload-blogs",
			data: { count },
			dataType: 'JSON',
			statusCode: {
				200: ({blogs, is_admin, total_elements}) => {
					for (let i = 0; i < blogs.length; i++) {
						const blogElement = $(`<div class="blog-item"><a class="blog-content" href="/blogs?id=${blogs[i]._id}"><div class="cover" style="background: url(${blogs[i].cover}) no-repeat"></div><div class="content-text">${blogs[i].title[lang]}</div></a></div>`);

						if (is_admin) blogElement.prepend(`<a href="/backend/blog/edit-post?id=${blogs[i]._id}" class="edit-blog" uk-icon="pencil" ratio="1"></a>`);
						blogs_content.append(blogElement);
					}

					if (total_elements) $(_this).remove();
					$(_this).prop('disabled', false);
				}
			}
		});

		return false;
	});
});