// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/chetan90411")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-zinc-500 text-white p-4 text-3xl flex items-center justify-center flex-col gap-5">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git pictuer" className="w-40" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/chetan90411");
  return response.json();
};
