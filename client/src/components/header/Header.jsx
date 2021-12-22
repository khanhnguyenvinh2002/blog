import React from 'react'
import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleLg">Andrew Nguyen</span>
                <span className="headerTitleSm">Welcome to my portfolio and blog. I will use this platform to share my journey and experience</span>
            </div>
            {/* <img className="headerImg" src="https://media-exp1.licdn.com/dms/image/C4E03AQF-IcxXLFw8cw/profile-displayphoto-shrink_100_100/0/1606372259446?e=1645660800&v=beta&t=JsOWsLJjPHDXx0fLfay3pfAcmMpdeCA37OD5NdQAogM" alt="" /> */}
        </div>
    )
}
