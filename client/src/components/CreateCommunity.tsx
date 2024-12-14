import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginInput from "./LoginInput";
import { useState } from "react";
import api from "../utils/api";

interface Props {
  visible: boolean;
  onClose: () => void;
}

const CreateCommunity = ({ visible, onClose }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/hives/create", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 201) {
        setFormData({ name: "", desc: "" });
        onClose();
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
              <h1 className="text-[1.5rem] mb-8 font-bold">
                Create a Community
              </h1>
              <div className="mt-3 flex-col flex gap-3 mb-4">
                <LoginInput
                  id="hiveName"
                  value={formData.name}
                  name="name"
                  onChange={handleInputChange}
                >
                  Name
                </LoginInput>
                <LoginInput
                  id="hiveDesc"
                  value={formData.desc}
                  name="desc"
                  onChange={handleInputChange}
                >
                  Description
                </LoginInput>
              </div>
            </div>
            <div className="w-full h-auto items-center text-center my-8 px-4 sm:px-20 ">
              <button
                type="submit"
                onClick={handleSubmit}
                className={`bg-hiveOrange-normal w-full rounded-full p-3 hover:bg-hiveOrange-darker`}
              >
                Create
              </button>
            </div>
          </form>
        </div>
        <span className="w-full block absolute bg-black h-full opacity-50 z-0" />
      </section>
    );
  }
};

export default CreateCommunity;
