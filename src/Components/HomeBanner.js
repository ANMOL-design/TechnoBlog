//Importing The Image
import Banner from "./../Images/Img_Blog/nature2.jpg";
import BannerA from "./../Images/Img_Blog/mountain1.jpg";
import BannerB from "./../Images/Img_Blog/nature1.jpg";
import "./../Styles/Banner.css";
import {Link} from 'react-router-dom';

function HomeBanner(){
    return(
        <>
        <Link to="/TechnoBlog/data">
           <div className={"BannerDesign"}>
                
                <div className={"BannerSide1"}>
                    <img src={Banner} alt="Banner" className={"BannerImg"} />
                    <div className={"BannerDesignABS"}>
                        <h4 className={"HeadingABS"}>The gallery of Pine Trees</h4>
                        <p className={"ParaABS"}>Travel / August 2021</p>
                    </div>
                </div>

                <div>
                    <div className={"BannerSide"}>
                        <img src={BannerA} alt="Banner" className={"BannerImgside"} />
                        <div className={"BannerDesignABS2"}>
                            <p className={"HeadingABS"}>The Sound of Cloud</p>
                            <p className={"HeadingABS"}>You loved is doomed</p>
                            <p className={"ParaABS"}>Travel / May 2021</p>
                        </div>
                    </div>
                    <div className={"BannerSide"}>
                        <img src={BannerB} alt="Banner" className={"BannerImgside"} />
                        <div className={"BannerDesignABS2"}>
                            <p className={"HeadingABS"}>The feel of wind</p>
                            <p className={"HeadingABS"}>You loved this.</p>
                            <p className={"ParaABS"}>Travel / October 2021</p>
                        </div>
                    </div>
                </div>
           </div>
           </Link>
        </>
    )
}

export default HomeBanner