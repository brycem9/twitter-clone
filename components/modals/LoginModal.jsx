import { closeLoginModal, openLoginModal } from "@/redux/modalSlice";
import { Modal } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

function LoginModal() {
  const isOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();
  console.log(isOpen);

  return (
    <>
      <button
        className="bg-transparent border border-white text-white
        w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
        onClick={() => dispatch(openLoginModal())}
      >
        Log In
      </button>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-[90%] h-[600px] border border-gray-700 rounded-lg bg-black text-white md:w-[560px]
    md:h-[600px] flex justify-center"
        >
          <div className="w-[90%] mt-8 flex flex-col">
            <h1 className="text-center mt-4 font-bold text-4xl">
              Sign in to your account
            </h1>
            <input
              className="h-10 rounded-md bg-transparent border border-gray-700
          p-6 mt-8"
              placeholder="Email"
              type={"email"}
            />
            <input
              className="h-10 rounded-md bg-transparent border border-gray-700
          p-6 mt-8"
              placeholder="Password"
              type={"password"}
            />
            <button className="bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md">
              Sign In
            </button>
            <h1 className="text-center mt-8 font-bold text-lg">or</h1>
            <button className="bg-white text-black w-full font-bold text-lg p-2 rounded-md mt-8">
              Sign in as Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default LoginModal;
