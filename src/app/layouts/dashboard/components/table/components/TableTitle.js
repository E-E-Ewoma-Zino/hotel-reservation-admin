// title section for the table card

export default function TableTitle({ topic }) {
	return (
		<div className="card-header">
			<div className="row align-items-center">
				<div className="col">
					<h2 className="fs-5 fw-bold mb-0">{topic}</h2>
				</div>
				<div className="col text-end">
					<a href="#x" className="btn btn-sm btn-primary">See all</a>
				</div>
			</div>
		</div>
	)
}