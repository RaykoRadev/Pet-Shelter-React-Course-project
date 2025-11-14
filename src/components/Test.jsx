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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Color Filter */}
                <div>
                    {/* <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Category
                    </label> */}
                    <select
                        id="category"
                        name="category"
                        value={selectedFilters.category}
                        // aria-placeholder="Select category"
                        onChange={handleFilterChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        <option value="">Select category:</option>
                        <option value="specises">Specises</option>
                        <option value="breed">Breed</option>
                        <option value="age">Age</option>
                    </select>
                </div>

                {/* Size Filter */}
                <div>
                    {/* <label
                        htmlFor="sorting"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Sorting
                    </label> */}
                    <select
                        id="sorting"
                        name="sorting"
                        value={selectedFilters.sorting}
                        // aria-placeholder="Sort by"
                        onChange={handleFilterChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        <option value="">Sort by:</option>
                        <option value="ascending">Ascendig</option>
                        <option value="decending">Desending</option>
                    </select>
                </div>
                {/* //todo find a sort button and the handle to be transfered here from the 'select'*/}
            </div>
        </div>
    );
}
