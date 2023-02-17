import moment from "moment";
import Row from "../../../components/row/Row";
import Col from "../../../components/col/Col";
import { useEffect, useState } from "react";
import Footer from "../../../partials/footer/Footer";
import ToolBar from "../../../components/toolbar/Toolbar";
import trackingFunction from "../../../functions/tracking";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { TransactionsIcon } from "../../../icons/Icons";
import Table from "../../../components/Tables/Table1/Table";
import TableRow from "../../../components/Tables/Table1/components/tableRow/TableRow";
import TableHead from "../../../components/Tables/Table1/components/tableHead/TableHead";
import TableColumn from "../../../components/Tables/Table1/components/tableColumn/TableColumn";

export default function TrackingDetails() {
	const [isLoading, setIsLoading] = useState(true);
	const [trackDetails, setTrackDetails] = useState([]);
	const [trackedValue, setTrackedValue] = useState(["175,00", "10,800", "19,00"]);


	useEffect(() => {
		async function getTrackedDetails() {
			const tt = await trackingFunction();
			const ss = tt.map(v => v.room.reduce((total, current) => total + current.paied, 0));

			setTrackedValue(ss);
			setTrackDetails(tt.map(v => { return {
				type: v.type,
				weeklySales: v.frequency.weekly.saleValue,
				monthlySales: v.frequency.monthly.saleValue,
				lastPaied: v.room[v.room.length - 1].createdAt,
				inc: v.inc 
			}}));
			setIsLoading(false);
		}

		getTrackedDetails();
	}, [trackedValue.length]);

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
				<Col>
				<Table head={[
					<TableHead title="#" key={0} />,
					<TableHead title="Room Type" key={1} />,
					<TableHead title="Weekly Income" key={2} />,
					<TableHead title="Monthly Income" key={3} />,
					<TableHead title="Total Income Generated" key={4} />,
					<TableHead title="Last paied" key={5} />,
					<TableHead title="Total Reserve" key={6} />
				]}>
					{
						isLoading ? <tr><td>Loading...</td></tr> :
							trackDetails.map((d, index) =>
								<TableRow>
									<TableColumn>
										<div className="icon-shape icon-shape-info rounded me-4 me-sm-0">
											<TransactionsIcon />
										</div>
									</TableColumn>
									<TableColumn>
										<span className="fw-normal">{d.type}</span>
									</TableColumn>
									<TableColumn>
										<span className="fw-normal">NGN {d.weeklySales}</span>
									</TableColumn>
									<TableColumn>
										<span className="fw-normal">NGN {d.monthlySales}</span>
									</TableColumn>
									<TableColumn>
										<span className="fw-normal">NGN {trackedValue[index]}</span>
									</TableColumn>
									<TableColumn>
										<span className="fw-normal">{moment(d.lastPaied).startOf("day").fromNow()}</span>
									</TableColumn>
									<TableColumn>
										<span className="fw-normal">{d.inc}</span>
									</TableColumn>
								</TableRow>
							)}
				</Table>
					</Col>
			</Row>
			<Footer />
		</main>
	);
}