import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Feature from "../components/Feature";
import Category from "../components/Category";
import Offer from "../components/Offer";
import Products from "../components/Products";
import Subscribe from "../components/Subscribe";
import Vendor from "../components/Vendor";
import Modal from "../components/Modal";

const Home: NextPage = () => {
  return (
    <div>
      {/* <Feature></Feature>
      <Category></Category> */}
      {/* <Offer></Offer> */}
      <Products></Products>
      <Subscribe></Subscribe>
      {/* <Products></Products> */}
      {/* <Vendor></Vendor> */}
    </div>
  );
};

export default Home;
