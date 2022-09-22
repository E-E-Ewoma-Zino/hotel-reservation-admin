// Filter for the table

import { SearchIcon, SettingsIcon, CheckIcon } from "../../../../../icons/Icons";
import DropDownItem from "../../../dropDownBtn/components/DropDownItems";
import DropDownBtn from "../../../dropDownBtn/DropDownBtn";

export default function TableFilter() {
	return (
		<div className="table-settings mb-4">
			<div className="row align-items-center justify-content-between">
				<div className="col col-md-6 col-lg-3 col-xl-4">
					<div className="input-group me-2 me-lg-3 fmxw-400">
						<span className="input-group-text">
							<SearchIcon className="icon icon-xs" />
						</span>
						<input type="text" className="form-control" placeholder="Search orders" />
					</div>
				</div>
				<div className="col-4 col-md-2 col-xl-1 ps-md-0 text-end">
					<DropDownBtn name={<SettingsIcon className="icon icon-sm" />} buttonClass="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-1" dropDownClass="dropdown-menu dropdown-menu-xs dropdown-menu-end pb-0">
						<span className="small ps-3 fw-bold text-dark">Show</span>
						<div role="separator" className="dropdown-divider my-1"></div>
						<DropDownItem className="dropdown-item d-flex flex-row-reverse align-items-center fw-bold" name="10" icon={<CheckIcon className="icon icon-xxs ms-auto" />} />
						<DropDownItem name="20" />
						<DropDownItem name="30" />
						<DropDownItem name="40" />
						<DropDownItem name="Upgrade to Pro" />
					</DropDownBtn>
				</div>
			</div>
		</div>
	);
}