import "./footer.css"

export default function Footer() {
    return (
     <footer>
         <div className="container">
             <div className="row row-middle"style={{margin: "0"}}>
                 <div className="col-lg-8 col-md-10" style={{padding: "0"}}>
                     <ul className="list-inline text-center">
                         <li>
                             <a target="_blank" href="https://instagram.com/bebu.iw">
                                 <span className="fa-stack fa-lg">
                                     <i className="fas fa-circle fa-stack-2x"></i>
                                     <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>
                                 </span>
                             </a>
                         </li>
                         <li>
                             <a target="_blank" href="https://www.facebook.com/andrewng2002">
                                 <span className="fa-stack fa-lg">
                                     <i className="fas fa-circle fa-stack-2x"></i>
                                     <i className="fab fa-facebook fa-stack-1x fa-inverse"></i>
                                 </span>
                             </a>
                         </li>
                         <li>
                             <a target="_blank"  href="https://github.com/khanhnguyenvinh2002">
                                 <span className="fa-stack fa-lg">
                                     <i className="fas fa-circle fa-stack-2x"></i>
                                     <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                                 </span>
                             </a>
                         </li>
                         <li>
                             <a target="_blank"  href="https://www.linkedin.com/in/andrew-nguyen-02/">
                                 <span className="fa-stack fa-lg">
                                     <i className="fas fa-circle fa-stack-2x"></i>
                                     <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
                                 </span>
                             </a>
                         </li>
                     </ul>
                     <p className="copyright text-footer">
                         Copyright &copy; Andrew Nguyen 2021 
                         <br/>
                         Created by <a className="footer-a" href="https://www.facebook.com/andrewng2002">Andrew</a> 
                         <span style={{display: "inline-block", margin: "0 5px"}}>
                             <i className="fa fa-heart"></i>
                         </span> 
                         from <a className="footer-a" href="https://github.com/khanhnguyenvinh2002">Brandeis University</a> | 
                         {/* <iframe
                             style="margin-left: 2px; margin-bottom:-5px;"
                             frameborder="0" scrolling="0" width="91px" height="20px"
                             src="https://ghbtns.com/github-btn.html?user=QuangNg14&repo=TechBlog&type=star&count=true" >
                         </iframe> */}
                     </p>
                 </div>
             </div>
         </div>
     </footer>
    )
}
