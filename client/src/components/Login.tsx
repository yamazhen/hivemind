import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faX } from "@fortawesome/free-solid-svg-icons";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import LoginInput from "./LoginInput";
import { useState } from "react";
import axios from "axios";

interface Props {
  visible: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const Login = ({ visible = false, onClose, onLogin }: Props) => {
  const [signUpMode, setSignUpMode] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const api = axios.create({
    baseURL: "http://localhost:80",
    withCredentials: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (signUpMode && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const endpoint = signUpMode ? "/api/users/signup" : "/api/users/login";

    try {
      const res = await api.post(endpoint, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        setFormData({ username: "", password: "", confirmPassword: "" });
        onLogin();
      }
    } catch (error: any) {
      console.error(error.response?.data || error.message);
    }
  };
  if (visible) {
    return (
      <section className="fixed z-50 w-full h-full">
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
              <h1 className="text-[1.5rem] mb-2 font-bold">
                {signUpMode ? "Sign Up" : "Log In"}
              </h1>
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
                {signUpMode ? (
                  <>
                    <LoginInput
                      id="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      name="username"
                    >
                      Username
                    </LoginInput>
                    <LoginInput
                      name="password"
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    >
                      Password
                    </LoginInput>
                    <LoginInput
                      name="confirmPassword"
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    >
                      Password
                    </LoginInput>
                    <p className="font-light text-sm">
                      Already have an account?
                      <a
                        className="text-blue-500 cursor-pointer"
                        onClick={() => setSignUpMode(!signUpMode)}
                      >
                        {" "}
                        Log In
                      </a>
                    </p>
                  </>
                ) : (
                  <>
                    <LoginInput
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                    >
                      Email or Username
                    </LoginInput>
                    <LoginInput
                      name="password"
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    >
                      Password
                    </LoginInput>
                    <a href="#" className="text-blue-500 text-sm font-light">
                      Forgot password?
                    </a>
                    <p className="font-light text-sm">
                      New to Hivemind?
                      <a
                        className="text-blue-500 cursor-pointer"
                        onClick={() => setSignUpMode(!signUpMode)}
                      >
                        {" "}
                        Sign Up
                      </a>
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="w-full h-auto items-center text-center mt-8 px-4 sm:px-20 ">
              <button
                type="submit"
                onClick={handleSubmit}
                className={`bg-hiveOrange-normal w-full rounded-full p-3 hover:bg-hiveOrange-darker`}
              >
                {signUpMode ? "Sign Up" : "Log In"}
              </button>
            </div>
          </form>
        </div>
        <span className="w-full block absolute bg-black h-full opacity-50 z-0" />
      </section>
    );
  }
};

export default Login;
