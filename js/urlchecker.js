const envChecker = function(){
	let envUrl = window.location.hostname;

	if(envUrl == ' draft--astrouxds.netlify.app'){
		alert('draft')
	} else if ( envUrl == 'localhost'){
		alert('localhost');
	}
}

exports.envChecker = envChecker;