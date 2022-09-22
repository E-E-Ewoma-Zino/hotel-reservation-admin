function handleMediaChange(event, setRoom) {
	const { name, files } = event.target;

	setRoom((prev) => {
		return {
			...prev, [name]: files
		}
	});
}

export default handleMediaChange;