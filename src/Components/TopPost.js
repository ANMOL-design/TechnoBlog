import { Component } from "react";
import { Link } from "react-router-dom";
import TopImg from "./../Images/Img_Blog/nature3.jpg"
import TopImg2 from "./../Images/Img_Blog/rocks.jpg"
import TopImg3 from "./../Images/Img_Blog/nature2.jpg"
import "./../Styles/Toppost.css"
import {loadData} from "./../JSONDATA/LoadData"


class TopPost extends Component{
    render(){
        return(
            <>
               <div className={"TopPostion"}>
                    <h3 className={"headmar"}><span className={"topheading"}>Top</span> Posts</h3>

                    <img src={TopImg} alt="Post" className={"TopImage"} />
                    <h5 className={"headP"}>Catch waves with an adventure guide</h5>
                    <p className={"toptravel"}><span style={{color: "#404040"}}>Travel</span> / June 2021</p>


                    {/* added post  */}

                    {loadData.map( (data, key) =>{
                        return(
                            <div className={"NewTop"} key={key}>
                                    <img src={TopImg2} alt="Post" className={"TopImagebtm"} />
                                    <Link to={data.link} className={"Link"}>
                                        <h6 className={"headpost"}>{data.heading}</h6>
                                        <p className={"toptravel"}><span style={{color: "#404040"}}>Travel</span>{data.year}</p>
                                    </Link>
                            </div>
                        )
                    })}
               </div>

               {/* Side Image  */}
               <div className={"BannerSide1Top TopM ImageContainer"}>
                    <img src={TopImg3} alt="Banner" className={"BannerImgTop"} />
                    <div className={"BannerDesignABSTop"}>
                        <h4 className={"HeadingABSTop"}>The gallery of Pine Trees</h4>
                        <p className={"ParaAB"}>Travel / August 2021</p>
                    </div>
                </div>

                <div className={"BannerSide1Top ImageContainer"}>
                    <img src={TopImg3} alt="Banner" className={"BannerImgTop"} />
                    <div className={"BannerDesignABSTop"}>
                        <h4 className={"HeadingABSTop"}>The gallery of Pine Trees</h4>
                        <p className={"ParaAB"}>Travel / August 2021</p>
                    </div>
                </div>
            </>
        )
    }
}

export default TopPost;