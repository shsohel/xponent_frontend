export default function Input({ id, label, error, ...rest }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className=" h-10 text-gray-800 px-2 bg-gray-300 rounded focus:ring-secondary outline-1  focus:outline-secondary "
        {...rest}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
