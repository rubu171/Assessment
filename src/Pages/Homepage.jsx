import React, { useState } from "react";
import IntroPage from "./IntroPage";
import WelcomePage from "./WelcomePage";

const Homepage = () => {
  const [isIntroFinished, setisIntroFinished] = useState(false);
  return (
    <>
      <IntroPage
        isIntroFinished={isIntroFinished}
        setisIntroFinished={setisIntroFinished}
      />
      {isIntroFinished && (
        <>
          <WelcomePage />
        </>
      )}
    </>
  );
};

export default Homepage;
