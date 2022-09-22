import { updateRoom } from "../../../../../api/patch";
import emptyFileInput from "./emptyFileInput";
import getFormData from "./getFormData";

async function handleFormSubmit(event, room, roomId, setUpdateCount) {
	event.preventDefault();

	const formData = getFormData(room, roomId);

	try {
		const me = await updateRoom(formData);

		if(me.data.data) window.swalWithBootstrapButtons.fire({
			icon: 'success',
			title: 'Updated Room',
			text: "Room " + room.name + " has been updated",
			timer: 1000
		});

		// empty the file inputs
		emptyFileInput();
	} catch (err) {
		window.swalWithBootstrapButtons.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Something went wrong!',
			footer: '<a href>Why do I have this issue?</a>'
		});
		console.error("Error from create room:", err);
	}
	
	// triggers an update to the edit room component
	setUpdateCount(prev => prev + 1);
}

export default handleFormSubmit;