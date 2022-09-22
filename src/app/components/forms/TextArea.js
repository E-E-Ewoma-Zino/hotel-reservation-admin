// TextArea form

export default function TextArea({ name, placeholder, change, value}) {
	return (
		<div className="form-group">
			<label htmlFor={name.toLowerCase().replace(' ', '')}>{name}</label>
			<textarea className="form-control" id={name.toLowerCase().replace(' ', '')} name={name.toLowerCase().replace(' ', '')} placeholder={placeholder} onChange={change} value={value}></textarea>
		</div>
	);
}