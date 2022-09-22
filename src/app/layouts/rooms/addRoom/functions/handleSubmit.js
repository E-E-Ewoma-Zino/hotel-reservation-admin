import { addRoom } from "../../../../../api/post";
import getFormData from "./getFormData";
import emptyRoom from "./emptyRoom";

async function handleFormSubmit(event, room, setRoom) {
	event.preventDefault();

	const formData = getFormData(room);

	try {
		const me = await addRoom(formData);

		window.swalWithBootstrapButtons.fire({
			icon: 'success',
			title: 'New Room',
			text: "Successfully addded room " + room.name,
			showConfirmButton: true
		});

		emptyRoom(setRoom);
		console.log("res", me);
	} catch (err) {
		window.swalWithBootstrapButtons.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Something went wrong!',
			footer: '<a href>Why do I have this issue?</a>'
		});
		console.error("Error from create room:", err);
	}
}

export default handleFormSubmit;