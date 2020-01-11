import styled from "styled-components";
import passport from "../img/passport.jpg";

export const PassportList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

export const PassportItem = styled.div`
  width: 33%;
  height: 0;
  padding-top: 22.125%;

  @media (max-width: 1920px) {
    width: 49%;
    height: 0;
    padding-top: 32.8%;
  }

  @media (max-width: 1000px) {
    width: 98%;
    height: 0;
    padding-top: 65.6%;
  }

  position: relative;

  margin: 16px 0;

  background: #23253a url(${passport});
  background-size: cover;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  .passport-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;

    .left-page,
    .right-page {
      width: 45%;
      height: 80%;

      display: flex;
      flex-flow: column;
      justify-content: space-evenly;
      align-items: center;

      h3 {
        text-align: center;
      }

      p {
        margin: 0;
      }

      @media (max-width: 600px) {
        p {
          display: none;
        }
      }

      div {
        width: 90%;

        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
      }
    }

    .left-page {
    }

    .right-page {
    }

    .img-container {
      //   border: 1px solid red;
      height: 50%;
      width: 90%;
    }
  }

  img {
    // width: 200px;
    // height: 150px;
    width: auto;
    max-height: 100%;
    object-fit: cover;
    // border: 1px solid #23253a;
    border-radius: 16px;
  }
`;
