import Slider from 'react-slick';
import { sampleWorks } from './sampleWorks';
import { techStack } from './techStack';
import Fancy from '../component/fancy';





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
                        As a front-end developer, I have a proven track record of delivering successful projects that have enabled my clients to effectively reach their target audience. My portfolio showcases a range of projects, including the development and maintenance of engaging and user-friendly websites. In addition, I have extensive experience creating responsive landing pages with a variety of layouts, ensuring optimal viewing experiences across different devices, including desktop and mobile.
                    </p>

                    <ul className="flex-container image-slider">
                        <Slider {...settings}>
                            {sampleWorks.map((item) => (
                                <div className="slick-con" key={item.id}>
                                    <li className="flex-items">
                                        <div className="img-holder">
                                            <img src={item.imageLink} className="img-fluid" loading="lazy" alt={item.title} />
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

            <section className="fancySec">
                <div className="custom-container">
                    <Fancy />
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
                                        <img src={item.techImg} alt={item.techAlt} className="img-fluid" loading="lazy" />
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

