// Component for table

import Pagination from "./components/pagination/Pagination";
// import TableFilter from "./components/tableFilter/TableFilter";

export default function Table({ head, children }) {
	return (
		<>
			{/* <TableFilter /> */}
			<div className="card card-body border-0 shadow table-wrapper table-responsive">
				<table className="table table-hover">
					<thead>
						<tr>
							{head}
						</tr>
					</thead>
					<tbody>
						{children}
					</tbody>
				</table>
				<div
					className="d-none card-footer px-3 border-0 d-flex flex-column flex-lg-row align-items-center justify-content-between">
					<Pagination />
					<div className="fw-normal small mt-4 mt-lg-0">Showing <b>5</b> out of <b>25</b> entries</div>
				</div>
			</div>
		</>
	);
}