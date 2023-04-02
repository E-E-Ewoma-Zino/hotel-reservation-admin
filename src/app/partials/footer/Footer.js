// 
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="bg-white rounded shadow p-5 mb-4 mt-4">
			<div className="row">
				<div className="col-12 col-md-4 col-xl-6 mb-4 mb-md-0">
					<p className="mb-0 text-center text-lg-start">
						©
						<span className="current-year">{new Date().getFullYear()} </span>
						<Link className="text-primary fw-normal" href="/" rel="noreferrer" target="_blank">Admin Dashboard</Link>
					</p>
				</div>
				<div className="col-12 col-md-8 col-xl-6 text-center text-lg-start">
					{/* <!-- List --> */}
					<ul className="list-inline list-group-flush list-group-borderless text-md-end mb-0">
						<li className="list-inline-item px-0 px-sm-2">
							<Link to="/dashboard">Dashboard</Link>
						</li>
						<li className="list-inline-item px-0 px-sm-2">
							<Link to="/rooms">Room</Link>
						</li>
						<li className="list-inline-item px-0 px-sm-2">
							<Link to="/reservations">Reservations</Link>
						</li>
						<li className="list-inline-item px-0 px-sm-2">
							<Link to="/tracking">Tracking</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}