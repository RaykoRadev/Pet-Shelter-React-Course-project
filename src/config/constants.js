export const UPLOAD_PHOTO_URL = "https://api.imgbb.com/1/upload?key=";
export const API_imgBB_KEY = "c74f2163636580193aeb4d942fc5ccbd";

const host = "http://localhost:3000";

export const endpoints = {
    login: host + "/users/login",
    register: host + "/users/register",
    logout: host + "/users/logout",

    getAll: host + "/animals",
    getOne: host + "/animals/",
    createOne: host + "/animals/",
    likes: host + "/animals/likes/",
    dislike: host + "/animals/dislikes/",
    ownedPosts: host + "/animals?author=",
    likedPosts: host + "/animals?liked=",
};
