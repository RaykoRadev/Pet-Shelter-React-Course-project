import { useEffect, useState } from "react";
import { getOne } from "../services/petServices";
import { useParams } from "react-router-dom";

export default function Details() {
    const [pet, setPet] = useState({});

    const petId = useParams().petId;

    useEffect(() => {
        const post = async () => {
            const data = await getOne(petId);
            setPet(data);
        };

        post();
    }, [petId]);

    return (
        <div className="bg-green-100 mt-30">
            <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12  p-6 rounded-sm">
                    <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div className="px-4 py-10 rounded-sm  relative">
                            <img
                                src={pet.imageUrl}
                                alt={pet.name}
                                className="w-4/5 aspect-[251/171] rounded-sm object-cover mx-auto"
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h2 className="mt-2 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                            {pet.name}
                        </h2>

                        <p className="flex flex-wrap gap-3 mt-4">
                            <span className="text-xl font-bold text-slate-900">
                                Breed:{" "}
                            </span>{" "}
                            {pet.breed}
                        </p>

                        <p className="flex flex-wrap gap-3 mt-4">
                            <span className="text-xl font-bold text-slate-900">
                                Age:{" "}
                            </span>{" "}
                            {pet.age}
                        </p>

                        <p className="flex flex-wrap gap-3 mt-4">
                            <span className="text-xl font-bold text-slate-900">
                                Description:{" "}
                            </span>{" "}
                            {pet.description}
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
                            {pet.author?.username}
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
                            <button
                                type="button"
                                className="flex w-40 justify-center gap-4 rounded-md bg-green-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25px"
                                    className="border-pink-200 cursor-pointer  fill-pink-600 inline-block "
                                    viewBox="0 0 64 64"
                                >
                                    <path
                                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                        data-original="#000000"
                                    />
                                </svg>
                                Like
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
