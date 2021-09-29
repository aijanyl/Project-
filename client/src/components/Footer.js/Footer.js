import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "white", textAlign: "center" }}></h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="/aboutus">About us</FooterLink>
            <FooterLink href="/contactus">Contact Us</FooterLink>
          </Column>

          <Column>
            <Heading>News</Heading>

            <FooterLink href="#" inputMode>
              Sign up to our newsletter
            </FooterLink>
            <input placeholder="Your Email" style={{ borderColor: "orange" }} />
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "20" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="">
              <i className="fab fa-instagram">
                <span style={{}}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "20" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "20" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
