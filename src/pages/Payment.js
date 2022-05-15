/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import '../assets/css/vehicle-detail.css';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import {IoChevronBack} from 'react-icons/io5';
import activeNav from '../helper/activeNav';
import { getVehicleDetail } from '../redux/actions/vehicle';
import { useDispatch, useSelector } from 'react-redux';
import deleteActiveNav from '../helper/deleteActiveNav';
import { addHistory } from '../redux/actions/payment';
import noImage from '../assets/images/no-image.jpg';

export default function Payment() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const {vehicle} = useSelector(state => state.vehicleReducer.detail);
    const {counter} = useSelector(state => state);
    const {userData} = useSelector(state => state.auth);
    const { detail } = useSelector((state) => state.vehicleReducer);
    const { payment, auth } = useSelector((state) => state);
    

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getVehicleDetail(id));
        dispatch({
            type: 'DELETE_NEW_HISTORY_DATA',
        });
        activeNav();
    }, [payment.newHistory.idHistory]);

    const back = () => {
        window.history.back();
    };
    const copyBtn = () => {
        const code = document.getElementById('bookingCode').innerHTML;
        navigator.clipboard.writeText(code);
        console.log('test', counter);
        alert('Copied!');
    };
    const {image, type, brand, location, price} = detail.vehicle;

    const rentEnd = (date, total) => {
        const currentdate = new Date(date);
        currentdate.setDate(currentdate.getDate() + (Number(total)));
        const tomorrow = currentdate.toJSON().slice(0, 10);
        return tomorrow;
    };

    const handlePayment = (ev) => {
        ev.preventDefault();
        // const token = window.localStorage.getItem('token');
        const { token } = auth;
        dispatch(
            addHistory(token, userData.idUser, id, counter.startDate, rentEnd(counter.startDate, counter.totalDay)),
        );
        deleteActiveNav();
        navigate('/history');
    };

    return (
        <>
            <div className='vehicle-detail'>
                <section className="container first-section payment">
                    <div className="d-flex flex-row head">
                        <div onClick={back} className="back d-flex mb-5">
                            <IoChevronBack className='me-5 fs-1' />
                        </div>
                        <span>Payment</span>
                    </div>
                    <div className="container row pt-5 detail-vehicle">
                        <div className="col-12 col-sm-5 col-md-5 col-xl-4 img-section overflow-hidden d-flex align-item-center justify-content-center">
                            {image
                                ? <img src={image} onError={(e) => { e.target.src = noImage; }} alt={brand} className="img-fluid" />
                                : <img src={noImage} alt={brand} className="img-fluid" />}
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-xl-8 description-section">
                            <div className="description">
                                <h2 className="fw-bold">{brand}</h2>
                                <p>{location}</p>
                            </div>
                            <div className="status my-3 d-flex flex-column">
                                <span className="text-muted fw-bold">No prepayment</span>
                            </div>
                            <div className="my-auto mt-4 code-container">
                                <span className="code" id='bookingCode'>#GOR141199</span>
                            </div>
                            <div className="mt-3 w-50 copy-contain">
                                <button onClick={copyBtn} className="btn btn-green p-1 btn-copy-top">Copy booking code</button>
                            </div>
                        </div>
                    </div>

                    <div className="rent-data">
                        <div className="d-flex flex-row data-item">
                            <div className="first-col">
                                <div className="border border-dark w-100 fw-bold">
                                Quantity:
                                    {' '}
                                    {counter.totalItem}
                                    {' '}
                                bikes
                                </div>
                            </div>
                            <div className="second-col">
                                <div className="border border-dark w-100">
                                    <span className="reservation-date fw-bold">Reservation Date: </span>
                                    {/* <span>{new Date(counter.startDate).toDateString()}-{new Date(rentEnd(counter.startDate)).toDateString()}</span></div> */}
                                    <span>
                                        {new Date(counter.startDate).toDateString()}
                                        {' '}
                    -
                                        {' '}
                                        {new Date(rentEnd(counter.startDate, counter.totalDay)).toDateString()}
                                    </span>

                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row data-item">
                            <div className="first-col d-flex">
                                <div className="border border-dark w-100 overflow-auto second-row order-details">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="fw-bold">Order details:</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[...Array(Number(counter.totalItem))].map((data, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        1
                                                        {type}
                                                        : Rp.
                                                        {new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(price)}
                                                        {' '}
                                                        (
                                                        {counter.totalDay}
                                                        {' '}
                                                        day)
                                                    </td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td className="fw-bold pt-2">
                                                    Total:
                                                    {' '}
                                                    {new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(price * counter.totalItem * counter.totalDay)}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="second-col">
                                <div className="border border-dark w-100  second-row identity">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="fw-bold">Identity:</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    {userData.name}
                                                    (
                                                    {userData.phoneNumber}
                                                    )
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{userData.email}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center g-0 mt-4">
                        <div className="col-12 col-sm-3">
                            <h2 className="fw-bold">Payment Code:</h2>
                        </div>
                        <div className="col-12 col-sm-4 code-section">
                            <div className="d-flex flex-row border justify-content-between align-items-center border-dark payment-code">
                                <span className="code">#GOR141199</span>
                                <button onClick={copyBtn} className="btn btn-black btn-copy">Copy</button>
                            </div>
                        </div>
                        <div className="col-12 col-sm-auto">
                            <select className="form-select">
                                <option className="d-none">Select payment method</option>
                                <option>Cash</option>
                                <option>Transfer</option>
                            </select>
                        </div>
                    </div>

                    <div className="pay-now mt-5 px-2">
                        <button onClick={handlePayment} className="btn btn-green w-100 mt-3" type="button">
              Finish payment:
                            {' '}
                            <span className="text-danger time">59:30</span>
                        </button>
                    </div>
                </section>
            </div>
            {payment.finishPayment && <Navigate to={`/history/${payment.newHistory.idHistory}`} />}
        </>
    );
}
