import "./Styles/PageStyle.css"
import "./Styles/Articles.css";
import Page from "./Images/Img_Blog/nature1.jpg";
import {PageData} from "./JSONDATA/PageData"
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

import TopImg from "./Images/Img_Blog/nature3.jpg"
import TopImg2 from "./Images/Img_Blog/rocks.jpg"
import {loadData} from "./JSONDATA/LoadData"

import PageI from "./Images/Img_Blog/building.jpg";
import Load from "./Images/arrow_down.svg"

function Bollywood(){

    const location = useLocation().pathname;

    useEffect(() => {
        window.scroll(0,0);
         
        return () => {
          //
        }
    }, [])

    const loadPageData = () =>{
        var element = document.getElementById("PageData");
        var more = document.getElementById("PageLoad");
        var Less = document.getElementById("PageLess");
        element.classList.toggle("LoaderHide");
        more.classList.toggle("LoaderHide");
        Less.classList.toggle("LoaderHide");
    }

    const Item = location.split("/")[2];
    // console.log(location, Item);
        return(
            <>
               <h3 className={"Bheading"}>{Item}</h3>

               
               <div className={"PTopPostion"}>
                    <h3 className={"headmar"}><span className={"Ptopheading"}>Top</span> Posts</h3>

                    <img src={TopImg} alt="Post" className={"PTopImage"} />
                    <h5 className={"PheadP"}>Catch waves with an adventure guide</h5>
                    <p className={"Ptoptravel"}><span style={{color: "#404040"}}>Travel</span> / June 2021</p>


                    {/* added post  */}

                    {loadData.map( (data, key) =>{
                        return(
                            <div className={"PNewTop"} key={key}>
                                    <img src={TopImg2} alt="Post" className={"PTopImagebtm"} />
                                    <Link to="/TechnoBlog/data" className={"PLink"}>
                                        <h6 className={"Pheadpost"}>{data.heading}</h6>
                                        <p className={"Ptoptravel"}><span style={{color: "#404040"}}>Travel</span>{data.year}</p>
                                    </Link>
                            </div>
                        )
                    })}
               </div>

               {PageData.map( (data, key) => {
                return(
                    <div className={"OuterP"} key={key}>
                        <img src={Page} alt="Pages" className={"PImage"} />

                        <div>
                            <Link to="/TechnoBlog/data" className={"PLink"}>
                                <h3 className={"Pheading"}>{data.heading}</h3>
                                <p className={"Ppara"}>{data.description}</p>
                            </Link>
                            <p className={"PPosttravel"}><span style={{color: "#404040"}}>Travel</span>{data.year}</p>
                        </div>
                    </div> 
                )
            })}

            <div className={"AdvP"}>
               <div className={"AdvInner"}>Advertisement</div>
            </div>


            {/* load More Data  */}
            <div className={"loadMoreP"} id="PageLoad" onClick={loadPageData}>
                   <img src={Load} alt="Load" />
                   <span className={"loaderP"}>Load More</span>
               </div>

               <div id="PageData" className={"LoaderHide"}>
                    {loadData.map( (data, key) => {
                    return(
                        <div className={"OuterP"} key={key} >
                            <img src={PageI} alt="PagesMore" className={"PImage"} />

                            <div>
                                <Link to="/TechnoBlog/data" className={"PLink"}>
                                    <h3 className={"Pheading"}>{data.heading}</h3>
                                    <p className={"Ppara"}>{data.description}</p>
                                </Link>
                                <p className={"PPosttravel"}><span style={{color: "#404040"}}>Travel</span>{data.year}</p>
                            </div>
                         </div> 
                        )
                     })}
               </div>

               <div className={"loadMoreP LoaderHide"} id="PageLess" onClick={loadPageData}>
                   <img src={Load} alt="Load" className={"ImgRotP"}/>
                   <span className={"loaderP"}>Show Less</span>
               </div>
            </>
        )
    
}

export default Bollywood;