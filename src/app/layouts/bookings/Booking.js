// all bookings
import { useState, useEffect } from "react";
import Footer from "../../partials/footer/Footer";
import DropDownBtn from "../components/dropDownBtn/DropDownBtn";
import DropDownItem from "../components/dropDownBtn/components/DropDownItems";
import Toolbar from "../components/toolbar/Toolbar";
import { FireIcon, PlusIcon, SheldIcon, UploadCloudIcon, UserAddIcon, WidgetIcon } from "../../icons/Icons";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Table from "../components/table/Table";
import TableHead from "../components/table/components/tableHead/TableHead";
import { allPopulatedBookings } from "../../../api/get";
import BookingList from "./components/BookingList";

export default function Bookings() {
	const [isLoading, setIsLoading] = useState(true);
	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		async function getBookings() {
			const bookingArr = await (await allPopulatedBookings()).data;

			setBookings(bookingArr.data);

			setIsLoading(false);
		}

		getBookings();
	}, []);

	return (
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
							<DropDownItem name="New Booking" link="/bookings/add" icon={<UserAddIcon className="dropdown-icon text-gray-400 me-2" />} />
							<DropDownItem name="Add Widget" icon={<WidgetIcon className="dropdown-icon text-gray-400 me-2" />} />
							<DropDownItem name="Upload Files" icon={<UploadCloudIcon className="dropdown-icon text-gray-400 me-2" />} />
							<DropDownItem name="Preview Security" icon={<SheldIcon className="dropdown-icon text-gray-400 me-2" />} />
							<div role="separator" className="dropdown-divider my-1"></div>
							<DropDownItem name="Upgrade to Pro" icon={<FireIcon className="dropdown-icon text-danger me-2" />} />
						</DropDownBtn>
					</div>
					<div className="btn-group ms-2 ms-lg-3">
						<button type="button" className="btn btn-sm btn-outline-gray-600">Share</button>
						<button type="button" className="btn btn-sm btn-outline-gray-600">Export</button>
					</div>
				</div>
			</div>

			<Table head={[
				<TableHead title="#" key={0} />,
				<TableHead title="User" key={1} />,
				<TableHead title="Room" key={2} />,
				<TableHead title="Payed" key={3} />,
				<TableHead title="Adult" key={4} />,
				<TableHead title="Children" key={5} />,
				<TableHead title="Start" key={6} />,
				<TableHead title="End" key={7} />,
				<TableHead title="Actions" key={8} />
			]}>
				{
					isLoading ? <tr><td>Loading...</td></tr> :
						bookings.map(book => <BookingList key={book._id} id={book._id} user={book.user} room={book.room} payed={book.payed} adult={book.noOfAdults} children={book.noOfChildren} start={book.start} end={book.end} />)
				}
			</Table>
			<Footer />
		</main>
	);
}