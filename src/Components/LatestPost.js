import "./../Styles/LatestPost.css";
import Post1 from "./../Images/Img_Blog/autumn.jpg";
import {post} from "./../JSONDATA/PostData"
import { Link } from "react-router-dom";

const LatestPost = ()=>{
    return(
        <>
            <h4><span className={"postbase"}>The</span> Latest</h4>

            <div className={"PostOuter"}>
                {post.map((data,key) =>{
                    return(
                        <div className={"PostInner"}  key={key}>
                            <Link to={data.link} className={"postlink"}>
                                <img src={Post1} alt="PostImage" className={"PostImg"}/>
                                <h5 className={"Postheading"}>{data.heading}</h5>
                                <p className={"Postpara"}>{data.description}</p>
                                <p className={"Posttravel"}><span style={{color: "#404040"}}>Travel</span>{data.year}</p>
                            </Link>
                        </div>
                      )
                  })}  
            </div>
        </>
    )
}

export default LatestPost;