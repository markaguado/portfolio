import React, { Component } from 'react';

class Body extends Component {


    render() {
        return (
            <main id="introduction">
                <div className="container">
                    <div className="flexContainer indexFlex">
                        <div className="flexItems">
                            <h1>Hi! I am Mark Aguado,</h1>
                            <p className="description">a <b>Front-End Developer</b>, I
                                began my professional career three years ago and
                                have since refined my skills in the creation of
                                <b> semantic</b>, <b>fast</b>, and <b>responsive
                                    websites</b>. Being a
                                developer requires a commitment to never-ending
                                learning, so here I am, currently enrolled in
                                Algonquin College's two-year Computer Programming
                                programme learning the Back-End, specifically Object
                                Oriented Programming, Databases, and Linux. During
                                my
                                free time, I usually go on biking or sometimes
                                running.
                            </p>

                            <div className="linksContainer">
                                <a href="https://www.linkedin.com/in/mark-aguado-807765167/"
                                    className="collegeLink">LinkedIn</a>
                                <a
                                    href="mailto:markaguado.dev@gmail.com"
                                    className="collegeLink">Hire Me</a>
                            </div>
                        </div>
                        <div className="flexItems">
                            <img src={`portfolio/img/mark.png`} alt="" className="personalPhoto imgDefault" />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Body;

