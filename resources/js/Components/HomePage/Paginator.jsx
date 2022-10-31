import { Link } from "@inertiajs/inertia-react";

const Paginator = ({ meta }) => {
    const prevPage = meta.links[0].url;
    const nextPage = meta.links[meta.links.length - 1].url;
    const currentPage = meta.current_page;

    return (
        <div className="btn-group">
            {prevPage && (
                <Link href={prevPage} className="btn btn-outline">
                    «
                </Link>
            )}
            <Link className="btn btn-outline">Page {currentPage}</Link>
            {nextPage && (
                <Link href={nextPage} className="btn btn-outline">
                    »
                </Link>
            )}
        </div>
    );
};

export default Paginator;
