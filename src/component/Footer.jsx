const Footer = () => {
  return (
    <footer
  className="fixed-bottom position-sticky"
  style={{ backgroundColor: "rgb(24,24,24)" }}
>
  <div className="container-fluid text-white mx-0 px-0 pb-1">
    <div className="row ">
      <div className="col-4 d-flex justify-content-start pl-5">
        <img
          src="https://townsquare.media/site/295/files/2020/08/DustEMI.jpg"
          height="55px"
          width="55px"
          style={{ marginTop: 7 }}
        />
        <p className="ml-2 pt-2 align-center">
          {" "}
          <small>Another One Bites The Dust</small> <br /> <small>Queen</small>{" "}
        </p>
        <i className="bi bi-heart px-2 pt-2 ml-2 mt-3" />
        <i className="bi bi-view-list px-2 pt-2 mt-3" />
      </div>
      <div className="col-4 justify-content-start">
        <div className="row">
          <div className="col-2" />
          <div className="col-8 d-flex justify-content-around">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-shuffle px-0 py-0 mt-2"
              viewBox="0 0 18 18"
            >
              <path
                fillRule="evenodd"
                d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
              />
              <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
            </svg>
            <i className="bi bi-skip-backward px-0 py-1" />
            <div className="container2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55px"
                height="30px"
                fill="white"
                className="bi bi-play-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              </svg>
            </div>
            <i className="bi bi-skip-forward px-0 py-1" />
            <i className="bi bi-arrow-repeat px-0 py-1" />
          </div>
          <div className="col-3" />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <div>
            <small>0:00</small>
          </div>
          {/* <div class="align-center"> */}
          <div className="bar align-self-center" />
          {/* </div> */}
          <div>
            <small>3:25</small>
          </div>
        </div>
      </div>
      <div className="col-4 offset-1 mt-4" id="volume">
        <div className="row justify-content-end">
          {/*  div class="col-7"></div>
                  <div class="col-5 .d-inline-block"> */}
          <i className="bi bi-music-note-list px-2" />
          <i className="bi bi-volume-up px-2 " />
          <div className="bar2 mt-2 d-inline-block px-2" />
        </div>
      </div>
    </div>
  </div>
</footer>

  );
};


export default Footer