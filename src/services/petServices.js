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

export async function getAll(page = 1, limit = 10, signal) {
    const res = await fetch(
        `http://localhost:3000/animals?page=${page}&limit=${limit}`,
        { signal }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch animals");
    }

    return res.json();
}

//* testet and works no using userId for now
export function getOne(postId, userId, signal) {
    return get(endpoints.getOne + postId, userId, signal);
}

export function editOne(postId, data, signal) {
    return put(endpoints.getOne + postId, signal, data);
}

export function createOne(data, signal) {
    return post(endpoints.create, signal, data);
}

export function deleteOne(postId, signal) {
    return del(endpoints.getOne + postId, signal);
}

//* testet and works
export async function sendLike(postId, data, signal) {
    return post(endpoints.likes + postId, signal, data);
}

//* testet and works
export async function sendDisike(postId, data, signal) {
    return post(endpoints.dislike + postId, signal, data);
}

export function getOwnedPosts(userId, signal) {
    return get(endpoints.ownedPosts + userId, signal);
}

export function getLikedPosts(userId, signal) {
    return get(endpoints.likedPosts + userId, signal);
}

export async function getHomePhotos(signal) {
    try {
        const res = await fetch(`http://localhost:3000/animals/home-photos`, {
            signal,
        });
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
