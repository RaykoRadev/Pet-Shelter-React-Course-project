export default function ImageUpload({
    imgLink,
    setImgLink,
    register,
    setValue,
    errors,
    uploadPhoto,
}) {
    async function uploadPhotoHendler(e) {
        const file = e.target.files[0];
        console.log(file);

        const imgObj = await uploadPhoto(file);

        setValue("imageUrl", imgObj?.data.url);
        setImgLink(imgObj?.data.url);
    }

    //showing the fields according uploadet photo
    //* validation for photo desn't work bcz url field is not rendered in the moment of validation
    //todo if i have time to look for alternative way to make the validation

    if (imgLink) {
        return (
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
                        type="url"
                        autoComplete="imageUrl"
                        className="block w-full rounded-md bg-green-200/50 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-700 sm:text-sm/6"
                    />
                </div>
            </div>
        );
    }

    return (
        <>
            {!imgLink && (
                <div>
                    <div className="flex items-center justify-between">
                        <label
                            htmlFor="uploadFile1"
                            className={
                                (errors.imageUrl
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
                                // name="uploadedPhoto"
                                className="hidden"
                                onInput={uploadPhotoHendler}
                            />
                            <p className="text-xs font-medium text-gray-700 mt-2">
                                PNG, JPG SVG, WEBP, and GIF are Allowed.
                            </p>
                        </label>
                    </div>
                    {errors.imageUrl && (
                        <p className="text-red-700">
                            {errors.imageUrl.message}
                        </p>
                    )}
                </div>
            )}
        </>
    );
}
