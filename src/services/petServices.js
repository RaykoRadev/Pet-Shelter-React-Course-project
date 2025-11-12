import { getUserData } from "../utils/localStorageManager";
import { del, get, post, put } from "./api";

// export async function getAll() {
//     try {
//         const res = await fetch("http://localhost:3000/animals");
//         const posts = await res.json();
//         return posts;
//     } catch (err) {
//         alert(err.message);
//     }
// }

// export async function getOne(postId, userId) {
//     try {
//         const res = await fetch(`http://localhost:3000/animals/${postId}`);
//         const post = await res.json();
//         return post;
//     } catch (err) {
//         alert(err.message);
//     }
// }

// export async function editOne(data, postId) {
//     try {
//         const res = await fetch(`http://localhost:3000/animals/${postId}`,{
//             method: 'PUT',
//             headers: {
//                 "X-Authorization": getUserData(),
//                 "Content-Type" : "application/json"
//             },
//             body:JSON.stringify(data)
//         });
//         const post = await res.json();
//         return post;
//     } catch (err) {
//         alert(err.message);
//     }
// }

// export async function createOne(data) {
//     try {
//         const res = await fetch(`http://localhost:3000/animals`,{
//             method: 'POST',
//             headers: {
//                 "X-Authorization": getUserData(),
//                 "Content-Type" : "application/json"
//             },
//             body:JSON.stringify(data)
//         });
//         const post = await res.json();
//         return post;
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

export function getAll(filter) {
    //* filter contained liked or author to get owned or liked post! empry filter get All posts
    return get(endpoints.getAll);
}

export function getOne(postId, userId) {
    return get(endpoints.getOne + postId, userId);
}

export function editOne(postId, data) {
    return put(endpoints.getOne + postId, data);
}

export function createOne(data) {
    return post(endpoints.create, data);
}

export function deleteOne(postId) {
    return del(endpoints.getOne + postId);
}

export async function sendLike(postId, data) {
    // return put(endpoints.like + postId);
    try {
        const res = await fetch(
            `http://localhost:3000/animals/likes/${postId}`,
            {
                method: "POST",
                headers: {
                    "X-Authorization": getUserData().accessToken,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );
        // const post = await res.json();
        return post;
    } catch (err) {
        alert(err.message);
    }
}

export async function sendDisike(postId, data) {
    // return put(endpoints.dislike + userId);
    try {
        const res = await fetch(
            `http://localhost:3000/animals/dislikes/${postId}`,
            {
                method: "POST",
                headers: {
                    "X-Authorization": getUserData().accessToken,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );
        // const post = await res.json();
        return post;
    } catch (err) {
        alert(err.message);
    }
}

export function getOwnedPosts(userId) {
    return get(endpoints.ownedPosts + userId);
}

export function getLikedPosts(userId) {
    return get(endpoints.likedPosts + userId);
}
