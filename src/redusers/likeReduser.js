export default function likeReduser(state, action) {
    const { liked, userId } = action.payload || {};

    switch (action.type) {
        case "init":
            return liked?.includes(userId);

        case "like":
            return true;

        case "disLike":
            return false;

        default:
            return state;
    }
}
