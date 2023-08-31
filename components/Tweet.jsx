import { db } from "@/firebase";
import {
  openCommentModal,
  openLoginModal,
  setCommentTweet,
} from "@/redux/modalSlice";
import {
  ChartBarIcon,
  ChatIcon,
  HeartIcon,
  TrashIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/solid";
import {
  arrayRemove,
  arrayUnion,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";

function Tweet({ data, id }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);

  async function deleteTweet(event) {
    event.stopPropagation();
    await deleteDoc(doc(db, "posts", id));
  }

  async function likeComment(event) {
    event.stopPropagation();
    if (!user.username) {
      dispatch(openLoginModal());
      return;
    }
    if (likes.includes(user.uid)) {
      await updateDoc(doc(db, "posts", id), {
        likes: arrayRemove(user.uid),
      });
    } else {
      await updateDoc(doc(db, "posts", id), {
        likes: arrayUnion(user.uid),
      });
    }
  }

  useEffect(() => {
    if (!id) return;
    const unsubscribe = onSnapshot(doc(db, "posts", id), (doc) => {
      setLikes(doc.data()?.likes);
      setComments(doc.data()?.comments);
    });
    return unsubscribe;
  }, []);

  return (
    <div
      onClick={() => router.push("/" + id)}
      className="border-b border-[#2F3336] cursor-pointer"
    >
      <TweetHeader
        username={data?.username}
        name={data?.username}
        timestamp={data?.timestamp?.toDate()}
        text={data?.tweet}
        photoUrl={data?.photoUrl}
        image={data?.image}
      />

      <div className="p-3 ml-16 flex space-x-14 text-gray-500">
        <div
          className="flex justify-center items-center space-x-2"
          onClick={(event) => {
            event.stopPropagation();
            if (!user.username) {
              dispatch(openLoginModal());
              return;
            }
            dispatch(openCommentModal());
            dispatch(
              setCommentTweet({
                id: id,
                photoUrl: data?.photoUrl,
                name: data?.name,
                username: data?.username,
                tweet: data?.tweet,
              })
            );
          }}
        >
          <ChatIcon className="w-5 cursor-pointer hover:text-green-400" />
          {comments?.length > 0 && <span>{comments.length}</span>}
        </div>
        <div
          className="flex justify-center items-center space-x-2"
          onClick={likeComment}
        >
          {likes.includes(user.uid) ? (
            <FilledHeartIcon className="w-5 text-red-500" />
          ) : (
            <HeartIcon className="w-5 cursor-pointer hover:text-red-400" />
          )}
          {likes.length > 0 && <span>{likes.length}</span>}
        </div>
        {user.uid === data?.uid && (
          <div
            onClick={deleteTweet}
            className="cursor-pointer hover:text-[#1d9bf0]"
          >
            <TrashIcon className="w-5" />
          </div>
        )}
        <ChartBarIcon className="w-5 cursor-pointer " />
        <UploadIcon className="w-5 cursor-pointer " />
      </div>
    </div>
  );
}

export default Tweet;

export function TweetHeader({
  username,
  name,
  timestamp,
  text,
  photoUrl,
  image,
}) {
  return (
    <div className="flex space-x-3 p-3  border-gray-700">
      <img
        className="w-[60px] h-[60px] rounded-full object-cover"
        src={photoUrl || "assets/profilePictures/default_profile_400x400.png"}
      />
      <div>
        <div className="flex text-gray-500">
          <div className="flex items-center space-x-1">
            {" "}
            <h1 className="text-white font-bold">{name}</h1>
            <span>@{username}</span>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <Moment fromNow>{timestamp}</Moment>
          </div>
        </div>
        <span>{text}</span>

        {image && (
          <img
            className="mt-4 rounded-lg object-cover max-h-80 border-[1px] border-[#2F3336]"
            src={image}
          />
        )}
      </div>
    </div>
  );
}
