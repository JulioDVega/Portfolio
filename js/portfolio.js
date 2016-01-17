$(document).ready(function() {
	var template = ['<div class="panel-body verified-body">','</div>'].join('');

	var content = ['<a href="https://github.com/albertbahia">',
	  '<img class="img-thumbnail verified-body-img" src="https://avatars0.githubusercontent.com/u/5618678?v=3&s=460" alt="https://community.teamdynamix.com/Images/GenericUser.png" />',
	  '</a>',
	  '<div class="verified-body-info">',
	  '<strong>',
	  '<p id="verified-name">Name: ',
	  '</strong>',
	  'Albert Bahia',
	  '</p>',
	  '<p id="verified-github-name"><strong>Github Username:</strong> albertbahia</p>',
	  '</div>'].join('');

	$(".button-label").popover({
		placement: 'top',
		html: true,
		content: content
	});
});