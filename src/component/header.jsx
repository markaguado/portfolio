import React, { Component } from 'react';

class Header extends Component {


    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            height: 0, scrolltop: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        const height = this.divElement.clientHeight;

        this.setState({ height });
        window.addEventListener("scroll", this.handleScroll);
    }
    componentDidUpdate(prevProps, prevState) {
        const scrollTop2 = window.pageYOffset;

        if (scrollTop2 !== prevState.scrolltop) {
            this.setState({ scrolltop: scrollTop2 });

        }
    }

    handleScroll(event) {
        const scrollTop = window.scrollTo;

        this.setState({
            scrolltop: scrollTop
        });
    }

    handleClick = (event) => {

        event.preventDefault();

        const anchorElements = document.querySelectorAll(".navLinks");

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

    toggleMenu = () => {
        this.setState((prevState) => ({
            menuOpen: !prevState.menuOpen,
        }));
    }

    render() {

        return (
            <header ref={divElement => (this.divElement = divElement)} className={
                this.state.scrolltop > this.state.height
                    ? "sticky"
                    : ""
            }>
                <nav id="navigation" className="mainNav">
                    <div className="logoContainer">
                        <a href="#introduction" className="navLinks" onClick={this.handleClick}>
                            <img src="portfolio/img/logo-1-white.png"
                                alt="Mark Aguado Logo" href="#introduction" className="logo navLinks" onClick={this.handleClick} />
                        </a>
                    </div>

                    <ul className="navLinksContainer desktopMenu">
                        <li>
                            <a href="#introduction" className="navLinks" onClick={this.handleClick}>
                                Introduction
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" className="navLinks" onClick={this.handleClick}>
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="navLinks" onClick={this.handleClick}>
                                Skills
                            </a>
                        </li>
                    </ul>


                    <div className="mobileMenu">
                        {/* mobile burger */}
                        <button onClick={this.toggleMenu} className="burgerMenu">
                            <span className={this.state.menuOpen ? 'open fa fa-close' : 'fa fa-bars'}></span>
                        </button>
                        {this.state.menuOpen && (
                            <ul className="navLinksContainer">
                                <li>
                                    <a href="#introduction" className="navLinks" onClick={this.handleClick}>
                                        Introduction
                                    </a>
                                </li>
                                <li>
                                    <a href="#portfolio" className="navLinks" onClick={this.handleClick}>
                                        Portfolio
                                    </a>
                                </li>
                                <li>
                                    <a href="#skills" className="navLinks" onClick={this.handleClick}>
                                        Skills
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>

                </nav>

            </header>
        );
    }
}

export default Header;


