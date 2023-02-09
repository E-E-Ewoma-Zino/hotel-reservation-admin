// The table row

export default function TableRow({ id, children }) {
	return (
		<tr id={id}>
			{children}
		</tr>
	);
}