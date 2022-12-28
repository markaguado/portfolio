import Slider from 'react-slick';
import { sampleWorks } from './sampleWorks';
import { techStack } from './techStack';


function Portfolio() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        auto: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (

        <div>
            <section className="section-padding-base mark-f2" id="portfolio">
                <div className="custom-container">

                    <p className="content-lg cstm-clr">
                        My Portfolio
                    </p>
                    <p className="content-sm">
                        Being a developer, I have developed/maintain these wonderful projects that helped their business reached their clients seamlessly. I have also developed lots of landing pages with different kinds of layout and they are responsive from desktop to mobile, you may see it <a href="landing-pages.html" className="cstm-clr">here</a>.
                    </p>

                    <ul className="flex-container image-slider">
                        <Slider {...settings}>
                            {sampleWorks.map((item) => (
                                <div className="slick-con" key={item.id}>
                                    <li className="flex-items">
                                        <div className="img-holder">
                                            <img src={item.imageLink} className="img-fluid" alt={item.title} />
                                        </div>
                                        <div className="link-holder">
                                            <a href={item.webLink}>
                                                {item.title}
                                            </a>
                                        </div>
                                    </li>
                                </div>
                            ))}

                        </Slider>
                    </ul>


                </div>
            </section>

            <section className="section-padding-base mark-f3" id="skills">
                <div className="custom-container">
                    <p className="content-lg cstm-clr sec-title color-bl">
                        Technologies and Tools
                    </p>
                    <p className="content-sm color-bl">
                        These are the tools and technologies that I have been using when developing a project.
                    </p>
                    <ul className="skills-slider">
                        <Slider {...settings2}>
                            {techStack.map((item) => (
                                <li className="skills-items" key={item.id}>
                                    <div className="img-holder">
                                        <img src={item.techImg} alt={item.techAlt} className="img-fluid" />
                                    </div>
                                </li>
                            ))}

                        </Slider>

                    </ul>
                </div>
            </section>

        </div>
    );
}

export default Portfolio;

