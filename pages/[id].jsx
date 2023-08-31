import PostsFeed from "@/components/PostsFeed";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import Tweet from "@/components/Tweet";
import TweetInput from "@/components/TweetInput";
import { db } from "@/firebase";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import Moment from "react-moment";
import { useSelector } from "react-redux";

export async function getServerSideProps(context) {
  const id = context.query.id;
  const docRef = doc(db, "posts", id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  const formattedData = {
    username: data.username,
    name: data.name,
    photoUrl: data.photoUrl,
    comments: data.comments || null,
    text: data.tweet,
    timestamp: JSON.stringify(data.timestamp.toDate()),
    image: data.image || null
  };
  return {
    props: {
      tweetData: formattedData,
    },
  };
}

export default function CommentsPage({ tweetData }) {
  const user = useSelector((state) => state.user);
  return (
    <div className="text-white">
      <div
        className="bg-black min-h-screen text-[#e7e9ea] 
    max-w-[1400px] mx-auto flex"
      >
        <Sidebar />

        <div
          className="sm:ml-16 xl:ml-96 max-w-2xl 
    flex-grow border-[#2F3336] border-x"
        >
          <div
            className="px-3 py-2 text-lg sm:text-xl font-bold
      border-b border-[#2F3336] sticky flex space-x-2 top-0 z-50 bg-black bg-opacity-40 backdrop-blur-[12px]"
          >
            <Link href={"/"}>
              <ArrowLeftIcon className="w-7 cursor-pointer" />
            </Link>

            <h1>Tweet</h1>
          </div>
          <div className="border-b border-[#2F3336]">
            <div className="flex space-x-3 p-3  border-gray-700">
              <img
                className="w-[60px] h-[60px] rounded-full object-cover"
                src={tweetData.photoUrl}
              />
              <div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <h1 className="text-white font-bold">{tweetData.name}</h1>
                  <span>@{tweetData.username}</span>
                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  <Moment fromNow>{JSON.parse(tweetData.timestamp)}</Moment>
                </div>
                <span className="text-2xl">{tweetData.text}</span>
                {tweetData.image && <img className="mt-4 rounded-lg object-cover max-h-80 border-[1px] border-[#2F3336]" src={tweetData.image} />}

              </div>
            </div>
          </div>
          <div className="flex justify-between p-2 border-b border-[#2F3336] items-center">
            <div className="flex justify-center items-center p-1 space-x-2">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={user.photoUrl}
              />
              <h2 className="text-2xl text-gray-500">Tweet your reply</h2>
            </div>
            <button
              disabled={true}
              className="bg-[#1d9bf0] rounded-full px-3 transition-all
            disabled:opacity-50 p-1.5"
            >
              Tweet
            </button>
          </div>
          {tweetData.comments?.map((comment) => (
            <div className="border-b border-[#2F3336]">
              <div className="flex space-x-3 p-3  border-gray-700">
                <img
                  className="w-[60px] h-[60px] rounded-full object-cover"
                  src={comment.photoUrl}
                />
                <div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <h1 className="text-white font-bold">{comment.name}</h1>
                    <span>@{comment.username}</span>
                  </div>
                  <span >{comment.comment}</span>
                </div>
              </div>
            </div>
          ))}
        </div> <Trending />
      </div>
     
    </div>
  );
}
