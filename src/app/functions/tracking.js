import { trackedDetails } from "../../api/get";

export default async function trackingFunction(property) {
	const response = await trackedDetails(property);

	return response.data.data;
}