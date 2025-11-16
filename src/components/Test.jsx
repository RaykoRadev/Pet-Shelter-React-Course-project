import { useState } from "react";

export default function Test() {
    const [selectedFilters, setSelectedFilters] = useState({
        category: "",
        sorting: "",
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setSelectedFilters((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="p-4 mx-auto max-w-md bg-green-200 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Color Filter */}
                <div>
                    <select
                        id="category"
                        name="category"
                        value={selectedFilters.category}
                        // aria-placeholder="Select category"
                        onChange={handleFilterChange}
                        className="mt-1 block w-full text-center py-2 text-base border border-green-700 focus:outline-none focus:ring--green-700 focus:border--green-700 sm:text-sm rounded-md"
                    >
                        <option value="">Category:</option>
                        <option value="specises">Specises</option>
                        <option value="breed">Breed</option>
                        <option value="age">Age</option>
                    </select>
                </div>

                {/* Size Filter */}
                <div>
                    <select
                        id="sorting"
                        name="sorting"
                        value={selectedFilters.sorting}
                        // aria-placeholder="Sort by"
                        onChange={handleFilterChange}
                        className="mt-1 block w-full text-center py-2 text-base border border-green-700 focus:outline--green-700 focus:ring--green-700 focus:border--green-700 sm:text-sm rounded-md"
                    >
                        <option value="">Sort by:</option>
                        <option value="ascending">Ascendig</option>
                        <option value="decending">Desending</option>
                    </select>
                </div>
                <div>
                    <button
                        type="button"
                        className="mt-1 block w-full py-2 text-base border border-green-700 text-center focus:outline--green-700 focus:ring--green-700 focus:border--green-700 sm:text-sm rounded-md hover:bg-green-700 hover:text-white"
                        // className="flex w-full justify-center rounded-md bg-green-200 border border-green-700 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs hover:bg-green-700 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sort
                    </button>
                </div>
                {/* //todo find a sort button and the handle to be transfered here from the 'select'*/}
            </div>
        </div>
    );
}
