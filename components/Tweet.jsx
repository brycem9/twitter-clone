import { openCommentModal } from "@/redux/modalSlice";
import {
  ChartBarIcon,
  ChatIcon,
  HeartIcon,
  UploadIcon,
} from "@heroicons/react/outline";

import Moment from "react-moment";
import { useDispatch } from "react-redux";

function Tweet({ data }) {

  const dispatch = useDispatch()


  return (
    <div className="border-b border-[#2F3336]">
      <TweetHeader
        username={data?.username}
        name={data?.username}
        timestamp={data?.timestamp?.toDate()}
        text={data?.tweet}
        photoUrl={data?.photoUrl}
      />

      <div className="p-3 ml-16 flex space-x-14 text-gray-500">
        <div onClick={() => dispatch(openCommentModal())}>
          <ChatIcon className="w-5 cursor-pointer hover:text-green-400" />
        </div>
        <HeartIcon className="w-5 cursor-pointer hover:text-red-400" />
        <ChartBarIcon className="w-5 cursor-pointer " />
        <UploadIcon className="w-5 cursor-pointer " />
      </div>
    </div>
  );
}

export default Tweet;

export function TweetHeader({ username, name, timestamp, text, photoUrl }) {
  return (
    <div className="flex space-x-3 p-3  border-gray-700">
      <img
        className="w-[60px] h-[60px] rounded-full object-cover"
        src={photoUrl}
      />
      <div>
        <div className="flex items-center space-x-2 text-gray-500">
          <h1 className="text-white font-bold">{name}</h1>
          <span>@{username}</span>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <Moment fromNow>{timestamp}</Moment>
        </div>
        <span>{text}</span>
      </div>
    </div>
  );
}
