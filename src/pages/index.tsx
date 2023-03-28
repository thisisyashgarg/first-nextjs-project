import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-6xl">Homepage</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
        consequuntur ad vel, quibusdam repudiandae esse dolores earum, sint
        harum excepturi odio repellat optio. Magni harum quod corrupti ex nemo
        enim!
      </p>

      <Link href="/ninjas">See Ninja Listings</Link>
    </div>
  );
}
