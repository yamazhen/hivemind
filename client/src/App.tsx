import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import RightContentMenu from "./components/RightContentMenu";
import HiveBanner from "./components/HiveBanner";
import CreateCommunity from "./components/CreateCommunity";
import api from "./utils/api";

interface AppState {
  isLoggedIn: boolean;
  isInHive: boolean;
  isInPost: boolean;
  isMenuVisible: boolean;
  isLoginMenuVisible: boolean;
  isEllipsisVisible: boolean;
  username?: string;
  isInCreateHive: boolean;
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

  const setIsInHive = (value: boolean) => {
    setState((prevState) => ({
      ...prevState,
      isInHive: value,
      isInPost: !value,
    }));
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
      <Content
        isInPost={state.isInPost}
        hiveProfile="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif"
        postImage="https://wallpapers.com/images/featured/cat-background-b2las0zrosl6anik.jpg"
      />
      <RightContentMenu
        {...{
          isInHive: state.isInHive || state.isInPost,
          isLoggedIn: state.isLoggedIn,
        }}
      />
    </div>
  );

  return (
    <main id="main" style={{ scrollbarGutter: "stable" }}>
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
        clickHive={() => setIsInHive(true)}
        closeMenu={() => toggleState("isMenuVisible")}
      />
      <section className="flex flex-col xl:ml-[300px]">
        {state.isInHive ? (
          <>
            <HiveBanner
              hiveBanner="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4289aa2d-f7a1-4557-a4ce-bddc7171d31f/dfzydb3-fec9e716-17e2-4582-a28b-a2f9923e3b79.jpg/v1/fill/w_1280,h_356,q_75,strp/neon_landscape_ultrawide_wallpaper_by_ultrawidewalls_dfzydb3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvNDI4OWFhMmQtZjdhMS00NTU3LWE0Y2UtYmRkYzcxNzFkMzFmXC9kZnp5ZGIzLWZlYzllNzE2LTE3ZTItNDU4Mi1hMjhiLWEyZjk5MjNlM2I3OS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.AWHwmWFwNw5o0Ncd0WEswZOyfNAy5FsReBp1GLChGn8"
              hiveProfile="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif"
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
