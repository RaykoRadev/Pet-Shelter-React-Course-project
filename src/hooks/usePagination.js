import { useEffect, useState } from "react";
import useRequest from "./useRequest";

export default function usePagination() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [limit, setLimit] = useState(4);

    const { resData: pets, loading } = useRequest(
        `http://localhost:3000/animals?page=${page}&limit=${limit}`,
        {}
    );

    //todo pagination in separate hook
    useEffect(() => {
        if (!pets || !pets.data) return;

        const { data, pagination } = pets;

        setPosts(data);
        setTotal(pagination.totalPages);
        setPage(pagination.page);
        setLimit(pagination.limit);
    }, [pets]);

    return { page, total, limit, posts, loading, setPage, setPosts };
}
