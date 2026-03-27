import Button from '../components/Button';

const ArticlePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* Hero Section */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Articles
        </p>

        <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          Explore the Latest Fashion Insights
        </h1>

        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
          Discover trending styles, designer highlights, and editorial picks
          curated for the fashion-savvy reader.
        </p>

        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      {/* Article Cards Section */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Featured Articles
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Trend Spotlight & Style Guides
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {/* Article 1 – now dark */}
  <article className="rounded-3xl border-2 border-[#C9A227] bg-[#1A1A1A] p-4">
    <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-zinc-200">
      <img src="/src/assets/styles/Art1.jpg" alt="Spring Collection Highlights" className="h-full w-full object-cover rounded-xl"/>
    </div>
    <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
      Article 01
    </p>
    <h3 className="mt-2 text-lg font-semibold text-white">
      Spring Collection Highlights
    </h3>
    <p className="mt-3 text-sm leading-6 text-[#F8F6F2]">
      Explore this season’s fresh silhouettes, colors, and runway inspirations.
    </p>
    <Button className="mt-4">Read More</Button>
  </article>

  {/* Article 2 – now light */}
  <article className="rounded-3xl border-2 border-[#C9A227] bg-[#F8F6F2] p-4">
    <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-zinc-200">
      <img src="/src/assets/styles/Art2.jpg" alt="Designer Interview" className="h-full w-full object-cover rounded-xl"/>
    </div>
    <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
      Article 02
    </p>
    <h3 className="mt-2 text-lg font-semibold text-zinc-900">
      Exclusive Designer Interview
    </h3>
    <p className="mt-3 text-sm leading-6 text-zinc-600">
      Get insider tips and inspirations straight from top fashion designers.
    </p>
    <Button className="mt-4">Read More</Button>
  </article>

  {/* Article 3 – now dark */}
  <article className="rounded-3xl border-2 border-[#C9A227] bg-[#1A1A1A] p-4">
    <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-zinc-200">
      <img src="/src/assets/styles/Art3.jpg" alt="Street Style Trends" className="h-full w-full object-cover rounded-xl"/>
    </div>
    <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
      Article 03
    </p>
    <h3 className="mt-2 text-lg font-semibold text-white">
      Street Style Trends
    </h3>
    <p className="mt-3 text-sm leading-6 text-[#F8F6F2]">
      From city streets to social feeds, see how the latest looks are styled.
    </p>
    <Button className="mt-4">Read More</Button>
  </article>

  {/* Article 4 – now light */}
  <article className="rounded-3xl border-2 border-[#C9A227] bg-[#F8F6F2] p-4">
    <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-zinc-200">
      <img
        src="/src/assets/styles/Art4.jpg"
        alt="Fashion Editorial Picks"
        className="h-full w-full object-cover rounded-xl"
      />
    </div>
    <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
      Article 04
    </p>
    <h3 className="mt-2 text-lg font-semibold text-zinc-900">
      Fashion Editorial Picks
    </h3>
    <p className="mt-3 text-sm leading-6 text-zinc-600">
      Curated highlights from top fashion magazines and runway shows.
    </p>
    <Button className="mt-4">Read More</Button>
  </article>

        </div>
      </section>
    </div>
  );
};

export default ArticlePage;