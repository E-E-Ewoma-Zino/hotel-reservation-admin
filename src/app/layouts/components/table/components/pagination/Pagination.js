// pagination

export default function Pagination() {
	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination mb-0">
				<li className="page-item">
					<a className="page-link" href="#x">Previous</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="#x">1</a>
				</li>
				<li className="page-item active">
					<a className="page-link" href="#x">2</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="#x">3</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="#x">4</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="#x">5</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="#x">Next</a>
				</li>
			</ul>
		</nav>
	);
}