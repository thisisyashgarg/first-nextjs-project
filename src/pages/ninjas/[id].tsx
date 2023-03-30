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
    <div className="p-8 m-8 space-y-6 items-center flex flex-col text-center">
      <h1 className="text-3xl">{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;
