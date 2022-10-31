const isNews = (news) => {
    return news.map((data, index) => {
        return (
            <div key={index} className="card lg:w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        { data.title }
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{ data.description }</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">{ data.category }</div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>
        );
    });
};

const NewsList = ({ news }) => {
    return isNews(news) || news.length == 0 ? isNews(news) : <div className="text-center">No news found</div>;
};

export default NewsList;
