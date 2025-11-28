import { useContext } from "react";
import ProfileSinglePost from "./profile-single-post/ProfileSinglePost";
import { UserContext } from "../../context/userContext";
import useRequest from "../../hooks/useRequest";
import { endpoints } from "../../config/constants";

export default function Profile() {
    const { username, email, _id } = useContext(UserContext);
    const { resData: likedPosts } = useRequest(endpoints.likedPosts + _id, {
        data: [],
    });
    const { resData: ownedPosts } = useRequest(endpoints.ownedPosts + _id, {
        data: [],
    });

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

                <div className="bg-green-100 max-lg:pt-4">
                    <div className="max-w-screen-xl max-lg:max-w-xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* left side */}
                            <div className="max-lg:-order-1 bg-green-100 sm:px-8 px-4 py-6">
                                <h1 className="text-center text-xl font-bold text-green-700 mb-6">
                                    Liked Posts:
                                </h1>
                                <div className="relative">
                                    <div className="md:overflow-auto">
                                        {likedPosts.data.map((post) => (
                                            <ProfileSinglePost
                                                key={post._id}
                                                {...post}
                                            />
                                        ))}
                                    </div>
                                    {likedPosts.data.length === 0 && (
                                        <h5 className="text-center text-m font-bold text-green-700 mb-6">
                                            There is no posts.
                                        </h5>
                                    )}
                                </div>
                            </div>

                            {/* right side */}
                            <div className="max-lg:-order-1 bg-green-100 sm:px-8 px-4 py-6">
                                <h1 className="text-center text-xl font-bold text-green-700 mb-6">
                                    Owned Posts:
                                </h1>
                                <div className="relative">
                                    <div className="md:overflow-auto">
                                        {ownedPosts.data.map((post) => (
                                            <ProfileSinglePost
                                                key={post._id}
                                                {...post}
                                            />
                                        ))}
                                    </div>
                                    {ownedPosts.data.length === 0 && (
                                        <h5 className="text-center text-m font-bold text-green-700 mb-6">
                                            There is no posts.
                                        </h5>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
