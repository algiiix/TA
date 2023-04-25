export default function Service() {
  return (
    <div className="w-full h-full p-10">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-semibold capitalize">service</h3>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-72 h-10 rounded-lg pl-2 text-sm focus:outline-black border-2"
          />
          <button className="bg-black text-white px-3 h-10 capitalize rounded-lg text-sm">
            filters
          </button>
        </div>
      </div>
    </div>
  );
}
