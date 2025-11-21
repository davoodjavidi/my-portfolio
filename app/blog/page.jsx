import Link from "next/link";
import Navbar from "../components/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen gap-2">
        <h1 className="font-semibold text-lg">
          Blog Page is under construction
        </h1>
        <p>Please come back later...</p>
        <Link
          href="/"
          className="bg-violet-900 px-4 py-2 text-white rounded-full mt-2 hover:bg-violet-600 transition duration-300"
        >
          Back to the portfolio
        </Link>
      </div>
    </>
  );
}
