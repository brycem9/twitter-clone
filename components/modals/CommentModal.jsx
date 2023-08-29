import { closeCommentModal } from "@/redux/modalSlice";
import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, XIcon } from "@heroicons/react/outline";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function CommentModal() {
  const isOpen = useSelector((state) => state.modals.commentModalOpen);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        className="flex items-center justify-center bg-blue-300 bg-opacity-30 "
        open={isOpen}
        onClose={() => dispatch(closeCommentModal())}
      >
        <div className="rounded-xl bg-black w-full h-full sm:w-[500px] sm:h-[300px] border-black sm:p-1">
          <div className="p-3">
            <XIcon
              onClick={() => dispatch(closeCommentModal())}
              className="w-[24px] text-white cursor-pointer"
            />
          </div>
          <div className="p-3">
            <div className="flex space-x-3">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src="\assets\travis-scott.jpg"
              />
              <div>
                <div className="flex space-x-1.5">
                  <h1 className="text-white font-bold">TRAVIS SCOTT</h1>
                  <h1 className="text-gray-500">@trvisXX</h1>
                </div>
                <p className="text-white mt-1">BRING THE RAGE</p>
                <h1 className="text-gray-500">
                  replying to <span className="text-[#1b9bf0]">@trvisXX</span>
                </h1>
              </div>
            </div>
            <div className="flex space-x-3 mt-8">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src="\assets\travis-scott.jpg"
              />
              <div className="w-full">
                <textarea
                  placeholder="Tweet your reply"
                  className="w-full bg-transparent resize-none outline-none text-white text-lg
                  "
                />
              </div>
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
              
              <button>Tweet</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
