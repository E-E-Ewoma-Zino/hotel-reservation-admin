import { trackedDetails } from "../../api/get";

export default async function trackingFunction() {
	const response = await trackedDetails();

	return response.data.data;
}