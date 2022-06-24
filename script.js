function a(){
	let newdivCont=document.createElement('div')
	newdivCont.id='newdivContId'
	let newButton=document.createElement('button')
	let newDiv=document.createElement('div')
	newDiv.style.width='100%'
	newDiv.style.fontSize='25px'
	newDiv.classList.add('newDiv')
	newButton.append('x')
	newButton.style.fontSize='20px'
	newButton.onclick=b
	newDiv.append(input.value)
	newdivCont.append(newDiv);
	newdivCont.append(newButton);
	divCont.append(newdivCont)
	input.value=''
	function b(){
	
	newButton.closest('#newdivContId').remove()
}
};

