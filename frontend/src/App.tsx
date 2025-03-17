import AllBlogs from "./component/AllBlogs/AllBlogs";
import Home from "./component/Home/Home";
import { useIsAuthStore } from "./store/isAuthState";

function App() {
  const isAuthenticated = useIsAuthStore((state) => state.isAuth);
  return <>{!isAuthenticated ? <Home /> : <AllBlogs />}</>;
}

export default App;
