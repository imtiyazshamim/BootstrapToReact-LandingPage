import React, { useState, useEffect } from 'react';
import '../assets/css/Footer.css';

const FooterLinkList = ({ title, links }) => (
    <div className="col-lg-3 col-md-6 footer-links">
        <h4>{title}</h4>
        <ul>
            {links.map((link) => (
                <li key={link.title}><i className="bx bx-chevron-right"></i> <a href={link.url}>{link.title}</a></li>
            ))}
        </ul>
    </div>
);

const SocialLinks = ({ links }) => (
    <div className="social-links mt-3">
        {links.map((link) => (
            <a key={link.name} href={link.url} className={link.name}><i className={`bx bxl-${link.name}`}></i></a>
        ))}
    </div>
);

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Email submitted:', email);
        setEmail(''); // Clearing the input field after submission
    };

    return (
        <div className="footer-newsletter">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h4>Join Our Newsletter</h4>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="email" 
                                name="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        isVisible && 
        <a onClick={scrollToTop} className="back-to-top d-flex align-items-center justify-content-center" href="javascript:void(0)">
            <i className="bi bi-arrow-up-short"></i>
        </a>
    );
};

const Footer = () => {
    const usefulLinks = [
        { title: "Home", url: "#hero" },
        { title: "About us", url: "#about-2" },
        { title: "Services", url: "#services" },
        { title: "Terms of service", url: "#" },
        { title: "Privacy policy", url: "#" }
    ];

    const serviceLinks = [
        { title: "Web Design", url: "#" },
        { title: "Web Development", url: "#" },
        { title: "Product Management", url: "#" },
        { title: "Marketing", url: "#" },
        { title: "Graphic Design", url: "#" }
    ];

    const socialLinks = [
        { name: "twitter", url: "#" },
        { name: "facebook", url: "https://www.facebook.com/hacking.gangster" },
        { name: "instagram", url: "https://www.instagram.com/imtiyaz_15/?hl=en" },
        { name: "skype", url: "#" },
        { name: "linkedin", url: "https://in.linkedin.com/in/shamim-imtiyaz-11a3406b" }
    ];

    return (
        <footer id="footer">
            <Newsletter />
            <div className='footer-top'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>Arsha</h3>
                            <address>
                                A108 Adam Street <br />
                                New York, NY 535022 <br />
                                United States <br /><br />
                                <strong>Phone:</strong> +1 5589 55488 55<br />
                                <strong>Email:</strong> info@example.com<br />
                            </address>
                        </div>

                        <FooterLinkList title="Useful Links" links={usefulLinks} />
                        <FooterLinkList title="Our Services" links={serviceLinks} />

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Social Networks</h4>
                            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                            <SocialLinks links={socialLinks} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom clearfix">
                <div className="copyright">
                    &copy; Copyright <strong><span>Arsha</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://github.com/imtiyazshamim/">Shamim Imtiyaz</a>
                </div>
            </div>

            <BackToTop />
        </footer>
    );
}

export default Footer;
