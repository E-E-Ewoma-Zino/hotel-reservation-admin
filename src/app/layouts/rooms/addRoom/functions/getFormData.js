function getFormData(room) {
	const formData = new FormData();

	// append the room data
	for (const roomkey in room) {
		if (roomkey === "images" || roomkey === "videos") continue;
		formData.append(roomkey, room[roomkey]);
	}

	// append the room Media
	console.log("rooms", room.images?.length);
	if (room.images?.length) room.images.forEach(image => {
		formData.append("images", image);
	});
	else console.log("No images");

	// append the room Media
	console.log("rooms", room.videos?.length);
	if (room.videos?.length) room.videos.forEach(image => {
		formData.append("videos", image);
	});
	else console.log("No videos");

	return formData;
}

export default getFormData;