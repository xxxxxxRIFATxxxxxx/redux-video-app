import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../features/pagination/paginationSlice";
import Page from "./Page";


export default function Pagination() {
    const [videos, setVideos] = useState([]);

    const dispatch = useDispatch();
    
    const { page, limit } = useSelector(
        (state) => state.pagination
    );

    const handlePageChange = (number) => {
        dispatch(changePage(number))
    };

    const pages = Math.ceil(videos.length / limit);

    let content = [];

    for (let i = 1; i <= pages; i++) {
        content.push(<Page key={i} number={i} page={page} handlePageChange={handlePageChange} />);
    };

    useEffect(() => {
        fetch("https://thawing-ocean-45235.herokuapp.com/videos")
            .then(res => res.json())
            .then(data => setVideos(data));
    }, [videos]);

    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
                {content}
            </div>
        </section>
    );
}
