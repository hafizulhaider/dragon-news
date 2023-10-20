import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import background from "../../assets/bg3.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

  const {signIn} = useContext(AuthContext)

  const handleLogIn = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    
    signIn(email, password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.error(error);
    })
    

  }

  return (
    <div
      className="h-screen bg-no-repeat inset-0 bg-cover"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar></Navbar>
      <div className="container mx-auto 2xl:px-80 lg:px-52">
        <div className="grid xl:grid-cols-5 lg:grid-cols-3 gap-6 mt-5 bg-white rounded-lg p-5 mb-6">
          <div className="xl:col-span-2 lg:col-span-1 hidden lg:block">
            <div className="bg-sky-600 text-white rounded-lg flex flex-col justify-between gap-10 h-full w-full p-7">
              <span className="font-semibold tracking-widest uppercase">
                TechAuth{" "}
              </span>

              <div>
                <h1 className="text-3xl/tight mb-4">
                  We're here to help you level up.
                </h1>
                <p className="text-gray-200 font-normal leading-relaxed">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>

              <div>
                <div className="bg-sky-700/50 rounded-lg p-5">
                  <p className="text-gray-200 text-sm font-normal leading mb-4">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority in some form
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src="assets/images/user.png"
                      alt=""
                      className="h-12 rounded-lg"
                    />
                    <div>
                      <p className="font-normal">Timson K</p>
                      <span className="text-xs font-normal">Freelancer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 lg:col-span-2 lg:mx-10 my-auto ">
            <div>
              <h1 className="text-2xl/tight mb-3">Sign In</h1>
              <p className="text-sm font-medium leading-relaxed">
                We are here to help you and wed love to connect with you.
              </p>
            </div>
            <div className="">
              <form onSubmit={handleLogIn} className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <h2 className=" pb-6">
                No Account?
                <Link className="text-red-600" to="/register">
                  Register
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
