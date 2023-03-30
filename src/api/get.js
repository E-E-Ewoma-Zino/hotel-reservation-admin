// Performs all get requests
import axios from "axios";
import host from "../constants/host";

export async function allRooms(type = ""){
	try {
		return await axios.get(host + "rooms/all?type=" + type);
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

export async function getReservedDates(roomId){
	if (!roomId) roomId = "63ef08d9e87073b6a7aced27";
	try{
		return await axios.get(host + "tracking/reserved?roomId=" + roomId);
	}catch(err){
		console.error("Error::", err);
		return null;
	}
}

const getApi = {
	allRooms,
	trackedDetails,
	getReservedDates,
	allUpcomingReservations,
	bookings: allPopulatedBookings
}

export default getApi;