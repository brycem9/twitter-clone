import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  BellIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="h-full hidden sm:flex flex-col fixed
    xl:ml-24">
      
      <nav className="h-full xl:space-y-1.5 relative">
      <div className="xl:p-3 flex  xl:justify-start justify-center items-center py-3">
        <Image className="invert" src={"/assets/twitter-logo-black-png.png"} width={34} height={34}/>
      </div>
        <SidebarLink Icon={HomeIcon} text={"Home"} />
        <SidebarLink Icon={HashtagIcon} text={"Explore"} />
        <SidebarLink Icon={BellIcon} text={"Notifications"} />
        <SidebarLink Icon={InboxIcon} text={"Messages"} />
        <SidebarLink Icon={BookmarkIcon} text={"Bookmarks"} />
        <SidebarLink Icon={UserIcon} text={"Profile"} />
        <SidebarLink Icon={DotsCircleHorizontalIcon} text={"More"}/>
        <button className="hidden xl:inline bg-[#1d9bf0] rounded-full
        h-[52px] w-[200px] text-lg font-bold">
            Tweet
        </button>
        <div className="absolute bottom-0">User</div>
      </nav>
      
    </div>
  );
}

function SidebarLink({ text, Icon }) {
  return (
    <li className="hover-animation flex mb-3 xl:justify-start justify-center items-center text-xl space-x-3">
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </li>
  );
}
