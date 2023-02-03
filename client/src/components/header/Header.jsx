import React from 'react'
import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleLg">Andrew Nguyen</span>
                <span className="headerTitleSm">Hey, I can code and looking for a SWE intern! Everything I did has a special meaning to me, and I hope you can find something interesting here!</span>
                <a href="files/Andrew_Nguyen_Resume.pdf" className="headerCV link" download="Andrew_Nguyen_Resume.pdf" target="_blank">Download Resume</a>
            </div>
            {/* <img className="headerImg" src="https://media-exp1.licdn.com/dms/image/C4E03AQF-IcxXLFw8cw/profile-displayphoto-shrink_100_100/0/1606372259446?e=1645660800&v=beta&t=JsOWsLJjPHDXx0fLfay3pfAcmMpdeCA37OD5NdQAogM" alt="" /> */}
        </div>
    )
}
