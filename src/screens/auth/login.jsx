import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="w-screen h-screen bg-slate-900 flex px-10 lg:px-0 items-center justify-center">
      <div className="bg-white w-full h-fit lg:w-96 pb-10 rounded-lg">
        <div className="p-5 text-center">
          <h3 className="text-2xl font-semibold">Login</h3>
        </div>
        <form className="px-10">
          <div className="relative mb-5">
            <input
              className="border-2 w-full h-10 rounded-lg peer text-sm focus:outline-black pl-2"
              id="email"
              type="email"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="scale-95 absolute top-1/2 -translate-y-7 peer-placeholder-shown:text-gray-400 transition peer-placeholder-shown:-translate-y-1/2  text-gray-700 bg-white px-1 left-3 text-sm peer-focus-within:"
            >
              email
            </label>
          </div>
          <div className="relative">
            <input
              className="border-2 w-full h-10 rounded-lg peer text-sm focus:outline-black pl-2"
              id="password"
              type="password"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="scale-95 absolute top-1/2 -translate-y-7 peer-placeholder-shown:text-gray-400 transition peer-placeholder-shown:-translate-y-1/2  text-gray-700 bg-white px-1 left-3 text-sm peer-focus-within:"
            >
              password
            </label>
          </div>
          <div className="mt-8 flex items-center justify-center">
            <button className="bg-black rounded-lg h-10 w-full text-white uppercase text-sm font-semibold tracking-wide">
              sign in
            </button>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-xs text-gray-500">
              did not have an account?
            </span>
            <Link className="ml-1 text-xs" to="/auth/register">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
