import React from 'react'

export default function Footer() {
  return (
   <>
   <footer className="footer" id="Footer">
        <div className="container2">
          <div className="row">
            <div className="footer-col">
              <h4>Company</h4>
              <ul className="ff">
                <li><a href="/">About us</a></li>
                <li><a href="/">our services</a></li>
                <li><a href="/">privacy policy</a></li>
                <li><a href="/">affiliate program</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Get Help</h4>
              <ul className="ff">
                <li><a href="/">FAQ</a></li>
                <li><a href="/">Contact Us</a></li>
                <li><a href="/">Host Elections</a></li>
                <li><a href="/">Policy</a></li>
                <li><a href="/">Brains</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Our Merchandise</h4>
              <ul className="ff">
                <li><a href="/">Cap</a></li>
                <li><a href="/">Bag</a></li>
                <li><a href="/">Hoodies</a></li>
                <li><a href="/">T-shirts</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <ul className="ff">
                  <a href="/"><i className="fab fa-facebook-f"></i></a>
                  <a href="/"><i className="fab fa-twitter"></i></a>
                  <a href="/"><i className="fab fa-instagram"></i></a>
                  <a href="/"><i className="fab fa-linkedin-in"></i></a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
   </>
  )
}
