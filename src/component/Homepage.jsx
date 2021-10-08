import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const Homepage = () => {

    const [songArray, setSongArray]=useState([])
  const fetchTheSongs = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
      );
      let data = await response.json();
      if (response.ok) {
        console.log(data);
        setSongArray({
            songsArray : data
        })
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  useEffect(() => {
    fetchTheSongs();
  }, []);

  return (
    <>
      <Sidebar />;
      { songArray &&

      songArray.map(element => 
        
        <div className="card card-morning-3 d-flex m-0 mb-2 mr-auto first-div-card-styles">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <img
              className
              src="./assets/img/cover3.jpg"
              height="78px"
              alt="Card image cap"
              style={{ width: "auto", backgroundSize: "contain" }}
            />
          </div>
          <p className="m-0 pl-3 font-weight-bold">Metallica</p>
        </div>
      </div>)

          
      }
      
    </>
  );
};
export default Homepage;
