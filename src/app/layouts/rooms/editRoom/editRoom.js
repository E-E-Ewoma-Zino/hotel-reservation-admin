// create new rooms
import { useState, useEffect } from "react";
import Footer from "../../../partials/footer/Footer";
import Toolbar from "../../components/toolbar/Toolbar";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Row from "../../../components/row/Row";
import Col from "../../../components/col/Col";
import Input from "../../../components/forms/Input.";
import TextArea from "../../../components/forms/TextArea";
import Button from "../../../components/buttons/buttons";
import Card from "../../../components/cards/Card";
import { FireIcon, HomeIcon, WidgetIcon } from "../../../icons/Icons";
import { Link, useLocation } from "react-router-dom";
import { roomById } from "../../../../api/get";
import handleChange from "./functions/handleChange";
import handleMediaChange from "./functions/handleMediaChange";
import handleFormSubmit from "./functions/handleSubmit";
import host from "../../../../constants/host";
import DropDownBtn from "../../components/dropDownBtn/DropDownBtn";
import DropDownItem from "../../components/dropDownBtn/components/DropDownItems";
import handleDeleteMedia from "./functions/handleDeleteMedia";

export default function EditRoom() {
	const [updateCount, setUpdateCount] = useState(0);
	const location = useLocation();
	const roomId = location.search.slice(location.search.indexOf("id") + 3, location.search.length);

	const [room, setRoom] = useState({
		name: '',
		price: '',
		type: '',
		features: '',
		description: '',
		images: '',
		videos: ''
	});

	// Prepare all rooms
	useEffect(() => {
		async function getRoomById() {
			// get the rooms
			const response = await roomById(roomId);

			// set the rooms
			setRoom(response.data.data);
		}
		getRoomById()
	}, [roomId, updateCount]);

	return (
		<main className="content">
			<Toolbar />

			<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
				<div className="d-block mb-4 mb-md-0">
					<Breadcrumb />
					<h2 className="h4"><Link to="../"><HomeIcon className="icon icon-xs" /> </Link> Edit Rooms</h2>
					<p className="mb-0">Perform rooms modfications here.</p>
				</div>
			</div>

			<Row>
				<Col size="col-12">
					<Card className="card card-body border-0 shadow mb-4">
						<h2 className="h5 mb-4">Room information</h2>
						<form>
							<Row>
								<Col size="col-sm-4" className="mb-3">
									<Input name="Name" type="text" placeholder={room.name !== '' ? room.name : "Standard 01"} value={room.name} change={(event) => handleChange(event, setRoom)} />
								</Col>
								<Col size="col-sm-4" className="mb-3">
									<Input name="Price" type="number" placeholder={room.price !== '' ? room.price : "2500"} value={room.price} change={(event) => handleChange(event, setRoom)} />
								</Col>
								<Col size="col-sm-4" className="mb-3">
									<Input name="Type" type="text" placeholder={room.type !== '' ? room.type : "Standard"} value={room.type} change={(event) => handleChange(event, setRoom)} />
								</Col>
							</Row>

							<h2 className="h5 my-2">Details</h2>

							<Row>
								<Col size="col-sm-6" className="mb-3">
									<Input name="Features" type="text" placeholder={room.features !== '' ? room.features : "Eg: TV,Air Conditional,Shampoo"} value={room.features} change={(event) => handleChange(event, setRoom)} />
									<small className="font-monospace">Separate words using commers</small>
								</Col>
								<Col size="col-sm-6" className="mb-3">
									<TextArea name="Description" placeholder={room.description !== '' ? room.description : "Describe the room"} change={(event) => handleChange(event, setRoom)} value={room.description}></TextArea>
								</Col>
							</Row>

							<h2 className="h5 my-2">Media</h2>

							<Row>
								<Col size="col-sm-6" className="mb-3">
									<Input name="Images" type="file" multiple="multiple" accept="image/*" change={(event) => handleMediaChange(event, setRoom)} />
								</Col>
								<Col size="col-sm-6" className="mb-3">
									<Input name="Videos" type="file" multiple="multiple" accept="video/*" change={(event) => handleMediaChange(event, setRoom)} />
								</Col>
							</Row>

							<div className="mt-3">
								<Button className="btn btn-gray-800 mt-2 animate-up-2" name="Save" type="submit" click={(event) => handleFormSubmit(event, room, roomId, setUpdateCount)} />
							</div>
						</form>
					</Card>
				</Col>
				<Col size="col-12">
					<Card className="card card-body border-0 shadow mb-4">
						{Array.isArray(room.images) && room.images.length? <h2 className="h5 mb-4">Room Images</h2>: <></>}
						<Row>
							{
								Array.isArray(room.images) && room.images.map((img, index) => (
									<Col key={index} size="col-sm-4" className="mb-3">
										<div className="position-relative hover-over">
											<img className="img-fluid" src={host + img.path} alt={room.name} width="100%" />
											<DropDownBtn name="Actions" buttonClass="btn btn-sm btn-danger d-inline-flex align-items-center dropdown-toggle" dropdownclass="hide hover-show position-absolute top-0 left-0 transform-12-27">
												<DropDownItem name="View" className="disabled" icon={<WidgetIcon className="dropdown-icon text-gray-400 me-2" />} />
												<DropDownItem name="Delete" icon={<FireIcon className="dropdown-icon text-danger me-2" />} click={() => handleDeleteMedia(roomId, img.path, "images", setUpdateCount)} />
											</DropDownBtn>
										</div>
									</Col>
								))
							}
						</Row>
						{ Array.isArray(room.videos) && room.videos.length? <h2 className="h5 mb-4">Room Video</h2>: <></>}
						<Row>
							{
								Array.isArray(room.videos) && room.videos.map((vid, index) => (
									<Col key={index} size="col-sm-4" className="mb-3">
										<div className="position-relative hover-over">
											<video className="img-fluid" controls width="100%">
												<source src={host + vid.path} type="video/mp4" />
												<span>video not supported</span>
											</video>
											<DropDownBtn name="Actions" buttonClass="btn-sm btn-danger" dropdownclass="hide hover-show position-absolute top-0 left-0 transform-12-27">
												<DropDownItem name="View" className="disabled" icon={<WidgetIcon className="dropdown-icon text-gray-400 me-2" />} />
												<DropDownItem name="Delete" icon={<FireIcon className="dropdown-icon text-danger me-2" />} click={() => handleDeleteMedia(roomId, vid.path, "videos", setUpdateCount)} />
											</DropDownBtn>
										</div>
									</Col>
								))
							}
						</Row>
					</Card>
				</Col>
			</Row>
			<Footer />
		</main>
	);
}