import { auth } from "@/firebase";
import { closeSignUpModal, openSignUpModal } from "@/redux/modalSlice";
import { setUser } from "@/redux/userSlice";

import { Modal } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function SignupModal() {
  const isOpen = useSelector((state) => state.modals.signUpModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;
      console.log(currentUser);
      dispatch(
        setUser({
          username: currentUser.email.split("@")[0],
          name: null,
          email: currentUser.email,
          uid: currentUser.uid,
          photoUrl: null,
        })
      );
    });

    return unsubscribe;
  });

  return (
    <>
      <button
        className="bg-white border-white text-black
            w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
        onClick={() => dispatch(openSignUpModal())}
      >
        Sign Up
      </button>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignUpModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-[90%] h-[600px] border border-gray-700 rounded-lg bg-black text-white md:w-[560px]
    md:h-[600px] flex justify-center"
        >
          <div className="w-[90%] mt-8 flex flex-col">
            <button className="bg-white text-black w-full font-bold text-lg p-2 rounded-md">
              Sign in as Guest
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <h1 className="text-center mt-4 font-bold text-4xl">
              Create your account
            </h1>
            <input
              className="h-10 rounded-md bg-transparent border border-gray-700
          p-6 mt-8"
              placeholder="Username"
              type="text"
            />
            <input
              className="h-10 rounded-md bg-transparent border border-gray-700
          p-6 mt-8"
              placeholder="Email"
              type={"email"}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              className="h-10 rounded-md bg-transparent border border-gray-700
          p-6 mt-8"
              placeholder="Password"
              type={"password"}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              className="bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md"
              onClick={handleSignUp}
            >
              Create Account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default SignupModal;
