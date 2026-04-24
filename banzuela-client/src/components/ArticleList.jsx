import { Link } from "react-router-dom";
import Button from "./Button";

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {articles.map((article, index) => {
        const isDark = index % 2 !== 0; 
        return (
          <article
            key={article.name}
            className={`rounded-3xl border-2 p-4 border-[#C9A227] ${
              isDark ? "bg-[#1A1A1A]" : "bg-[#F8F6F2]"
            }`}
          >
            {/* Article Image */}
            <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] overflow-hidden bg-zinc-200">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article {String(index + 1).padStart(2, "0")}
            </p>

            <h3
              className={`mt-2 text-lg font-semibold ${
                isDark ? "text-white" : "text-zinc-900"
              }`}
            >
              {article.title}
            </h3>

            <p
              className={`mt-3 text-sm leading-6 ${
                isDark ? "text-[#F8F6F2]" : "text-zinc-600"
              }`}
            >
              {article.content[0].substring(0, 150)}...
            </p>

            <Link to={`/articles/${article.name}`}>
              <Button className="mt-4">Read More</Button>
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default ArticleList;