import Post from "./components/Post";
import { client } from "./lib/sanity";

// async function getData() {
//   const query = '*[_type=="tools"]';
//   const data = await client.fetch(query);
//   console.log(data);
//   return data;
// }

export default async function Home() {
  // const data = await getData();
  // console.log(data)
  return <main>
    <Post/>
  </main>;
}
