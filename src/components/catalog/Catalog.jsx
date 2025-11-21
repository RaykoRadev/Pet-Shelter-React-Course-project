import { useEffect, useState } from "react";
import { getAll } from "../../services/petServices";
import CatalogItem from "./catalog-item/CatalogItem";
import Spinner from "../spinner/Spinner";
import Pagination from "../pagination/Pagination";

export default function Catalog() {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedFilters, setSelectedFilters] = useState({
        category: "",
        sorting: "",
    });

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

        const sorted = pets.slice().sort((a, b) => {
            if (category === "age") {
                return (a[category] - b[category]) * sort;
            }
            return a[category].localeCompare(b[category]) * sort;
        });

        setPets(sorted);
    };

    useEffect(() => {
        const abortController = new AbortController();
        const getData = async () => {
            const data = await getAll();
            setPets(data);
            setLoading(false);
        };
        getData();

        return () => {
            abortController.abort();
        };
    }, []);

    if (loading) {
        return <Spinner />;
    }

    if (pets.length === 0) {
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

            <div className="py-4 mt-4 mx-auto lg:max-w-6xl md:max-w-4xl max-w-xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-10">
                    All our lovely friends
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-4">
                    {pets.map((pet) => (
                        <CatalogItem key={pet._id} {...pet} />
                    ))}
                </div>
            </div>
            <Pagination />
        </>
    );
}
