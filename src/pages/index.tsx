import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div className="p-8 m-8 space-y-6 items-center flex flex-col text-center">
        <h1 className="">Homepage</h1>
        <p className="w-[50%] ">
          List Ninja is an easy to use list assistant. There is no need for
          creating an account, you just start right away creating lists. Whether
          you're planning a trip to the grocery store, a weekend road trip, or
          learning a new language List Ninja will help you create a list of
          things you want to get or accomplish
        </p>
        <button className="bg-blue-600 p-4 text-white rounded-md ">
          <Link href="/ninjas">See Ninja Listings</Link>
        </button>
      </div>
    </>
  );
}
