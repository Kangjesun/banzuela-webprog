import { Link } from "react-router-dom";
import Button from "./Button";

const ArticleList = ({ staticArticles = [], dbArticles = [] }) => {
  const allArticles = [...staticArticles, ...dbArticles];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {allArticles.map((article, index) => {
        const isDark = index % 2 !== 0;

        const slug = article.slug || article.name;

        const image =
          article.image || "https://via.placeholder.com/400x300";

        const title = article.title || "Untitled Article";

        // ✅ FIXED CONTENT NORMALIZATION
        const rawContent = Array.isArray(article.content)
          ? article.content.join(" ")
          : article.content || "";

        const contentPreview =
          rawContent.split(".")[0] + "."; // first sentence only

        // fallback safety (if no period)
        const safePreview =
          contentPreview === "." ? rawContent.slice(0, 120) : contentPreview;

        // ✅ TYPE (FEATURED / STANDARD)
        const type = article.articleType || "standard";

        return (
          <article
            key={article._id || article.id || article.name || index}
            className={`relative rounded-3xl border-2 p-4 border-[#C9A227] ${
              isDark ? "bg-[#1A1A1A]" : "bg-[#F8F6F2]"
            }`}
          >
            {/* BADGE */}
            <div className="absolute top-2 left-2">
              <span
                className={`rounded-full px-2 py-1 text-xs text-white ${
                  type === "featured" ? "bg-yellow-500" : "bg-gray-500"
                }`}
              >
                {type === "featured" ? "Featured" : "Standard"}
              </span>
            </div>

            {/* IMAGE */}
            <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] overflow-hidden bg-zinc-200">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* NUMBERING */}
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article {String(index + 1).padStart(2, "0")}
            </p>

            {/* TITLE */}
            <h3
              className={`mt-2 text-lg font-semibold ${
                isDark ? "text-white" : "text-zinc-900"
              }`}
            >
              {title}
            </h3>

            {/* PREVIEW (FIXED - WILL NOT BREAK BOX) */}
            <p
              className={`mt-3 text-sm leading-6 ${
                isDark ? "text-[#F8F6F2]" : "text-zinc-600"
              }`}
            >
              {safePreview.length > 120
                ? safePreview.slice(0, 120) + "..."
                : safePreview}
            </p>

            {/* LINK */}
            <Link to={`/articles/${slug}`}>
              <Button className="mt-4">Read More</Button>
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default ArticleList;