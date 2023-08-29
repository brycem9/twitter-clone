import { auth } from "@/firebase";
import { closeLoginModal, closeSignUpModal } from "@/redux/modalSlice";
import { signOutUser } from "@/redux/userSlice";
import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  BellIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  async function handleSignOut() {
    await signOut(auth);
    dispatch(signOutUser());
    dispatch(closeSignUpModal());
    dispatch(closeLoginModal())
  }
  return (
    <div
      className="h-full  hidden sm:flex flex-col fixed
    xl:ml-24 pb-3"
    >
      <nav className="h-full xl:space-y-1.5 space-x-1.5 relative ">
        <div className="xl:p-3 flex  xl:justify-start justify-center items-center py-3">
          <Image
            className="invert"
            src={"/assets/twitter-logo-black-png.png"}
            width={34}
            height={34}
          />
        </div>
        <SidebarLink Icon={HomeIcon} text={"Home"} />
        <SidebarLink Icon={HashtagIcon} text={"Explore"} />
        <SidebarLink Icon={BellIcon} text={"Notifications"} />
        <SidebarLink Icon={InboxIcon} text={"Messages"} />
        <SidebarLink Icon={BookmarkIcon} text={"Bookmarks"} />
        <SidebarLink Icon={UserIcon} text={"Profile"} />
        <SidebarLink Icon={DotsCircleHorizontalIcon} text={"More"} />
        <button
          className="hidden xl:inline bg-[#1d9bf0] rounded-full
        h-[52px] w-[200px] text-lg font-bold"
        >
          Tweet
        </button>
        <div
          onClick={handleSignOut}
          className="absolute flex  items-center xl:p-3 p-0.5 xl:w-[275px] justify-between space-x-3 hover:bg-white hover:bg-opacity-10 transition duration-150 ease-out rounded-full cursor-pointer bottom-0"
        >
          <div className="flex items-center space-x-3">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={user.photoUrl || "/assets/kylie-jenner-instagram.jpg"}
            />
            <div className="hidden xl:inline">
              <h1 className="font-bold">{user.name}</h1>
              <h1 className="text-gray-500">@{user.username}</h1>
            </div>
          </div>

          <DotsHorizontalIcon className="h-5 hidden xl:inline" />
        </div>
      </nav>
    </div>
  );
}

function SidebarLink({ text, Icon }) {
  return (
    <li className="hover-animation transition duration-150 ease-out flex mb-3 xl:justify-start justify-center items-center text-xl space-x-3">
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </li>
  );
}
