import { useState } from "react";

export default function useSorting(posts, setPosts) {
    const [selectedFilters, setSelectedFilters] = useState({
        category: "",
        sorting: "",
    });

    //showing the selected filter for sorting
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

    return { selectedFilters, sortHendler, handleFilterChange };
}
