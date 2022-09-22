// the body of the table

import { ArrowDownIcon, ArrowUpIcon } from "../../../../../icons/Icons";

export default function TableBody({ bodyContent }) {
	return (
		<tbody>
			{
				bodyContent.map((content, index) => (
					<tr>
						<th className="text-gray-900" scope="row">{content.type}</th>
						<td className="fw-bolder text-gray-500">{content.name}</td>
						<td className="fw-bolder text-gray-500">{content.freqency}</td>
						<td className="fw-bolder text-gray-500">
							<div className="d-flex">
								<ArrowUpIcon className="icon icon-xs text-danger me-2" />
								{/* <ArrowDownIcon className="icon icon-xs text-success me-2" /> */}
								42,55%
							</div>
						</td>
					</tr>
				))
			}
		</tbody>
	)
}