import { useEffect, useState } from "react";
import { getAll } from "../services/petServices";
import CatalogItem from "./CatalogItem";

export default function Catalog() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await getAll();
            console.log("in useEffect: ", data);
            setPets(data);
        };
        getData();
    }, []);

    return (
        <div className="py-4 mx-auto lg:max-w-6xl md:max-w-4xl max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-10">
                All our lovely friends
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-4">
                {pets.map((pet) => (
                    <CatalogItem key={pet._id} {...pet} />
                ))}
            </div>
        </div>
    );
}
