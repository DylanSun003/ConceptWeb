import {Controller, Scene} from "react-scrollmagic";
import imgInsert from "../img/metaverse2.png";
import nftsImg from "../img/nfts.jpeg";
import videoHeader from "../img/marketing.mp4";

import {
  Animator,
  Move,
  ScrollContainer,
  ScrollPage,
  Sticky,
  FadeUp,
  batch,
  StickyIn,
  MoveOut,
  FadeOut,
  Fade,
  FadeIn,
  MoveIn,
} from "react-scroll-motion";
import React from "react";
import {Tween} from "react-gsap";

function ScrollPages() {
  return (
    <ScrollContainer>
      <ScrollPage>
        <div style={{marginLeft: "45vw", width: "50vw"}}>
          <Animator animation={Fade(0, 10)}>
            <div style={{paddingTop: "200px", height: "500px", color: "white"}}>
              <Animator animation={batch(Move(0, 200, 0, 100))}>
                <h1>New way to collect NFTs</h1>
              </Animator>
            </div>
            <div style={{color: "white"}}>
              <Animator animation={Move(0, 0, 0, -150)}>
                <h4>TTLLE NEW WEB3</h4>
              </Animator>
            </div>
            <div style={{color: "white"}}>
              <Animator animation={Move(0, 0, 0, -150)}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, qui quisquam neque quo libero praesentium earum iure explicabo
                  modi a commodi, placeat numquam ipsam perferendis molestiae non ex voluptatibus dolores.
                </p>
              </Animator>
            </div>
          </Animator>
        </div>
      </ScrollPage>

      <ScrollPage>
        <Animator animation={batch(MoveIn(0, 800), Sticky(22, 60), MoveOut(-1000))}>
          <img src={imgInsert} alt="" style={{width: "32vw"}} />
        </Animator>
      </ScrollPage>

      <ScrollPage>
        <div style={{marginLeft: "5vw", width: "50vw", zIndex: 1}}>
          <Animator animation={Fade(0, 5)}>
            <div style={{paddingTop: "200px", height: "500px", color: "white"}}>
              <Animator animation={batch(Move(0, 0, 0, 100))}>
                <h1>New way to collect NFTs</h1>
              </Animator>
            </div>
            <div style={{color: "white"}}>
              <Animator animation={Move(0, 0, 0, -150)}>
                <h4>TTLLE NEW WEB3</h4>
              </Animator>
            </div>
            <div style={{color: "white"}}>
              <Animator animation={Move(0, 0, 0, -150)}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, qui quisquam neque quo libero praesentium earum iure explicabo
                  modi a commodi, placeat numquam ipsam perferendis molestiae non ex voluptatibus dolores.
                </p>
              </Animator>
            </div>
          </Animator>
        </div>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default ScrollPages;
