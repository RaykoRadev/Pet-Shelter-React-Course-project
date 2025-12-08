import { API_imgBB_KEY, UPLOAD_PHOTO_URL } from "../config/constants";

export default async function uploadPhoto(data) {
    const formData = new FormData();
    formData.append("image", data);
    const res = await fetch(UPLOAD_PHOTO_URL + API_imgBB_KEY, {
        method: "POST",
        body: formData,
    });
    const result = await res.json();
    console.log(result);
    return result;
}
