// the dropdown items
import { Link} from 'react-router-dom';

export default function DropDownItem({ name, icon, className = '', link, click }) {
	const defaultClass = " dropdown-item d-flex align-items-center";

	if(link) return (
		<Link className={className + defaultClass} to={link || "#x"}>
			{icon}{name}
		</Link>
	);
	else return (
		<button name={name} className={className + defaultClass} onClick={click}>
			{icon} {name}
		</button>
	);
}