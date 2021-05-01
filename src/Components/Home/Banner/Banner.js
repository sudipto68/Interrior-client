import React, { useState } from "react";
import "./Banner.css";
import Naavbar from "../../Shared/Navbar/Naavbar";
import { Button, Container, Row } from "react-bootstrap";
import banner1 from "../../../Image/banner1.jpg";
import { Link } from "react-router-dom";
import Typist from "react-typist";

const Banner = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="banner" id="banner">
      <Naavbar />
      <Container className="py-5">
        <Row>
          <div className="col-md-5">
            {show === true ? (
              <Typist
                cursor={{ hideWhenDone: true }}
                startDelay={1000}
                onTypingDone={() => setShow(false)}
              >
                <h1 className="fw-bold">
                  We Build <br /> Your Dream
                </h1>

                <Typist.Delay ms={200} />
                <Typist.Backspace count={20} delay={200} />
              </Typist>
            ) : (
              <h1 className="fw-bold">
                We Build <br /> Your Dream
              </h1>
            )}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              perferendis deserunt qui laboriosam dolorum rerum.
            </p>
            <Link to="/booking">
              <Button
                style={{
                  backgroundColor: "#1CC7C1",
                  border: "none",
                  width: "85px",
                }}
              >
                Booking
              </Button>
            </Link>
          </div>
          <div className="col-md-7">
            <img
              className="img"
              src={banner1}
              alt="banner-img"
              style={{ width: "100%", height: "400px" }}
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
