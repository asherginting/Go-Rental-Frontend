import React, { useEffect } from 'react';
import '../assets/css/vehicle-detail.css';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { IoChevronBack } from 'react-icons/io5';
import { IoMdHeart } from 'react-icons/io';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import noImage from '../assets/images/no-image.jpg';
import handleImg from '../assets/images/no-image.jpg';
import activeNav from '../helper/activeNav';
import { getVehicleDetail } from '../redux/actions/vehicle';
import { empty, increment, decrement } from '../redux/actions/counter';

function VehicleDetail() {
    const { id } = useParams();
    const { auth } = useSelector((state) => state);
    const vehicleDetail = useSelector((state) => state.vehicleReducer.detail);
    const { counter } = useSelector((state) => state);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(empty());
        window.scrollTo(0, 0);
        dispatch(getVehicleDetail(id));
        activeNav();
    }, []);

    const dataVehicle = vehicleDetail.vehicle;

    const countPlus = () => {
        dispatch(increment(dataVehicle.price));
    };
    const countMinus = () => {
        dispatch(decrement());
    };
    const backNavigate = () => {
        window.history.back();
    };
    const toReservation = () => {
        navigate(`/reservation/${id}`);
    };

    // const update = (e) => {
    //     const name = document.getElementById('name').value;
    //     const color = document.getElementById('color').value;
    //     const loc = document.getElementById('loc').value;
    //     const capacity = document.getElementById('capacity').value;
    //     const isAvailable = document.getElementById('isAvailable').value;
    //     const isPrepay = document.getElementById('isPrepay').value;
    //     const categoryId = document.getElementById('categoryId').value;
    //     const price = document.getElementById('price').value;
    //     const reservationBefore = document.getElementById('reservationBefore').value;
    //     const stock = document.getElementById('stock').value;
    //     const paymentMethod = updateVehicle.paymentMethod;
    //     const data = {name, color, loc, capacity, isAvailable, isPrepay, categoryId, price, stock, reservationBefore, paymentMethod};
    //     dispatch(updateDataVehicle(data, id));
    // };

    return (
        <div className="vehicle-detail my-5">
            {vehicleDetail.isLoading ? <div className="mt-5 pt-5"></div>
                : (
                    <section className="container first-container">
                        {auth.userData.username != 'Admin' &&
                        <div className="row pt-5 detail-vehicle">
                            <div onClick={backNavigate} className="back my-4 fw-bold fs-5" aria-hidden="true">
                                <IoChevronBack className="me-5" />
                                <span>Back</span>
                            </div>
                            <div className="col-12 col-lg-6 img-section">
                                <div className="cover-image overflow-hidden text-center">
                                    {dataVehicle.image
                                        ? <img src={dataVehicle.image} onError={(e) => { e.target.src = handleImg; }} alt={dataVehicle.brand} className="img-fluid" />
                                        : <img src={noImage} alt={dataVehicle.brand} className="img-fluid" />}
                                </div>
                                <div className="row carousel d-flex align-items-center mt-4">
                                    <button className="col-1 btn" aria-label="previous button" type="button">
                                        <GrFormPrevious className="prev" />
                                    </button>
                                    <div className="col-5 overflow-hidden rounded text-center">
                                        <img src={dataVehicle.image || noImage} alt={dataVehicle.brand} className="rounded img-fluid" />
                                    </div>
                                    <div className="col-5 overflow-hidden rounded text-center">
                                        <img src={dataVehicle.image || noImage} alt={dataVehicle.brand} className="rounded img-fluid" />
                                    </div>
                                    <button className="col-1 btn" aria-label="next button" type="button">
                                        <GrFormNext className="next" />
                                    </button>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 description-section">
                                <div className="description">
                                    <h2 className="fw-bold">{dataVehicle.brand}</h2>
                                    <p className="text-muted">{dataVehicle.location}</p>
                                </div>
                                <div className="status my-3 d-flex flex-column">
                                    <span className="text-success fw-bold my-2">{dataVehicle.status}</span>
                                    <span className="text-danger">No prepayment</span>
                                </div>
                                <div className="mt-4">
                                    Capacity:
                                    {' '}
                                    {dataVehicle.capacity}
                                    {' '}
                                    Person
                                </div>
                                <div className="my-2">
                                    Type :
                                    {' '}
                                    {dataVehicle.type}
                                </div>
                                <div>
                                    Reservation: before 2 PM
                                </div>
                                <div className="price mt-5 text-end">
                                    Rp.
                                    <span className="fs-1">
                                        {new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(dataVehicle.price + counter.totalPrice)}
                                    </span>
                                    /day
                                </div>
                                <div className="my-auto">
                                    <div className="total-day d-flex flex-row justify-content-between align-items-center">
                                        <button className="btn plus" aria-label="button plus" onClick={countPlus} type="button">
                                            <BiPlus className="" />
                                        </button>
                                        <div className="count">{counter.totalItem}</div>
                                        <button className="btn minus" aria-label="button minus" onClick={countMinus} type="button">
                                            <BiMinus className="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </section>
                )}

            <section className="container form-section mt-5">
                {auth?.token ? (
                    <form className="row">
                        {auth.userData.username != 'Admin' &&
                        <><div className="col-12 col-md">
                            <button className="btn btn-black" type="button">Chat Admin</button>
                        </div><div className="col-12 col-md text-center btn-reservation">
                            <button onClick={toReservation} className="btn btn-green" type="button">Reservation</button>
                        </div><div className="col-12 col-md-3 text-end">
                            <button className="btn btn-black" type="button">
                                <IoMdHeart />
                                <span className="ps-2">Like</span>
                            </button>
                        </div></>}
                    </form>
                )
                    : (
                        <><form className="row">
                            <div className="col-12 col-md">
                                <button className="btn btn-black" type="button">Chat Admin</button>
                            </div>
                            <div className="col-12 col-md text-center btn-reservation">
                                <Link to="/login">
                                    <button className="btn btn-green" type="button">Reservation</button>
                                </Link>
                            </div>
                            <div className="col-12 col-md-3 text-end">
                                <button className="btn btn-black" type="button">
                                    <IoMdHeart />
                                    <span className="ps-2">Like</span>
                                </button>
                            </div>
                        </form>
                        </>
                    )}
            </section>

            {auth.userData.username ==='Admin' &&
            <section>
                <main className="container">
                    <section className="back">
                        <div className='pt-3'>
                            <div onClick={backNavigate} className="back my-4 fw-bold fs-5" aria-hidden="true">
                                <IoChevronBack className="me-5" />
                                <span>Back</span>
                            </div>
                        </div>
                    </section>

                    <section className="preview">
                        {/* {Detail.isLoading == true &&
                <Skeleton height={150} containerClassName='row' count={8} wrapper={({ children }) => (<div className='col-md-3'>{children}</div>)} />
                  } */}
                        <div className="row pt-5 pic">
                            <div className="col text-center" style={{ cursor: 'pointer' }}>
                                <img src={noImage} className="img-fluid add" alt="Vehicle Detail" />
                                <input type="file"
                                    // ref={hiddenFileInput}
                                    className='d-none'
                                    name='image'
                                    accept='profileImage'
                                    // onChange={(e) => fileInputHandler(e)}
                                />
                            </div>
                            <div className="col">
                                <div className="desc">
                                    <div className="mb-3">
                                        <input 
                                            placeholder='Name' 
                                            id='name' 
                                            name='name' 
                                            className="d-block w-100 input-underline" 
                                            type="text" 
                                            // value={name} 
                                            // onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input 
                                            placeholder='Color' 
                                            id='color' 
                                            name='color' 
                                            className="d-block w-100 input-underline" 
                                            type="text" 
                                            // value={color} 
                                            // onChange={(e) => setColor(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input 
                                            placeholder='Location' 
                                            id='loc' 
                                            name='loc' 
                                            className="d-block w-100 input-underline" 
                                            type="text" 
                                            // value={loc} 
                                            // onChange={(e) => setLoc(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input 
                                            placeholder='Capacity' 
                                            id='capacity' 
                                            name='capacity' 
                                            className="d-block w-100 input-underline" 
                                            type="text" 
                                            // value={capacity} 
                                            // onChange={(e) => setCapacity(e.target.value)}
                                        />
                                    </div>
                                    <label style={{ fontSize: 24, fontFamily:'Playfair Display', fontWeight:'bold'}}>Status</label>
                                    <select name='isAvailable' id='isAvailable' className="form-select  w-100 mb-3" >
                                        <option   style={{ display: 'none' }}>Select Status</option>
                                        <option value="1" className='text-success'>Available</option>
                                        <option value="0" className='text-danger'>Full Booked</option>
                                    </select>
                                    <label style={{ fontSize: 24, fontFamily:'Playfair Display', fontWeight:'bold'}} className='mb-2'>Category</label>
                                    <select name='categoryId' id='categoryId' className="form-select w-100 mb-3 py-3 px-4"  style={{backgroundColor:'#072227', color : '#4FBDBA'}}>
                                        <option style={{ display: 'none' }}>Category</option>
                                        <option value="1" >Car</option>
                                        <option value="2" >Motorbike</option>
                                        <option value="3" >Bike</option> 
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col mb-4">
                                <div className='row text-center'>
                                    <div className='col'>
                                        <button className="filled w-50" style={{ cursor: 'pointer', fontWeight:'bold' }} >Update Vehicle</button>
                                    </div>
                                    <div className='col'>
                                        <button  className="dark w-50" style={{ color:'#32DBC6', cursor: 'pointer', fontWeight:'bold' }}>Delete Vehicle</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </section>}
        </div>
    );
}

export default VehicleDetail;
