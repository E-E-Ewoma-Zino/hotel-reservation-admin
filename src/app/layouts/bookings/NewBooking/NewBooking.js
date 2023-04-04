import moment from "moment";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Link } from "react-router-dom";
import { HomeIcon } from "../../../icons/Icons";
import TextField from '@mui/material/TextField';
import Card from "../../../components/cards/Card";
import { Autocomplete, Grid, Typography } from "@mui/material";
// import getStartDate from "./functions/getStartDate";
import { useEffect, useMemo, useState } from "react";
import Footer from "../../../partials/footer/Footer";
import { allRooms, getReservedDates } from "../../../../api/get";
import Button from "../../../components/buttons/buttons";
import Toolbar from "../../../components/toolbar/Toolbar";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import customDayRenderer from "./functions/customDayRenderer";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import validateReservation from "./functions/validateReservation";

export default function NewBooking() {
	const [reservedDates, setReservedDates] = useState([]);
	const [loading, setLoading] = useState({
		room: true,
		reservedDates: true
	});
	const [allTheUsers, setAllTheUsers] = useState([]);
	const [theUsers, setTheUsers] = useState([]);
	const [allTheRoom, setAllTheRoom] = useState([]);
	const [theRoom, setTheRoom] = useState(null);
	const initBooking = useMemo(() => {
		return {
			start: moment(),
			end: null,
			noOfAdults: '',
			noOfChildren: ''
		}
	}, []);

	const [booking, setBooking] = useState(initBooking);

	function handelRoomChange(value) {
		console.log("event cha ge", value);
		setTheRoom(value);
	}

	function handleDateChange(event, name) {
		if (name === "start" && !booking.end) setBooking(prev => {
			return {
				...prev,
				[name]: event,
				end: event
			}
		});
		else setBooking(prev => {
			if (!validateReservation(reservedDates, {
				...prev,
				[name]: event
			}, (repetedDate) => {
				setBooking({ ...booking, start: null, end: null });
				window.swalWithBootstrapButtons.fire({
					icon: "warning",
					title: "Not Available",
					text: `This room has already been reserved on the ${repetedDate}. 
					Select days that hasn't been reserved in between`,
					showConfirmButton: true
				});
			})) return {
				...prev,
				[name]: event
			};
			else return { ...prev }
		});
	}

	function handleTextChange(event) {
		const { name, value } = event.target;

		setBooking(prev => {
			return {
				...prev,
				[name]: value
			}
		});
	}

	useEffect(() => {
		// async function getAllTheUsers() {
		// 	const aU = await allRooms();
		// }
		async function getAllTheRooms() {
			const aR = await allRooms();
			setAllTheRoom(aR.data.data);
			setLoading(pre => {
				return {
					...pre,
					room: true
				}
			});
		}
		async function getRDates() {
			const resev = await (await getReservedDates(theRoom))?.data;
			setReservedDates(resev?.data);
			setLoading(pre => {
				return {
					...pre,
					reservedDates: true
				}
			});
		}

		getAllTheRooms()
		if (theRoom) getRDates();
		console.log("updated my state...");
	}, [theRoom]);

	return <LocalizationProvider dateAdapter={AdapterMoment}>
		<main className="content">
			<Toolbar />

			<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
				<div className="d-block mb-4 mb-md-0">
					<Breadcrumb />
					<h2 className="h4"><Link to="../"><HomeIcon className="icon icon-xs" /> </Link> New Reservation</h2>
					<p className="mb-0">Perform reservations here.</p>
				</div>
			</div>

			<Card className="card card-body border-0 shadow mb-4">
				<h2 className="h5 mb-4">Room information</h2>
				<form>
					<Grid container spacing={2} my="1em">
						<Grid item xs={12} width="100%">
							<Typography variant="h5" component="h5">
								User and Room
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6} width="100%">
							<Autocomplete
								className="w-100"
								disablePortal
								id="combo-box-demo"
								value={theRoom}
								onChange={(event, newValue) => {
									handelRoomChange(newValue);
								}}
								inputValue={theRoom}
								onInputChange={(event, newInputValue) => {
									handelRoomChange(newInputValue);
								}}
								options={allTheRoom.map(r => {
									return {
										id: r._id,
										label: r.name
									}
								})}
								// getOptionLabel={(option) => option.label}
								sx={{ width: 300 }}
								renderInput={(params) => <TextField {...params} label="Rooms" />}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Autocomplete
								className="w-100"
								disablePortal
								id="combo-box-demo"
								value={theRoom?.name}
								onChange={(e, value) => handelRoomChange(value)}
								options={allTheRoom.map(r => {
									return {
										id: r._id,
										label: r.name
									}
								})}
								sx={{ width: 300 }}
								renderInput={(params) => <TextField {...params} label="Rooms" />}
							/>
						</Grid>

						<Grid item xs={12} width="100%">
							<Typography variant="h5" component="h5">
								Check in and Check out
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6} width="100%">
							<DatePicker
								label="Check In"
								className="w-100"
								disablePast={true}
								value={booking.start}
								renderDay={(date, selectedDay, pickerDayProp) => customDayRenderer(date, selectedDay, pickerDayProp, reservedDates)}
								onChange={e => handleDateChange(e, "start")}
								renderInput={(params) => <TextField {...params} />}
								disabled={loading.reservedDates}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<DatePicker
								className="w-100"
								minDate={moment(booking.start).add(1, "day")}
								label="Check Out"
								value={booking.end}
								renderDay={(date, selectedDay, pickerDayProp) => customDayRenderer(date, selectedDay, pickerDayProp, reservedDates)}
								onChange={e => handleDateChange(e, "end")}
								renderInput={(params) => <TextField {...params} />}
								disabled={loading.reservedDates}
							/>
						</Grid>

						<Grid item xs={12} width="100%">
							<Typography variant="h5" component="h5">
								Details
							</Typography>
						</Grid>

						<Grid item xs={12} sm={6} width="100%" maxWidth="100%">
							<TextField id="outlined-basic" className="w-100" label="Adult" type="number" variant="outlined" name="noOfAdults" onChange={handleTextChange} value={booking.noOfAdults || ''} disabled={loading.reservedDates} required={true} />
						</Grid>
						<Grid item xs={12} sm={6} width="100%" maxWidth="100%">
							<TextField id="outlined-basic" className="w-100" label="Children" type="number" variant="outlined" name="noOfChildren" onChange={handleTextChange} value={booking.noOfChildren || ''} disabled={loading.reservedDates} />
						</Grid>
					</Grid>


					<div className="mt-3">
						<Button className="btn btn-gray-800 mt-2 animate-up-2" name="Add" type="submit" click={{}} />
					</div>
				</form>
			</Card>

			<Footer />
		</main>
	</LocalizationProvider>
}