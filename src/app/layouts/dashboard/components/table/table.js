// table for dashboard
import TableBody from "./components/TableBody";
import TableHead from "./components/TableHead";
import TableTitle from "./components/TableTitle";

export default function Table() {
	return (
		<div className="card border-0 shadow">
			<TableTitle topic="Most booked room" />

			<div className="table-responsive">
				<table className="table align-items-center table-flush">
					<TableHead head={["Room type", "Book freq", "Bounce rate"]} />
					<TableBody />
				</table>
			</div>
		</div>
	);
}