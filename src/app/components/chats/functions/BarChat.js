import { BarChart } from "chartist";

export default function drawBarChat(data, frequency) {
	const labels = data?.map(label => label.type);
	const series = data?.map(series => series.frequency[frequency].count)
	new BarChart(
		'#barChat',
		{
		  labels, series
		},
		{
		  distributeSeries: true
		}
	  );
	  
}