import axios from "../../utils/axios";

export const getVideo = async (id) => {
    const response = await axios.get(`/videos/${id}`);

    return response.data;
};

export const increaseLikes = async (videoId, currentLikes) => {
    const response = await axios.patch(`/videos/${videoId}`, { likes: currentLikes++ });

    return response.data;
};

export const increaseDislikes = async (videoId, currentDislikes) => {
    const response = await axios.patch(`/videos/${videoId}`, { likes: currentDislikes++ });

    return response.data;
};

