import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon } from "@heroicons/react/outline";

function TweetInput() {
  return (
    <div className="flex space-x-3 p-3 border-b border-gray-700">
      <img
        className="w-[60px] h-[60px] rounded-full object-cover"
        src="/assets/kylie-jenner-instagram.jpg"
      />
      <div className="w-full">
        <textarea placeholder="What's on your mind?" className="bg-transparent resize-none outline-none w-full
        min-h-[50px] text-lg"/>

        
        <div className="flex  justify-between border-t border-gray-700 pt-4">
          {/* ICONS DIV */}
          <div className="flex space-x-0">
            <div className="icon-animation">
              <PhotographIcon className="h-[22px] text-[#1d9bf0]"/>
            </div>
            <div className="icon-animation">
              <ChartBarIcon className="h-[22px] text-[#1d9bf0]"/>
            </div>
            <div className="icon-animation">
              <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]"/>
            </div>
            <div className="icon-animation">
              <CalendarIcon className="h-[22px] text-[#1d9bf0]"/>
            </div>
            <div className="icon-animation">
              <LocationMarkerIcon className="h-[22px] text-[#1d9bf0]"/>
            </div>
          </div> 
          <button className="bg-[#1d9bf0] rounded-full px-3">
              Tweet
            </button>
        </div>
      </div>
    </div>
  );
}

export default TweetInput;
