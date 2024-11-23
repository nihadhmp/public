import PropTypes from "prop-types";
const Card = (props) => {
  console.log(props.data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-w-screen">
      {props.data.map((curItem) => {
        return (
          <>
            <div className="flex flex-col rounded-lg w-auto h-96 justify-center items-center p-3 border border-slate-700 m-4">
              <img
                className="overflow-hidden max-w-80 h-60"
                src={curItem.urlToImage}
                alt="thumbnile"
              />
              <div className="">
                <a className="font-bold text-sm ">{curItem.title}</a>
                <p className="line-clamp-2">{curItem.description}</p>
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
Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
