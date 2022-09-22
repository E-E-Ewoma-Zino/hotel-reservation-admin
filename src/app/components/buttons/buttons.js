// All buttons

export default function Button({ name, type, icon, className, toggle, hasPopUp, ariaExpanded, click }) {
	return (
		<button className={"btn d-inline-flex align-items-center " + className} type={type || "button"} data-bs-toggle={toggle} aria-haspopup={hasPopUp} aria-expanded={ariaExpanded} onClick={click}>{icon} {name}</button>
	);
}