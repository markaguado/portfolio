import React, { Component } from 'react';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick = (event) => {

        event.preventDefault();

        const anchorElements = document.querySelectorAll(".nav-link");

        for (const anchor of anchorElements) {
            anchor.addEventListener('click', (event) => {
                // Get the href value of the clicked anchor element
                const href = event.target.getAttribute('href');
                let divElement = document.querySelector(href);
                // Do something with the href value
                divElement.scrollIntoView({ behavior: 'smooth' });
            });
        }

    }

    render() {
        return (
            <footer>
                <div className="container">
                    <ul className="footerFlexContainer">
                        <li className="footerFlexItems">
                            <img src="portfolio/img/logo-1-white.png" alt="Mark Logo" className="imgDefault footerLogo" />
                        </li>

                        <li className="footerFlexItems">
                            <div className="flexInnerChild">
                                <a href="https://markaguado.github.io/portfolio"
                                    className="footerLink">
                                    <img src="portfolio/img/github-logo.png" alt="Github Logo" />
                                </a>
                                <a href="https://markaguado.github.io/portfolio"
                                    className="footerLink">
                                    https://markaguado.github.io/portfolio
                                </a>
                            </div>
                            <div className="flexInnerChild">
                                <a href="https://www.linkedin.com/in/mark-aguado/"
                                    className="footerLink">
                                    <img src="portfolio/img/linkedin-logo.png" alt="LinkedIn Logo" />
                                </a>
                                <a href="https://www.linkedin.com/in/mark-aguado/"
                                    className="footerLink">
                                    https://www.linkedin.com/in/mark-aguado/
                                </a>
                            </div>

                        </li>

                    </ul>

                    <hr />

                    <a href="#introduction" className="up nav-link" >
                        <img href="#introduction" src="portfolio/img/top-logo.png" alt="Arrow up" className="imgDefault arrowUp nav-link" onClick={this.handleClick} />
                    </a>

                    <a href="#introduction" className="toTop up nav-link" onClick={this.handleClick}>
                        Back to Top
                    </a>


                    <p className="footerCopy">
                        All rights reserved. Mark Aguado
                    </p>
                </div>

            </footer>
        );
    }
}

export default Footer;

