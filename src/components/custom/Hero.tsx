import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="flex items-center mx-56 gap-9 flex-col">
      <h1 className="font-extrabold text-[60px] text-center mt-16">
        <span className="text-[#f56551]">Plan your next trip with</span>
        <br />
        Trip App
        <p className="text-xl text-gray-500 text-center">Hello Trip App description Loem</p>
      </h1>
      <Link to="/create-trip">
        <Button>Get started, It's Free</Button>
      </Link>
    </div>
  );
};

export default Hero;
