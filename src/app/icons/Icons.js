// All Icons

const Icons = {
	DASHBOARD: DashboardIcon,
	TRANSACTIONS: TransactionsIcon,
	SETTINGS: SettingsIcon,
	TABLES: TablesIcon,
	PAGEEXAMPLES: PageExamplesIcon,
	COMPONENTS: ComponentsIcon,
	USERGROUP: UserGroupIcon,
	REVENUE: RevenueIcon,
	CHARTUP: ChartUpIcon,
	ANGLE_RIGHT: AngleRightIcon,
	GLOBE: GlobeIcon,
	ANGLE_UP: AngleUpIcon,
	USERADD: UserAddIcon,
	PLUS: PlusIcon,
	WIDGET: WidgetIcon,
	UPLOADCLOUD: UploadCloudIcon,
	SHELD: SheldIcon,
	FIRE: FireIcon,
	PROFILE: ProfileIcon,
	MESSAGE: MessageIcon,
	SUPPORT: SupportIcon,
	LOGOUT: Logout,
	HOME: HomeIcon,
	SEARCH: SearchIcon,
	ARROW_DOWN: ArrowDownIcon,
	ARROW_UP: ArrowUpIcon
}

export function ArrowUpIcon({ className }) {
	return (
		<svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
		</svg>
	);
}

export function ArrowDownIcon({ className }) {
	return (
		<svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
		</svg>
	);
}

export function CheckIcon({ className }) {
	return (
		<svg
			className={className} fill="currentColor" viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd"
				d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
				clipRule="evenodd"></path>
		</svg>
	);
}

export function SearchIcon({ className }) {
	return (
		<svg className={className} x-description="Heroicon name: solid/search"
			xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
			aria-hidden="true">
			<path fillRule="evenodd"
				d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
				clipRule="evenodd"></path>
		</svg>
	);
}

export function HomeIcon({ className }) {
	return (
		<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
				d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
			</path>
		</svg>
	);
}

export function Logout({ className }) {
	return (
		<svg className={className} fill="none" stroke="currentColor"
			viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
				d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
			</path>
		</svg>
	);
}

export function SupportIcon({ className }) {
	return (
		<svg className={className} fill="currentColor"
			viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd"
				d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
				clipRule="evenodd"></path>
		</svg>
	);
}

export function MessageIcon({ className }) {
	return (
		<svg className={className} fill="currentColor"
			viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd"
				d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
				clipRule="evenodd"></path>
		</svg>
	);
}

export function ProfileIcon({ className }) {
	return (
		<svg className={className} fill="currentColor"
			viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd"
				d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
				clipRule="evenodd"></path>
		</svg>
	);
}

export function FireIcon({ className }) {
	return (
		<svg className={className} fill="currentColor" viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd"
				d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
				clipRule="evenodd"></path>
		</svg>
	);
}

export function SheldIcon({ className }) {
	return (
		<svg className={className} fill="currentColor" viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd"
				d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
				clipRule="evenodd"></path>
		</svg>
	);
}

export function UploadCloudIcon({ className }) {
	return (
		<svg className={className} fill="currentColor" viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z">
			</path>
			<path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
		</svg>
	);
}

export function WidgetIcon({ className }) {
	return (
		<svg className={className} fill="currentColor" viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z">
			</path>
		</svg>
	);
}

export function PlusIcon({ className }) {
	return (
		<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
				d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
		</svg>
	);
}

export function UserAddIcon({ className }) {
	return (
		<svg className={className} fill="currentColor" viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z">
			</path>
		</svg>
	);
}

export function DashboardIcon({ className }) {
	return (
		<svg className={className} fill="currentColor" viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
			<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
		</svg>
	);
}

export function TransactionsIcon({ className }) {
	return (
		<svg className={className} fill="currentColor" viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
			<path fillRule="evenodd"
				d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
				clipRule="evenodd"></path>
		</svg>
	);
}

export function SettingsIcon({ className }) {
	return (
		<svg className={className} fill="currentColor" viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd"
				d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
				clipRule="evenodd"></path>
		</svg>
	);
}

export function TablesIcon({ className }) {
	return (
		<svg className={className} fill="currentColor" viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd"
				d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
				clipRule="evenodd"></path>
		</svg>
	);
}

export function PageExamplesIcon({ className }) {
	return (
		<svg className={className} fill="currentColor" viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd"
				d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
				clipRule="evenodd"></path>
			<path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
		</svg>
	);
}

export function ComponentsIcon({ className }) {
	return (
		<svg className={className} fill="currentColor" viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
			<path fillRule="evenodd"
				d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
				clipRule="evenodd"></path>
		</svg>
	);
}

export function UserGroupIcon({ className }) {
	return (
		<svg className={className} fill="currentColor" viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
			</path>
		</svg>
	);
}

export function RevenueIcon({ className }) {
	return (
		<svg className={className} fill="currentColor" viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd"
				d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
				clipRule="evenodd"></path>
		</svg>
	);
}

export function ChartUpIcon({ className }) {
	return (
		<svg className={className} fill="currentColor" viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd"
				d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
				clipRule="evenodd"></path>
		</svg>
	);
}

export function AngleRightIcon({ className }) {
	return (
		<svg className={className} fill="currentColor" viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd"
				d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
				clipRule="evenodd"></path>
		</svg>
	);
}

export function GlobeIcon({ className }) {
	return (
		<svg className={className} fill="currentColor"
			viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd"
				d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
				clipRule="evenodd"></path>
		</svg>
	);
}

export function AngleUpIcon({ className }) {
	return (
		<svg className={className} fill="currentColor"
			viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd"
				d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
				clipRule="evenodd"></path>
		</svg>
	);
}

export default Icons;