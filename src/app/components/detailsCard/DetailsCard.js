// A card that contains details of the dashboard
import { AngleUpIcon, GlobeIcon } from "../../../../icons/Icons";

export default function DetailsCard({ name, amount, type = "primary",  icon, timePeriod, previousTime }) {
	let icon_shape = `icon-shape icon-shape-${type} rounded me-4 me-sm-0`
	return (
		<div className="card border-0 shadow">
			<div className="card-body">
				<div className="row d-block d-xl-flex align-items-center">
					<div
						className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
						<div className={icon_shape}>
							{icon || null}
						</div>
						<div className="d-sm-none">
							<h2 className="h5">{name}</h2>
							<h3 className="fw-extrabold mb-1">{amount}</h3>
						</div>
					</div>
					<div className="col-12 col-xl-7 px-xl-0">
						<div className="d-none d-sm-block">
							<h2 className="h6 text-gray-400 mb-0">{name}</h2>
							<h3 className="fw-extrabold mb-2">{amount.split(/[,]|[.]/)[0]}k</h3>
						</div>
						<small className="d-flex align-items-center text-gray-500">
							{timePeriod},
							<GlobeIcon className="icon icon-xxs text-gray-500 ms-2 me-1" />
							USA
						</small>
						<div className="small d-flex mt-1">
							<div>
								{previousTime.text}
								<AngleUpIcon className="icon icon-xs text-success" />
								<span className="text-success fw-bolder">{previousTime.amount}%</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}