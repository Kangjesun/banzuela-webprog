import { Outlet } from "react-router-dom";
import logo from "../assets/images/VogueAvenue1.png";

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr] bg-gradient-to-r from-[#0F0F0F] via-[#1A1A1A] to-[#2A2A2A]">

        <div className="flex items-center justify-center p-8 sm:p-10 lg:p-16">
          <div className="flex w-full max-w-md items-center justify-center">
            <div
              className="aspect-square w-full max-w-[30rem] bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${logo})`,
              }}
            />

          </div>
        </div>
        {/* RIGHT SIDE (SAME BACKGROUND FLOW) */}
        <main className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-16">
          <div className="w-full max-w-md">
            <Outlet />
          </div>

        </main>

      </div>

    </section>
  );
};

export default AuthLayout;