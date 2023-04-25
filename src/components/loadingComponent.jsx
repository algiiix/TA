export default function LoadingComponent() {
  return (
    <div className="flex items-center justify-center w-screen h-screen fixed top-0 left-0 backdrop-blur-sm bg-black/50">
      <h3 className="text-white font-semibold animate-pulse text-xl">
        Loading...
      </h3>
    </div>
  );
}
