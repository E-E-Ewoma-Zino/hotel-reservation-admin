// sales chart
import { useEffect, useState } from "react";
import trackingFunction from "../../functions/tracking";
import drawBarChat from "./functions/BarChat";

export default function SalesChat() {
	const [salesValue, setSalesValue] = useState(0);
	const [frequency, setFrequency] = useState("weekly");

	useEffect(() => {
		async function getTrackedDetails() {
			const tt = await trackingFunction();

			setSalesValue(tt?.reduce((total, current)=> {
				return total + current.frequency[frequency].saleValue
			}, 0));

			drawBarChat(tt, frequency);
		}

		getTrackedDetails();
	}, [frequency]);

	function changeFrequency (e, value){
		setFrequency(value)
		const all = e.currentTarget.parentElement.children;

		for (let index = 0; index < all.length; index++) {
			const ele = all[index];
			
			ele.classList.remove("btn-secondary");
		}
		e.currentTarget.classList.add("btn-secondary");
	}

	return (
		<div className="card bg-yellow-100 border-0 shadow">
			<div className="card-header d-sm-flex flex-row align-items-center flex-0">
				<div className="d-block mb-3 mb-sm-0">
					<div className="fs-5 fw-normal mb-2" style={{textTransform: "capitalize"}}>{frequency} Sales Value</div>
					<h2 className="fs-3 fw-extrabold">${salesValue}</h2>
					<div className="small mt-2">
						<span className="fw-normal me-2">Yesterday</span>
						<span className="fas fa-angle-up text-success"></span>
						<span className="text-success fw-bold">10.57%</span>
					</div>
				</div>
				<div className="d-flex ms-auto">
					<a href="#x" className="btn btn-secondary btn-sm me-3" onClick={(e)=> changeFrequency(e, "weekly")}>Week</a>
					<a href="#x" className="btn text-dark btn-sm me-2" onClick={(e)=> changeFrequency(e, "monthly")}>Month</a>
					{/* <a href="#x" className="btn text-dark btn-sm me-2" onClick={(e)=> changeFrequency(e, "custom")}>Custom</a> */}
				</div>
			</div>
			<div className="card-body p-2">
				<div id="barChat" className="ct-chart-sales-value ct-double-octave ct-series-g"></div>
			</div>
		</div>
	);
}