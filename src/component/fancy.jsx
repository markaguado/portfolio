import React, { useState } from "react";
import { landingPages } from "../pages/landingPages";
import Modal from "./Modal";


function Fancy() {
    const [isOpen, setIsOpen] = useState(false);
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.imageLink);

        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.classList.add('lock-scroll');
        } else {
            document.body.classList.remove('lock-scroll');
        }
    };


    const handleRotationRight = () => {
        const totalLength = landingPages.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = landingPages[0].imageLink;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = landingPages.filter((item) => {
            return landingPages.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].imageLink;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
        console.log("test");

    };


    const handleRotationLeft = () => {
        const totalLength = landingPages.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = landingPages[totalLength - 1].imageLink;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = landingPages.filter((item) => {
            return landingPages.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].imageLink;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);


    };
    return (
        <div className="fancy">

            {landingPages.map((item, index) => (
                <div className="wrapper-images" key={index}>
                    <img src={item.imageLink} alt={item.title} onClick={() => handleClick(item, index)} />
                    <div className="titleHolder">
                        <p className="title" onClick={() => handleClick(item, index)} >
                            {item.title}
                        </p>
                    </div>

                </div>

            ))}

            {clickedImg && (

                < Modal
                    clickedImg={clickedImg}
                    handleRotationRight={handleRotationRight}
                    setClickedImg={setClickedImg}
                    handleRotationLeft={handleRotationLeft}
                />

            )}

        </ div>
    );
}

export default Fancy;