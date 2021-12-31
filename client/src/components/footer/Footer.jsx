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
                         Created by <a className="footer-a link" href="https://www.facebook.com/andrewng2002">Andrew Nguyen</a> 
                     </p>
                 </div>
             </div>
         </div>
     </footer>
    )
}
