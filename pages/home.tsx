import { NextPage } from "next";
import Image from "next/image";
const Home: NextPage = () => {
  return (
    <div className="col-md-6 px-xl-0 text-center text-md-right">
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
};

export default Home;
