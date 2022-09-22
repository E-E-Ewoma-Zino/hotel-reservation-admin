// Side bar

import { ComponentsIcon, DashboardIcon, PageExamplesIcon, SettingsIcon, TablesIcon, TransactionsIcon } from "../../icons/Icons";
import SideLink from "./components/sideLink";

export default function SideBar() {
	return (
		<nav id="sidebarMenu" className="sidebar d-lg-block bg-gray-800 text-white collapse" data-simplebar>
			<div className="sidebar-inner px-4 pt-3">
				<ul className="nav flex-column pt-3 pt-md-0">
					<li className="nav-item">
						<a href="../../index.html" className="nav-link d-flex align-items-center">
							<span className="sidebar-icon">
								<img src="../../assets/img/brand/light.svg" height="20" width="20" alt="Volt Logo" />
							</span>
							<span className="mt-1 ms-1 sidebar-text">Volt Overview</span>
						</a>
					</li>

					<SideLink name="Dashboard" link="/dashboard" icon={<DashboardIcon className="icon icon-xs me-2" />} />

					<SideLink name="Rooms" link="/rooms" icon={<SettingsIcon className="icon icon-xs me-2" />} />

					<SideLink name="Bookings" link="/bookings" icon={<TransactionsIcon className="icon icon-xs me-2" />} />

					<SideLink name="Settings" link="/settings" icon={<SettingsIcon className="icon icon-xs me-2" />} />

					<SideLink name="Tables" icon={<TablesIcon className="icon icon-xs me-2"  />} dropdown={true} list={(
						<SideLink name="Bootstrap Tables" link="/me" />
					)} />
					
					<SideLink name="Page examples" icon={<PageExamplesIcon className="icon icon-xs me-2" />} dropdown={true} list={(
						<>
							<SideLink name="Sign In" />
							<SideLink name="Sign Up" link="/signup" />
							<SideLink name="Forgot password" />
							<SideLink name="Reset password" />
							<SideLink name="Lock" />
							<SideLink name="404 Not Found" />
							<SideLink name="500 Not Found" />
						</>
					)} />

					<li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>

					<SideLink name="Components" icon={<ComponentsIcon className="icon icon-xs me-2" />} dropdown={true} list={(
						<>
							<SideLink name="All Components" />
							<SideLink name="Buttons" />
							<SideLink name="Notifications" />
							<SideLink name="Forms" />
							<SideLink name="Modals" />
							<SideLink name="Typography" />
						</>
					)} />
				</ul>
			</div>
		</nav>
	);
}