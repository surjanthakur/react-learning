import { useLoaderData } from 'react-router-dom';

export default function Github() {
  const data = useLoaderData();
  return (
    <>
      <div className=" p-10 bg-amber-600">
        <h1 className="text-5xl">github followers:{data.followers} </h1>
        <h2 className="mt-2 text-2xl">bio: {data.bio}</h2>
        <br></br>
        <img src={data.avatar_url} alt="image"></img>
      </div>
    </>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/surjanthakur');
  return response.json();
};
