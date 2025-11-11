import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="gradient text-white min-h-[70vh] flex items-center">
            <div className="container mx-auto p-4 flex items-center">
                <div className="ml-70  text-center p-4">
                    <img src="/sad-dog.png" alt="Not Found" />
                </div>
                <div className="ml-30 w-100 md:w-7/20 text-center md:text-left p-4">
                    <div className="text-6xl text-center text-green-700 font-medium">
                        404
                    </div>
                    <div className="text-xl text-center text-green-700 md:text-3xl font-medium mb-4">
                        Oops. This page has gone missing.
                    </div>
                    <div className="text-lg text-center text-green-700 mb-8">
                        You may have mistyped the address or the page may have
                        moved.
                    </div>
                    <Link
                        to="/"
                        className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
