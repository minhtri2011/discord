import { Drawer } from "antd";
import { loginSuccess } from "feature/loginReducer";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { ImMenu } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import DiscordIcon from "./svg/discord";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        console.log(result.user);
        const { uid, displayName, email, photoURL, accessToken } = result.user;
        dispatch(
          loginSuccess({ uid, displayName, email, photoURL, accessToken })
        );
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData?.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
        // ...
      });
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <nav className="h-[80px] containerCustom mx-auto flex items-center justify-between relative z-[1]">
      <Link to="/">
        <DiscordIcon />
      </Link>
      <div className="xl:flex text-base grow text-center justify-center hidden">
        <Link className="text-white px-[10px] font-semibold mx-[10px]" to="/he">
          Download
        </Link>
        <Link className="text-white px-[10px] font-semibold mx-[10px]" to="/he">
          Nitro
        </Link>
        <Link className="text-white px-[10px] font-semibold mx-[10px]" to="/he">
          Discover
        </Link>
        <Link className="text-white px-[10px] font-semibold mx-[10px]" to="/he">
          Safety
        </Link>
        <Link className="text-white px-[10px] font-semibold mx-[10px]" to="/he">
          Support
        </Link>
        <Link className="text-white px-[10px] font-semibold mx-[10px]" to="/he">
          Blog
        </Link>
        <Link className="text-white px-[10px] font-semibold mx-[10px]" to="/he">
          Careers
        </Link>
      </div>
      <div className="w-[124px] flex justify-end">
        <button
          className="inline-flex items-center rounded-full bg-white text-black px-[16px] py-[7px] text-sm leading-[24px]"
          onClick={handleClick}
        >
          Login
        </button>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="ml-4 xl:hidden cursor-pointer"
        >
          <path
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.3327 10H6.66602V15H33.3327V10ZM6.66602 18.3317H33.3327V23.3317H6.66602V18.3317ZM6.66602 26.665H33.3327V31.665H6.66602V26.665Z"
          ></path>
        </svg>
        <button
          onClick={showDrawer}
          className="cursor-pointer [&>svg]:fill-white [&>svg]:h-10 [&>svg]:w-10 [&>svg]:p-1"
        >
          <ImMenu />
        </button>
        <Drawer
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
          key="right"
          width={330}
          className="[&>.ant-drawer-content-wrapper>.ant-drawer-content]:bg-transparent"
          bodyStyle={{
            borderRadius: "8px 0 0 8px",
            backgroundColor: "#fff",
          }}
        >
          <DiscordIcon dark />
          <IoClose className="fixed right-6 top-6 w-6 h-6" />
          <hr className="mt-6 mb-4" />
          <nav>
            <button className="w-full text-left leading-7 py-[6px] px-4 block text-[16px] cursor-pointer rounded-lg bg-[#f6f6f6] text-blue-400">
              Home
            </button>
            <button className="w-full text-left leading-7 py-[6px] px-4 block text-[16px] cursor-pointer rounded-lg">
              Download
            </button>
            <button className="w-full text-left leading-7 py-[6px] px-4 block text-[16px] cursor-pointer rounded-lg">
              Nitro
            </button>
            <button className="w-full text-left leading-7 py-[6px] px-4 block text-[16px] cursor-pointer rounded-lg">
              Discover
            </button>
            <button className="w-full text-left leading-7 py-[6px] px-4 block text-[16px] cursor-pointer rounded-lg">
              Safety
            </button>
            <button className="w-full text-left leading-7 py-[6px] px-4 block text-[16px] cursor-pointer rounded-lg">
              Mod Acodemy
            </button>
            <button className="w-full text-left leading-7 py-[6px] px-4 block text-[16px] cursor-pointer rounded-lg">
              Support
            </button>
            <button className="w-full text-left leading-7 py-[6px] px-4 block text-[16px] cursor-pointer rounded-lg">
              Blog
            </button>
            <button className="w-full text-left leading-7 py-[6px] px-4 block text-[16px] cursor-pointer rounded-lg">
              Careers
            </button>
          </nav>
        </Drawer>
      </div>
    </nav>
  );
};

export default Header;
