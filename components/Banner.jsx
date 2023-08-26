import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignupModal";

function Banner() {
  return (
    <div className=" xl:space-x-[200px] fixed w-full h-[80px] bg-[#1d9bf0] bottom-0 flex justify-center items-center">
      <div className="hidden xl:inline text-white">
        <h1 className="text-2xl font-bold">Dont miss whats happening</h1>
        <span className="text-[18px] font-normal">
          People on Twitter are the first to know.
        </span>
      </div>

      <div className="space-x-3">
        <LoginModal />
        <SignupModal />
      </div>
    </div>
  );
}

export default Banner;
