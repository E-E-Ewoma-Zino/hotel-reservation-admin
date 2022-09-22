// Performs all post requests
import axios from "axios";
import host from "../constants/host";


export async function updateRoom(data){
	return await axios.patch(host + "rooms/update", data);
}

const postApi = {
	updateRoom
}

export default postApi;