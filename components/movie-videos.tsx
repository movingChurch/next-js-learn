import { API_URL } from "../app/constants";

async function GetVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function RenderVideos({ id }: { id: string }) {
  const videos = await GetVideos(id);
  // throw new Error("This is an error");
  return <h6>{JSON.stringify(videos)} </h6>;
}
