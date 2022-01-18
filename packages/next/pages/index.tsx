import type { NextPage } from "next";
import Layout from "@/components/layout/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">NextJs</span>{" "}
            <span className="block text-indigo-600 xl:inline">HardHat</span>
          </h1>
        </div>
      </Layout>
    </>
  );
};

export default Home;
