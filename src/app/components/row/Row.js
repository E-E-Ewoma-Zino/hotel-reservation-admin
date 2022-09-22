// Row element

export default function Row({ className, children }) {
	return <div className={"row " + (className || "")}>{children}</div>;
}