import { Component } from "react";
import HomeBanner from "./Components/HomeBanner"
import LatestArticle from "./Components/LatestArticles";
import LatestPost from "./Components/LatestPost";
import LatestStories from "./Components/LatestStories";
import LoadArticle from "./Components/LoadArticle";
import TopPost from "./Components/TopPost";

class Home extends Component{

        componentDidMount(){
              window.scrollTo(0, 0);
        }
        render(){
        return(
            <>
               <HomeBanner />
               <LatestPost  />
               <LatestArticle />
               <LoadArticle />
               <TopPost />
               <LatestStories />
            </>
        )
      }
  } 


export default Home;