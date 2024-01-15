let startBtn = document.getElementById('srt'); 
let pauseBtn = document.getElementById('pse'); 
let resetBtn = document.getElementById('rst'); 
let lapBtn = document.getElementById('lap'); 
let lap=false;
let startFlag=false;

let hour = 0; 
let minute = 0; 
let second = 0; 
let count = 0; 

startBtn.addEventListener('click', function () { 
	if(!startFlag)
	{
		timer = true;
		pauseWatch();
		startFlag=true;
	}
	 
}); 

pauseBtn.addEventListener('click', function () { 
	timer = false; 
	startFlag=false;
}); 

lapBtn.addEventListener('click', function () { 
	lap = true; 
}); 

resetBtn.addEventListener('click', function () { 
	timer = false; 
	hour = 0; 
	minute = 0; 
	second = 0; 
	count = 0; 
	document.getElementById('hr').innerHTML = "00<span>Hr</span>"; 
	document.getElementById('min').innerHTML = "00<span>Min</span>"; 
	document.getElementById('sec').innerHTML = "00<span>Sec</span>"; 
	document.getElementById('cnt').innerHTML = "00<span>Cnt</span>"; 

	document.getElementById('hr_l').innerHTML = "00"; 
	document.getElementById('min_l').innerHTML = "00"; 
	document.getElementById('sec_l').innerHTML = "00"; 
	document.getElementById('cnt_l').innerHTML = "00"; 

}); 

function pauseWatch() { 
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

        if(lap){
			
        document.getElementById('hr_l').innerHTML = hrString; 
		
		document.getElementById('min_l').innerHTML = minString;
		 
		document.getElementById('sec_l').innerHTML = secString; 
		
		document.getElementById('cnt_l').innerHTML = countString; 
		
		lap=false;
	 }
		document.getElementById('hr').innerHTML = hrString+"<span>Hr</span>"; 
		document.getElementById('min').innerHTML = minString+"<span>Min</span>"; 
		document.getElementById('sec').innerHTML = secString+"<span>Sec</span>"; 
		document.getElementById('cnt').innerHTML = countString+"<span>Cnt</span>"; 
		setTimeout(pauseWatch, 10); 
	} 
}
