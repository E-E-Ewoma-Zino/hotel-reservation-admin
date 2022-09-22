// Columns element

export default function Col({ className, size, children }) {
	return <div className={(size || "col") + ' ' + (className || '')}>{children}</div>;
}