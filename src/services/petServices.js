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
    likes: "/animals/likes/",
    dislike: "/animals/dislikes/",
    ownedPosts: "/animals?author=userId",
    likedPosts: "/animals?likes=userId",
};

export function getAll() {
    //* filter contained liked or author to get owned or liked post! empry filter get All posts
    return get(endpoints.getAll);
}

//* testet and works no using userId for now
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

//* testet and works
export async function sendLike(postId, data) {
    return post(endpoints.likes + postId, data);
}

//* testet and works
export async function sendDisike(postId, data) {
    return post(endpoints.dislike + postId, data);
}

export function getOwnedPosts(userId) {
    return get(endpoints.ownedPosts + userId);
}

export function getLikedPosts(userId) {
    return get(endpoints.likedPosts + userId);
}

export async function getHomePhotos(userId) {
    // return get(endpoints.likedPosts + userId);

    try {
        const res = await fetch(`http://localhost:3000/animals/home-photos`);
        const post = await res.json();
        return post;
    } catch (err) {
        alert(err.message);
    }
}

// export async function getSorted() {
//     try {
//         const res = await fetch(`http://localhost:3000/animals/sorted`);
//         const post = await res.json();
//         return post;
//     } catch (err) {
//         alert(err.message);
//     }
// }
