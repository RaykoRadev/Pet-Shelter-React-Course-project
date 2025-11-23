import { useNavigate } from "react-router";
import { createOne } from "../../services/petServices";
import uploadPhoto from "../../services/uploadePhoto";
import { useState } from "react";
import { useForm } from "react-hook-form";

const initVal = {
    name: "",
    species: "",
    breed: "",
    age: "",
    imageUrl: "",
    description: "",
};

export default function CreateEdit() {
    const { register, handleSubmit, formState, setValue } = useForm({
        defaultValues: initVal,
    });
    const [imgLink, setImgLink] = useState(null);

    const navigate = useNavigate();

    //upload photo to external API
    async function uploadPhotoHendler(e) {
        const file = e.target.files[0];
        console.log(file);

        const imgObj = await uploadPhoto(file);

        setValue("imageUrl", imgObj?.data.url);
        setImgLink(imgObj?.data.url);
    }

    //errors visualization
    const inputStyle = (field) =>
        formState.errors[field]
            ? "border-2 border-red-700 block w-full rounded-md bg-green-200/50 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400  sm:text-sm/6"
            : "block w-full rounded-md bg-green-200/50 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-700 sm:text-sm/6";

    const errorText = (field) =>
        formState.errors[field] && (
            <p className="text-red-700">{formState.errors[field].message}</p>
        );

    const submitFormHandler = (formData) => {
        console.log(formData);

        (async () => {
            const data = await createOne(formData);
            navigate("/pets/catalog");
        })();
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="/footprint.png"
                    className="mx-auto h-30 w-auto"
                />
                <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Create a post
                </h2>
            </div>

            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(submitFormHandler)}
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                {...register("name", {
                                    required: "Name is required!",
                                    minLength: {
                                        value: 3,
                                        message:
                                            "Name has to be at least 3 characters!",
                                    },
                                })}
                                id="name"
                                type="text"
                                // required
                                autoComplete="name"
                                className={inputStyle("name")}
                            />
                        </div>
                        {errorText("name")}
                    </div>

                    <div>
                        <label
                            htmlFor="species"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Species
                        </label>
                        <div className="mt-2">
                            <input
                                {...register("species", {
                                    required: "Spieces is required!",
                                    minLength: {
                                        value: 3,
                                        message:
                                            "Spieces has to be at least 3 characters!",
                                    },
                                })}
                                id="species"
                                type="text"
                                // required
                                autoComplete="species"
                                className={inputStyle("species")}
                            />
                        </div>
                        {errorText("species")}
                    </div>

                    <div>
                        <label
                            htmlFor="breed"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Breed
                        </label>
                        <div className="mt-2">
                            <input
                                {...register("breed", {
                                    required: "Breed is required!",
                                    minLength: {
                                        value: 3,
                                        message:
                                            "Breed has to be at least 3 characters!",
                                    },
                                })}
                                id="breed"
                                type="text"
                                // required
                                autoComplete="breed"
                                className={inputStyle("breed")}
                            />
                        </div>
                        {errorText("breed")}
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="age"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Age
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                {...register("age", {
                                    required: "Age is required!",
                                    min: {
                                        value: 0,
                                        message:
                                            "Age has to be positive digit!",
                                    },
                                })}
                                id="age"
                                type="number"
                                // required
                                autoComplete="age"
                                className={inputStyle("age")}
                            />
                        </div>
                        {errorText("age")}
                    </div>

                    {/* showing the fields according uploadet photo */}
                    {imgLink && (
                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="imageUrl"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Photo
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="imageUrl"
                                    {...register("imageUrl", {
                                        required: "Image url is required!",
                                    })}
                                    type="text"
                                    autoComplete="imageUrl"
                                    className={inputStyle("imageUrl")}
                                />
                            </div>
                        </div>
                    )}

                    {!imgLink && (
                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="uploadFile1"
                                    className={
                                        (formState.errors.imageUrl
                                            ? "border-red-700 "
                                            : "border-gray-400") +
                                        " bg-green-200 text-gray-900 font-semibold text-base rounded w-100 h-30 flex flex-col items-center justify-center cursor-pointer border-2  border-dashed mt-2"
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-11 mb-3 fill-green-700"
                                        viewBox="0 0 32 32"
                                    >
                                        <path
                                            d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                            data-original="#000000"
                                        />
                                        <path
                                            d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                            data-original="#000000"
                                        />
                                    </svg>
                                    Upload file
                                    <input
                                        type="file"
                                        id="uploadFile1"
                                        name="uploadedPhoto"
                                        className="hidden"
                                        onInput={uploadPhotoHendler}
                                    />
                                    <p className="text-xs font-medium text-gray-700 mt-2">
                                        PNG, JPG SVG, WEBP, and GIF are Allowed.
                                    </p>
                                </label>
                            </div>
                            {errorText("imageUrl")}
                        </div>
                    )}

                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm/6 font-medium text-gray-900">
                                Description
                            </label>
                        </div>
                        <div className="mt-2">
                            <textarea
                                {...register("description", {
                                    required: "Description is required!",
                                    minLength: {
                                        value: 10,
                                        message:
                                            "Description has to be at least 10 characters!",
                                    },
                                })}
                                rows={4}
                                // required
                                className={inputStyle("description")}
                            />
                        </div>
                        {errorText("description")}
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
