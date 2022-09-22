// Side nav buttons
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowDownIcon } from "../../../icons/Icons";

export default function SideLink({ name, link = "#x", icon, dropdown, list }) {
	const location = useLocation();
	const [pathname, setPathname] = useState(link);

	useEffect(()=> {
		setPathname(location.pathname);
	}, [location.pathname]);

	return (
		<li className={link === pathname ? "nav-item active" : "nav-item"}>
			<Link to={link} className="nav-link collapsed d-flex justify-content-between align-items-center"
				data-bs-toggle={dropdown && "collapse"} data-bs-target={"#submenu-" + name.replace(/ /g, '')} >
				<span>
					{icon && (<span className="sidebar-icon">{icon}</span>)}
					<span className="sidebar-text">{name}</span>
				</span>
				{
					dropdown && (
						<span className="link-arrow">
							<ArrowDownIcon className="icon icon-sm" />
						</span>
					)
				}
			</Link>
			{
				dropdown && (
					<div className={link === pathname ? "multi-level collapse show" : "multi-level collapse"} role="list" id={"submenu-" + name.replace(/ /g, '')}>
						<ul className="flex-column nav">
							{list}
						</ul>
					</div>
				)
			}
		</li>
	);
}