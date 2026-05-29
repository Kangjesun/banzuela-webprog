import { useEffect, useState } from "react";

import Button from "../../components/Button";
import ArticleList from "../../components/ArticleList";

import staticArticles from "../../data/article-content.js";
import { fetchArticles } from "../../services/ArticleService";


const ArticleListPage = () => {
  const [staticData, setStaticData] = useState([]);
  const [dbData, setDbData] = useState([]);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      const { data } = await fetchArticles();

      const dbArticles = Array.isArray(data.articles)
        ? data.articles
        : [];

      // STATIC FIRST, DB AFTER (your requirement)
      setStaticData(staticArticles);
      setDbData(dbArticles);
    } catch (err) {
      console.error(err);

      setStaticData(staticArticles);
      setDbData([]);
    }
  };

  return (
    <div className="flex w-full flex-col gap-6">
      {/* HEADER */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Articles
        </p>

        <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          Explore the Latest Fashion Insights
        </h1>

        <div className="mt-6">
          <Button to="/" variant="primary">
            Back Home
          </Button>
        </div>
      </section>

      {/* LIST */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <ArticleList
          staticArticles={staticData}
          dbArticles={dbData}
        />
      </section>
    </div>
  );
};

export default ArticleListPage;