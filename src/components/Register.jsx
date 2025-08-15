import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contextApi/UserContext";
import { Eye, EyeOff } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import logo_white from "../../public/logo-white.png";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const { registerUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (email && password) {
      registerUser(email, password);
      setEmail("");
      setPassword("");
    } else {
      toast.error("Enter email and password", { toastId: "register-error" });
    }
  };

  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <nav className="h-16 w-full bg-[#111] p-4">
        <img src={logo_white} className="w-40 h-8" />
      </nav>
      <div className="flex flex-col lg:flex-row min-h-screen w-full">
        <div className="bg-website-bg bg-cover lg:w-1/2 h-full lg:h-screen hidden lg:block">
          <div className="absolute bottom-0 left-0 bg-[#3f465980] text-white text-xl backdrop-blur-sm shadow-2xl p-28 w-1/2">
            <p className="font-semibold font-poppins">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <form
          className="bg-slate-50 flex flex-col gap-6 justify-start items-center py-44 lg:py-2 xl:py-36 px-6 min-h-screen lg:min-h-full w-full lg:w-1/2 border-[1px] border-gray-300 shadow-md"
          onSubmit={handleRegister}
        >
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
          />
          <div className="summary flex flex-col items-start justify-center p-7 bg-[#FeF4D7] h-auto rounded-lg w-full max-w-lg">
            <p className="text-[#665937] font-bold">Mediaboom</p>
            <div className="flex gap-1">
              <p className="text-[#665937]">
                Hotel Marketing Agency That Converts
              </p>
              <p className="text-[#665937] font-bold">
                An Immersive Experience{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start w-full max-w-lg">
            <label
              htmlFor="email"
              className="font-bold text-[#989a95] text-sm mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-[1px] rounded-md border-gray-300 w-full max-w-lg p-2  focus:ring focus:ring-blue-200"
            />
            <p className="text-xs text-gray-500 mt-1">
              Enter the email address associated with your account.
            </p>
          </div>

          <div className="flex flex-col items-start w-full max-w-lg">
            <label
              htmlFor="password"
              className="font-bold text-[#989a95] text-sm mb-2"
            >
              Password
            </label>
            <div className="relative w-full max-w-lg">
              <input
                type={showPass ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-[1px] pr-12 rounded-md border-gray-300 w-full max-w-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute inset-y-0 right-2 flex items-center text-[#54564e] hover:text-gray-700"
              >
                {showPass ? <Eye size={24} /> : <EyeOff size={24} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="rounded-3xl w-full max-w-lg p-2 text-[#989a95] font-medium bg-[#edeee7] hover:bg-[#e0bc75] hover:text-[#333] transition-all ease-in-out duration-500"
          >
            Create your account
          </button>

          <Link
            to="/login"
            className="text-[#333] underline hover:text-[#e0bc75]"
          >
            Already have an account? Login here
          </Link>
        </form>
      </div>
    </>
  );
};

export default Register;
