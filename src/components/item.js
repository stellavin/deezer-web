import { useHistory } from "react-router-dom";

export default function Item({ item }) {
  const history = useHistory();

  const onChangePage = () => {
    history.push(`/artist:${item.artist.id}`);
  };

  return (
    <>
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={item.album.cover_big}
            alt="Front of men&#039;s Basic Tee in black."
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <p className="mt-1 text-sm text-gray-500">
              {item.duration} seconds
            </p>

            <h3 className="text-xl text-gray-700">
              <span aria-hidden="true" className="absolute inset-0"></span>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {item.title}
            </h3>

            <h3 className="text-sm text-gray-700">
              <a href="" onClick={onChangePage}>
                <span aria-hidden="true" className="absolute inset-0"></span>
                <span aria-hidden="true" className="absolute inset-0"></span>
                By {item.artist.name}
              </a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
