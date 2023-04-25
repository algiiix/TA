export default function Footer() {
  return (
    <footer className="text-sm capitalize w-full h-fit py-4 bg-black text-zinc-200 text-center">
      copyright &copy; bengkel virly motor {new Date(Date.now()).getFullYear()}
    </footer>
  );
}
