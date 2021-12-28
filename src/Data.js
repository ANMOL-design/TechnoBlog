import { Component } from "react";
import "./Styles/InfoStyle.css"

import BoyImg from "./Images/Boy.png"
import SocialImg from "./Images/social.jpg"
import BannerImg from "./Images/Banner.png"
import BannerImg2 from "./Images/Code.png"
import clap from "./Images/rythm.svg"
import share from "./Images/share.svg"

import DataPost from "./Components/DataPost";


class Data extends Component{
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <>
               <div className={"DataContainer"}>
                    <h2 className={"DataHeading1"}>5 Ways to animate a React app.</h2>

                    <div className={"BoyContainer"}>
                        <img src={BoyImg} alt="Boy" className={"BoyImgS"} />
                        <div className={"BoyInnerContainer"}>
                            <h6 className={"BoyHeading"}>Dmitry Nozhenko</h6>
                            <p className={"BoyPara"}>Jan 28, 2019 · 10 min read</p>
                        </div>
                        <img src={SocialImg} alt="Social" className={"SocialImg"} />
                    </div>

                    <img src={BannerImg} alt="Banner" className={"BannerImgB"} />

                    <p className={"Para"}>Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.</p>
                    <p className={"Para"}>Let’s talk about them</p>

                    <img src={BannerImg2} alt="Banner" className={"BannerImgB"} />

                    <button className={"btn btn-secondary"}>React</button>
                    <button className={"btn btn-secondary"}>Javascript</button>
                    <button className={"btn btn-secondary"}>Animation</button>

                    <div>
                        <img src={clap} alt="claps" className={"clapImg"} />
                        <span className={"clapcnt"}>9.3K claps</span>
                    </div>

                    <hr />

                    <div className={"BoyContainer"}>
                        <img src={BoyImg} alt="Boy" className={"BoyImgS"} />
                        <div className={"BoyInner"}>
                            <p className={"BoyPara"}>WRITTEN BY</p>
                            <h6 className={"BoyHeading"}>Dmitry Nozhenko</h6>
                            <p className={"BoyPara"}>Jan 28, 2019 · 10 min read</p>
                        </div>
                    </div>

                    <hr />
               </div>

               <div className={"Asocial"}>
                    <img src={clap} alt="claps" className={"clapImg"} />
                    <span className={"clapcnt"}>9.3K claps</span>
                     <br />
                    <img src={share} alt="share" className={"clapImg"} />
                    <span className={"clapcnt"}>Share this article</span>
               </div>


              <DataPost />
            </>
        )
    }
}

export default Data;