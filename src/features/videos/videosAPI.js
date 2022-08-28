import axios from "../../utils/axios";

export const getVideos = async (tags, search, searchByAuthor) => {
    let queryString = "";

    if (tags?.length > 0) {
        queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    }

    if (search !== "") {
        queryString += `&q=${search}`;
    }

    if (searchByAuthor !== "") {
        searchByAuthor = searchByAuthor.split(" ");
        searchByAuthor = searchByAuthor.join("%20");
        queryString = `author=${searchByAuthor}`;
    }

    const response = await axios.get(`/videos/?${queryString}`);

    return response.data;
};
