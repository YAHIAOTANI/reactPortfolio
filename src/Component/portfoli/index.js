import React, {useState,useEffect} from "react";
import {PortfolioSection,PortfolioTitle,PortfolioList,PortfolioItem,Span,ImageWrapper,Img,Overlay,OverlaySpan} from './style'
import axios from "axios";
const Portfolio = () => {
 const [images,setImages] = useState([]);
 useEffect (() => {
    axios.get('js/data.json').then(res => {setImages(res.data.portfolio)})
 })
 const PortfolioImage = images.map((imageItem) => {
           return (
            <ImageWrapper key={imageItem.id}>
            <Img src={imageItem.image} />
            <Overlay>
                <OverlaySpan>
                    Show Image
                </OverlaySpan>
            </Overlay>
        </ImageWrapper>
           )
 })
  return (
    <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">
                {PortfolioImage}
            </div>
            
        </PortfolioSection>
        
  )
 
}

export default Portfolio;