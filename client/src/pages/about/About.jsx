import "./about.css"
import Markdown from 'react-markdown'
import AboutMarkdown from './about.md';
import React, { useContext, useEffect, useState } from "react";
import picture from '../../assets/img/portfolio.jpeg'; 


export default function About() {
   
    const [text, setText] = useState("");
    useEffect(()=>{
        fetch(AboutMarkdown).then(res => res.text()).then(text => setText(text));
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
        <div className="about container">
            <div className="aboutWrapper">
            <h2 className="aboutTitle">
               About me!

            </h2>
            <div className="aboutSubtitle">Welcome to my blog. I will share all my experiences with coding here. You can visit all my previous projects and works <a href="/portfolio" className="link" style={{color:'#17d1ac'}}>in my portfolio!</a></div>
            <img 
                className="aboutImg"
                src={picture}
                alt="" 
            />
            <div className="aboutDesc">Picture description: my highschool graduation photo of me with the events' name card I have organized and the Maths medals I have received</div>
            {/* <Markdown 
                className="aboutDesc" 
                components={{h1: HeadingRenderer, h2: HeadingRenderer, h3: HeadingRenderer}}>
                    {text}
            </Markdown> */}

            <Markdown 
                className="aboutContent" 
                components={{h1: HeadingRenderer, h2: HeadingRenderer, h3: HeadingRenderer}}>{text}</Markdown>   
            </div>
        </div>
    )
}
