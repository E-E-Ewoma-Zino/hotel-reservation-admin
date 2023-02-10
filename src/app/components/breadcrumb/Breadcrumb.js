// Breadcrumb

// import { HomeIcon } from "../../../icons/Icons";
import CrumbLink from "./components/CrumbLink";

export default function Breadcrumb() {
	const pathname = window.location.pathname.split('/');
	return (
		<nav aria-label="breadcrumb" className="d-none d-md-inline-block">
			<ol className="breadcrumb breadcrumb-dark breadcrumb-transparent">
				{pathname.map((path, index, arr) => <CrumbLink name={path} link={crumbPath(index, arr)} key={index} />)}
			</ol>
		</nav>
	);
}

function crumbPath(index, path) {
	if (index === 0) {
		return "/..";
	}
	return crumbPath(index - 1, path) + '/' + path[index];
}