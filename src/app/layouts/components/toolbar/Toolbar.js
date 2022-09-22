// general components for all layouts

import { Logout, MessageIcon, ProfileIcon, SettingsIcon, SupportIcon } from "../../../icons/Icons";

function Toolbar() {
	return (
		<nav className="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
			<div className="container-fluid px-0">
				<div className="d-flex justify-content-between w-100" id="navbarSupportedContent">
					<div className="d-flex align-items-center">
						{/* <!-- Search form --> */}
						<form className="navbar-search form-inline" id="navbar-search-main">
							<div className="input-group input-group-merge search-bar">
								<span className="input-group-text" id="topbar-addon">
									<svg className="icon icon-xs" x-description="Heroicon name: solid/search"
										xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
										aria-hidden="true">
										<path fillRule="evenodd"
											d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
											clipRule="evenodd"></path>
									</svg>
								</span>
								<input type="text" className="form-control" id="topbarInputIconLeft" placeholder="Search"
									aria-label="Search" aria-describedby="topbar-addon" />
							</div>
						</form>
						{/* <!-- / Search form --> */}
					</div>
					{/* <!-- Navbar links --> */}
					<ul className="navbar-nav align-items-center">
						<li className="nav-item dropdown">
							<a className="nav-link text-dark notification-bell unread dropdown-toggle"
								data-unread-notifications="true" href="#x" role="button" data-bs-toggle="dropdown"
								data-bs-display="static" aria-expanded="false">
								<svg className="icon icon-sm text-gray-900" fill="currentColor" viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z">
									</path>
								</svg>
							</a>
							<div className="dropdown-menu dropdown-menu-lg dropdown-menu-center mt-2 py-0">
								<div className="list-group list-group-flush">
									<a href="#x"
										className="text-center text-primary fw-bold border-bottom border-light py-3">Notifications</a>
									<a href="#x" className="list-group-item list-group-item-action border-bottom">
										<div className="row align-items-center">
											<div className="col-auto">
												{/* <!-- Avatar --> */}
												<img alt="placeholder"
													src="../../assets/img/team/profile-picture-1.jpg"
													className="avatar-md rounded" />
											</div>
											<div className="col ps-0 ms-2">
												<div className="d-flex justify-content-between align-items-center">
													<div>
														<h4 className="h6 mb-0 text-small">Jose Leos</h4>
													</div>
													<div className="text-end">
														<small className="text-danger">a few moments ago</small>
													</div>
												</div>
												<p className="font-small mt-1 mb-0">Added you to an event "Project stand-up"
													tomorrow at 12:30 AM.</p>
											</div>
										</div>
									</a>
									<a href="#x" className="list-group-item list-group-item-action border-bottom">
										<div className="row align-items-center">
											<div className="col-auto">
												{/* <!-- Avatar --> */}
												<img alt="placeholder"
													src="../../assets/img/team/profile-picture-2.jpg"
													className="avatar-md rounded" />
											</div>
											<div className="col ps-0 ms-2">
												<div className="d-flex justify-content-between align-items-center">
													<div>
														<h4 className="h6 mb-0 text-small">Neil Sims</h4>
													</div>
													<div className="text-end">
														<small className="text-danger">2 hrs ago</small>
													</div>
												</div>
												<p className="font-small mt-1 mb-0">You've been assigned a task for "Awesome
													new project".</p>
											</div>
										</div>
									</a>
									<a href="#x" className="list-group-item list-group-item-action border-bottom">
										<div className="row align-items-center">
											<div className="col-auto">
												{/* <!-- Avatar --> */}
												<img alt="placeholder"
													src="../../assets/img/team/profile-picture-3.jpg"
													className="avatar-md rounded" />
											</div>
											<div className="col ps-0 m-2">
												<div className="d-flex justify-content-between align-items-center">
													<div>
														<h4 className="h6 mb-0 text-small">Roberta Casas</h4>
													</div>
													<div className="text-end">
														<small>5 hrs ago</small>
													</div>
												</div>
												<p className="font-small mt-1 mb-0">Tagged you in a document called
													"Financial plans",</p>
											</div>
										</div>
									</a>
									<a href="#x" className="list-group-item list-group-item-action border-bottom">
										<div className="row align-items-center">
											<div className="col-auto">
												{/* <!-- Avatar --> */}
												<img alt="placeholder"
													src="../../assets/img/team/profile-picture-4.jpg"
													className="avatar-md rounded" />
											</div>
											<div className="col ps-0 ms-2">
												<div className="d-flex justify-content-between align-items-center">
													<div>
														<h4 className="h6 mb-0 text-small">Joseph Garth</h4>
													</div>
													<div className="text-end">
														<small>1 d ago</small>
													</div>
												</div>
												<p className="font-small mt-1 mb-0">New message: "Hey, what's up? All set
													for the presentation?"</p>
											</div>
										</div>
									</a>
									<a href="#x" className="list-group-item list-group-item-action border-bottom">
										<div className="row align-items-center">
											<div className="col-auto">
												{/* <!-- Avatar --> */}
												<img alt="placeholder"
													src="../../assets/img/team/profile-picture-5.jpg"
													className="avatar-md rounded" />
											</div>
											<div className="col ps-0 ms-2">
												<div className="d-flex justify-content-between align-items-center">
													<div>
														<h4 className="h6 mb-0 text-small">Bonnie Green</h4>
													</div>
													<div className="text-end">
														<small>2 hrs ago</small>
													</div>
												</div>
												<p className="font-small mt-1 mb-0">New message: "We need to improve the
													UI/UX for the landing page."</p>
											</div>
										</div>
									</a>
									<a href="#x" className="dropdown-item text-center fw-bold rounded-bottom py-3">
										<svg className="icon icon-xxs text-gray-400 me-1" fill="currentColor"
											viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
											<path fillRule="evenodd"
												d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
												clipRule="evenodd"></path>
										</svg>
										View all
									</a>
								</div>
							</div>
						</li>
						<li className="nav-item dropdown ms-lg-3">
							<a className="nav-link dropdown-toggle pt-1 px-0" href="#x" role="button"
								data-bs-toggle="dropdown" aria-expanded="false">
								<div className="media d-flex align-items-center">
									<img className="avatar rounded-circle" alt="placeholder"
										src="../../assets/img/team/profile-picture-3.jpg" />
									<div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
										<span className="mb-0 font-small fw-bold text-gray-900">Bonnie Green</span>
									</div>
								</div>
							</a>
							<div className="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1">
								<a className="dropdown-item d-flex align-items-center" href="#x">
									<ProfileIcon className="dropdown-icon text-gray-400 me-2" />
									My Profile
								</a>
								<a className="dropdown-item d-flex align-items-center" href="#x">
									<SettingsIcon className="dropdown-icon text-gray-400 me-2" />
									Settings
								</a>
								<a className="dropdown-item d-flex align-items-center" href="#x">
									<MessageIcon className="dropdown-icon text-gray-400 me-2" />
									Messages
								</a>
								<a className="dropdown-item d-flex align-items-center" href="#x">
									<SupportIcon className="dropdown-icon text-gray-400 me-2"/>
									Support
								</a>
								<div role="separator" className="dropdown-divider my-1"></div>
								<a className="dropdown-item d-flex align-items-center" href="#x">
									<Logout className="dropdown-icon text-danger me-2" />
									Logout
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Toolbar;