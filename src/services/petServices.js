import { del, get, post, put } from "./api";

const endpoints = {
    // getAll: "/animals?sortBy=createdAt%20desc",
    getAll: "/animals",
    getOne: "/animals/",
    create: "/animals/",
    likes: "/animals/likes/",
    dislike: "/animals/dislikes/",
    ownedPosts: "/animals?author=",
    likedPosts: "/animals?liked=",
};

export async function getAll(page = 1, limit = 10) {
    const res = await fetch(
        `http://localhost:3000/animals?page=${page}&limit=${limit}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch animals");
    }

    return res.json();
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
