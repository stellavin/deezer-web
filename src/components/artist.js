export default function Artist({ tackList }) {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-thin tracking-tight text-gray-900 sm:text-4xl">
              Burna Boy
            </h2>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-thin tracking-tight text-gray-900 sm:text-4xl">
              Top Tracks
            </h2>

            <ul role="list" className="divide-y divide-gray-200">
              {tackList.map((data, index) => (
                <li className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <div className="flex justify-between space-x-3">
                    <div className="min-w-0 flex-1">
                      <a href="#" className="block focus:outline-none">
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {index + 1}. {data.title}
                        </p>
                      </a>
                    </div>
                    <time
                      dateTime="2021-01-27T16:35"
                      className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                    >
                      {data.duration} Seconds
                    </time>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
