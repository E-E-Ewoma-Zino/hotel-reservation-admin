import Navbar from "./partials/navbar/Navbar";
import SideBar from "./partials/sidebar/SideBar";
import TrackingDetails from "./layouts/tracking/trackingDetails/TrackingDetails";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./layouts/dashboard/dashboard";
import Bookings from "./layouts/bookings/Booking";
import EditRoom from "./layouts/rooms/editRoom/editRoom";
import AllRooms from "./layouts/rooms/allRoom/AllRooms";
import AddRoom from "./layouts/rooms/addRoom/AddRoom";
import TrackingPage from "./layouts/tracking/tracking";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<SideBar />
			<Routes>
				<Route index element={<Navigate to="/dashboard" />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/rooms">
					<Route index element={<AllRooms />} />
					<Route path="add" element={<AddRoom />} />
					<Route path="edit" element={<EditRoom />} />
				</Route>
				<Route path="/reservations">
					<Route index element={<Bookings />} />
					<Route path="add" element={<Bookings />} />
				</Route>
				<Route path="/tracking">
					<Route index element={<TrackingPage />}/>
					<Route path="details" element={<TrackingDetails />}/>
				</Route>
				<Route path="*" element={<h1>404 No page here</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
