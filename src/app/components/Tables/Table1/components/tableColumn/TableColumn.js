// table column

export default function TableColumn ({className, children}) {
	return (
		<td className={className} style={{ verticalAlign: "middle" }}>
			{children}
		</td>
	);
}