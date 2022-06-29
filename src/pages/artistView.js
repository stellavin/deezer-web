import { useEffect, useState } from "react";
import Slider from "../components/slider";
import Album from "../components/album";
import Artist from "../components/artist";
import Header from "../components/header";
import axios from "axios";

export default function ArtistPage() {
  const [loaded, setLoaded] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbum] = useState();
  const [loaded2, setLoaded2] = useState(false);

  let testTrackList = [
    {
      id: 70876783,
      readable: true,
      title: "The Darkest Nights",
      title_short: "The Darkest Nights",
      title_version: "",
      link: "https://www.deezer.com/track/70876783",
      duration: 231,
      rank: 312153,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        "https://cdns-preview-6.dzcdn.net/stream/c-660e7b4179512b77f17da9e00a178df0-3.mp3",
      contributors: [
        {
          id: 3823,
          name: "As I Lay Dying",
          link: "https://www.deezer.com/artist/3823",
          share:
            "https://www.deezer.com/artist/3823?utm_source=deezer&utm_content=artist-3823&utm_term=0_1656512306&utm_medium=web",
          picture: "https://api.deezer.com/artist/3823/image",
          picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/f8aedcc96a1d6341378970edc00fabe7/56x56-000000-80-0-0.jpg",
          picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/f8aedcc96a1d6341378970edc00fabe7/250x250-000000-80-0-0.jpg",
          picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/f8aedcc96a1d6341378970edc00fabe7/500x500-000000-80-0-0.jpg",
          picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/f8aedcc96a1d6341378970edc00fabe7/1000x1000-000000-80-0-0.jpg",
          radio: true,
          tracklist: "https://api.deezer.com/artist/3823/top?limit=50",
          type: "artist",
          role: "Main",
        },
      ],
      md5_image: "a2a1ee4ec46e22a29bab053077e4416f",
      artist: {
        id: 3823,
        name: "As I Lay Dying",
        tracklist: "https://api.deezer.com/artist/3823/top?limit=50",
        type: "artist",
      },
      album: {
        id: 6958385,
        title: "Shadows Are Security",
        cover: "https://api.deezer.com/album/6958385/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/a2a1ee4ec46e22a29bab053077e4416f/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/a2a1ee4ec46e22a29bab053077e4416f/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/a2a1ee4ec46e22a29bab053077e4416f/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/a2a1ee4ec46e22a29bab053077e4416f/1000x1000-000000-80-0-0.jpg",
        md5_image: "a2a1ee4ec46e22a29bab053077e4416f",
        tracklist: "https://api.deezer.com/album/6958385/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 721541782,
      readable: true,
      title: "Shaped by Fire",
      title_short: "Shaped by Fire",
      title_version: "",
      link: "https://www.deezer.com/track/721541782",
      duration: 218,
      rank: 337970,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        "https://cdns-preview-c.dzcdn.net/stream/c-c561cff07de47a5325048a90985da923-5.mp3",
      contributors: [
        {
          id: 3823,
          name: "As I Lay Dying",
          link: "https://www.deezer.com/artist/3823",
          share:
            "https://www.deezer.com/artist/3823?utm_source=deezer&utm_content=artist-3823&utm_term=0_1656512306&utm_medium=web",
          picture: "https://api.deezer.com/artist/3823/image",
          picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/f8aedcc96a1d6341378970edc00fabe7/56x56-000000-80-0-0.jpg",
          picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/f8aedcc96a1d6341378970edc00fabe7/250x250-000000-80-0-0.jpg",
          picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/f8aedcc96a1d6341378970edc00fabe7/500x500-000000-80-0-0.jpg",
          picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/f8aedcc96a1d6341378970edc00fabe7/1000x1000-000000-80-0-0.jpg",
          radio: true,
          tracklist: "https://api.deezer.com/artist/3823/top?limit=50",
          type: "artist",
          role: "Main",
        },
      ],
      md5_image: "90387a95b59e3b6f47dcba987a99c71c",
      artist: {
        id: 3823,
        name: "As I Lay Dying",
        tracklist: "https://api.deezer.com/artist/3823/top?limit=50",
        type: "artist",
      },
      album: {
        id: 105536102,
        title: "Shaped by Fire",
        cover: "https://api.deezer.com/album/105536102/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/90387a95b59e3b6f47dcba987a99c71c/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/90387a95b59e3b6f47dcba987a99c71c/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/90387a95b59e3b6f47dcba987a99c71c/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/90387a95b59e3b6f47dcba987a99c71c/1000x1000-000000-80-0-0.jpg",
        md5_image: "90387a95b59e3b6f47dcba987a99c71c",
        tracklist: "https://api.deezer.com/album/105536102/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 70876774,
      readable: true,
      title: "I Never Wanted",
      title_short: "I Never Wanted",
      title_version: "",
      link: "https://www.deezer.com/track/70876774",
      duration: 284,
      rank: 301430,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        "https://cdns-preview-c.dzcdn.net/stream/c-c959cf2c45036eaf59c8466792d6bad6-5.mp3",
      contributors: [
        {
          id: 3823,
          name: "As I Lay Dying",
          link: "https://www.deezer.com/artist/3823",
          share:
            "https://www.deezer.com/artist/3823?utm_source=deezer&utm_content=artist-3823&utm_term=0_1656512306&utm_medium=web",
          picture: "https://api.deezer.com/artist/3823/image",
          picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/f8aedcc96a1d6341378970edc00fabe7/56x56-000000-80-0-0.jpg",
          picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/f8aedcc96a1d6341378970edc00fabe7/250x250-000000-80-0-0.jpg",
          picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/f8aedcc96a1d6341378970edc00fabe7/500x500-000000-80-0-0.jpg",
          picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/f8aedcc96a1d6341378970edc00fabe7/1000x1000-000000-80-0-0.jpg",
          radio: true,
          tracklist: "https://api.deezer.com/artist/3823/top?limit=50",
          type: "artist",
          role: "Main",
        },
      ],
      md5_image: "caf4b4ee40014e2a9dee4f04571bbdbe",
      artist: {
        id: 3823,
        name: "As I Lay Dying",
        tracklist: "https://api.deezer.com/artist/3823/top?limit=50",
        type: "artist",
      },
      album: {
        id: 6958384,
        title: "An Ocean Between Us",
        cover: "https://api.deezer.com/album/6958384/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/caf4b4ee40014e2a9dee4f04571bbdbe/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/caf4b4ee40014e2a9dee4f04571bbdbe/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/caf4b4ee40014e2a9dee4f04571bbdbe/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/caf4b4ee40014e2a9dee4f04571bbdbe/1000x1000-000000-80-0-0.jpg",
        md5_image: "caf4b4ee40014e2a9dee4f04571bbdbe",
        tracklist: "https://api.deezer.com/album/6958384/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 72927155,
      readable: true,
      title: "Defender",
      title_short: "Defender",
      title_version: "",
      link: "https://www.deezer.com/track/72927155",
      duration: 244,
      rank: 255519,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        "https://cdns-preview-8.dzcdn.net/stream/c-8eb4b280b66ae82f88291a53eb3e0c04-4.mp3",
      contributors: [
        {
          id: 3823,
          name: "As I Lay Dying",
          link: "https://www.deezer.com/artist/3823",
          share:
            "https://www.deezer.com/artist/3823?utm_source=deezer&utm_content=artist-3823&utm_term=0_1656512306&utm_medium=web",
          picture: "https://api.deezer.com/artist/3823/image",
          picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/f8aedcc96a1d6341378970edc00fabe7/56x56-000000-80-0-0.jpg",
          picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/f8aedcc96a1d6341378970edc00fabe7/250x250-000000-80-0-0.jpg",
          picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/f8aedcc96a1d6341378970edc00fabe7/500x500-000000-80-0-0.jpg",
          picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/f8aedcc96a1d6341378970edc00fabe7/1000x1000-000000-80-0-0.jpg",
          radio: true,
          tracklist: "https://api.deezer.com/artist/3823/top?limit=50",
          type: "artist",
          role: "Main",
        },
      ],
      md5_image: "2172af3474a384dd92ad14ebf109a782",
      artist: {
        id: 3823,
        name: "As I Lay Dying",
        tracklist: "https://api.deezer.com/artist/3823/top?limit=50",
        type: "artist",
      },
      album: {
        id: 7175400,
        title: "Awakened",
        cover: "https://api.deezer.com/album/7175400/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/2172af3474a384dd92ad14ebf109a782/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/2172af3474a384dd92ad14ebf109a782/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/2172af3474a384dd92ad14ebf109a782/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/2172af3474a384dd92ad14ebf109a782/1000x1000-000000-80-0-0.jpg",
        md5_image: "2172af3474a384dd92ad14ebf109a782",
        tracklist: "https://api.deezer.com/album/7175400/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 72927148,
      readable: true,
      title: "Cauterize",
      title_short: "Cauterize",
      title_version: "",
      link: "https://www.deezer.com/track/72927148",
      duration: 217,
      rank: 232290,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        "https://cdns-preview-2.dzcdn.net/stream/c-265c567fd3afbb7dea790c73c9dc3eab-4.mp3",
      contributors: [
        {
          id: 3823,
          name: "As I Lay Dying",
          link: "https://www.deezer.com/artist/3823",
          share:
            "https://www.deezer.com/artist/3823?utm_source=deezer&utm_content=artist-3823&utm_term=0_1656512306&utm_medium=web",
          picture: "https://api.deezer.com/artist/3823/image",
          picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/f8aedcc96a1d6341378970edc00fabe7/56x56-000000-80-0-0.jpg",
          picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/f8aedcc96a1d6341378970edc00fabe7/250x250-000000-80-0-0.jpg",
          picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/f8aedcc96a1d6341378970edc00fabe7/500x500-000000-80-0-0.jpg",
          picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/f8aedcc96a1d6341378970edc00fabe7/1000x1000-000000-80-0-0.jpg",
          radio: true,
          tracklist: "https://api.deezer.com/artist/3823/top?limit=50",
          type: "artist",
          role: "Main",
        },
      ],
      md5_image: "2172af3474a384dd92ad14ebf109a782",
      artist: {
        id: 3823,
        name: "As I Lay Dying",
        tracklist: "https://api.deezer.com/artist/3823/top?limit=50",
        type: "artist",
      },
      album: {
        id: 7175400,
        title: "Awakened",
        cover: "https://api.deezer.com/album/7175400/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/2172af3474a384dd92ad14ebf109a782/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/2172af3474a384dd92ad14ebf109a782/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/2172af3474a384dd92ad14ebf109a782/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/2172af3474a384dd92ad14ebf109a782/1000x1000-000000-80-0-0.jpg",
        md5_image: "2172af3474a384dd92ad14ebf109a782",
        tracklist: "https://api.deezer.com/album/7175400/tracks",
        type: "album",
      },
      type: "track",
    },
  ];

  let newAlbum = [
    {
      name: "Album name",
    },
    {
      name: "Album name",
    },
    {
      name: "Album name",
    },
  ];

  useEffect(() => {
    gettracks();
    search();
  }, [loaded]);

  const gettracks = () => {
    axios
      .post(`https://deezer-test-api.herokuapp.com/api/getTracks`, {
        artistid: 1166790,
      })
      .then(function (response) {
        console.log("------", response);
        setTracks(response.data);
        setLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
        setLoaded(true);
      })
      .then(function () {
        setLoaded(true);
      });
  };

  const handleChange_ = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      console.log("Enter key pressed ✅");
    }
  };

  const search = () => {
    axios
      .post("https://deezer-test-api.herokuapp.com/api/search", {
        searchTerm: "As I Lay Dying",
      })
      .then(function (response) {
        console.log("jdkajhgdkajgdka------", response.data);
        setAlbum(response.data);
        setLoaded2(true);
      })
      .catch(function (error) {
        console.log(error);
        setLoaded2(true);
      })
      .then(function () {
        setLoaded2(true);
      });
  };

  return (
    <>
      <div>
        <div className="relative bg-sky-700  overflow-hidden">
          <Header handleChange={handleChange_} />
          <Slider />
        </div>

        <main className="relative -mt-20">
          <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <Artist tackList={testTrackList} />
              <h2 className="text-3xl ml-10 mb-10 font-thin tracking-tight text-gray-900 sm:text-4xl">
                Album
              </h2>

              {loaded2 && (
                <div className="ml-10 mb-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {albums.map((data, index) => (
                    <Album key={index} item={data} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
