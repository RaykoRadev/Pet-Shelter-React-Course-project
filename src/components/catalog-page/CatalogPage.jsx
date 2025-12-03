import Pagination from "../pagination/Pagination";
import Catalog from "./catalog/Catalog";
import Spinner from "../spinner/Spinner";

import usePagination from "../../hooks/usePagination";
import useSorting from "../../hooks/useSorting";

export default function CatalogPage() {
    const { page, total, posts, loading, setPage, setPosts } = usePagination();

    const { selectedFilters, sortHendler, handleFilterChange } = useSorting(
        posts,
        setPosts
    );

    if (loading) {
        return <Spinner />;
    }

    if (posts.length === 0) {
        return (
            <h2 className="mt-80 text-center text-3xl font-bold text-green-700 mb-6">
                There is no any pets without home!
            </h2>
        );
    }
    return (
        <>
            <div className="p-4 mx-auto max-w-md bg-green-200 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Selecting Category Filter */}

                    <select
                        id="category"
                        name="category"
                        value={selectedFilters.category}
                        onChange={handleFilterChange}
                        className="mt-1 block w-full text-center py-2 text-base border border-green-700 focus:outline-none focus:ring--green-700 focus:border--green-700 sm:text-sm rounded-md"
                    >
                        <option value="">Category:</option>
                        <option value="species">Species</option>
                        <option value="breed">Breed</option>
                        <option value="age">Age</option>
                    </select>

                    <select
                        id="sorting"
                        name="sorting"
                        value={selectedFilters.sorting}
                        onChange={handleFilterChange}
                        className="mt-1 block w-full text-center py-2 text-base border border-green-700 focus:outline--green-700 focus:ring--green-700 focus:border--green-700 sm:text-sm rounded-md"
                    >
                        <option value="">Sort by:</option>
                        <option value="ascending">Ascendig</option>
                        <option value="descending">Descending</option>
                    </select>

                    <button
                        type="button"
                        className="mt-1 block w-full py-2 text-base border border-green-700 text-center focus:outline--green-700 focus:ring--green-700 focus:border--green-700 sm:text-sm rounded-md hover:bg-green-700 hover:text-white"
                        onClick={sortHendler}
                    >
                        Sort
                    </button>
                </div>
            </div>
            <Catalog pets={posts} />
            <Pagination
                totalPages={total}
                curentPage={page}
                onChange={(newPage) => setPage(newPage)}
            />
        </>
    );
}
