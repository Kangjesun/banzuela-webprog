import { Link } from "react-router-dom";
import Button from "../../components/Button";

const inputClasses =
  "mt-2 w-full rounded-xl border border-white/30 bg-[#1A1A1A] px-4 py-3 text-sm text-[#F5F5F5] outline-none transition placeholder:text-[#8A8A8A] focus:border-[#D4AF37] focus:bg-[#1A1A1A]";

const actionButtonClassName =
  "w-full rounded-xl py-3 text-[11px] tracking-[0.2em]";

const SignInPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight !text-white sm:text-4xl">
        Sign in to Vogue Avenue
      </h1>

      <p className="mt-3 text-sm leading-6 text-[#C9A227]">
        Return to a world of curated style, timeless aesthetics, and modern expression.
      </p>

      <form className="mt-8 space-y-5">
        <div>
          <label htmlFor="signin-email" className="text-sm font-medium text-white">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-sm font-medium text-white">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            className={inputClasses}
          />

          <p className="mt-2 text-xs leading-5 text-[#8A8A8A]">
            It must be a combination of minimum 8 letters, numbers, and symbols.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-white">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-[#2A2A2A] accent-[#D4AF37]"
            />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            className="font-medium text-white transition hover:text-[#D4AF37]"
          >
            Forgot Password?
          </button>
        </div>

        <Button type="submit" variant="secondary" className={actionButtonClassName}>
          Log In
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="primary" className={actionButtonClassName}>
            Log In with Google
          </Button>

          <Button type="button" variant="primary" className={actionButtonClassName}>
            Log In with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-[#2A2A2A] pt-6 text-sm text-[#B8B8B8]">
        No account yet?{" "}
        <Link
          to="/auth/signup"
          className="font-semibold text-[#F5F5F5] transition hover:text-[#D4AF37]"
        >
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;