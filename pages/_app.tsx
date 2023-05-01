import { use, useEffect, useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import routes from "../routes";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;
  const [show, setShow] = useState(false);

  useEffect(() => {
    const guestRoutes = ["/login", "/register"];
    const authRoute = ["/cart", "/wishlist"];
    const token = Cookies.get("token");
    if (!token || token == "") {
      if (authRoute.includes(router.pathname)) {
        router.push("/login");
      }
    } else {
      if (guestRoutes.includes(router.pathname)) {
        router.push("/");
      }
    }
    setShow(true);
  }, [router]);

  if (!show) {
    return null;
  }

  return (
    <div>
      <Topbar></Topbar>
      <Navbar showCarousel={pathname === routes.home}></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}

export default MyApp;
