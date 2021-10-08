import { useEffect, useState } from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Row, Container, Col } from "react-bootstrap";

const Albumpage = ({ match }) => {
  const [album, setAlbum] = useState(null);
  const [track, setTrack] = useState([]);

  useEffect(() => {
    fetchTheTrack();
  }, []);

  const fetchTheTrack = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
      );
      let data = await response.json();
      if (response.ok) {
        console.log("here is my track", data);
        setTrack(data.data);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let urlId = match.params.albumId;
    fetchAlbum(urlId);
  }, []);

  const fetchAlbum = async (urlId) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${urlId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2MzM3MDAwMDEsImV4cCI6MTYzNDkwOTYwMX0.lmfeymvE2iX4Gauji1DolGdIozJ-wNP0sR0DbfXgSlI",
          },
        }
      );
      let albumData = await response.json();
      if (response.ok) {
        console.log("here my album data", albumData);

        setAlbum(albumData);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Sidebar />
      {
        <Container>
          <Row>
            {album && (
              <Col xs={6} md={3} className="fetched">
                <div className="card pt-2 rp-card">
                  <img
                    className="recent-ply-card-img ml-3 pl-2"
                    src={album.cover_big}
                    alt="Card image cap"
                    height="100px"
                    width="100px"
                  />
                  <p>{album.title}</p>
                </div>
                
              </Col>
            )}
          </Row>
        </Container>
      }
      
        {
            track.map(t => (
                <Row>
                <Col>
                <div className="row-songs" className="fetched">
                  <div className="col-1 track-number mx-5" >11</div>
                  <div className="col-10">
                    <div className="row1">{t.title}</div>
                    <div className="row2">{t.track}</div>
                  </div>
                  <div className="col-1 time float-right mr-2">{t.duration}</div>
                </div>
              </Col>
              </Row>

            ))
         
        }
      

      <Footer />
    </>
  );
};
export default Albumpage;
