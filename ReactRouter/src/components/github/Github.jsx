import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/anikadhikari7")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);

  return (
    <div className=" rounded-lg shadow-lg m-4 p-4 bg-gray-500 text-white text-3xl">
      <div className="flex flex-row items-center justify-start">
        <img
          className="m-4 self-start rounded-lg w-[300px] shadow-lg"
          src={data.avatar_url}
          alt="github avatar"
        />
        <div className="flex m-4">
          Name: {data.name} <br />
          Github follwers: {data.followers} <br />
          Github following: {data.following} <br />
          
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const data = await fetch("https://api.github.com/users/anikadhikari7");
  return data.json();
};
