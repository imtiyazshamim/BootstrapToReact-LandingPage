import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/Team.css';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// Importing team images
import team1 from '../assets/img/team/team-1.jpg';
import team2 from '../assets/img/team/team-2.jpg';
import team3 from '../assets/img/team/team-3.jpg';
import team4 from '../assets/img/team/team-4.jpg';

function Team() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false
        });
    }, []);

    return (
        <section id="team" className="team section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Team</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">
                    {/* Team member 1 */}
                    <div className="col-lg-6 mt-4 " data-aos="zoom-in" data-aos-delay="100">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src={team1} className="img-fluid" alt="Walter White" /></div>
                            <div className="member-info">
                                <h4>Walter White</h4>
                                <span>Chief Executive Officer</span>
                                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                <div className="social">
                                    <a href="#"><FaTwitter /></a>
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><FaLinkedinIn /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team member 2 */}
                    <div className="col-lg-6 mt-4 " data-aos="zoom-in" data-aos-delay="200">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src={team2} className="img-fluid" alt="Sarah Jhonson" /></div>
                            <div className="member-info">
                                <h4>Sarah Jhonson</h4>
                                <span>Product Manager</span>
                                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                <div className="social">
                                    <a href="#"><FaTwitter /></a>
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><FaLinkedinIn /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team member 3 */}
                    <div className="col-lg-6 mt-4 " data-aos="zoom-in" data-aos-delay="300">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src={team3} className="img-fluid" alt="William Anderson" /></div>
                            <div className="member-info">
                                <h4>William Anderson</h4>
                                <span>CTO</span>
                                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                <div className="social">
                                    <a href="#"><FaTwitter /></a>
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><FaLinkedinIn /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team member 4 */}
                    <div className="col-lg-6 mt-4 " data-aos="zoom-in" data-aos-delay="400">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src={team4} className="img-fluid" alt="Amanda Jepson" /></div>
                            <div className="member-info">
                                <h4>Amanda Jepson</h4>
                                <span>Accountant</span>
                                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                <div className="social">
                                    <a href="#"><FaTwitter /></a>
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><FaLinkedinIn /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;
