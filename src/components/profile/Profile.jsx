import { useEffect, useState } from "react";
import { getUserData } from "../../utils/localStorageManager";
import { getLikedPosts, getOwnedPosts } from "../../services/petServices";
import ProfileSinglePost from "./profile-single-post/ProfileSinglePost";

export default function Profile() {
    const [likedPosts, setLikedPosts] = useState([]);
    const [ownedPosts, setOwnedPosts] = useState([]);

    const { username, email, _id } = getUserData();

    useEffect(() => {
        (async () => {
            //? the result of the request is {data, pagination}

            const liked = (await getLikedPosts(_id)).data;
            // console.log(liked);
            setLikedPosts(liked);

            const owned = (await getOwnedPosts(_id)).data;
            setOwnedPosts(owned);
        })();
    }, []);

    return (
        <div className="bg-green-200 mx-auto from-green-800 to-green-900 min-h-screen flex items-center justify-center p-4">
            <div className="font-std mx-50 mt-10 mb-10 w-full rounded-2xl bg-green-100 p-10 font-normal leading-relaxed text-gray-900 shadow-xl">
                <div className="flex flex-col mb-10 md:flex-row items-center justify-center">
                    <div className="md:w-auto text-center mb-8 md:mb-0">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/024/722/372/non_2x/monkey-with-ai-generated-free-png.png"
                            alt="Profile Picture"
                            className="rounded-full w-48 h-48 mx-auto border-4 border-green-800 transition-transform duration-300 hover:scale-105 ring ring-green-100"
                        />
                    </div>
                    <div className="md:w-auto md:pl-8">
                        <h1 className="text-2xl font-bold text-green-700 mb-6">
                            Profile page
                        </h1>

                        {/* <p className="text-gray-600 mb-6">Software Developer</p> */}
                        <h3 className="text-xl font-semibold text-balck mb-4">
                            Email:
                            <span> {email}</span>
                        </h3>
                        <h3 className="text-xl font-semibold text-black mb-4">
                            Username:
                            <span> {username}</span>
                        </h3>
                    </div>
                </div>
                {/* <div className="items-center flex flex-col md:flex-row"></div> */}

                <div className="bg-green-100 max-lg:pt-4">
                    <div className="max-w-screen-xl max-lg:max-w-xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* left side */}
                            <div className="max-lg:-order-1 bg-green-100 sm:px-8 px-4 py-6">
                                <h1 className="text-center text-xl font-bold text-green-700 mb-6">
                                    Liked Posts
                                </h1>
                                <div className="relative">
                                    <div className="md:overflow-auto">
                                        {likedPosts.map((post) => (
                                            <ProfileSinglePost
                                                key={post._id}
                                                {...post}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* right side */}
                            <div className="max-lg:-order-1 bg-green-100 sm:px-8 px-4 py-6">
                                <h1 className="text-center text-xl font-bold text-green-700 mb-6">
                                    Owned Posts
                                </h1>
                                <div className="relative">
                                    <div className="md:overflow-auto">
                                        {ownedPosts.map((post) => (
                                            <ProfileSinglePost
                                                key={post._id}
                                                {...post}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
