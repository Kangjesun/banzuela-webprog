import { Link } from "react-router-dom";
import Button from "../../components/Button";

const inputClasses =
  "mt-2 w-full rounded-xl border border-white/30 bg-[#1A1A1A] px-4 py-3 text-sm text-[#F5F5F5] outline-none transition placeholder:text-[#8A8A8A] focus:border-[#D4AF37] focus:bg-[#1A1A1A]";

const actionButtonClassName =
  "w-full rounded-xl py-3 text-[11px] tracking-[0.2em]";

const SignUpPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight !text-white sm:text-4xl">
        Begin your fashion journey
      </h1>

      <p className="mt-3 text-sm leading-6 text-[#C9A227]">
       Sign up to access exclusive editorial content and timeless style inspiration.
      </p>

      <form className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-sm font-medium text-white">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="Dominique"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="last-name" className="text-sm font-medium text-white">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Rochefort"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className="text-sm font-medium text-white">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="name@vogueavenue.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signup-password" className="text-sm font-medium text-white">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Create your password"
            autoComplete="new-password"
            className={inputClasses}
          />

          <p className="mt-2 text-xs leading-5 text-[#8A8A8A]">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        <Button type="submit" variant="secondary" className={actionButtonClassName}>
          Create Account
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="primary" className={actionButtonClassName}>
            Sign Up with Google
          </Button>

          <Button type="button" variant="primary" className={actionButtonClassName}>
            Sign Up with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-[#B8B8B8]">
        Already have an account?{" "}
        <Link
          to="/auth/signin"
          className="font-semibold text-[#F5F5F5] transition hover:text-[#D4AF37]"
        >
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;