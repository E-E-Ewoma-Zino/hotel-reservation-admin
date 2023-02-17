// title section for the table card

import { Link } from "react-router-dom";

export default function TableTitle({ topic, link }) {
	return (
		<div className="card-header">
			<div className="row align-items-center">
				<div className="col">
					<h2 className="fs-5 fw-bold mb-0">{topic}</h2>
				</div>
				<div className="col text-end">
					<Link to={link.to} className="btn btn-sm btn-primary">{link.text}</Link>
				</div>
			</div>
		</div>
	)
}