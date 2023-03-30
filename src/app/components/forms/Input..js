// input form

export default function Input({ name, type, list, placeholder, multiple, accept, change, value, required }) {
	return (
		<div className="form-group">
			<label htmlFor={name.toLowerCase().replace(' ', '')}>{name}</label>
			<input className="form-control" list={list} id={name.toLowerCase().replace(' ', '')} name={name.toLowerCase().replace(' ', '')} type={type} placeholder={placeholder} value={value} multiple={multiple} accept={accept} onChange={change} required={required} />
		</div>
	);
}