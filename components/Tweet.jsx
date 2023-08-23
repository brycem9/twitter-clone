import { ChartBarIcon, ChatIcon, HeartIcon, UploadIcon } from "@heroicons/react/outline";

function Tweet() {
  return (
    <div className="border-b border-gray-700">
      <TweetHeader />
      <div className="p-3 ml-16 flex space-x-14 text-gray-500">
        <ChatIcon className="w-5 cursor-pointer hover:text-green-400"/>
        <HeartIcon className="w-5 cursor-pointer hover:text-red-400"/>
        <ChartBarIcon className="w-5 cursor-pointer "/>
        <UploadIcon className="w-5 cursor-pointer "/>
      </div>
    </div>
  );
}

export default Tweet;

export function TweetHeader() {
  return (
    <div className="flex space-x-3 p-3  border-gray-700">
      <img
        className="w-[60px] h-[60px] rounded-full object-cover"
        src="/assets/kylie-jenner-instagram.jpg"
      />
     <div>
        <div className="flex items-center space-x-2 text-gray-500">
            <span>@kyliejenner</span>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <span>2 hours ago</span>
        </div>
        <span>Tweet</span>
     </div>
    </div>
  );
}
