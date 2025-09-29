import React, { createContext, useEffect, useState } from 'react'
import Popular from '../Component/Header/Popurlar';
export const Store = createContext(null);
const Sbkamalikek = (props) => {
  const [popular, setPopular]= useState([])
  const [toprated,setTopRated]=useState([])
  const [Upcoming,setUpcoming]=useState([])
  const [nowPlaying,setPlaying]=useState([])
  const [search,setSearch]=useState("")

async  function fetchData(endPoint,setState){
    let Api_Key = "bffed64d39d2ed688b89f1b5fcdddcb6"
    let store = await fetch(`https://api.themoviedb.org/3/movie/${endPoint}?api_key=${Api_Key} `)
    let result = await store.json();
    let update = (result.results);
    setState(update);
    console.log("chl rh hai fnction")
  }
  console.log(popular);
  console.log(toprated);

  
  useEffect(()=>{
    fetchData("popular",setPopular);
    fetchData("top_rated",setTopRated);
    fetchData("upcoming",setUpcoming);
    fetchData("now_playing",setPlaying)
  },[])

  return (
    <div>
      <Store.Provider value={{popular,setPopular,toprated,setTopRated,search,setSearch,Upcoming,setUpcoming,nowPlaying}}>
        {props.children}
      </Store.Provider>
    </div>
  )
}

export default Sbkamalikek
