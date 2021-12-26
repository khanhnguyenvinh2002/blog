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
            <div className="aboutDesc">Picture description: my highschool graduation photo of me with name cards for events I have organized and the maths and science medals I have won</div>
            {/* <Markdown 
                className="aboutDesc" 
                components={{h1: HeadingRenderer, h2: HeadingRenderer, h3: HeadingRenderer}}>
                    {text}
            </Markdown> */}

            <Markdown 
                className="aboutContent" 
                components={{h1: HeadingRenderer, h2: HeadingRenderer, h3: HeadingRenderer, a: LinkRenderer}}>{text}</Markdown>   
            </div>
        </div>
    )
}
