import { AiFillGoogleCircle, AiFillGithub, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold">Login With</h2>
        <button className="flex justify-center items-center gap-2 border-black border rounded-md w-full">
          <AiFillGoogleCircle className="text-3xl"></AiFillGoogleCircle>
          Log In With Google
        </button>
        <button className="flex justify-center items-center gap-2 border-black border rounded-md w-full">
          <AiFillGithub className="text-3xl"></AiFillGithub>
          Log In With GitHub
        </button>
      </div>
      <div className="mt-9 ">
        <h2 className="text-2xl font-semibold">Find Us On</h2>
        <button className="flex p-4 justify-start items-center gap-2 border-gray-300 border rounded-md w-full">
          <BsFacebook className="text-3xl"></BsFacebook>
          Facebook
        </button>
        <button className="flex p-4 justify-start items-center gap-2 border-gray-300 border rounded-md w-full">
          <AiOutlineTwitter className="text-3xl"></AiOutlineTwitter>
          Twitter
        </button>
        <button className="flex p-4 justify-start items-center gap-2 border-gray-300 border rounded-md w-full">
          <AiOutlineInstagram className="text-3xl"></AiOutlineInstagram>
          Instagram
        </button>
      </div>
      <div className="mt-9  bg-slate-300 p-2">
        <h2 className="text-2xl font-semibold">Q-Zone</h2>
        <div className="mt-4 space-y-3">
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default RightSideNav;
