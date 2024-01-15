let startBtn = document.getElementById('srt'); 
let stopBtn = document.getElementById('stp'); 
let resetBtn = document.getElementById('rst'); 
let lapeBtn = document.getElementById('lsp'); 
let lape=false;
let startFlag=false;

let hour = 0; 
let minute = 0; 
let second = 0; 
let count = 0; 

startBtn.addEventListener('click', function () { 
	if(!startFlag)
	{
		timer = true;
		stopWatch();
		startFlag=true;
	}
	 
}); 

stopBtn.addEventListener('click', function () { 
	timer = false; 
	startFlag=false;
}); 

lapeBtn.addEventListener('click', function () { 
	lape = true; 
}); 
resetBtn.addEventListener('click', function () { 
	timer = false; 
	hour = 0; 
	minute = 0; 
	second = 0; 
	count = 0; 
	document.getElementById('hr').innerHTML = "00<span>hr</span>"; 
	document.getElementById('min').innerHTML = "00<span>min</span>"; 
	document.getElementById('sec').innerHTML = "00<span>sec</span>"; 
	document.getElementById('cnt').innerHTML = "00<span>cnt</span>"; 

	document.getElementById('hr_l').innerHTML = "00"; 
	document.getElementById('min_l').innerHTML = "00"; 
	document.getElementById('sec_l').innerHTML = "00"; 
	document.getElementById('cnt_l').innerHTML = "00"; 

}); 

function stopWatch() { 
	if (timer) { 
		count++; 

		if (count == 100) { 
			second++; 
			count = 0; 
		} 

		if (second == 60) { 
			minute++; 
			second = 0; 
		} 

		if (minute == 60) { 
			hour++; 
			minute = 0; 
			second = 0; 
		} 

		let hrString = hour; 
		let minString = minute; 
		let secString = second; 
		let countString = count; 

		if (hour < 10) { 
			hrString = "0" + hrString; 
		} 

		if (minute < 10) { 
			minString = "0" + minString; 
		} 

		if (second < 10) { 
			secString = "0" + secString; 
		} 

		if (count < 10) { 
			countString = "0" + countString; 
		} 

        if(lape){
			
        document.getElementById('hr_l').innerHTML = hrString; 
		
		document.getElementById('min_l').innerHTML = minString;
		 
		document.getElementById('sec_l').innerHTML = secString; 
		
		document.getElementById('cnt_l').innerHTML = countString; 
		
		lape=false;
	 }
		document.getElementById('hr').innerHTML = hrString+"<span>hr</span>"; 
		document.getElementById('min').innerHTML = minString+"<span>min</span>"; 
		document.getElementById('sec').innerHTML = secString+"<span>sec</span>"; 
		document.getElementById('cnt').innerHTML = countString+"<span>cnt</span>"; 
		setTimeout(stopWatch, 10); 
	} 
}
