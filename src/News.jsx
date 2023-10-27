const News = ({ articles }) => {
  return (
    <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Climate Change News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-700 text-sm">
                Published on {new Date(article.published).toDateString()}
                </p>
                <a
                href={article.url}
                className="text-blue-500 hover:underline text-sm mt-2 block"
                target="_blank"
                rel="noopener noreferrer"
                >
                Read More
                </a>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default News;
