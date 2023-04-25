export default function HeaderSearch({ name }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <h3 className="text-3xl font-semibold capitalize">{name}</h3>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-20 lg:w-72 h-10 rounded-lg pl-2 text-sm focus:outline-black border-2"
        />
        <button className="bg-black text-white px-3 h-10 capitalize rounded-lg text-sm">
          filters
        </button>
      </div>
    </div>
  );
}
