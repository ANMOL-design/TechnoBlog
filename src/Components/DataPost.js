import { Component } from "react";
import "./../Styles/InfoStyle.css"

import "./../Styles/LatestPost.css";
import Post1 from "./../Images/Img_Blog/autumn.jpg";
import {postend} from "./../JSONDATA/PagePostFinal"
import BoyImg from "./../Images/Boy.png"
import { Link } from "react-router-dom";

class DataPost extends Component{
    render(){
        return(
            <>
               <div className="outerctn">
                   <div className="innerctn">
                        <h5>More From The Siren</h5>
                        <hr />
                        <div className={"DPostOuter"}>
                                {postend.map((data,key) =>{
                                return(
                                    <div className={"DPostInner"}  key={key}>
                                      <Link to="/TechnoBlog" className={"Dpostlink"}>
                                            <p className={"DPostpara"}>{data.para}</p>
                                            <img src={Post1} alt="PostImage" className={"DPostImg"}/>
                                            <h5 className={"DPostheading"}>{data.heading}</h5>
                                           
                                            <div className={"BoyContainer"}>
                                                    <img src={BoyImg} alt="Boy" className={"BoyImgS"} />
                                                    <div className={"BoyInnerContainer"}>
                                                            <h6 className={"BoyHeading"}>{data.name}</h6>
                                                            <p className={"BoyPara"}>{data.time}</p>
                                                    </div>
                                            </div>
                                      </Link>
                                     </div>
                                )
                            })}  
                        </div>
                   </div>
               </div>
            </>
        )
    }
}

export default DataPost;