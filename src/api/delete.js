// Performs all get requests
import axios from "axios";
import host from "../constants/host";

export async function deleteRoom(id){
	return await axios.delete(host + "rooms/remove", { data: { id } });
}

export async function deleteRoomMedia(data){
	return await axios.delete(host + "rooms/removeMedia", { data });
}

export async function deleteBooking(id){
	return await axios.delete(host + "bookings/remove", { data: { id } });
}

const deleteApi = {
	deleteRoom,
	deleteBooking,
	deleteRoomMedia
}

export default deleteApi;