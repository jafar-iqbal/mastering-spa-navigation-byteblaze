import { Link } from "react-router-dom";

const Hero = () => {
    
  return (
    <div className="hero -mt-16">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">
            Welcome to <span className="bg-gradient-to-r bg-300% from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">ByteBlaze</span>
          </h1>
          <p className="py-6">
            ByteBlaze is the bridge between the complext world fo technology and
            the curious world minds eager to undertand it
          </p>
          <div className="flex gap-2 justify-center">
            <Link
              to={"/blogs"}
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-secondary rounded-xl group"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-pink-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-primary rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Read Blogs
              </span>
            </Link>
            <Link to={"/bookmarks"} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-primary rounded-xl group"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-pink-600 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-secondary rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Bookmarks</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
