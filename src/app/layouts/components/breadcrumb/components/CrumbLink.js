// Breadcrumb link
import { Link } from "react-router-dom";

import { HomeIcon } from "../../../../icons/Icons";

export default function CrumbLink({ name = "", icon, link }) {
	const pathname = window.location.pathname;
	return <li className={name.toLowerCase() === pathname ? "breadcrumb-item text-capitalize active" : "breadcrumb-item text-capitalize"} aria-current={name.toLowerCase() === pathname && "page"}><Link to={link}>{icon} {name || <HomeIcon className="icon icon-xxs" />}</Link></li>;
}