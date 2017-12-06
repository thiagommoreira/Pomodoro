let running = true;

function calculaIntervalo(total) {

	setInterval(() => {
		if(running) {
			console.log(total);
			total = total - 1;
			if(total === 95) {
				running = false;
				
			}
		}

	}, 1000);
	
	

}

function retornaSegundos(tempo) {
	if(tempo.includes(":")) {
		var split = tempo.split(":");

		return (parseInt(split[0]*60)+parseInt(split[1]));
	} else {
		return "Time is not valid";
	}
	
}

calculaIntervalo(100);

//console.log(retornaSegundos('20:00'));

