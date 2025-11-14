import { Link } from "react-router-dom";

export default function CatalogItem({
    _id,
    age,
    author,
    species,
    breed,
    createdAt,
    description,
    imageUrl,
    name,
}) {
    return (
        <div className="bg-green-100 p-3 rounded-lg group overflow-hidden relative z-50 lg:hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
            <Link to={`/pets/details/${_id}`} className="block  ">
                <div className="w-full lg:aspect-[41/50] aspect-[41/40] overflow-hidden mx-auto rounded-lg bg-green-100">
                    <img
                        src={imageUrl}
                        alt={breed}
                        className="h-full w-full object-contain max-lg:p-3 outline-4 outline-red-500"
                    />
                </div>

                <div className="relative z-50 lg:absolute mx-auto lg:left-0 lg:right-0 lg:-bottom-80 lg:group-hover:bottom-2 bg-green-200 lg:w-11/12 w-full py-4 px-2 rounded-lg transition-all duration-300">
                    <div className="text-center">
                        <h3 className="text-sm lg:text-[15px] font-semibold text-slate-900">
                            Name: {name}
                        </h3>
                        <h3 className="text-sm lg:text-[15px] font-semibold text-slate-900  mt-2">
                            Species: {species}
                        </h3>
                        <h3 className="text-sm lg:text-[15px] font-semibold text-slate-900  mt-2">
                            Breed: {breed}
                        </h3>
                        <h4 className="text-sm lg:text-base text-blue-600 font-bold mt-2">
                            Age: {age}
                        </h4>
                    </div>
                    {/*// todo  if the logic about loged not owner is easy to be transfered in this component  */}
                    {/* <div className="flex justify-center space-x-1 mt-4">
                        <div
                            className="border-pink-200  flex items-center justify-center rounded-sm cursor-pointer"
                            title="Wishlist"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25px"
                                className="fill-pink-600 inline-block transition-transform duration-300 transform hover:scale-125"
                                viewBox="0 0 64 64"
                            >
                                <path
                                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                    data-original="#000000"
                                />
                            </svg>
                        </div>
                    </div> */}
                </div>
            </Link>
        </div>
    );
}
