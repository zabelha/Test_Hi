$.get('https://jsonplaceholder.typicode.com/users', function (c) {
		$.each(c, function (i, v) {
			var name = [v.name];
			var email = [v.email];

			for(j = 0; j < name.length & j < email.length; j++){
				if(v.name != 'Patricia Lebsack'){
					$('.row-card').append('<div  class="card col-3 mx-2 my-3 p-3">' + name[j] + '<br><div class="email"> ' + email[j] + '</div></div>')
				}

			}
		});
	});


