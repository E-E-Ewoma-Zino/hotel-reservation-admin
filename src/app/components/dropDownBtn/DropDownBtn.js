// This component is a button which allows a list of options to be Added

import Button from "../buttons/buttons";

export default function DropDownBtn({ name, buttonClass, dropDownMenuClass, dropdownclass, icon, children }) {
	const menuclass = dropDownMenuClass || "dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1";
	return (
		<div className={"dropdown " + dropdownclass}>
			<Button name={name} icon={icon} className={"dropdown-toggle " + buttonClass} toggle="dropdown" ariaExpanded={false} hasPopUp={true} />

			<div className={menuclass}>
				{children}
			</div>
		</div>
	);
}