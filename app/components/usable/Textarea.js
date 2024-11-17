export default function Textarea({ id, name, value, label, ...rest }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <textarea
        className=" min-h-32 text-gray-800 p-2 bg-gray-300 rounded focus:ring-secondary outline-1  focus:outline-secondary "
        {...rest}
      />
    </div>
  );
}
