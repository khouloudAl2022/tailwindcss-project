import { Fragment } from "react";
import Landing from "../components/Landing";
import Features from "../components/Features";
import StayProductive from "../components/StayProductive";

const Home = () => {
  return (
    <Fragment>
      <Landing />
      <Features />
      <StayProductive/>
    </Fragment>
  );
};

export default Home;
