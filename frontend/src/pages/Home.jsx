import React from "react";
import bracelet from "../assets/bracelet.jpg";
import earing from "../assets/earing.jpg";
import rings from "../assets/rings.jpg";
import necklace from "../assets/necklace.jpg";
import homeKinnAfterVariety from "../assets/homeKinnAfterVariety.jpg";
function Home() {
  return (
    <>
      <div className="homePageVariety">
        <div>
          <img src={bracelet} alt="" />
          <p>BRACELETS</p>
        </div>
        <div>
          <img src={earing} alt="" />
          <p>EARINGS</p>
        </div>
        <div>
          <img src={rings} alt="" />
          <p>RINGS</p>
        </div>
        <div>
          <img src={necklace} alt="" />
          <p>NECKLACE</p>
        </div>
      </div>
      <div className="homeKinnAfterVariety">
        <img src={homeKinnAfterVariety} alt="" />
        <div className="homeKinnAfterVarietyContentMain">
          <div className="homeKinnAfterVarietyContent">
            <div>LOS ANGELES</div>
            <div>
              The <em>Flagship</em> Store
            </div>
            <div>
              Welcome to the ultimate luxury experience. Choose the perfect
              solid gold gifts in person.
            </div>
          </div>
          <div className="homeKinnAfterVarietyContentBtn">SHOP IN STORE</div>
        </div>
      </div>
      <div className="tennisCollection">
        <div className="tennisCollectionPhase1">The Tennis Collection</div>
        <div className="tennisCollectionPhase2">
          “We believe jewelry should be something you{" "}
          <em>
            <strong>never take off.</strong>
          </em>
          A companion to your memory, made to last a lifetime, the kind you'll
          invest in and pass down." —<em>Jennie Yoon, Founder</em>
        </div>
      </div>
      <div className="EternalCommitment">
        <div className="EternalCommitmentVideo">
          <video
            src="C:\Users\Vansh\Videos\Captures\Document - Google Chrome 2025-02-17 16-35-57.mp4"
            className="EternalCommitmentVideo"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
        <div className="EternalCommitmentContent">
          Eternal Commitment—Evolving Traditions
        </div>
      </div>
    </>
  );
}

export default Home;
