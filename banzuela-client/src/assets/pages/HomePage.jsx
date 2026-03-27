import Button from '../components/Button';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Hero Section
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Welcome to Vogue Avenue – Curating Luxury, Fashion, and Chic Living
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Step into Vogue Avenue and discover the style, trends, and lifestyle tips that make every day effortlessly elegant. 
              Your urban-chic journey starts here.
            </p>

            <div className="mt-6">
              <Button to="/about" variant="primary">
                Learn More
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-[#C9A227] bg-[#F8F6F2] p-6">
            <div className="flex min-h-64 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img src="/src/assets/styles/HomeImage.jpg" alt="Home Image" className="h-full w-full object-contain rounded-[1.25rem]"/>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            KPI Section
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Vogue Avenue Insights
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-gradient-to-tr from-[#F8E6B0] via-[#D4AF37] to-[#B78F28] p-5">
            <p className="text-2xl font-bold text-[#1A1A1A]">5</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1A1A1A]">
              Collections
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-gradient-to-tr from-[#F8E6B0] via-[#D4AF37] to-[#B78F28] p-5">
            <p className="text-2xl font-bold text-[#1A1A1A]">12</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1A1A1A]">
              Designers
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-gradient-to-tr from-[#F8E6B0] via-[#D4AF37] to-[#B78F28] p-5">
            <p className="text-2xl font-bold text-[#1A1A1A]">34</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1A1A1A]">
              Articles
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-gradient-to-tr from-[#F8E6B0] via-[#D4AF37] to-[#B78F28] p-5">
            <p className="text-2xl font-bold text-[#1A1A1A]">120</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1A1A1A]">
              Looks
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Feature Cards
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              Vogue Avenue Highlights
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
           <article className="rounded-3xl border-2 border-[#C9A227] bg-[#F8F6F2] p-4 hover:shadow-lg transition">
              <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-[#FDE0EC]">
                <img src="/src/assets/styles/FC1.jpg" alt="Latest Collection" className="h-full w-full object-cover rounded-xl" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">Latest Collection Spotlight</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Showcasing the newest seasonal collection with exclusive designer insights.
              </p>
              <Button className="mt-4" variant="primary">View Collection</Button>
            </article>

          <article className="rounded-3xl border-2 border-[#C9A227] bg-[#F8F6F2] p-4 hover:shadow-lg transition">
              <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-[#FDE0EC]">
                <img src="/src/assets/styles/FC2.jpg" alt="Designer Interview" className="h-full w-full object-cover rounded-xl" />
               </div>
              <h3 className="mt-4 text-lg font-semibold text-[#0B0B0C]">Designer Interviews</h3>
              <p className="mt-3 text-sm leading-6 text-[#6B6B6B]">
                In-depth interviews with top fashion designers and emerging talents.
              </p>
              <Button className="mt-4" variant="primary">Read Interview</Button>
          </article>

          <article className="rounded-3xl border-2 border-[#C9A227] bg-[#F8F6F2] p-4 hover:shadow-lg transition">
              <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-[#FDE0EC]">
                <img src="/src/assets/styles/FC3.jpg" alt="Styling Tips" className="h-full w-full object-cover rounded-xl" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">Styling Tips & Trends</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Expert advice on styling, outfit combinations, and current fashion trends.
              </p>
              <Button className="mt-4" variant="primary">Explore Tips</Button>
            </article>

          <article className="rounded-3xl border-2 border-[#C9A227] bg-[#F8F6F2] p-4 hover:shadow-lg transition">
              <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-[#FDE0EC]">
                <img src="/src/assets/styles/FC4.jpg" alt="Fashion News" className="h-full w-full object-cover rounded-xl" />
               </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">Fashion News</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Stay updated with the latest happenings in the fashion industry.
              </p>
              <Button className="mt-4" variant="primary">Read News</Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;