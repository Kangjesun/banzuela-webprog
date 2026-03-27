import Button from '../components/Button';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">

      {/* Hero / Intro Section */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-dashed border-[#C9A227] bg-[#F8F6F2] p-6">
            <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img src="/src/assets/styles/AboutImage.jpg" alt="Fashion Studio" className="h-full w-full object-contain rounded-lg"/>
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About Vogue Avenue
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Passionate About Fashion, Driven by Creativity
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Vogue Avenue is a modern fashion blog dedicated to showcasing trends, styling tips, and exclusive insights from the world of fashion. We merge creativity and industry expertise to inspire your style journey.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">Back Home</Button>
              <Button to="/articles">Open Articles</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Overview */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Our Impact
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Quick Overview of Achievements
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-[#C9A227] bg-[#1A1A1A] p-5">
            <p className="text-2xl font-bold text-white">05</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F8F6F2]">Years of Fashion</p>
          </div>

          <div className="rounded-3xl border-2 border-[#C9A227] bg-[#1A1A1A] p-5">
            <p className="text-2xl font-bold text-white">120</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F8F6F2]">Articles Published</p>
          </div>

          <div className="rounded-3xl border-2 border-[#C9A227] bg-[#1A1A1A] p-5">
            <p className="text-2xl font-bold text-white">50</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F8F6F2]">Collaborations</p>
          </div>

          <div className="rounded-3xl border-2 border-[#C9A227] bg-[#1A1A1A] p-5">
            <p className="text-2xl font-bold text-white">10</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F8F6F2]">Focus Areas</p>
          </div>
        </div>
      </section>

      {/* Section Flow */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Our Journey
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              From Ideas to Style Inspiration
            </h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Our Story</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Founded with a passion for fashion, Vogue Avenue delivers curated content for fashion enthusiasts around the world.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Experience & Insight</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Our team collaborates with designers, stylists, and influencers to bring insider knowledge directly to our readers.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Vision & Goals</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  To inspire confident style choices and showcase the latest trends with authenticity and creativity.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Visual Inspiration
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-[#FFF0F5]">
                  <img
                    src={`/src/assets/styles/about-grid${item}.jpg`}
                    alt={`Inspiration ${item}`}
                    className="border-2 border-zinc-300 bg-zinc-100 h-full w-full object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>

            <Button className="mt-5" variant="primary">View Section</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;