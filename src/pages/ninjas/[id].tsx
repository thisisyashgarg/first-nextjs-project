import Head from "next/head";
import { UserData } from ".";

type Context = {
  params: {
    id: string;
  };
};

export async function getStaticPaths() {
  console.log("get static paths called ");
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const ninjas: UserData[] = await data.json();

  const paths = ninjas.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: Context) {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data: UserData = await res.json();

  return {
    props: { ninja: data },
  };
}

const Details = ({ ninja }: { ninja: UserData }) => {
  return (
    <>
      <Head>
        <title>Ninja List | {ninja.name}</title>
      </Head>
      <div className="p-8 m-8 space-y-6 items-center flex flex-col text-center">
        <h1 className="ext-3xl font-bold">{ninja.name}</h1>
        <p>Email - {ninja.email}</p>
        <p>City - {ninja.address.city}</p>
      </div>
    </>
  );
};

export default Details;
