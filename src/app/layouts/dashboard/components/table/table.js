// table for dashboard
import { useEffect, useState } from "react";
import TableBody from "./components/TableBody";
import TableHead from "./components/TableHead";
import TableTitle from "./components/TableTitle";
import { allUpcomingReservations } from "../../../../../api/get";

export default function Table() {
	const [isLoading, setIsLoading] = useState(true);
	const [reservations, setReservations] = useState([]);

	useEffect(() => {
		async function getBookings() {
			const allReservations = await (await allUpcomingReservations()).data;
			setReservations(allReservations);
			
			setIsLoading(false);
		}
		
		getBookings();
	}, [reservations.length]);
	
	return (
		<div className="card border-0 shadow">
			<TableTitle topic="Upcoming Reservations" />

			<div className="table-responsive">
				<table className="table align-items-center table-flush">
					<TableHead head={["User", "Room", "Arrival", "Departure", "Reserved On"]} />
					{
						!isLoading && reservations.data.map((reserve, index) => reserve && <TableBody key={index} bodyContent={reserve} />)
					}
				</table>
			</div>
		</div>
	);
}