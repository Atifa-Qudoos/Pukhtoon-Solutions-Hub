import React from 'react'

const Footer = () => {
  return (
    <div class="hfeed site" id="page">
      <footer style={{ backgroundColor: 'brown' }}>
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-6 col-md-6">
                <div className="logo">
                  <figure>
                    <section id="media_image-2" className="widget widget_media_image">
                      <a href="/">
                        <img
                          style={{ marginBottom: '-11%', width: '15.125rem', height: '8.125rem' }}
                          width="340"
                          height="100"
                          src="./images/logo3.png"
                          className="image wp-image-344 attachment-full size-full"
                          alt=""
                        />
                      </a>
                    </section>
                  </figure>
                </div>
              </div>
              <div className="col-xs-12 col-lg-6 col-md-6">
                <ul style={{ marginTop: '7%' }} className="social-media">
                  <div>
                    <section id="custom_html-2" className="widget_text widget widget_custom_html">
                      <div className="textwidget custom-html-widget">
                        <li>
                          <a href="https://www.facebook.com/profile.php?id=61563343000308" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://x.com/pukhtoonhub764" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/pukhtoonsolutions/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/company/pukhtoon-solutions-hub/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </a>
                        </li>
                      </div>
                    </section>
                  </div>
                </ul>
              </div>
            </div>
            <hr
              style={{
                borderBottom: '.0625rem solid white',
                borderTop: '.0625rem solid white',
                margin: '1.875rem 0'
              }}
            />
            <div className="row">
              <div className="col-xs-12 col-lg-6 col-md-6">
                <div className="copyright-notice">
                  <div>
                    <section id="text-2" className="widget widget_text">
                      <div className="textwidget">
                        <p>all copyright © reserved by Pukhtoon Solutions Hub 2024</p>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-lg-6 col-md-6">
                <nav className="footer-navigation">
                  <ul id="menu-footer-menu" className="menu">
                    <li id="menu-item-37" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-37">
                      <a href="/">Home</a>
                    </li>
                    <li id="menu-item-38" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38">
                      <a href="/About">About</a>
                    </li>
                    <li id="menu-item-41" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-41">
                      <a href="/Service">Services</a>
                    </li>
                    <li id="menu-item-2508" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2508">
                      <a href="Training">Trainings</a>
                    </li>
                    <li id="menu-item-39" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-12 current_page_item menu-item-39">
                      <a href="./Client" aria-current="page" className="active">Clients</a>
                    </li>
                    <li id="menu-item-579" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-579">
                      <a href="./Contact">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
  )
}

export default Footer

