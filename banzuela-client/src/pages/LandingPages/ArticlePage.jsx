import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from "../../components/Button";
import staticArticles from "../../data/article-content.js";
import { fetchArticles } from "../../services/ArticleService";

function ArticlePage() {
  const { name } = useParams();

  const [dbArticles, setDbArticles] = useState([]);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const { data } = await fetchArticles();
        setDbArticles(Array.isArray(data.articles) ? data.articles : []);
      } catch (err) {
        console.error(err);
      }
    };

    loadArticles();
  }, []);

  
  const allArticles = [...staticArticles, ...dbArticles];


  const normalize = (text) =>
    text?.toLowerCase().trim();

  const article = allArticles.find(
    (a) =>
      normalize(a.name || a.slug) === normalize(name)
  );

  if (!article) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-zinc-900">
              Article not found
            </h1>

            <Button to="/articles" className="mt-6">
              Back to Articles
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">

      {/* HERO */}
      <section className="border-y-2 border-black bg-[#F8F6F2] text-zinc-900 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">

          <Button to="/articles" variant="primary">
            + Back to Articles
          </Button>

          <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-zinc-500">
            Article
          </p>

          <h1 className="text-3xl font-bold">
            {article.title}
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            {(article.name || article.slug || "")
              .split('-')
              .map(w => w.charAt(0).toUpperCase() + w.slice(1))
              .join(' ')}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-[#F8F6F2] px-4 py-6">
        <div className="mx-auto max-w-3xl">

          {article.image && (
            <div className="mb-8 overflow-hidden rounded-xl border-2 border-[#C9A227]">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div className="space-y-4 text-zinc-700 leading-7">
            {Array.isArray(article.content)
              ? article.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))
              : article.content}
          </div>

          <div className="mt-8 border-t pt-6">
            <Button to="/articles" variant="primary">
              Back to Articles
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
}

export default ArticlePage;