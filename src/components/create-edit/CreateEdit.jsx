import { useLocation, useNavigate, useParams } from "react-router";
import uploadPhoto from "../../services/uploadePhoto";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Inputfield from "./fields/Inputfield";
import ImageUpload from "./fields/ImageUpload";
import TextareaField from "./fields/Textareafield";
import useRequest from "../../hooks/useRequest";
import { endpoints } from "../../config/constants";
import { UserContext } from "../../context/userContext";
import { useToastStore } from "../../context/toastStoreZustand";

const initVal = {
    name: "",
    species: "",
    breed: "",
    age: "",
    imageUrl: "",
    description: "",
};

let petId = "";

export default function CreateEdit() {
    const { register, handleSubmit, formState, setValue, reset } = useForm({
        defaultValues: initVal,
    });
    const [imgLink, setImgLink] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const { request, loading } = useRequest();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { _id: userId } = useContext(UserContext);
    const toast = useToastStore.getState((state) => state.show);

    //checking whic page to load edit or create
    if (pathname.includes("edit")) {
        petId = useParams().petId;

        useEffect(() => {
            (async () => {
                await setIsEdit(true);
                const getPet = await request(endpoints.getOne + petId);

                const owner = getPet.author?._id === userId;

                if (!owner) {
                    navigate("/pets/catalog", { replace: true });
                    // alert("Only the author can edit the post!");
                    toast.show("Only the author can edit the post!");
                    return;
                }
                reset({
                    name: getPet.name,
                    species: getPet.species,
                    breed: getPet.breed,
                    age: getPet.age,
                    imageUrl: getPet.imageUrl,
                    description: getPet.description,
                });
            })();
        }, [petId]);
    }

    const submitFormHandler = (formData) => {
        console.log(formData);

        if (isEdit) {
            (async () => {
                const data = await request(
                    endpoints.getOne + petId,
                    "PUT",
                    formData
                );
                navigate(`/pets/details/${petId}`);
            })();
        } else {
            (async () => {
                const data = await request(
                    endpoints.createOne,
                    "POST",
                    formData
                );
                navigate("/pets/catalog");
            })();
        }
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
                    {isEdit ? "Edit" : "Create"} a post
                </h2>
            </div>

            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(submitFormHandler)}
                >
                    <Inputfield
                        name={"name"}
                        label={"Name"}
                        type={"text"}
                        register={register}
                        valClass={formState.errors}
                        validationRulls={{
                            required: "Name is required!",
                            minLength: {
                                value: 3,
                                message:
                                    "Name has to be at least 3 characters!",
                            },
                        }}
                    />

                    <Inputfield
                        name={"species"}
                        label={"Species"}
                        type={"text"}
                        register={register}
                        valClass={formState.errors}
                        validationRulls={{
                            required: "Spieces is required!",
                            minLength: {
                                value: 3,
                                message:
                                    "Spieces has to be at least 3 characters!",
                            },
                        }}
                    />

                    <Inputfield
                        name={"breed"}
                        label={"Breed"}
                        type={"text"}
                        register={register}
                        valClass={formState.errors}
                        validationRulls={{
                            required: "Breed is required!",
                            minLength: {
                                value: 3,
                                message:
                                    "Breed has to be at least 3 characters!",
                            },
                        }}
                    />

                    <Inputfield
                        name={"age"}
                        label={"Age"}
                        type={"number"}
                        register={register}
                        valClass={formState.errors}
                        validationRulls={{
                            required: "Age is required!",
                            min: {
                                value: 0,
                                message: "Age has to be positive digit!",
                            },
                        }}
                    />

                    <ImageUpload
                        imgLink={imgLink}
                        setImgLink={setImgLink}
                        register={register}
                        errors={formState.errors}
                        uploadPhoto={uploadPhoto}
                        setValue={setValue}
                        isEdit={isEdit}
                    />

                    <TextareaField
                        name={"description"}
                        label={"Description"}
                        type={"text"}
                        register={register}
                        valClass={formState.errors}
                        validationRulls={{
                            required: "Description is required!",
                            minLength: {
                                value: 10,
                                message:
                                    "Description has to be at least 10 characters!",
                            },
                        }}
                    />

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {isEdit ? "Edit" : "Create"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
