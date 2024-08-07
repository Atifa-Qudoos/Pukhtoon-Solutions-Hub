const React = require("react");
const { useState } = require("react");

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    type: "",
    designation: "",
    email: "",
    number: "",
    service: "",
    link: "",
    request: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();

    const { name, type, designation, email, number, service, link, request } =
      user;
    if (
      name &&
      type &&
      designation &&
      email &&
      number &&
      service &&
      link &&
      request
    ) {
      const res = await fetch(
        "https://pukhtoon-solutions-hub-d37dd-default-rtdb.firebaseio.com/pukhtoon.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            type,
            designation,
            email,
            number,
            service,
            link,
            request,
          }),
        }
      );
      if (res) {
        setUser({
          name: "",
          type: "",
          designation: "",
          email: "",
          number: "",
          service: "",
          link: "",
          request: "",
        });
        alert("Data Insert Successfully!");
      }
    } else {
      alert("Plz fill all the data...");
    }
  };

  return (
    <div style={{ marginTop: "2%" }} id="content" className="site-content">
      <div className="ast-container">
        <div id="primary" className="content-area primary">
          <main id="main" className="site-main">
            <article
              className="post-25 page type-page status-publish ast-article-single"
              id="post-25"
              itemtype="https://schema.org/CreativeWork"
              itemscope="itemscope"
            >
              <header className="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup"></header>
              <div className="entry-content clear" itemprop="text">
                <div
                  data-elementor-type="wp-post"
                  data-elementor-id="25"
                  className="elementor elementor-25"
                >
                  <section
                    data-id="498f935"
                    data-element_type="section"
                    data-settings='{"background_background":"classNameic"}'
                    className="elementor-section elementor-top-section elementor-element elementor-element-498f935 elementor-section-boxed elementor-section-height-default elementor-section-height-default nitro-lazy"
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-08293b2"
                        data-id="08293b2"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-5a115a3 elementor-invisible elementor-widget elementor-widget-heading nitro-lazy"
                            data-id="5a115a3"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                            nitro-elementor-animation="animated fadeInUp"
                          >
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">
                                <span
                                  style={{
                                    color: "#a52a2a",
                                    fontWeight: 700,
                                    fontStyle: "italic",
                                  }}
                                >
                                  CONTACT
                                </span>
                                <span
                                  style={{
                                    color: "white",
                                    fontWeight: 700,
                                    fontStyle: "italic",
                                  }}
                                >
                                  US
                                </span>
                              </h2>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-9a54bd1 elementor-invisible elementor-widget elementor-widget-heading nitro-lazy"
                            data-id="9a54bd1"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                            nitro-elementor-animation="animated fadeInUp"
                          >
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">
                                <span
                                  style={{
                                    color: "#a52a2a",
                                    fontWeight: 700,
                                    fontStyle: "italic",
                                  }}
                                >
                                  PSH
                                </span>
                                stabilize your business model for long term
                                success. <br /> Let's connect up to discuss your
                                next best business move.
                              </h2>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-c1018b2 elementor-button-info elementor-align-center elementor-tablet-align-center elementor-mobile-align-center elementor-invisible elementor-widget elementor-widget-button nitro-lazy"
                            data-id="c1018b2"
                            data-element_type="widget"
                            data-widget_type="button.default"
                            nitro-elementor-animation="animated fadeInUp"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <a
                                  className="elementor-button elementor-button-link elementor-size-sm"
                                  href="#odn"
                                >
                                  <span className="elementor-button-content-wrapper">
                                    <span
                                      style={{ color: "brown" }}
                                      className="elementor-button-text"
                                    >
                                      Get In Touch
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-b65348d elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible nitro-lazy"
                    data-id="b65348d"
                    data-element_type="section"
                    nitro-elementor-animation="animated fadeInUp"
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-6c647a1"
                        data-id="6c647a1"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-1768831 elementor-position-left elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                            data-id="1768831"
                            data-element_type="widget"
                            data-widget_type="icon-box.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-icon-box-wrapper">
                                <div className="elementor-icon-box-icon">
                                  <span className="elementor-icon elementor-animation-">
                                    <i
                                      style={{ color: "brown" }}
                                      aria-hidden="true"
                                      className="icon icon-phone1"
                                    ></i>
                                  </span>
                                </div>
                                <div className="elementor-icon-box-content">
                                  <h3
                                    style={{ color: "brown" }}
                                    className="elementor-icon-box-title"
                                  >
                                    <span> Phone </span>
                                  </h3>
                                  <p className="elementor-icon-box-description nitro-lazy">
                                    PK +92 0314 2909232 <br /> US +1 (240)
                                    2138410
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-dec255d"
                        data-id="dec255d"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-3b164fa elementor-position-left elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                            data-id="3b164fa"
                            data-element_type="widget"
                            data-widget_type="icon-box.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-icon-box-wrapper">
                                <div className="elementor-icon-box-icon">
                                  <span className="elementor-icon elementor-animation-">
                                    <i
                                      style={{ color: "brown" }}
                                      aria-hidden="true"
                                      className="icon icon-email"
                                    ></i>
                                  </span>
                                </div>
                                <div className="elementor-icon-box-content">
                                  <h3
                                    style={{ color: "brown" }}
                                    className="elementor-icon-box-title"
                                  >
                                    <span> E-mail </span>
                                  </h3>
                                  <p className="elementor-icon-box-description">
                                    info@pukhtoonsolutionshub.com
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-81ae440"
                        data-id="81ae440"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-a7a261c elementor-position-left elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                            data-id="a7a261c"
                            data-element_type="widget"
                            data-widget_type="icon-box.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-icon-box-wrapper">
                                <div className="elementor-icon-box-icon">
                                  <span className="elementor-icon elementor-animation-">
                                    <i
                                      style={{ color: "brown" }}
                                      aria-hidden="true"
                                      className="icon icon-map-marker1"
                                    ></i>
                                  </span>
                                </div>
                                <div className="elementor-icon-box-content">
                                  <h3
                                    style={{ color: "brown" }}
                                    className="elementor-icon-box-title"
                                  >
                                    <span> Address </span>
                                  </h3>
                                  <p className="elementor-icon-box-description">
                                  J, block, Block J Phase 2 Johar Town, Lahore, Punjab 54000, Pakistan
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    style={{
                      backgroundColor: "transparent",
                      backgroundImage:
                        "linear-gradient(229deg, #a52a2a 0%, #000 62%)",
                    }}
                    className="elementor-section elementor-top-section elementor-element elementor-element-f23ebeb elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible nitro-lazy"
                    data-id="f23ebeb"
                    data-element_type="section"
                    data-settings='{"background_background":"gradient"}'
                    nitro-elementor-animation="animated fadeInDown"
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-119c42d"
                        data-id="119c42d"
                        data-element_type="column"
                        nitro-elementor-animation="animated none"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-ea8fd21 elementor-widget elementor-widget-heading"
                            data-id="ea8fd21"
                            data-element_type="widget"
                            id="odn"
                            data-widget_type="heading.default"
                          >
                            <div className="elementor-widget-container">
                              <h3 className="elementor-heading-title elementor-size-default">
                                Contact Us Now
                              </h3>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-3bf9558 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                            data-id="3bf9558"
                            data-element_type="widget"
                            data-widget_type="divider.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-divider">
                                <span className="elementor-divider-separator"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-561a838 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible nitro-lazy"
                    data-id="561a838"
                    data-element_type="section"
                    data-settings='{"background_background":"classNameic"}'
                    nitro-elementor-animation="animated fadeInUp"
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0003c16"
                        data-id="0003c16"
                        data-element_type="column"
                        data-settings='{"background_background":"classNameic"}'
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-418f6e2 elementor-widget elementor-widget-heading"
                            data-id="418f6e2"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                          >
                            <div className="elementor-widget-container">
                              <h3
                                style={{ color: "brown" }}
                                className="elementor-heading-title elementor-size-default"
                              >
                                We'll do our best to get back to you as soon as
                                possible
                              </h3>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-b33623e eael-wpforms-labels-yes eael-wpforms-form-button-custom elementor-widget elementor-widget-eael-wpforms"
                            data-id="b33623e"
                            data-element_type="widget"
                            data-widget_type="eael-wpforms.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="eael-contact-form eael-wpforms eael-contact-form-align-default">
                                <div
                                  className="wpforms-container "
                                  id="wpforms-1474"
                                >
                                  <form
                                    className="wpforms-validate wpforms-form"
                                    method="POST"
                                  >
                                    <div className="wpforms-head-container"></div>
                                    <div className="wpforms-field-container">
                                      <div className="wpforms-field">
                                        <label className="wpforms-field-label">
                                          Name
                                          <span className="wpforms-required-label">
                                            *
                                          </span>
                                        </label>
                                        <input
                                          name="name"
                                          type="text"
                                          value={user.name}
                                          onChange={getUserData}
                                          id="name"
                                          className="wpforms-field-large "
                                          maxlength="20"
                                          required
                                        />
                                      </div>
                                      <div className="wpforms-field">
                                        <label className="wpforms-field-label">
                                          Company Type
                                        </label>
                                        <select
                                          name="type"
                                          type="text"
                                          value={user.type}
                                          onChange={getUserData}
                                          id="type"
                                          class="wpforms-field-large"
                                        >
                                          <option value="Food">Food</option>
                                          <option value="Travel">Travel</option>
                                          <option value="Technology">
                                            Technology
                                          </option>
                                          <option value="Media &amp; Publication">
                                            Media &amp; Publication
                                          </option>
                                          <option value="Auto">Auto</option>
                                          <option value="Consumer Retail">
                                            Consumer Retail
                                          </option>
                                          <option value="Telecommunication">
                                            Telecommunication
                                          </option>
                                          <option value="Health Care">
                                            Health Care
                                          </option>
                                          <option value="Financial">
                                            Financial
                                          </option>
                                          <option value="Other">Other</option>
                                        </select>
                                      </div>
                                      <div className="wpforms-field wpforms-field-select ">
                                        <label className="wpforms-field-label">
                                          Designation
                                        </label>
                                        <select
                                          name="designation"
                                          type="text"
                                          value={user.designation}
                                          onChange={getUserData}
                                          id="designation"
                                          class="wpforms-field-large lazyloaded"
                                        >
                                          <option value="Owner">Owner</option>
                                          <option value="CEO">CEO</option>
                                          <option value="Manager">
                                            Manager
                                          </option>
                                        </select>
                                      </div>
                                      <div className="wpforms-field wpforms-field-email">
                                        <label className="wpforms-field-label">
                                          Email
                                          <span className="wpforms-required-label">
                                            *
                                          </span>
                                        </label>
                                        <input
                                          type="email"
                                          className="wpforms-field-large"
                                          name="email"
                                          value={user.email}
                                          onChange={getUserData}
                                          id="email"
                                          required
                                        />
                                      </div>
                                      <div className="wpforms-field">
                                        <label className="wpforms-field-label">
                                          Phone
                                          <span className="wpforms-required-label">
                                            *
                                          </span>
                                        </label>
                                        <input
                                          type="tel"
                                          name="number"
                                          value={user.phone}
                                          onChange={getUserData}
                                          id="number"
                                          class="wpforms-field-large wpforms-field-required wpforms-smart-phone-field wpforms-input-temp-name"
                                          data-rule-smart-phone-field="true"
                                          required=""
                                          autocomplete="off"
                                          placeholder="0314 2909232"
                                        ></input>
                                      </div>
                                      <div className="wpforms-field">
                                        <label className="wpforms-field-label">
                                          Select Service
                                          <span className="wpforms-required-label">
                                            *
                                          </span>
                                        </label>
                                        <select
                                          name="service"
                                          type="text"
                                          value={user.service}
                                          onChange={getUserData}
                                          id="service"
                                          class="wpforms-field-large wpforms-field-required"
                                          required="required"
                                        >
                                          <option
                                            value=""
                                            class="placeholder"
                                            disabled=""
                                          >
                                            Select
                                          </option>
                                          <option value="Call Center Setup">
                                            Call Center Setup
                                          </option>
                                          <option value="Website Development ">
                                            Website Development
                                          </option>
                                          <option value="Mobile App Development">
                                            Mobile App Development
                                          </option>
                                          <option value="Video Editing">
                                            Video Editing
                                          </option>
                                          <option value="Graphic Designing">
                                            Graphic Designing
                                          </option>
                                          <option value="SEO">SEO</option>
                                          <option value="PPC">PPC</option>
                                          <option value="Soical Media Marketing">
                                            Soical Media Marketing
                                          </option>
                                          <option value="CRM">CRM</option>
                                          <option value="SMS Marketing">
                                            SMS Marketing
                                          </option>
                                          <option
                                            value="Other"
                                            selected="selected"
                                          >
                                            Other
                                          </option>
                                        </select>
                                      </div>

                                      <div
                                        id="wpforms-1474-field_15-container"
                                        class="wpforms-field wpforms-field-select wpforms-field-select-style-classic"
                                        data-field-id="15"
                                      >
                                        <label
                                          class="wpforms-field-label"
                                          for="wpforms-1474-field_15"
                                        >
                                          Request
                                          <span class="wpforms-required-label">
                                            *
                                          </span>
                                        </label>
                                        <select
                                          name="request"
                                          type="text"
                                          value={user.request}
                                          onChange={getUserData}
                                          id="service"
                                          class="wpforms-field-large wpforms-field-required"
                                          required="required"
                                        >
                                          <option
                                            value=""
                                            class="placeholder"
                                            disabled=""
                                          >
                                            Select
                                          </option>
                                          <option
                                            value="Urgently Need"
                                            selected="selected"
                                          >
                                            Urgently Need
                                          </option>
                                          <option value="Share Proposal">
                                            Share Proposal
                                          </option>
                                          <option value="Need Cost Price">
                                            Need Cost Price
                                          </option>
                                          <option value="Call  Back ">
                                            Call Back
                                          </option>
                                          <option value="Others">Others</option>
                                        </select>
                                      </div>

                                      <div className="wpforms-field">
                                        <label className="wpforms-field-label">
                                          Website / URL
                                          <span className="wpforms-required-label">
                                            *
                                          </span>
                                        </label>
                                        <input
                                          name="link"
                                          type="text"
                                          value={user.link}
                                          onChange={getUserData}
                                          id="link"
                                          className="wpforms-field-large "
                                          maxlength="20"
                                          required
                                        />
                                      </div>
                                    </div>
                                    <button
                                      type="submit"
                                      value="submit"
                                      id="submit"
                                      onClick={postData}
                                    >
                                      Submit
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Contact;
