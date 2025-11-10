export default function Test() {
    return (
        <div className="bg-green-100 mt-30">
            <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12  p-6 rounded-sm">
                    <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div className="px-4 py-10 rounded-sm  relative">
                            <img
                                src="https://readymadeui.com/images/laptop5.webp"
                                alt="Product"
                                className="w-4/5 aspect-[251/171] rounded-sm object-cover mx-auto"
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h2 className="mt-2 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                            Acer Aspire Pro 12 | Laptop
                        </h2>

                        <p className="flex flex-wrap gap-3 mt-4">
                            <span className="text-xl font-bold text-slate-900">
                                Breed:{" "}
                            </span>{" "}
                            The Acer
                        </p>

                        <p className="flex flex-wrap gap-3 mt-4">
                            <span className="text-xl font-bold text-slate-900">
                                Age:{" "}
                            </span>{" "}
                            0
                        </p>

                        <p className="flex flex-wrap gap-3 mt-4">
                            <span className="text-xl font-bold text-slate-900">
                                Description:{" "}
                            </span>{" "}
                            The Acer Aspire Pro 12 is a sleek and powerful
                            laptop, designed for productivity and performance.
                            Perfect for professionals and multitaskers.
                        </p>

                        <p className="flex flex-wrap gap-3 mt-4">
                            <span className="text-xl font-bold text-slate-900">
                                Likes:{" "}
                            </span>{" "}
                            4
                        </p>

                        <p className="flex flex-wrap gap-3 mt-4">
                            <span className="text-xl font-bold text-slate-900">
                                Autor:{" "}
                            </span>{" "}
                            Petkan
                        </p>

                        <div className="flex gap-4 mt-12 max-w-md">
                            <button
                                type="button"
                                className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Details
                            </button>
                            <button
                                type="button"
                                className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
