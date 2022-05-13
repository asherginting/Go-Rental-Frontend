import React from 'react';
import { useNavigate } from 'react-router-dom';
import noImage from '../assets/images/no-image.jpg';
import handleImg from '../assets/images/no-image.jpg';
import '../assets/css/product-highlight.css';

export default function Vehicle({ props }) {
    const {
        image, location, brand, id,
    } = props;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/vehicle/${id}`);
    };
    return (
        <div className="col-6 col-lg-3 mb-3 text-center product-highlight">
            <div className="d-flex overflow-hidden main-highlight" style={{ backgroundColor: 'rgb(236 236 236)', borderRadius: '8px' }}>
                <div onClick={handleClick} style={{ cursor: 'pointer' }} className="position-relative align-self-end" aria-hidden="true">
                    {image
                    // ? <img className="img-fluid mb-0" src={imgErr ? handleImg : image} alt={brand} onError={() => setImgErr(true)} />
                        ? (
                            <img
                                className="img-fluid mb-0"
                                src={image}
                                alt={brand}
                                onError={(e) => { e.target.src = handleImg; }}
                            />
                        )
                        : <img className="img-fluid mb-0" src={noImage} alt={brand} />}
                    <div className="highlight position-absolute start-0 text-start ps-1">
                        <h5>{brand}</h5>
                        <span>{location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

