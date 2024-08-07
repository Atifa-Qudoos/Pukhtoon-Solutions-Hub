import React from "react";
// import  {NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    // <div class="hfeed site" id="page">
    //   <header>
    //     <div className="nav">
    //   <input type="checkbox" id="nav-check" />
    //     <div className="header-main">
    //       <div className="container" style={{ marginTop: "-8%" }}>
    //         <div className="row">
    //           <div className="inner-menu col-lg-10 col-sm-12">
    //             <div className="logo" style={{ marginTop: "7%" }}>
    //               <figure>
    //                 <a href="/" className="custom-logo-link" rel="home">
    //                   <img
    //                     style={{ width: "23.125rem", height: "12.125rem" }}
    //                     width="340"
    //                     height="100"
    //                     src="./images/logo4.png"
    //                     className="custom-logo"
    //                     alt="Pukhtoon Solutions Hub | eCommerce Development Agency"
    //                   />
    //                 </a>
    //               </figure>
    //             </div>
    //             <div className="nav-btn">
    //       <label for="nav-check">
    //         <i style={{color:"brown"}} class="fa-solid fa-bars"></i>
    //       </label>
    //     </div>
    //             <nav className="header-navigation" style={{ marginTop: "8%" }}>
                  // <ul id="menu" className="menu">
                  //   <li
                  //     style={{ color: "brown" }}
                  //     id="menu-item-29"
                  //     className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-29"
                  //   >
                  //     <a href="/">Home</a>
                  //   </li>
                  //   <li
                  //     id="menu-item-19"
                  //     className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"
                  //   >
                  //     <a href="/About">About</a>
                  //   </li>
                  //   <li
                  //     id="menu-item-23"
                  //     className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23"
                  //   >
                  //     <a href="/Service">
                  //       Services <i className="fas fa-caret-down"></i>
                  //     </a>
                  //     <ul>
                  //       <li>
                  //         <a href="/Call">Call Center</a>
                  //       </li>
                  //       <li>
                  //         <a href="/Digital">Digital Marketing</a>
                  //       </li>
                  //       <li>
                  //         <a href="/Website">Website Development</a>
                  //       </li>
                  //       <li>
                  //         <a href="/Mobile">Mobile App Development</a>
                  //       </li>
                  //       <li>
                  //         <a href="/Graphic">Graphic Designing</a>
                  //       </li>
                  //       <li>
                  //         <a href="/Video">Video Editing</a>
                  //       </li>
                  //       <li>
                  //         <a href="/Domain">Domain & Hosting</a>
                  //       </li>
                  //     </ul>
                  //   </li>
                  //   <li
                  //     id="menu-item-2507"
                  //     className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2507"
                  //   >
                  //     <a href="/Training">Trainings</a>
                  //   </li>
                  //   <li
                  //     id="menu-item-20"
                  //     className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-12 current_page_item menu-item-20"
                  //   >
                  //     <a href="/Client">Clients</a>
                  //   </li>
                  //   <li
                  //     id="menu-item-21"
                  //     className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21"
                  //   >
                  //     <a
                  //       className="cont"
                  //       style={{
                  //         backgroundColor: "#a52a2a",
                  //         borderRadius: "20px",
                  //         padding: "15px 25px 15px 35px",
                  //         display: "inline-block",
                  //         lineHeight: "1",
                  //         fontSize: "15px",
                  //         color: "#fff",
                  //         justifyContent: "center",
                  //         textAlign: "center",
                  //         transition: "all .3s",
                  //       }}
                  //       href="/Contact"
                  //     >
                  //       Contact
                  //     </a>
                  //     <div style={{ marginTop: "-43%", marginLeft: "10%" }}>
                  //       <a href="/Contact">
                  //         <div className="circle"></div>
                  //       </a>
                  //     </div>
                  //   </li>
                  // </ul>
    //             </nav>
    
               
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     </div>
    //   </header>
    // </div>
    <div>
      <header>
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title"><a href="/"><img style={{ width: "23.125rem", height: "10.125rem" }} src="./images/logo4.png" alt="" /></a></div>
      </div>
      <div className="nav-btn">
        <label for="nav-check">
        <i style={{color:"brown"}} class="fa-solid fa-bars"></i>
        </label>
      </div>

      <div className="header-navigation">
      <ul id="menu" className="menu">
                    <li
                      style={{ color: "brown" }}
                      id="menu-item-29"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-29"
                    >
                      <a href="/">Home</a>
                    </li>
                    <li
                      id="menu-item-19"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"
                    >
                      <a href="/About">About</a>
                    </li>
                    <li
                      id="menu-item-23"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23"
                    >
                      <a href="/Service">
                        Services <i className="fas fa-caret-down"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="/Call">Call Center</a>
                        </li>
                        <li>
                          <a href="/Digital">Digital Marketing</a>
                        </li>
                        <li>
                          <a href="/Website">Website Development</a>
                        </li>
                        <li>
                          <a href="/Mobile">Mobile App Development</a>
                        </li>
                        <li>
                          <a href="/Graphic">Graphic Designing</a>
                        </li>
                        <li>
                          <a href="/Video">Video Editing</a>
                        </li>
                        <li>
                          <a href="/Domain">Domain & Hosting</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-2507"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2507"
                    >
                      <a href="/Training">Trainings</a>
                    </li>
                    <li
                      id="menu-item-20"
                      className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-12 current_page_item menu-item-20"
                    >
                      <a href="/Client">Clients</a>
                    </li>
                    <li
                      id="menu-item-21"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21"
                    >
                      <a
                        className="cont"
                        style={{
                          backgroundColor: "#a52a2a",
                          borderRadius: "20px",
                          padding: "15px 25px 15px 35px",
                          display: "inline-block",
                          lineHeight: "1",
                          fontSize: "17px",
                          color: "#fff",
                          marginTop:"-10%",
                          justifyContent: "center",
                          textAlign: "center",
                          transition: "all .3s",
                        }}
                        href="/Contact"
                      >
                        Contact
                      </a>
                      <div className="cir" style={{ marginTop: "-28%", marginLeft: "10%" }}>
                        <a href="/Contact">
                          <div className="circle"></div>
                        </a>
                      </div>
                    </li>
                  </ul>
        
       
      </div>
      
    </div>
  </header>
  </div>
  );
};

export default Navbar;
