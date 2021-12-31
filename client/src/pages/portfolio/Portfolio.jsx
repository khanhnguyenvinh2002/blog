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
    const flatten = (text, child) => {
        return typeof child === 'string'
          ? text + child
          : React.Children.toArray(child.props.children).reduce(flatten, text)
      }
      
    const HeadingRenderer = (props) => {
        var children = React.Children.toArray(props.children)
        var text = children.reduce(flatten, '')
        var slug = text.toLowerCase().replace(/\W/g, '-')
        return React.createElement('h' + props.level, {id: slug}, props.children)
    }

    const LinkRenderer = (props: any) =>{
        return (
          <a href={props.href} target="_blank" rel="noreferrer">
            {props.children}
          </a>
        );
      }
    return (
        <div className="portfolio container">
            <div className="portfolioWrapper">
            <h2 className="portfolioTitle">
           Andrew Nguyen's portfolio

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
                components={{h1: HeadingRenderer, h2: HeadingRenderer, h3: HeadingRenderer, a: LinkRenderer}}>{text}</Markdown>   
            </div>
        </div>
    )
}
