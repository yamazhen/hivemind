import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import RightContentMenu from "./components/RightContentMenu";
import HiveBanner from "./components/HiveBanner";
import CreateCommunity from "./components/CreateCommunity";
import api from "./utils/api";
import InPost from "./components/InPost";

interface AppState {
  isLoggedIn: boolean;
  isInHive: boolean;
  isInPost: boolean;
  isMenuVisible: boolean;
  isLoginMenuVisible: boolean;
  isEllipsisVisible: boolean;
  username?: string;
  isInCreateHive: boolean;
  currentHive?: Hive;
}

interface Hive {
  _id: string;
  name: string;
  profilePic?: string;
  desc: string;
  banner?: string;
}

function App() {
  const [state, setState] = useState<AppState>({
    isLoggedIn: localStorage.getItem("token") ? true : false,
    isInHive: false,
    isInPost: false,
    isMenuVisible: false,
    isLoginMenuVisible: false,
    isEllipsisVisible: false,
    username: "",
    isInCreateHive: false,
  });

  const setIsInHive = async (hive: Hive) => {
    try {
      const { data } = await api.get(`/api/hives/getHive/${hive._id}`);
      setState((prevState) => ({
        ...prevState,
        isInHive: true,
        isInPost: false,
        currentHive: { ...hive, ...data },
      }));
    } catch (error: any) {
      console.error(
        "Failed to fetch hive details:",
        error.response?.data || error.message,
      );
    }
  };

  const setIsInPost = (value: boolean) => {
    setState((prevState) => ({
      ...prevState,
      isInPost: value,
      isInHive: !value,
    }));
  };

  const fetchUserData = async () => {
    try {
      const res = await api.get("/api/users/me");
      if (res.status === 200) {
        setState((prevState) => ({
          ...prevState,
          isLoggedIn: true,
          username: res.data.username,
        }));
      }
    } catch (error: any) {
      console.error(error.response?.data || error.message);
    }
  };

  const toggleState = (key: keyof AppState) => {
    setState((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };

  const logout = async () => {
    localStorage.removeItem("token");
    setState((prevState) => ({
      ...prevState,
      isLoggedIn: false,
      username: "",
    }));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserData();
    }

    document.body.style.overflowY = state.isLoginMenuVisible
      ? "hidden"
      : "auto";

    if (state.isEllipsisVisible) {
      setState((prevState) => ({ ...prevState, isMenuVisible: false }));
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [state.isLoginMenuVisible, state.isMenuVisible]);

  const renderContent = () => (
    <div className="flex">
      {state.isInPost ? (
        <InPost
          hiveProfile="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif"
          postImage="https://wallpapers.com/images/featured/cat-background-b2las0zrosl6anik.jpg"
          leavePost={() => toggleState("isInPost")}
        />
      ) : (
        <Content clickPost={() => setIsInPost(true)} />
      )}
      <RightContentMenu
        {...{
          isInHive: state.isInHive || state.isInPost,
          isLoggedIn: state.isLoggedIn,
        }}
      />
    </div>
  );

  return (
    <main id="main">
      <CreateCommunity
        visible={state.isInCreateHive}
        onClose={() => toggleState("isInCreateHive")}
      />
      <Login
        visible={state.isLoginMenuVisible}
        onClose={() => toggleState("isLoginMenuVisible")}
        onLogin={() => {
          fetchUserData();
          toggleState("isLoginMenuVisible");
        }}
      />
      <Navbar
        createPost={() => setIsInPost(true)}
        toggleMenu={() => toggleState("isMenuVisible")}
        toggleLogin={() => toggleState("isLoginMenuVisible")}
        isLoggedIn={state.isLoggedIn}
        userProfilePic="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif"
        logout={logout}
        goHome={() => {
          setState((prevState) => ({
            ...prevState,
            isInHive: false,
            isInPost: false,
          }));
        }}
      />
      <span className="block h-[57px]"></span>
      <Menu
        isVisible={state.isMenuVisible}
        isLoggedIn={state.isLoggedIn}
        openCreateHive={() => toggleState("isInCreateHive")}
        clickHive={setIsInHive}
        closeMenu={() => toggleState("isMenuVisible")}
      />
      <section className="flex flex-col xl:ml-[300px]">
        {state.isInHive && state.currentHive ? (
          <>
            <HiveBanner
              hiveBanner={
                state.currentHive.banner ||
                "https://img.freepik.com/free-photo/digital-art-portrait-adorable-pet-heaven_23-2151478740.jpg"
              }
              hiveProfile={
                state.currentHive.profilePic ||
                "https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif"
              }
              hiveName={state.currentHive.name}
            />
            {renderContent()}
          </>
        ) : (
          <>{renderContent()}</>
        )}
      </section>
    </main>
  );
}

export default App;
