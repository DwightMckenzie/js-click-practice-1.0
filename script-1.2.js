"use strict";

/* Show and Hide Div
-------------------------------------------------------------------*/
let divOne = document.querySelector('.div-1');
let objDivOne = window.getComputedStyle(divOne);
let btnShow = document.querySelector('.btn-show');

function showDiv() {
	let crntH = objDivOne.getPropertyValue('height');

	crntH === '0px' ? divOne.style.height = '100px' : divOne.style.height = '0px';
	btnShow.textContent === 'Show Div' ? btnShow.textContent = 'Hide Div' : btnShow.textContent = 'Show Div';
}

/* Adds and Removes background color of Div
-------------------------------------------------------------------*/
let divTwo = document.querySelector('.div-2');
let btnColor = document.querySelector('.btn-color');

function colorDiv() {
	btnColor.textContent === 'Change Color' ? divTwo.style.backgroundColor = 'red' : divTwo.style.backgroundColor = 'darkgoldenrod';
	btnColor.textContent === 'Change Color' ? btnColor.innerHTML = 'Revert' : btnColor.innerHTML = 'Change Color';
};

/* Float Div Left to Right
-------------------------------------------------------------------*/
let divThreeCntnr = document.querySelector('.div-3-container');
let divThreeWrppr = document.querySelector('.div-3-wrppr');
let btnMove = document.querySelector('.btn-move');

function floatDiv() {
	btnMove.textContent === 'Right' ? divThreeCntnr.style.justifyContent = 'flex-end' : divThreeCntnr.style.justifyContent = 'flex-start'; 
	btnMove.textContent === 'Right' ? btnMove.innerHTML = 'Left' : btnMove.innerHTML = 'Right';
}

/* increase decrease stroke on Div
-------------------------------------------------------------------*/
let divFour = document.querySelector('.div-4');
let btnBrdr = document.querySelectorAll('.btn-brdr');
let brdrPx = 1;
let crntBrdr = 0;

// https://stackoverflow.com/questions/2664045/how-to-get-an-html-elements-style-values-in-javascript

function incBrdr() {
	// console.log('inc');
	crntBrdr = brdrPx++;

	// adjust border with new number
	divFour.style.border = `${crntBrdr}px solid #555`;
	
	// keep same color
	divFour.style.backgroundColor = 'burlywood';

	// reset onclick attribute
	let btnDec = document.querySelector('.btn-dec');
	if (!btnDec.hasAttribute('onclick')) {
		btnDec.setAttribute('onclick', 'decBrdr()');
	}

	// NOT NEEDED BUT SAVE THIS FOR THE MOMENT
	// let style = getComputedStyle(divFour);
	// console.log(style.border);

	if (crntBrdr === 10) {
		// console.log('yes');
		
		// remove click function
		let btnInc = document.querySelector('.btn-inc');
		btnInc.removeAttribute('onclick');
		
		// red background
		divFour.style.backgroundColor = 'red';
		
	}

}
function decBrdr() {
	// console.log('dec');
	crntBrdr = brdrPx--;

	// remove click function
	divFour.style.border = `${crntBrdr}px solid #555`;

	// keep same color
	divFour.style.backgroundColor = 'burlywood';

	// reset onclick attribute
	let btnInc = document.querySelector('.btn-inc');
	if (!btnInc.hasAttribute('onclick')) {
		btnInc.setAttribute('onclick', 'incBrdr()');
	}

	// count min border pixel
	if (crntBrdr === 0) {
		// console.log('yes');
		
		// remove click function
		let btnDec = document.querySelector('.btn-dec');
		btnDec.removeAttribute('onclick');
		
		// red background
		divFour.style.backgroundColor = 'red';
		
	}

}

/* border radius
-------------------------------------------------------------------*/
let divFive = document.querySelector('.div-5');
let btnRad = document.querySelector('.btn-rad');

function addRadius() {
	btnRad.textContent === 'Add Radius' ? divFive.style.borderRadius = '50px' : divFive.style.borderRadius = '0px';
	btnRad.textContent === 'Add Radius' ? btnRad.innerHTML = 'Remove Radius' : btnRad.innerHTML = 'Add Radius';
}

/* Dial Rotation
-------------------------------------------------------------------*/
let dial = document.querySelector('.dial');
let digiDsply = document.querySelector('.display');
let newDeg = '';

function rotate(e) {
	let btnDeg = e.value;
	let oprtr = '';
	let degIncr = 5;

	// set button selection
	btnDeg === "1" ? oprtr = "+" : oprtr = "-";

	// get current degree
	let crntRotVal = dial.style.getPropertyValue("transform");
	
	// strip declaration value to just a number
	let crntRotNum = crntRotVal.replace(/([a-z(\*)])/g, "");

	// convert to number
	let newRotNum = window.eval(parseFloat(crntRotNum) + oprtr + degIncr);

	// merge number into declaration value
	newDeg = `rotate(${newRotNum}deg)`;

	// apply new deg to object
	dial.style.transform = newDeg;

	// set digital display
	digiDsply.children[0].innerHTML = newRotNum;

};

// function () {
	
// 	// Rot to 45º
// 	if (dial.style.transform === '') {
// 		dial.style.transform = 'rotate(45deg)';
// 		//dial.style.borderRadius = '0px 0px 100px 0px'; //TL, TR, BR, BL
// 		rotateDivPos.firstChild.data = 'Rot to +90º';
// 		currentDeg.firstChild.data = '+ 045º';
// 	}
// 	// Rot to 90º	
// 	else if (dial.style.transform === 'rotate(45deg)') {
// 		dial.style.transform = 'rotate(90deg)';
// 		//dial.style.borderRadius = '0px 0px 0px 0px'; //TL, TR, BR, BL
// 		rotateDivPos.firstChild.data = 'Rot to +135º';
// 		currentDeg.firstChild.data = '+ 090º';
// 	}
// 	// Rot to 135º
// 	else if (dial.style.transform === 'rotate(90deg)') {
// 		dial.style.transform = 'rotate(135deg)';
// 		//dial.style.borderRadius = '0px 100px 0px 0px'; //TL, TR, BR, BL
// 		rotateDivPos.firstChild.data = 'Rot to +180º';
// 		currentDeg.firstChild.data = '+ 135º';
// 	}
// 	// Rot to 180º
// 	else if (dial.style.transform === 'rotate(135deg)') {
// 		dial.style.transform = 'rotate(180deg)';
// 		//dial.style.borderRadius = '0px 0px 0px 0px'; //TL, TR, BR, BL
// 		rotateDivPos.firstChild.data = 'Rot to +225º';
// 		currentDeg.firstChild.data = '+ 180º';
// 	}
// 	// Rot to 225º
// 	else if (dial.style.transform === 'rotate(180deg)') {
// 		dial.style.transform = 'rotate(225deg)';
// 		//dial.style.borderRadius = '100px 0px 0px 0px'; //TL, TR, BR, BL
// 		rotateDivPos.firstChild.data = 'Rot to +270º';
// 		currentDeg.firstChild.data = '+ 225º';
// 	}
// 	// Rot to 270º
// 	else if (dial.style.transform === 'rotate(225deg)') {
// 		dial.style.transform = 'rotate(270deg)';
// 		//dial.style.borderRadius = '0px 0px 0px 0px'; //TL, TR, BR, BL
// 		rotateDivPos.firstChild.data = 'Rot to +315º';
// 		currentDeg.firstChild.data = '+ 270º';
// 	}
// 	// Rot to 315º
// 	else if (dial.style.transform === 'rotate(270deg)') {
// 		dial.style.transform = 'rotate(315deg)';
// 		//dial.style.borderRadius = '0px 0px 0px 100px'; //TL, TR, BR, BL
// 		rotateDivPos.firstChild.data = 'Rot to +360º';
// 		currentDeg.firstChild.data = '+ 315º';
// 	}
// 	// Rot to 360º (actually 0º)
// 	else if (dial.style.transform === 'rotate(315deg)') {
// 		dial.style.transform = '';
// 		//dial.style.borderRadius = '0px 0px 0px 0px'; //TL, TR, BR, BL
// 		rotateDivPos.firstChild.data = 'Rot to +45º';
// 		currentDeg.firstChild.data = '000º';
// 	}
// 	// Reset
// 	else {
// 		dial.style.transform === '';
// 		currentDeg.firstChild.data = '000º';
// 	}
// };

/* Controlling Direction of Div
-------------------------------------------------------------------*/
const btnDir = document.querySelectorAll('.btn-dir');

function moveDirect(elm) {
	const pad = document.querySelector('.dir-pad-wrppr');
	const padPosition = pad.getBoundingClientRect();

	let dir = elm.target.value;
	let padPosX = padPosition.left;
	let padPosY = padPosition.top;

	switch (dir) {
		case 'left':
			console.log('left');
			pad.style.transform = 'translateX(-50px)';
			// console.log('x: ', padPosition.left);
		break;
		case 'right':
			console.log('right');
			pad.style.transform = 'translateX(50px)';
			// console.log('x: ', padPosition.right);
		break;
		case 'up':
			console.log('up');
			pad.style.transform = 'translateY(-50px)';	
			// console.log('Neg y: ', padPosY);
		break;
		case 'down':
			console.log('down');
			pad.style.transform = 'translateY(50px)';
			// console.log('Pos y: ', padPosition.bottom);
		break;
		case 'center':
			console.log('center');
			if (padPosX < 50) {
				pad.style.transform = 'translateX(50%)';
			}
			if (padPosX > 50) {
				pad.style.transform = 'translateX(50%)';
			}
			if (padPosY >= 347) {
				pad.style.transform = 'translateX(50%)';
			}
			if (padPosY >= 347) {
				pad.style.transform = 'translateX(50%)';
			}
		break;
		default:
		break;
	}
	
}

btnDir.forEach((elm) => {
	elm.addEventListener('click', moveDirect);
});

// keep original
// const btnUp = document.querySelector('button[data-direct=up]');
// const btnDown = document.querySelector('button[data-direct=down]');
// const btnLeft = document.querySelector('button[data-direct=left]');
// const btnRight = document.querySelector('button[data-direct=right]');
// const btnCenter = document.querySelector('button[data-direct=center]');
// const div = document.querySelector('.div-7-wrppr');
// const divPosition = div.getBoundingClientRect();

// let divPosX = divPosition.left;
// let divPosY = divPosition.top;

// btnUp.onclick = function () {
// 	div.style.transform = 'translateY(-500px)';	
// 	console.log('Neg y: ', divPosY);
// }

// btnDown.onclick = function () {
// 	div.style.transform = 'translateY(500px)';
// 	console.log('Pos y: ', divPosition.bottom);
// }

// btnRight.onclick = function () {
// 	div.style.transform = 'translateX(500px)';
// 	console.log('x: ', divPosition.right);
// }

// btnLeft.onclick = function () {
// 	div.style.transform = 'translateX(-500px)';
// 	console.log('x: ', divPosition.left);
// }

// btnCenter.onclick = function () {
// 	if (divPosY >= 347) {
// 		div.style.transform = 'translate(347px)';
// 	}	
// }

/* image size
-------------------------------------------------------------------*/
const imgFrm = document.getElementById('img-frme');
const objFrm = window.getComputedStyle(imgFrm, null);
let minFrmDim = "200px";
let maxFrmDim = "500px";

function imgSize() {
	// get current dimensions
	let crntImgW = objFrm.getPropertyValue('width');
	let crntImgH = objFrm.getPropertyValue('height');

	crntImgW === `${minFrmDim}` ? imgFrm.style.width = `${maxFrmDim}` : imgFrm.style.width = `${minFrmDim}`;
	crntImgH === `${minFrmDim}` ? imgFrm.style.height = `${maxFrmDim}` : imgFrm.style.height = `${minFrmDim}`;
}

imgFrm.addEventListener('click', imgSize);