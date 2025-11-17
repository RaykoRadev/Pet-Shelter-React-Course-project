import { Link } from "react-router-dom";

export default function ProfileSinglePost({
    _id,
    breed,
    name,
    species,
    imageUrl,
}) {
    return (
        <div className="space-y-4">
            <div className="bg-green-100 flex gap-6 max-sm:flex-col">
                <div className="w-50 h-50 shrink-0 bg-green-100 p-3 rounded-md">
                    <img
                        src={imageUrl}
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="w-60 bg-green-100 flex flex-col py-7 gap-6">
                    <div>
                        <h3 className="text-[15px] font-semibold text-slate-900">
                            <strong>Name: </strong> {name}
                        </h3>
                        <h6 className="text-[15px] text-slate-900 font-medium mt-2">
                            <strong>Species: </strong> {species}
                        </h6>
                        <h6 className="text-[15px] text-slate-900 font-medium mt-2">
                            <strong>Breed: </strong> {breed}
                        </h6>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to={`/pets/details/${_id}`}>
                            <button
                                type="button"
                                className="flex w-30 justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <hr className="border-gray-300" />
        </div>
    );
}
