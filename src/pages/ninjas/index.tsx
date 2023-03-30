import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

export type UserData = {
  id: 1;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export const getStaticProps = async () => {
  console.log("get static props called ");
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const ninjas: UserData[] = await data.json();
  return {
    props: { ninjas: ninjas },
  };
};

const Ninjas = ({ ninjas }: { ninjas: UserData[] }) => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
      </Head>
      <div className="p-8 m-8 space-y-6 items-center flex flex-col text-center">
        <h1>All Ninjas</h1>
        {ninjas.map((ninja: UserData) => {
          return (
            <Link
              href={`/ninjas/${ninja.id}`}
              className="bg-gray-200 p-3 m-3 "
              key={ninja.id}
            >
              {ninja.name}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Ninjas;
