export default function Album({ item }) {
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
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {item.album.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">2013</p>
          </div>
        </div>
      </div>
    </>
  );
}
