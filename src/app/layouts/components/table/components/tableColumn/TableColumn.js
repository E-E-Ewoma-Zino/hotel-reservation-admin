// table column

export default function TableColumn ({children}) {
	return (
		<td style={{ verticalAlign: "middle" }}>
			{children}
		</td>
	);
}