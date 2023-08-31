import { db } from "@/firebase";
import { closeCommentModal } from "@/redux/modalSlice";
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Modal } from "@mui/material";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CommentModal() {
  const isOpen = useSelector((state) => state.modals.commentModalOpen);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const tweetDetails = useSelector((state) => state.modals.commentTweetDetails);
  const [comment, setComment] = useState("");
  const router = useRouter();

  async function sendComment() {
    const docRef = doc(db, "posts", tweetDetails.id);
    const commentDetails = {
      username: user.username,
      name: user.name,
      photoUrl: user.photoUrl,
      comment: comment,
    };
    await updateDoc(docRef, {
      comments: arrayUnion(commentDetails),
    });

    dispatch(closeCommentModal());
    router.push("/" + tweetDetails.id);
  }

  return (
    <>
      <Modal
        className="flex items-center justify-center bg-blue-300 bg-opacity-30 "
        open={isOpen}
        onClose={() => dispatch(closeCommentModal())}
      >
        <div className="rounded-xl bg-black w-full h-full sm:w-[600px] sm:h-[386px] border-black text-white sm:p-10 p-4 relative">
          <div className="absolute w-[2px] h-[65px] bg-gray-700 sm:left-[64px] sm:top-[130px] left-[40px] top-[104px]"></div>
          <div className="mt-10">
            <XIcon
              onClick={() => dispatch(closeCommentModal())}
              className="w-6 absolute sm:top-8 Sm:left-[38px] top-3 cursor-pointer "
            />
          </div>
          <div>
            <div className="flex space-x-3">
              <img
                className="w-11 h-11 object-cover rounded-full "
                src={tweetDetails?.photoUrl}
              />

              <div>
                <div className="flex space-x-1.5">
                  <h1 className="font-bold ">{tweetDetails.name}</h1>
                  <h1 className="text-gray-500">@{tweetDetails.username}</h1>
                </div>
                <p className="mt-1 ">{tweetDetails.tweet}</p>
                <h1 className="text-gray-500 text-[15px] mt-2">
                  Replying to{" "}
                  <span className="text-[#1b9bf0]">
                    @{tweetDetails.username}
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-11">
            <div className="flex space-x-3">
              <img
                className="w-11 h-11 object-cover rounded-full "
                src={user.photoUrl}
              />

              <div className="w-full">
                <textarea
                  placeholder="Tweet your reply"
                  className="w-full bg-transparent resize-none outline-none text-lg"
                  onChange={(event) => setComment(event.target.value)}
                />

                <div className="flex justify-between border-t border-gray-700 pt-4">
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
                    className="bg-[#1d9bf0] rounded-full px-3 transition-all
            disabled:opacity-50"
                    disabled={!comment}
                    onClick={sendComment}
                  >
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
