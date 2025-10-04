import React, { createContext, useEffect, useState } from 'react';
export const Store = createContext(null);

const Sbkamalikek = (props) => {
  const [popular, setPopular] = useState([])
  const [toprated, setTopRated] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [nowPlaying, setPlaying] = useState([])
  const [search, setSearch] = useState("")
  const [Wishlist,setWishlist]=useState([])
  let Api_Key = "bffed64d39d2ed688b89f1b5fcdddcb6";

  async function fetchData(endPoint, setState) {
    let url = `https://api.themoviedb.org/3/movie/${endPoint}?api_key=${Api_Key}`;
    let store = await fetch(url);
    let result = await store.json();
    setState(result.results || []);
  }

  useEffect(() => {
    fetchData("popular", setPopular);
    fetchData("top_rated", setTopRated);
    fetchData("upcoming", setUpcoming);
    fetchData("now_playing", setPlaying);
  }, []);

  // ✅ Search filter logic
  function filterMovies(list) {
    if (!search) return list; // agar search empty hai to full list
    return list.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <Store.Provider value={{
      popular: filterMovies(popular),setPopular,
      toprated: filterMovies(toprated),
      upcoming: filterMovies(upcoming),
      nowPlaying: filterMovies(nowPlaying),
      search, setSearch,
      Wishlist,setWishlist
    }}>
      {props.children}
    </Store.Provider>
  )
}

export default Sbkamalikek;
