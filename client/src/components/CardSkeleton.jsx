import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardSkeleton() {
  return (
    <>
      <div className="flex flex-col rounded-lg w-auto h-96 justify-center items-center p-3 border border-slate-700 m-4">
        <Skeleton width={80} height={60} />
        <div className="">
          <a className="font-bold text-sm "></a>
          <p className="line-clamp-2"></p>
          <a className="text-slate-500 hover:underline">Read more</a>
        </div>
      </div>
    </>
  );
}

export default CardSkeleton;
