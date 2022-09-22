// Performs all post requests
import axios from "axios";
import host from "../constants/host";


export async function addRoom(data){
	return await axios.post(host + "rooms/add", data);
}

const postApi = {
	addRoom
}

export default postApi;