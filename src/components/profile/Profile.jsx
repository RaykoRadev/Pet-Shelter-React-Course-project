import { getUserData } from "../../utils/localStorageManager";

export default function Profile() {
    const { username, email } = getUserData();
    return (
        <div className="bg-green-200 mx-auto from-indigo-800 to-blue-900 min-h-screen flex items-center justify-center p-4">
            <div className="font-std mb-10 w-full rounded-2xl bg-green-100 p-10 font-normal leading-relaxed text-gray-900 shadow-xl">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="md:w-auto text-center mb-8 md:mb-0">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/024/722/372/non_2x/monkey-with-ai-generated-free-png.png"
                            alt="Profile Picture"
                            className="rounded-full w-48 h-48 mx-auto border-4 border-green-800 transition-transform duration-300 hover:scale-105 ring ring-gray-300"
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
                <div className="items-center flex flex-col md:flex-row"></div>
            </div>
        </div>
    );
}
