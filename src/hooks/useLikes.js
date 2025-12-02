//todo to delete if i dont need it in the end

// import { useEffect, useState } from "react";

// export default function useLikes(userId, pet, owner) {
//     const [isLiked, setIsLiked] = useState(false);

//     if (!owner) {
//         const alreadyLiked = pet.liked?.includes(userId);
//         setIsLiked(alreadyLiked);
//     }

//     useEffect(() => {
//         if (!owner) {
//             const alreadyLiked = pet.liked?.includes(userId);
//             setIsLiked(alreadyLiked);
//         }
//     }, [owner]);

//     const likeHandler = async (e, postId) => {
//         // console.log(userId);

//         if (isLiked) {
//             await request(endpoints.dislike + postId, "POST", {
//                 liked: userId,
//             });
//             // await sendDisike(postId, { liked: userId });
//             await setIsLiked(false);
//         } else {
//             await request(endpoints.likes + postId, "POST", {
//                 liked: userId,
//             });
//             // await sendLike(postId, { liked: userId });
//             await setIsLiked(true);
//         }
//         // const data = async () => {};
//         // data();
//     };

//     const amountLikes = pet.liked?.length;
//     return { amountLikes, likeHandler, isLiked };
// }
