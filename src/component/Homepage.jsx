import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Homepage = () => {
  const [songArray, setSongArray] = useState([]);
  const fetchTheSongs = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
      );
      let data = await response.json();
      if (response.ok) {
        console.log("here", data);
         setSongArray(data.data);

       
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTheSongs();
  }, [songArray]);

  return (
    <>
      <Sidebar />
      {console.log(songArray)}
      
       

        <Container>
            <Row>
            { 
      songArray.map(song => (
        
                <Col md={12}>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 px-1 mb-2">
  <a href="./Album.html" className="card-link">
    <div className="card pt-2 rp-card">
      <img
        className="recent-ply-card-img ml-3 pl-2"
        src={song.album.cover_small}
        alt="Card image cap"
      />
      <div className="card-body card-text-paragraph">
        <p className="pb-0 mb-1">Queen</p>
        <small>Bohemian Rhapsody</small>
      </div>
    </div>
  </a>
</div>
</Col>
))} 

                
            </Row>

        </Container>

        <Footer/> 
      
    </>
  )
}
export default Homepage;
