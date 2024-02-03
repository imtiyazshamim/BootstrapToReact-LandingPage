import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/Whyus.css';
import 'bootstrap/dist/js/bootstrap.bundle'; // Make sure you have Bootstrap JS included

function Whyus() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false
        });
    }, []);

    return (
        <div>
            <section id="why-us" className="why-us section-bg">
                <div className="container-fluid" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                            <div className="content">
                                <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                </p>
                            </div>
                            <div className="accordion-list">
                                <ul>
                                    <li>
                                        <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                                            <p>
                                                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                                            <p>
                                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                                            <p>
                                                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 why-bg-img align-items-stretch order-1 order-lg-2 img"  data-aos="zoom-in" data-aos-delay="150"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Whyus;
