function handleChange(event, setRoom) {
	const { name, value } = event.target;

	setRoom((prev) => {
		return {
			...prev, [name]: value
		}
	});
}

export default handleChange;