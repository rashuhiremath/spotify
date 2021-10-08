import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

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
          {songArray.map((song) => (
            <Col xs={6} md={3} className="fetched">
              <div className="card pt-2 rp-card">

               <Link to={`/album/${song.id}`}>  
              <img
                  className="recent-ply-card-img ml-3 pl-2"
                  src={song.album.cover_small}
                  alt="Card image cap"
                />
                         </Link>  
                
                <p>{song.title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
};
export default Homepage;
