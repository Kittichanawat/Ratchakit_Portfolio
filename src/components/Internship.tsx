import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChevronLeft, faChevronRight, faTimes, faImages } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Internship.scss';

function Internship() {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const internshipImages = [
        {
            src: `${process.env.PUBLIC_URL}/internship/img_1.jpg`,
            alt: "",
            description: ""
        },
        {
            src: `${process.env.PUBLIC_URL}/internship/img_2.jpg`,
            alt: "",
            description: ""
        },
        {
            src: `${process.env.PUBLIC_URL}/internship/img_3.jpg`,
            alt: "",
            description: ""
        },
        {
            src: `${process.env.PUBLIC_URL}/internship/img_4.jpg`,
            alt: "",
            description: ""
        },
        {
            src: `${process.env.PUBLIC_URL}/internship/img_5.jpg`,
            alt: "",
            description: ""
        },
        {
            src: `${process.env.PUBLIC_URL}/internship/img_6.jpg`,
            alt: "",
            description: ""
        },
        // เพิ่มรูปภาพอื่นๆ ตามต้องการ
    ];



    // Auto slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => 
                prev === internshipImages.length - 1 ? 0 : prev + 1
            );
        }, 3000); // เปลี่ยนรูปทุก 3 วินาที

        return () => clearInterval(timer);
    }, [internshipImages.length]);

    const handlePrevSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentSlide(prev => 
            prev === 0 ? internshipImages.length - 1 : prev - 1
        );
    };

    const handleNextSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentSlide(prev => 
            prev === internshipImages.length - 1 ? 0 : prev + 1
        );
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (selectedImageIndex !== null) {
            if (e.key === 'ArrowLeft') {
                setSelectedImageIndex(prev => 
                    prev !== null ? (prev > 0 ? prev - 1 : internshipImages.length - 1) : null
                );
            } else if (e.key === 'ArrowRight') {
                setSelectedImageIndex(prev => 
                    prev !== null ? (prev < internshipImages.length - 1 ? prev + 1 : 0) : null
                );
            } else if (e.key === 'Escape') {
                setSelectedImageIndex(null);
            }
        }
    };

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedImageIndex]);

    const handlePrevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedImageIndex(prev => 
            prev !== null ? (prev > 0 ? prev - 1 : internshipImages.length - 1) : null
        );
    };

    const handleNextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedImageIndex(prev => 
            prev !== null ? (prev < internshipImages.length - 1 ? prev + 1 : 0) : null
        );
    };

    return (
        <div className="internship-container" id="internship">
            <div className="items-container">
                <h1>
                    <FontAwesomeIcon icon={faBriefcase} className="icon" />
                    Internship Experience
                </h1>
                
                <div className="internship-content">
                    <div className="internship-description">
                        <h3>IT Support Intern</h3>
                        <h4>Medical Informatics Division, Hua Hin Hospital</h4>
                        <p className="duration">December 2020 - October 2021</p>
                        <ul>
                            <li>Collaborated with the team to implement system updates and resolve technical issues.</li>
                            <li>Maintained and troubleshot network and computer systems within Hua Hin Hospital</li>
                           
                        </ul>
                    </div>

                    <div className="carousel-container">
                        <div className="carousel" onClick={() => setSelectedImageIndex(currentSlide)}>
                            {internshipImages.map((image, index) => (
                                <div 
                                    key={index}
                                    className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                                >
                                    <img src={image.src} alt={image.alt} />
                                    <div className="slide-description">
                                        <p>{image.description}</p>
                                    </div>
                                </div>
                            ))}
                            <button className="carousel-button prev" onClick={handlePrevSlide}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <button className="carousel-button next" onClick={handleNextSlide}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                            <div className="carousel-dots">
                                {internshipImages.map((_, index) => (
                                    <span 
                                        key={index} 
                                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentSlide(index);
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {selectedImageIndex !== null && (
                <div className="modal" onClick={() => setSelectedImageIndex(null)}>
                    <button className="nav-button prev" onClick={handlePrevImage}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <div className="modal-content-wrapper" onClick={e => e.stopPropagation()}>
                        <img 
                            src={internshipImages[selectedImageIndex].src} 
                            alt={internshipImages[selectedImageIndex].alt} 
                            className="modal-content"
                        />
                        <p className="modal-description">
                            {internshipImages[selectedImageIndex].description}
                        </p>
                        <div className="image-counter">
                            {selectedImageIndex + 1} / {internshipImages.length}
                        </div>
                    </div>
                    <button className="nav-button next" onClick={handleNextImage}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    <button className="close-button" onClick={() => setSelectedImageIndex(null)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
            )}
        </div>
    );
}

export default Internship; 