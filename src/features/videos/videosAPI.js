import axios from "../../utils/axios";

export const getVideos = async (tags, search, searchByAuthor, page, limit) => {
    let queryString = "";

    if (tags?.length > 0) {
        page = 1;
        queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    }

    if (search !== "") {
        page = 1;
        queryString += `&q=${search}`;
    }

    if (searchByAuthor !== "") {
        page = 1;
        searchByAuthor = searchByAuthor.split(" ");
        searchByAuthor = searchByAuthor.join("%20");
        queryString = `author=${searchByAuthor}`;
    }

    const response = await axios.get(`/videos/?${queryString}&_page=${page}&_limit=${limit}`);

    return response.data;
};
