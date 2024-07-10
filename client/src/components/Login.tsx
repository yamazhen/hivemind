import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faX } from "@fortawesome/free-solid-svg-icons";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import LoginInput from "./LoginInput";

interface Props {
  visible: boolean;
  onClose: () => void;
}

const Login = ({ visible = false, onClose }: Props) => {
  return (
    // TODO: Finish implementing + finish implementing login visible method

    <section
      className={`fixed z-50 w-full h-full ${visible ? "block" : "hidden"}`}
    >
      <div className="absolute z-10 flex w-full h-full justify-center items-center">
        <form
          action=""
          className="bg-zinc-900 py-6 w-[528px] font-sans max-sm:w-full max-sm:h-full sm:rounded-xl"
        >
          <div className="flex justify-end items-center w-full px-4 sm:px-6 mb-2">
            <div
              className="bg-zinc-700 py-2 px-2.5 rounded-full items-center flex justify-center hover:bg-zinc-600 cursor-pointer"
              onClick={onClose}
            >
              <FontAwesomeIcon icon={faX} />
            </div>
          </div>
          <div className="h-auto overflow-y-auto px-20 max-sm:px-4">
            <h1 className="text-[1.5rem] mb-2">Log In</h1>
            <p className="text-[0.85rem] font-light mb-3">
              By continuing, you agree to our User Agreement and acknowledge
              that you understand the Privacy Policy.
            </p>
            <div className="gap-3 flex-col flex mb-3">
              <div className="login-method-btn">
                <FontAwesomeIcon icon={faPhone} />
                <p>Continue with phone number</p>
              </div>
              <div className="login-method-btn">
                <FontAwesomeIcon icon={faGoogle} />
                <p>Continue with Google</p>
              </div>
              <div className="login-method-btn">
                <FontAwesomeIcon icon={faApple} />
                <p>Continue with Apple</p>
              </div>
            </div>
            <div className="flex justify-between w-full items-center gap-4">
              <hr className="flex-grow border-t-1 border-zinc-600" />
              <p className="font-sans text-xs text-zinc-400">OR</p>
              <hr className="border-t-1 border-zinc-600 flex-grow" />
            </div>
            <div className="mt-3 flex-col flex gap-3 mb-4">
              <LoginInput tag="username">Email or Username</LoginInput>
              <LoginInput tag="password">Password</LoginInput>
            </div>
            <a href="#" className="text-blue-500 text-sm font-light">
              Forgot password?
            </a>
            <p className="font-light text-sm">
              New to Hivemind?
              <a href="#" className="text-blue-500">
                {" "}
                Sign Up
              </a>
            </p>
          </div>
          <div className="w-full h-auto items-center text-center mt-8 px-4 sm:px-20 ">
            <button
              type="submit"
              //TODO: make the function so that the login button is only orange when theres value in both username and password input box
              className={`bg-hiveOrange-normal w-full rounded-full p-3 hover:bg-hiveOrange-darker`}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
      <span className="w-full block absolute bg-black h-full opacity-50 z-0" />
    </section>
  );
};

export default Login;
