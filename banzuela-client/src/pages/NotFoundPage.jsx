import { Link } from "react-router-dom";
import Button from "../components/Button";
import errorImage from "../assets/images/errorimage.png";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F6F2] px-6">
      <div className="text-center max-w-xl">
    
        <div className="mb-6 flex justify-center">
          <img
            src={errorImage}
            alt="404 Illustration"
            className="w-40 sm:w-56 opacity-90"
          />
        </div>
        
        <div className="mt-6 h-px w-100 mx-auto bg-[#C9A227]/60"></div>
  
        <h1 className="text-4xl sm:text-5xl  font-semibold tracking-tight text-[#1A1A1A] " style={{ fontFamily: '"Cormorant Garamond", serif' }}>
          Page Not Found
        </h1>
        <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-7">
          The page you are looking for doesn’t exist or has been moved.
          Please check the URL or return to the homepage.
        </p>

        <div className="mt-6 h-px w-40 mx-auto bg-[#C9A227]/60"></div>

        <div className="mt-8">
          <Link to="/">
            <Button className="border border-[#C9A227] text-[#1A1A1A] hover:bg-[#C9A227] hover:text-white transition">
              Back Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;