// the body of the table

import moment from "moment/moment";
import { ArrowUpIcon } from "../../../../../icons/Icons";

export default function TableBody({ bodyContent = {} }) {
	return (
		<tbody>
			{console.log("ok", bodyContent)}
			{
				<tr>
					<th className="text-gray-900" scope="row">{bodyContent.user?.firstname}</th>
					<td className="fw-bolder text-gray-500">{bodyContent.room?.type}</td>
					<td className="fw-bolder text-gray-500">{moment(bodyContent.start).format('LL')}</td>
					<td className="fw-bolder text-gray-500">{moment(bodyContent.end).format('LL')}</td>
					<td className="fw-bolder text-gray-500">{moment(bodyContent.createdAt).startOf('seconds').fromNow()}</td>
					<td className="fw-bolder text-gray-500">
						<div className="d-flex">
							<ArrowUpIcon className="icon icon-xs text-danger me-2" />
							{/* <ArrowDownIcon className="icon icon-xs text-success me-2" /> */}
							42,55%
						</div>
					</td>
				</tr>
			}
		</tbody>
	)
}