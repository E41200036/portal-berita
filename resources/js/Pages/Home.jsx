import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/HomePage/NewsList";
import Paginator from "@/Components/HomePage/Paginator";

export default function Home(props) {
    return (
        <div className="min-h-screen">
            <Head title={props.title} />
            <Navbar />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                <NewsList news={props.news.data} />
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.news.meta} />
            </div>
        </div>
    );
}
