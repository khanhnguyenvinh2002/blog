import "./portfolio.css"
import Markdown from 'react-markdown'
import PortfolioMarkdown from './portfolio.md';
import React, { useContext, useEffect, useState } from "react";
// import picture from '../../assets/img/portfolio.jpeg'; 
export default function Porfolio() {
   
    const [text, setText] = useState("");
    useEffect(()=>{
        fetch(PortfolioMarkdown).then(res => res.text()).then(text => setText(text));
    }, [])
    function flatten(text, child) {
        return typeof child === 'string'
          ? text + child
          : React.Children.toArray(child.props.children).reduce(flatten, text)
      }
      
      function HeadingRenderer(props) {
        var children = React.Children.toArray(props.children)
        var text = children.reduce(flatten, '')
        var slug = text.toLowerCase().replace(/\W/g, '-')
        return React.createElement('h' + props.level, {id: slug}, props.children)
      }
    return (
        <div className="portfolio container">
            <div className="portfolioWrapper">
            <h2 className="portfolioTitle">
           Khanh Nguyen's portfolio

            </h2>
            {/* <img 
                className="portfolioImg"
                src={picture}
                alt="" 
            /> */}
            {/* <Markdown 
                className="portfolioDesc" 
                components={{h1: HeadingRenderer, h2: HeadingRenderer, h3: HeadingRenderer}}>
                    {text}
            </Markdown> */}

            <Markdown 
                className="portfolioContent" 
                components={{h1: HeadingRenderer, h2: HeadingRenderer, h3: HeadingRenderer}}>{text}</Markdown>   
            </div>
        </div>
    )
}
