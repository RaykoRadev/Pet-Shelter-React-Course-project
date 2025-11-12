// export async function getAll() {
//     try {
//         const res = await fetch("http://localhost:3000/animals");
//         const data = await res.json();
//         return data;
//     } catch (err) {
//         alert(err.message);
//     }
// }

import { del, get, post, put } from "./api";

// export async function getOne(id) {
//     try {
//         const res = await fetch(`http://localhost:3000/animals/${id}`);
//         const data = await res.json();
//         return data;
//     } catch (err) {
//         alert(err.message);
//     }
// }

const endpoints = {
    // getAll: "/animals?sortBy=createdAt%20desc",
    getAll: "/animals",
    getOne: "/animals/",
    create: "/animals/",
    like: "/animals/likes",
    dislike: "/animals/dislikes",
    ownedPosts: "/animals?author=userId",
    likedPosts: "/animals?likes=userId",
};

export function getAll() {
    return get(endpoints.getAll);
}

export function getOne(id) {
    return get(endpoints.getOne + id);
}

export function editOne(id, data) {
    return put(endpoints.getOne + id, data);
}

export function createOne(data) {
    return post(endpoints.create, data);
}

export function deleteOne(id) {
    return del(endpoints.getOne + id);
}

export function sendLike(id) {
    return put(endpoints.like + id);
}

export function sendDisike(id) {
    return put(endpoints.dislike + id);
}

export function getOwnedPosts(id) {
    return get(endpoints.ownedPosts + id);
}

export function getLikedPosts(id) {
    return get(endpoints.likedPosts + id);
}
