import React from "react";
import {HomeSection,HomeInfo,HomeTitle,HomeIn,HomeDesc,HomeDescSpan,HomeBtn} from './style.js'

const Home = () => {
 
  return (
    <HomeSection>
            <div className="container">
                <HomeInfo>
                    <HomeTitle>Home Title</HomeTitle>
                    <HomeIn>Creative Director</HomeIn>
                    <HomeDesc>
                        Iam a professional <HomeDescSpan>UX Designer</HomeDescSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInfo>
            </div>
        </HomeSection>
  )
 
}

export default Home;