const Card = (props) => {
  console.log(props.data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-w-screen">
      {props.data.map((curItem, index) => {
        return (
          <>
            <div className="flex flex-col rounded-lg w-auto h-auto justify-center items-center py-3 px-3 border border-slate-700 m-4">
              <img className="overflow-hidden" src={curItem.urlToImage} />
              <div className="">
                <a className="font-bold text-sm ">{curItem.title}</a>
                <p>{curItem.description}</p>
                <a
                  href={curItem.url}
                  className="text-slate-500 hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Card;
