// This component return a list of rooms

import { deleteRoom } from "../../../../api/delete";
import host from "../../../../constants/host";
import DropDownItem from "../../../components/dropDownBtn/components/DropDownItems";
import DropDownBtn from "../../../components/dropDownBtn/DropDownBtn";
import TableColumn from "../../../components/Tables/Table1/components/tableColumn/TableColumn";
import TableRow from "../../../components/Tables/Table1/components/tableRow/TableRow";
import { FireIcon, UserAddIcon, WidgetIcon } from "../../../icons/Icons";

export default function BookingList({ id, user, room, payed, adult, children, start, end }) {

	async function handleDeleteRoom(id, name) {
		try {
			const deletedRoom = await deleteRoom(id);
			console.log("deleted Room", deletedRoom.data);

			window.swalWithBootstrapButtons.fire({
				icon: 'success',
				title: 'Deleted Room',
				text: "Successfully deleted room " + name,
				showConfirmButton: true,
				timer: 1000
			});
		} catch (err) {
			window.swalWithBootstrapButtons.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Something went wrong!',
				footer: '<a href>Why do I have this issue?</a>'
			});
			console.error("Error from create room:", err);
		}
	}

	return (
		<TableRow id={id}>
			<TableColumn>
				<a href="#x" className="fw-bold">
					<img src={ host + room?.images[0]?.path } className="img-fluid rounded-circle" alt={room?.name} width="50em" height="50em" />
				</a>
			</TableColumn>
			<TableColumn>
				<span className="fw-normal">{user?.firstname}</span>
			</TableColumn>
			<TableColumn>
				<span className="fw-normal">{room?.name}</span>
			</TableColumn>
			<TableColumn>
				<span className="fw-bold">${payed}</span>
			</TableColumn>
			<TableColumn>
				<span className="fw-bold">{adult}</span>
			</TableColumn>
			<TableColumn>
				<span className="fw-bold">{children}</span>
			</TableColumn>
			<TableColumn>
				<span className="fw-bold">{start?.toString().substring(0, 10)}</span>
			</TableColumn>
			<TableColumn>
				<span className="fw-bold">{end?.toString().substring(0, 10)}</span>
			</TableColumn>
			<TableColumn>
				<DropDownBtn name="Actions" buttonClass="btn btn-sm btn-link d-inline-flex align-items-center dropdown-toggle">
					<DropDownItem name="View" icon={<WidgetIcon className="dropdown-icon text-gray-400 me-2" />} />
					<DropDownItem name="Edit" icon={<UserAddIcon className="dropdown-icon text-gray-400 me-2" />} />
					<DropDownItem name="Cancel" icon={<FireIcon className="dropdown-icon text-danger me-2" />} click={() => handleDeleteRoom(id, room?.name)} />
				</DropDownBtn>
			</TableColumn>
		</TableRow>
	);
}

