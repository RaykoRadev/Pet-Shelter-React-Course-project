//todo to delete if i dont need it in the end

import { useEffect, useReducer, useState } from "react";
import likeReduser from "../redusers/likeReduser";
import { endpoints } from "../config/constants";
import useRequest from "./useRequest";

export default function useLikes(userId, pet) {
    const [isLiked, dispatchLikes] = useReducer(likeReduser, false);
    const { request, setData } = useRequest();

    useEffect(() => {
        if (pet.liked) {
            dispatchLikes({
                type: "init",
                payload: { liked: pet.liked, userId },
            });
        }
    }, [pet.liked, userId]);

    const likeHandler = async (e, postId) => {
        // console.log(userId);

        if (isLiked) {
            const result = await request(endpoints.dislike + postId, "POST", {
                liked: userId,
            });

            setData((prev) => ({
                ...prev,
                liked: result.liked,
            }));

            dispatchLikes({
                type: "disLike",
                payload: {
                    liked: result.liked,
                    userId,
                },
            });
        } else {
            const result = await request(endpoints.likes + postId, "POST", {
                liked: userId,
            });

            setData((prev) => ({
                ...prev,
                liked: result.liked,
            }));

            dispatchLikes({
                type: "like",
                payload: {
                    liked: result.liked,
                    userId,
                },
            });
        }
    };

    const amountLikes = pet.liked?.length;
    return { amountLikes, likeHandler, isLiked };
}
