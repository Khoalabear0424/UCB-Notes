function getactors() {
	$('div').empty();

	$.ajax({
		url: '/actors.json',
		method: 'GET'
	}).then(function (actors) {
		for (var actorIndex in actors) {
			// console.log(actorIndex);
			// console.log(actors[actorIndex]);
			// console.log(actors);

			var p = $('<p>'); // <p></p>

			//one way
			// p.text(JSON.stringify(actors[actorIndex]))

			//another way
			// p.text("id: " + actors[actorIndex].id + ", actor name: " + actors[actorIndex].actor_name)

			//another way
			p.text(`id: ${actors[actorIndex].id}, actor name: ${actors[actorIndex].actor_name}`)

			var a = $('<a>');
			a.text('delte');
			a.attr('href', '/actors-delete?actor_id=' + actors[actorIndex].id)
			p.append(a);


			$('div').prepend(p);
		}
	})
}
