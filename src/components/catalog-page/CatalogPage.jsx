import { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";
import Catalog from "./catalog/Catalog";
import Spinner from "../spinner/Spinner";
import { getAll } from "../../services/petServices";
import useRequest from "../../hooks/useRequest";

//todo better positioning (to be in the center of the screen)

export default function CatalogPage() {
    const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [limit, setLimit] = useState(4);
    const [selectedFilters, setSelectedFilters] = useState({
        category: "",
        sorting: "",
    });

    const { data: pets, loading } = useRequest(
        `http://localhost:3000/animals?page=${page}&limit=${limit}`,
        {}
    );

    useEffect(() => {
        if (!pets || !pets.data) return;

        const { data, pagination } = pets;

        setPosts(data);
        setTotal(pagination.totalPages);
        setPage(pagination.page);
        setLimit(pagination.limit);
    }, [pets]);

    //showing the selected filter
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setSelectedFilters((prev) => ({ ...prev, [name]: value }));
    };

    const sortHendler = (e) => {
        const category = selectedFilters.category;
        const sorting = selectedFilters.sorting;

        let sort = 1;
        if (sorting === "descending") {
            sort = -1;
        }

        const sorted = posts.slice().sort((a, b) => {
            if (category === "age") {
                return (a[category] - b[category]) * sort;
            }
            return a[category].localeCompare(b[category]) * sort;
        });

        setPosts(sorted);
    };

    // useEffect(() => {
    //     const abortController = new AbortController();
    //     (async () => {
    //         const { data, pagination } = await getAll(
    //             page,
    //             limit,
    //             abortController.signal //!
    //         );
    //         setPets(data);
    //         setTotal(pagination.totalPages);
    //         setPage(pagination.page);
    //         setLimit(pagination.limit);
    //         setLoading(false);
    //     })();

    //     return () => {
    //         abortController.abort();
    //     };
    // }, [page]);

    if (loading) {
        return <Spinner />;
    }

    if (posts.length === 0) {
        return <h2>There is no any pets with no home!</h2>;
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
