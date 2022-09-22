// create new rooms
import { useState } from "react";
import Footer from "../../../partials/footer/Footer";
import Toolbar from "../../components/toolbar/Toolbar";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Row from "../../../components/row/Row";
import Col from "../../../components/col/Col";
import Input from "../../../components/forms/Input.";
import TextArea from "../../../components/forms/TextArea";
import Button from "../../../components/buttons/buttons";
import Card from "../../../components/cards/Card";
import { HomeIcon } from "../../../icons/Icons";
import { Link } from "react-router-dom";
import handleChange from "./functions/handleChange";
import handleMediaChange from "./functions/handleMediaChange";
import handleFormSubmit from "./functions/handleSubmit";

export default function AddRoom() {
	const [room, setRoom] = useState({
		name: '',
		price: '',
		type: '',
		features: '',
		description: '',
		images: '',
		videos: ''
	});

	return (
		<main className="content">
			<Toolbar />

			<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
				<div className="d-block mb-4 mb-md-0">
					<Breadcrumb />
					<h2 className="h4"><Link to="../"><HomeIcon className="icon icon-xs" /> </Link> Add Rooms</h2>
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
									<Input name="Name" type="text" placeholder={room.name !== '' ? room.name : "Standard 01"} value={room.name} change={event => handleChange(event, setRoom)} />
								</Col>
								<Col size="col-sm-4" className="mb-3">
									<Input name="Price" type="number" placeholder={room.price !== '' ? room.price : "2500"} value={room.price} change={event => handleChange(event, setRoom)} />
								</Col>
								<Col size="col-sm-4" className="mb-3">
									<Input name="Type" type="text" placeholder={room.type !== '' ? room.type : "Standard"} value={room.type} change={event => handleChange(event, setRoom)} />
								</Col>
							</Row>

							<h2 className="h5 my-2">Details</h2>

							<Row>
								<Col size="col-sm-6" className="mb-3">
									<Input name="Features" type="text" placeholder={room.features !== '' ? room.features : "Eg: TV,Air Conditional,Shampoo"} value={room.features} change={event => handleChange(event, setRoom)} />
									<small className="font-monospace">Separate words using commers</small>
								</Col>
								<Col size="col-sm-6" className="mb-3">
									<TextArea name="Description" placeholder={room.description !== '' ? room.description : "Describe the room"} change={event => handleChange(event, setRoom)} value={room.description}></TextArea>
								</Col>
							</Row>

							<h2 className="h5 my-2">Media</h2>

							<Row>
								<Col size="col-sm-6" className="mb-3">
									<Input name="Images" type="file" multiple="multiple" accept="image/*" change={event => handleMediaChange(event, setRoom)} />
								</Col>
								<Col size="col-sm-6" className="mb-3">
									<Input name="Videos" type="file" multiple="multiple" accept="video/*" change={event => handleMediaChange(event, setRoom)} />
								</Col>
							</Row>

							<div className="mt-3">
								<Button className="btn btn-gray-800 mt-2 animate-up-2" name="Add" type="submit" click={(event) => handleFormSubmit(event, room, setRoom)} />
							</div>
						</form>
					</Card>
				</Col>
			</Row>

			<Footer />
		</main>
	);
}