import { useEffect, useState } from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Row, Container, Col } from "react-bootstrap";

const Albumpage = ({ match }) => {
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    let urlId = match.params.albumId;
    fetchAlbum(urlId);
  }, []);

  const fetchAlbum = async (urlId) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${urlId}`,{
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2MzM3MDAwMDEsImV4cCI6MTYzNDkwOTYwMX0.lmfeymvE2iX4Gauji1DolGdIozJ-wNP0sR0DbfXgSlI"
            }
            }
      )
      let albumData = await response.json()
      if (response.ok) {
        console.log("here my album data", albumData)

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
                    src={album.cover_small}
                    alt="Card image cap"
                  />
                  <p>{album.title}</p>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      } 

      <Footer />
    </>
  );
};
export default Albumpage;
