import "./../Styles/Articles.css";
import ArticleI from "./../Images/Img_Blog/mountain2.jpg";
import {article} from "./../JSONDATA/ArticleData"
import { Link } from "react-router-dom";

const LatestArticle = ()=>{
    return(
        <>
            <h4><span className={"postbase"}>Latest</span> Articles</h4>

            {article.map( (data, key) => {
                return(
                    <div className={"OuterA"} key={key}>
                        <img src={ArticleI} alt="ArticleK" className={"AImage"} />

                        <div>
                            <Link to={data.link} className={"Link"}>
                                <h3 className={"Aheading"}>{data.heading}</h3>
                                <p className={"Apara"}>{data.description}</p>
                            </Link>
                            <p className={"Posttravel"}><span style={{color: "#404040"}}>Travel</span>{data.year}</p>
                        </div>
                    </div> 
                )
            })}

            <div className={"Adv"}>
               <div className={"AdvInner"}>Advertisement</div>
            </div>     
        </>
    )
}

export default LatestArticle;