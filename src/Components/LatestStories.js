import { Component } from "react";
import "./../Styles/LatestStory.css";
import {post} from "./../JSONDATA/PostData"
import { Link } from "react-router-dom";

import Load from "./../Images/arrow-right.svg"

class LatestStories extends Component{
    render(){
        return(
            <>
              <h4><span className={"postbase"}>Latest</span> Stories</h4>

              <hr />
              <div className={"STOuter"}>
                {post.map((data,key) =>{
                    return(
                        <div className={"STInner"}  key={key}>
                            <Link to={data.link} className={"STlink"}>
                                <h5 className={"STheading"}>{data.heading}</h5>
                                <p className={"STpara"}>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
                                <p className={"STtravel"}><span style={{color: "#404040"}}>Tech</span>{data.year}</p>
                            </Link>
                        </div>
                      )
                  })}  
            </div>

            <Link to="/TechnoBlog/Bollywood" style={{textDecoration: "none"}}>
                   <img src={Load} alt="Load" />
                   <span className={"loader"}>Load More</span>
            </Link>
            <hr />
            </>
        )
    }
}

export default LatestStories;