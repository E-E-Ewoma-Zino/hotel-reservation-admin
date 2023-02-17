// Performs all get requests
import axios from "axios";
import host from "../constants/host";

export async function allRooms(){
	try {
		return await axios.get(host + "rooms/all");
	} catch (err) {
		console.error("Error in api", err);
		return null;
	}
}

export async function roomById(id){
	try {
		return await axios.get(host + "rooms/id?id=" + id);
	} catch (err) {
		console.error("Error in api", err);
		return null;
	}
}

export async function allPopulatedBookings(){
	try {
		return await axios.get(host + "bookings/populated?opt=room user");
	} catch (err) {
		console.error("Error in api", err);
		return null;
	}
}

export async function allUpcomingReservations(){
	try {
		return await axios.get(host + "tracking/upcomingReservations");
	} catch (err) {
		console.error("Error in api", err);
		return null;
	}
}

export async function trackedDetails(property = ""){
	try {
		return await axios.get(host + "tracking/mostBooked" + property);
	} catch (err) {
		console.error("Error in api", err);
		return null;
	}
}

const getApi = {
	allRooms,
	trackedDetails,
	allUpcomingReservations,
	bookings: allPopulatedBookings
}

export default getApi;