// the head of the table

export default function TableHead({head}) {
	return (
		<thead className="thead-light">
			<tr>
				{
					head.map((th, index) => <th key={index} className="border-bottom" scope="col">{th}</th>)
				}
			</tr>
		</thead>
	)
}