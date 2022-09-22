// Performs all get requests
import axios from "axios";
import host from "../constants/host";

export async function deleteRoom(id){
	return await axios.delete(host + "rooms/remove", { data: { id } });
}

export async function deleteRoomMedia(data){
	return await axios.delete(host + "rooms/removeMedia", { data });
}

const deleteApi = {
	deleteRoom,
	deleteRoomMedia
}

export default deleteApi;