const emptyRoom = (setRoom) => {
	setRoom({
		name: '',
		price: '',
		type: '',
		features: '',
		description: '',
		images: '',
		videos: ''
	});
	// empty file inputs
	document.querySelector("#images").value = '';
	document.querySelector("#videos").value = '';
}

export default emptyRoom;