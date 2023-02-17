// table for dashboard
import TableHead from "./components/TableHead";
import TableTitle from "./components/TableTitle";

export default function Table({ title, link, head,  children }) {	
	return (
		<div className="card border-0 shadow">
			<TableTitle topic={title} link={link}/>

			<div className="table-responsive">
				<table className="table align-items-center table-flush">
					<TableHead head={head} />
					{children}
				</table>
			</div>
		</div>
	);
}