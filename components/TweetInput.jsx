import { db } from "@/firebase";
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useSelector } from "react-redux";

function TweetInput() {
  const user = useSelector((state) => state.user);

  const [text, setText] = useState("");

  async function sendTweet() {
    const docRef = await addDoc(collection(db, "posts"), {
      username: user.username,
      name: user.name,
      photoUrl: user.photoUrl,
      uid: user.uid,
      timestamp: serverTimestamp(),
      likes: [],
      tweet: text,
    });
    setText("")
  }   

  return (
    <div className="flex space-x-3 p-3 border-b border-[#2F3336]">
      <img
        className="w-[60px] h-[60px] rounded-full object-cover"
        src={user.photoUrl}
      />
      <div className="w-full">
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="What is happening?!"
          className="bg-transparent resize-none outline-none w-full
        min-h-[50px] text-lg"
        />

        <div className="flex  justify-between border-t border-[#2F3336] pt-4">
          {/* ICONS DIV */}
          <div className="flex space-x-0">
            <div className="icon-animation">
              <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="icon-animation">
              <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="icon-animation">
              <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="icon-animation">
              <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="icon-animation">
              <LocationMarkerIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
          </div>
          <button
            onClick={sendTweet}
            disabled={!text}
            className="bg-[#1d9bf0] rounded-full px-3 transition-all
            disabled:opacity-50"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetInput;
