import { Suspense } from "react";
import RenderVideos from "../../../../components/movie-videos";
import RenderMovie, { getMovie } from "../../../../components/movie-info";

interface IParameters {
  params: { id: string };
}
export async function generateMetadata({ params: { id } }: IParameters) {
  const movie = await getMovie(id);
  return {
    title: movie.title
  };
}

export default async function MovieDetail({ params: { id } }: IParameters) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info...</h1>}>
        <RenderMovie id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos...</h1>}>
        <RenderVideos id={id} />
      </Suspense>
    </div>
  );
}
