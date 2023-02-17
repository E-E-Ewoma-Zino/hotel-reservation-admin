// Rooms
import { useEffect, useState } from "react";
import Footer from "../../../partials/footer/Footer";
import { PlusIcon, UserAddIcon } from "../../../icons/Icons";
import { allRooms } from "../../../../api/get";
import RoomList from "./components/RoomList";
import { setRoomChangeContext } from "../../../context/allContext";
import Toolbar from "../../../components/toolbar/Toolbar";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import DropDownBtn from "../../../components/dropDownBtn/DropDownBtn";
import DropDownItem from "../../../components/dropDownBtn/components/DropDownItems";
import Table from "../../../components/Tables/Table1/Table";
import TableHead from "../../../components/Tables/Table1/components/tableHead/TableHead";

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
							<DropDownBtn name="Actions" buttonClass="btn btn-sm btn-gray-800 d-inline-flex align-items-center dropdown-toggle" icon={<PlusIcon className="icon icon-xs me-2" />} >
								<DropDownItem name="Add Room" link="/rooms/add" icon={<UserAddIcon className="dropdown-icon text-gray-400 me-2" />} />
								{/* <DropDownItem name="Add Widget" icon={<WidgetIcon className="dropdown-icon text-gray-400 me-2" />} />
								<DropDownItem name="Upload Files" icon={<UploadCloudIcon className="dropdown-icon text-gray-400 me-2" />} />
								<DropDownItem name="Preview Security" icon={<SheldIcon className="dropdown-icon text-gray-400 me-2" />} />
								<div role="separator" className="dropdown-divider my-1"></div>
								<DropDownItem name="Upgrade to Pro" icon={<FireIcon className="dropdown-icon text-danger me-2" />} /> */}
							</DropDownBtn>
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