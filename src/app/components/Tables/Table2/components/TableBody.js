// the body of the table

import moment from "moment/moment";
import { FireIcon, UserAddIcon, WidgetIcon } from "../../../../icons/Icons";
import DropDownItem from "../../../dropDownBtn/components/DropDownItems";
import DropDownBtn from "../../../dropDownBtn/DropDownBtn";

export default function TableBody({ bodyContent = {} }) {
	return (
		<tbody>
			{
				<tr>
					<th className="text-gray-900" scope="row">{bodyContent.user?.firstname}</th>
					<td className="fw-bolder text-gray-500">{bodyContent.room?.type}</td>
					<td className="fw-bolder text-gray-500">{moment(bodyContent.start).startOf('day').fromNow()}</td>
					<td className="fw-bolder text-gray-500">{moment(bodyContent.end).format('LL')}</td>
					<td className="fw-bolder text-gray-500">{moment(bodyContent.createdAt).startOf('seconds').fromNow()}</td>
					<td className="fw-bolder text-gray-500">
						<DropDownBtn name="Actions" buttonClass="btn btn-sm btn-primary text-light d-inline-flex align-items-center dropdown-toggle">
							<DropDownItem name="View" link={`/bookings#${bodyContent._id}?id=${bodyContent._id}`} icon={<WidgetIcon className="dropdown-icon text-gray-400 me-2" />} />
							<DropDownItem name="Edit" link={""} icon={<UserAddIcon className="dropdown-icon text-gray-400 me-2" />} />
							<DropDownItem name="Cancel" icon={<FireIcon className="dropdown-icon text-danger me-2" click="" />} />
						</DropDownBtn>
					</td>
				</tr>
			}
		</tbody>
	)
}