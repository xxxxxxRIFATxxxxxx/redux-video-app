import { useSelector } from "react-redux";
import Page from "./Page";

export default function Pagination() {
    const { videos } = useSelector(
        (state) => state.videos
    );

    const pages = Math.ceil(videos.length / 2);

    let content = [];

    for (let i = 1; i <= pages; i++) {
        content.push(<Page number={i}/>);
    };

    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
                {content}

                {/* <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
                    4
                </div> */}
            </div>
        </section>
    );
}
