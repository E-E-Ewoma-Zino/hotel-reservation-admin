import moment from "moment";
import Row from "../../components/row/Row";
import Col from "../../components/col/Col";
import { useEffect, useState } from "react";
import Footer from "../../partials/footer/Footer";
import ToolBar from "../../components/toolbar/Toolbar";
import trackingFunction from "../../functions/tracking";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Table from "../../components/Tables/Table1/Table";
import TableRow from "../../components/Tables/Table1/components/tableRow/TableRow";
import TableHead from "../../components/Tables/Table1/components/tableHead/TableHead";
import TableColumn from "../../components/Tables/Table1/components/tableColumn/TableColumn";
import { useLocation } from "react-router-dom";
import TableTitle from "../../components/Tables/Table2/components/TableTitle";
import SalesChat from "../../components/chats/SalesChat";

export default function TrackingPage() {
	const [isLoading, setIsLoading] = useState(true);
	const location = useLocation();
	const [trackDetails, setTrackDetails] = useState([]);
	let property = location.search.substring(location.search.search("=") + 1);
	const [trackedValue, setTrackedValue] = useState(["175,00", "10,800", "19,00"]);
	property = property === '' ? "type" : property;

	useEffect(() => {
		async function getTrackedDetails() {
			const tt = await trackingFunction(location.search);
			const ss = tt.map(v => v.room.reduce((total, current) => total + current.paied, 0));

			console.log("here", tt);
			console.log("here", ss);
			setTrackedValue(ss);
			setTrackDetails(tt.map(v => {
				return {
					[property]: v[property],
					[property === "name" && "type"]: v[property === "name" && "type"],
					weeklySales: v.frequency.weekly.saleValue,
					monthlySales: v.frequency.monthly.saleValue,
					lastPaied: v.room[v.room.length - 1].createdAt,
					inc: v.inc
				}
			}));
			setIsLoading(false);
		}

		getTrackedDetails();
	}, [trackedValue.length, location.search, property]);

	return (
		<main className="content">
			<ToolBar />
			<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
				<div className="d-block mb-4 mb-md-0">
					<Breadcrumb />
					<h2 className="h4">Payment Tracking</h2>
					<p className="mb-0">See all activities here.</p>
				</div>
			</div>

			<Row>
				<Col size="col-12 mb-4">
					<SalesChat />
				</Col>
				<Col>
					<TableTitle topic={"Track payment by " + property} link={{ to: location.search === "?property=type" ? "?property=name" : "?property=type", text: property === "name" ? "By Type" : "By Name" }} />
					<Table head={[
						<TableHead title="#" key={0} />,
						<TableHead title={"Room " + property} key={1} />,
						property === "name" && <TableHead title={"Type"} key={8} />,
						<TableHead title="Weekly Income" key={2} />,
						<TableHead title="Monthly Income" key={3} />,
						<TableHead title="Income Generated" key={4} />,
						<TableHead title="Last paied" key={5} />,
						<TableHead title="Total Reserve" key={6} />,
						// <TableHead title="Action" key={7} />
					]}>
						{
							isLoading ? <tr><td>Loading...</td></tr> :
								trackDetails.map((d, index) =>
									<TableRow key={index}>
										<TableColumn className="text-center">
											<span className="fw-normal">{index + 1}</span>
										</TableColumn>
										<TableColumn className="text-center">
											<span className="fw-normal">{d[property]}</span>
										</TableColumn>
										{
											property === "name" &&
											<TableColumn className="text-center">
												<span className="fw-normal">{d.type}</span>
											</TableColumn>
										}
										<TableColumn className="text-center">
											<span className="fw-normal">NGN {d.weeklySales}</span>
										</TableColumn>
										<TableColumn className="text-center">
											<span className="fw-normal">NGN {d.monthlySales}</span>
										</TableColumn>
										<TableColumn className="text-center">
											<span className="fw-normal">NGN {trackedValue[index]}</span>
										</TableColumn>
										<TableColumn className="text-center">
											<span className="fw-normal">{moment(d.lastPaied).startOf("day").fromNow()}</span>
										</TableColumn>
										<TableColumn className="text-center">
											<span className="fw-normal">{d.inc}</span>
										</TableColumn>
										{/* <TableColumn>
											<Link className="btn btn-primary" to="/tracking/details">View More</Link>
										</TableColumn> */}
									</TableRow>
								)
						}
					</Table>
				</Col>
			</Row>
			<Footer />
		</main>
	);
}