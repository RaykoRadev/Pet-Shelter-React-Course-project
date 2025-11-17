import { useEffect, useState } from "react";
import { getOne, sendDisike, sendLike } from "../../services/petServices";
import { useParams } from "react-router-dom";
import { getUserData } from "../../utils/localStorageManager";
import DeleteModal from "../delete-modal/DeleteModal";

export default function Details() {
    const [pet, setPet] = useState({});
    const [isLiked, setIsLiked] = useState(false);
    const [modal, setShowModal] = useState(false);

    const userId = getUserData()?._id;
    const petId = useParams().petId;

    useEffect(() => {
        const abortController = new AbortController();
        const post = async () => {
            const data = await getOne(petId);
            const isLiked = data.liked.includes(userId);
            setIsLiked(isLiked);
            setPet(data);
        };
        post();
        return () => {
            abortController.abort();
        };
    }, [petId, modal]);

    const amountLikes = pet.liked?.length;

    const likeHandler = (e, postId) => {
        console.log(userId);

        const data = async () => {
            if (isLiked) {
                await sendDisike(postId, { liked: userId });
                setIsLiked(false);
            } else {
                console.log("step 1");

                await sendLike(postId, { liked: userId });
                setIsLiked(true);
            }
        };
        data();
    };

    const closeDeleteModal = () => {
        setShowModal(false);
    };

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
                                Species:{" "}
                            </span>{" "}
                            {pet.species}
                        </p>

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
                            {amountLikes}
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
                                Edit
                            </button>

                            <button
                                onClick={() => setShowModal(true)}
                                type="button"
                                className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Delete
                            </button>
                            {/* </Link> */}
                            {modal && (
                                <DeleteModal
                                    postId={pet._id}
                                    onClose={closeDeleteModal}
                                />
                            )}
                            <button
                                onClick={(e) => likeHandler(e, pet._id)}
                                type="button"
                                className="flex w-40 justify-center gap-4 rounded-md bg-green-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {/* <svg
                                    src="/heart.png"
                                    width="25px"
                                    className={`border-pink-200 cursor-pointer fill-pink-600 inline-block ${
                                        liked && "fill-purple-500 "
                                    }`}
                                    viewBox="0 0 64 64"
                                > */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="25px"
                                    aria-hidden="true"
                                    className="cursor-pointer inline-block"
                                >
                                    <path
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                        fill={isLiked ? "#FF3366" : "#dcfce7 "}
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
