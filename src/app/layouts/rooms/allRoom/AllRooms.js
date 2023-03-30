// Rooms
import { useEffect, useState } from "react";
import Footer from "../../../partials/footer/Footer";
import { PlusIcon } from "../../../icons/Icons";
import { allRooms } from "../../../../api/get";
import RoomList from "./components/RoomList";
import { setRoomChangeContext } from "../../../context/allContext";
import Toolbar from "../../../components/toolbar/Toolbar";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import Table from "../../../components/Tables/Table1/Table";
import TableHead from "../../../components/Tables/Table1/components/tableHead/TableHead";
import { Link } from "react-router-dom";

export default function AllRooms() {
	const [isLoading, setIsLoading] = useState(false);
	const [rooms, setRooms] = useState([]);
	const [roomChange, setRoomChange] = useState(0);

	// Prepare all rooms
	useEffect(() => {
		async function getAllRooms() {
			// rooms is still loading
			setIsLoading(true);

			// get the rooms
			const response = await allRooms();

			// set the rooms
			setRooms(response.data.data);

			// room is done loading
			setIsLoading(false);
		}
		getAllRooms()
	}, [roomChange]);

	return (
		<setRoomChangeContext.Provider value={setRoomChange}>
			<main className="content">
				<Toolbar />

				<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
					<div className="d-block mb-4 mb-md-0">
						<Breadcrumb />
						<h2 className="h4">All Rooms</h2>
						<p className="mb-0">Perform rooms modfications here.</p>
					</div>
					<div className="btn-toolbar mb-2 mb-md-0">
						<div>
							<Link to={"/rooms/add"} className="btn btn-sm btn-gray-800">
								<PlusIcon className="icon icon-xs me-2" />
								Add Room
							</Link>
						</div>
						{/* NOTE: Added d-none */}
						<div className="btn-group ms-2 ms-lg-3 d-none">
							<button type="button" className="btn btn-sm btn-outline-gray-600">Share</button>
							<button type="button" className="btn btn-sm btn-outline-gray-600">Export</button>
						</div>
					</div>
				</div>

				<Table head={[
					<TableHead title="#" key={0} />,
					<TableHead title="Name" key={1} />,
					<TableHead title="Type" key={2} />,
					<TableHead title="Cost" key={3} />,
					// <TableHead title="Avaliable" key={4} />,
					<TableHead title="Action" key={4} />
				]}>
					{
						isLoading ? <tr><td>Loading...</td></tr> :
							rooms.map(room => <RoomList key={room._id} id={room._id} name={room.name} type={room.type} price={room.price} imgSrc={room.images[0]?.path} isAvaliable={room.isAvaliable} />)
					}
				</Table>
				<Footer />
			</main>
		</setRoomChangeContext.Provider>
	)
}