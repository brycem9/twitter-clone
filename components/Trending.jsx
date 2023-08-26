import { DotsHorizontalIcon, SearchIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";

function Trending() {
  return (
    <div className=" hidden px-3 lg:flex flex-col mt-3">
      
      <div
        className="flex  space-x-3 bg-[#202327]
        w-[300px] h-[44px] p-3 rounded-3xl"
      >
        <SearchIcon className="w-6 text-gray-600" />
        <input
          className="bg-transparent
          focus:outline-none placeholder:text-gray-600"
          type="text"
          placeholder="Search Twitter"
        />
      </div>
      <div className="w-[300px] h-[500px] bg-[#16181C] rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">Whats Happening</h1>
        <div className="p-3 relative hover-animation2">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">China</h1>
          <p className="text-xs text-gray-500">340K Tweets</p>
        </div>
        <div className="p-3 relative hover-animation2">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">China</h1>
          <p className="text-xs text-gray-500">340K Tweets</p>
        </div>
        <div className="p-3 relative hover-animation2">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">China</h1>
          <p className="text-xs text-gray-500">340K Tweets</p>
        </div>
        <div className="p-3 relative hover-animation2">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">China</h1>
          <p className="text-xs text-gray-500">340K Tweets</p>
        </div>
        <div className="p-3 relative hover-animation2">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Music · Trending</p>
          <h1 className="text-[15px] font-bold">Brent Faiyaz</h1>
          <p className="text-xs text-gray-500">2.3K Tweets</p>
        </div>
        
      </div>
      <div className="w-[300px] h-[300px] bg-[#16181C]  rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">Who to Follow</h1>

        <div className="flex justify-between p-3 hover-animation2">
          <div className="flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="assets/kendall.jpg"
            />
            <div>
              <div className="flex space-x-1 items-center">
                <h1 className="font-bold">Kendall Jenner</h1>
                <img
                  className="w-[18px] h-[18px] space-x-1"
                  src="/assets/badge.png"
                />
              </div>
              <h1 className="text-[12px] text-gray-500 mt-0.5">
                @kendalljenner
              </h1>
            </div>
          </div>
          <button className="bg-white text-black w-[75px] h-8 rounded-3xl font-bold">
            Follow
          </button>
        </div>
        <div className="flex justify-between p-3 hover-animation2">
          <div className="flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="assets/kim-k.avif"
            />
            <div>
              <div className="flex space-x-1 items-center">
                <h1 className="font-bold">Kim Kardashian</h1>
                <img
                  className="w-[18px] h-[18px] space-x-1"
                  src="/assets/badge.png"
                />
              </div>
              <h1 className="text-[12px] text-gray-500 mt-0.5">
                @kimkardashian
              </h1>
            </div>
          </div>
          <button className="bg-white text-black w-[75px] h-8 rounded-3xl font-bold">
            Follow
          </button>
        </div>
        <div className="flex justify-between p-3 hover-animation2">
          <div className="flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="assets/travis-scott.jpg"
            />
            <div>
              <div className="flex space-x-1 items-center">
                <h1 className="font-bold">TRAVIS SCOTT</h1>
                <img
                  className="w-[18px] h-[18px] space-x-1"
                  src="/assets/badge.png"
                />
              </div>
              <h1 className="text-[12px] text-gray-500 mt-0.5">
              @trvisXX
              </h1>
            </div>
          </div>
          <button className="bg-white text-black w-[75px] h-8 rounded-3xl font-bold">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trending;
