import { db, storage } from "@/firebase";
import { openLoginModal } from "@/redux/modalSlice";
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function TweetInput() {
  const user = useSelector((state) => state.user);

  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const filePickerRef = useRef(null);
  const dispatch = useDispatch()

  async function sendTweet() {

    if (!user.username) {
      dispatch(openLoginModal())
      return
    }

    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      username: user.username,
      name: user.name,
      photoUrl: user.photoUrl,
      uid: user.uid,
      timestamp: serverTimestamp(),
      likes: [],
      tweet: text,
    });

    if (image) {
      const imageRef = ref(storage, `tweetImages/${docRef.id}`);
      const uploadimage = await uploadString(imageRef, image, "data_url");
      const downloadURL = await getDownloadURL(imageRef);
      await updateDoc(doc(db, "posts", docRef.id), {
        image: downloadURL,
      });
    }

    setText("");
    setImage(null)
    setLoading(false)
  }

  function addImageToTweet(event) {
    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.addEventListener("load", (event) => {
      setImage(event.target.result);
    });
  }

  return (
    
    <div className="flex space-x-3 p-3 border-b border-[#2F3336]">
      <img
        className="w-[60px] h-[60px] rounded-full object-cover"
        src={
          user.photoUrl || "assets/profilePictures/default_profile_400x400.png"
        }
      />

        {loading && <h1 className="text-2xl text-gray-500">Uploading post...</h1>}

      {!loading && (<div className="w-full">
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="What is happening?!"
          className="bg-transparent resize-none outline-none w-full
        min-h-[50px] text-lg"
        />
        {image && (
          <div className="mb-4 relative">
            <div
              onClick={() => setImage(null)}
              className="absolute top-1 left-1
            bg-[#272c26] rounded-full w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-white hover:bg-opacity-10"
            >
              <XIcon className="h-6" />
            </div>

            <img className="rounded-2xl max-h-80 object-contain" src={image} />
          </div>
        )}

        <div className="flex  justify-between border-t border-[#2F3336] pt-4">
          {/* ICONS DIV */}
          <div className="flex space-x-0">
            <div
              onClick={() => filePickerRef.current.click()}
              className="icon-animation"
            >
              <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <input
              onChange={addImageToTweet}
              ref={filePickerRef}
              className="hidden"
              type="file"
            />
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
            disabled={!text && !image}
            className="bg-[#1d9bf0] rounded-full px-3 transition-all
            disabled:opacity-50"
          >
            Tweet
          </button>
        </div>
      </div>)}
    </div>
  );
}

export default TweetInput;
