import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
      </Head>
      <div className="p-8 m-8 space-y-6 items-center flex flex-col text-center">
        <h1>About </h1>
        <p className="w-[80%] ">
          List Ninja is an easy to use list assistant. There is no need for
          creating an account, you just start right away creating lists. Whether
          you are planning a trip to the grocery store, a weekend road trip, or
          learning a new language List Ninja will help you create a list of
          things you want to get or accomplish
        </p>
      </div>
    </>
  );
};

export default About;
