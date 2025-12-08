import { Link } from "react-router";

export default function CatalogItem({
    _id,
    age,
    species,
    breed,
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
                        <h4 className="text-sm lg:text-[15px] font-semibold text-slate-900  mt-2">
                            Age: {age}
                        </h4>
                    </div>
                </div>
            </Link>
        </div>
    );
}
