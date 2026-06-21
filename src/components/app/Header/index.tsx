import ArrowDown from "@/assets/icons/ArrowDown.svg?react";
import profilePic from "@/assets/icons/profilePic.jpg";
import Notifiction from "@/assets/icons/Notifiction.svg?react";
import dashboardLogo from "@/assets/icons/dashboardLogo.png";

const Header: React.FC = () => {
  return (
    <div className="h-[60px] bg-white col-span-2 flex justify-between items-center px-15">
      <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
        <img
          src={dashboardLogo}
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" flex justify-between items-center gap-8">
        <div className="relative inline-block">
          <Notifiction />
          <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-red-500 text-white text-[10px] font-bold ">
            5
          </span>
        </div>
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/ogw/AF2bZygF3ttTVH-asVyJYwQGUceLwVczVRgvQDGmuniZYpMmP0=s64-c-mo"
            alt="profile pic"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = profilePic;
            }}
          />
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-bold text-sm text-(--color-text)">
            Elahe Narimani
          </p>
          <p className="font-semibold text-xs text-(--color-secondary)">
            Admin
          </p>
        </div>
        <div>
          <ArrowDown className="text-[#5C5C5C]" />
        </div>
      </div>
    </div>
  );
};
export default Header;
