// Performs all get requests
import axios from "axios";
import host from "../constants/host";

export async function allRooms(){
	return await axios.get(host + "rooms/all");
}

export async function roomById(id){
	return await axios.get(host + "rooms/id?id=" + id);
}

export async function allPopulatedBookings(){
	return await axios.get(host + "bookings/populated?opt=room user");
}

export async function allUpcomingReservations(){
	return await axios.get(host + "tracking/upcomingReservations");
}

const getApi = {
	allRooms,
	bookings: allPopulatedBookings
}

export default getApi;