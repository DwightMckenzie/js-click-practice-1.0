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
