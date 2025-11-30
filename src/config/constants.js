export const UPLOAD_PHOTO_URL = "https://api.imgbb.com/1/upload?key=";
export const API_imgBB_KEY = "c74f2163636580193aeb4d942fc5ccbd";

const host = import.meta.env.VITE_API_URL;
// const host = "http://localhost:3000";
const online = "https://back-end-server-nodejs-express.onrender.com";

export const endpoints = {
    login: host + "/api/users/login",
    register: host + "/api/users/register",
    logout: host + "/api/users/logout",

    getAll: host + "/api/animals",
    getOne: host + "/api/animals/",
    createOne: host + "/api/animals/",
    likes: host + "/api/animals/likes/",
    dislike: host + "/api/animals/dislikes/",
    ownedPosts: host + "/api/animals?author=",
    likedPosts: host + "/api/animals?liked=",
    homePotos: host + "/api/animals/home-photos",
};
