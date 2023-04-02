import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div className="p-8 m-8 space-y-6 items-center flex flex-col text-center">
        <h1 className="">Homepage</h1>
        <p className="w-[80%] ">
          List Ninja is an easy to use list assistant. There is no need for
          creating an account, you just start right away creating lists. Whether
          you are planning a trip to the grocery store, a weekend road trip, or
          learning a new language List Ninja will help you create a list of
          things you want to get or accomplish
        </p>

        <div className="flex space-x-4">
          <Link
            href="/ninjas"
            className="rounded-md border border-blue-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-blue-600 hover:bg-blue-300"
          >
            See Ninja Listings
          </Link>

          <Link
            href="/login"
            className="rounded-md border border-blue-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-blue-600 hover:bg-blue-300"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
