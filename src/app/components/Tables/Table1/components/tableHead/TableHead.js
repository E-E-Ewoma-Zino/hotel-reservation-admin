// the head of the table

export default function TableHead({ title, className = '' }) {
	return (<th className={`border-gray-200 ${className}`}>{title}</th>);
}