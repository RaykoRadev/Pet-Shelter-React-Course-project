export default function Test1() {
    return (
        <div className="tracking-wide max-w-7xl mx-auto mt-30">
            <div className="bg-white md:min-h-[600px] grid items-start grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-full">
                    <div className="p-4 relative h-full flex items-center justify-center">
                        <img
                            src="https://readymadeui.com/images/laptop2.webp"
                            alt="Product"
                            className="lg:w-4/5 w-full h-full rounded-xl object-contain"
                        />
                    </div>
                </div>
                <div className="bg-gradient-to-r from-gray-600 via-gray-600 to-gray-700 py-6 px-8 h-full">
                    <div>
                        <h2 className="sm:text-3xl text-2xl font-medium text-white">
                            Acer Aspire Pro 12
                        </h2>
                        <p className="text-sm text-gray-400 mt-2">
                            Well-Versed Commerce
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-between mt-8">
                        <h3 className="text-white sm:text-4xl text-3xl font-medium">
                            $730
                        </h3>
                        {/* <div className="flex items-center space-x-2">
                            <svg
                                className="w-4 h-4 fill-[#facc15]"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg
                                className="w-4 h-4 fill-[#facc15]"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg
                                className="w-4 h-4 fill-[#facc15]"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg
                                className="w-4 h-4 fill-[#facc15]"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg
                                className="w-4 h-4 fill-[#CED5D8]"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        </div> */}
                    </div>
                    <div>
                        <span className="grid grid-cols-3 mt-8">
                            <p className="text-white text-base w-full py-3.5 px-2 text-center border-b-2 border-white cursor-pointer">
                                Description
                            </p>
                        </span>
                        <p className="text-gray-300 mt-6 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisci
                            elit, sed eiusmod tempor incidunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                    {/* <div className="mt-8">
                        <h3 className="text-lg text-white">Quantity</h3>
                        <div className="flex mt-4 rounded-full overflow-hidden bg-gray-800 py-2.5 px-4 w-32">
                            <button
                                type="button"
                                className="bg-transparent w-full text-white font-semibold flex items-center justify-center cursor-pointer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-3 fill-current inline"
                                    viewBox="0 0 124 124"
                                >
                                    <path
                                        d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                        data-original="#000000"
                                    />
                                </svg>
                            </button>
                            <span className="bg-transparent w-full px-4 font-semibold flex items-center justify-center text-white text-base">
                                1
                            </span>
                            <button
                                type="button"
                                className="bg-transparent w-full text-white font-semibold flex items-center justify-center cursor-pointer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-3 fill-current inline"
                                    viewBox="0 0 42 42"
                                >
                                    <path
                                        d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                        data-original="#000000"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div> */}
                    <div className="flex gap-4 mt-8">
                        <button
                            type="button"
                            className="w-full max-w-[200px] px-4 py-2.5 bg-gray-800 hover:bg-gray-900 text-white text-base rounded-sm cursor-pointer"
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="w-full max-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent text-white text-base rounded-sm cursor-pointer"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
