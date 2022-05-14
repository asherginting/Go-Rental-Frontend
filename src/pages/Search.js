// /* eslint-disable react/no-unescaped-entities */
// import React, { useEffect } from 'react';
// import '../assets/css/vehicle-type.css';
// import Vehicle from '../components/Vehicle';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import { searchVehicle, nextSearchVehicle } from '../redux/actions/vehicle';
// import searchURL from '../helper/searchURL';
// import {BiSearchAlt2} from 'react-icons/bi';
// import LoadingSkeleton from '../components/LoadingSkeleton';

// export default function Search() {
//     const key = searchParams.get('keyword') || '';
//     const location = searchParams.get('location') || '';
//     const min = searchParams.get('min') || 0;
//     const max = searchParams.get('max') || 100000000;

//     const { search } = useSelector((state) => state.vehicleReducer);
//     const dispatch = useDispatch();

//     const navigate = useNavigate();
//     const [searchParams] = useSearchParams();

//     useEffect(() => {
//         window.scrollTo(0, 0);
//         dispatch(searchVehicle(key, location, min, max));
//     }, [searchParams]);

//     const nextPage = () => {
//         dispatch(nextSearchVehicle(key, location, min, max, search.pageInfo.currentPage + 1));
//     };
//     const handleSubmit = (ev) => {
//         ev.preventDefault();
//         navigate(searchURL(ev));
//     };

//     return (
//         <div className='vehicle-type'>
//             <section className='container'>
//                 <form onSubmit={handleSubmit} className="container d-flex position-relative">
//                     <input className="form-control" name='brand' type="search" placeholder="Search vehicle name" />
//                     <input className="form-control" name='location' type="search" placeholder="Location" />
//                     <input className="form-control" name='minimal' type="number" placeholder="Min. Price" />
//                     <input className="form-control" name='maximal' type="number" placeholder="Max. Price" />
//                     <button type='submit' className="btn login">
//                         {' '}
//                         <i className="search-icon"><BiSearchAlt2 /></i>
//                     </button>
//                 </form>
//                 <div className="head">
//                     {search.vehicle.length > 0 ? <p className="text-muted text-center">Click item to see details and reservation</p> 
//                         : <p className="text-center text-muted py-5">
//                             did not match any document
//                         </p>}
//                 </div>
//                 <div className='row'>
//                     {search.isLoading && <LoadingSkeleton count={8} />}
//                     {search.vehicle?.map(data => {
//                         const props = {
//                             image: data.image, location: data.location, brand: data.brand, id: data.idVehicle,
//                         };
//                         if (data.qty > 0) return <Vehicle key={props.id} props={props} />;
//                     })}
//                 </div>
//                 <div className='my-4 text-center'>
//                     {search.vehicle.length > 0 
//                         && (search.pageInfo.next ?
//                             <button onClick={nextPage} className='btn btn-green w-25'>Load More</button> :
//                             <p className="text-center text-muted py-5">There is no vehicle left</p>   
//                         )
//                     }
//                 </div>
        
//             </section>
//         </div>
//     );
// }

import React, { useEffect } from 'react';
import '../assets/css/vehicle-type.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import Vehicle from '../components/Vehicle';
import searchURL from '../helper/searchURL';
import { searchVehicle, nextSearchVehicle } from '../redux/actions/vehicle';
import LoadingSkeleton from '../components/LoadingSkeleton';

export default function Search() {
    const { search } = useSelector((state) => state.vehicleReducer);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const key = searchParams.get('keyword') || '';
    const location = searchParams.get('location') || '';
    const min = searchParams.get('min') || 0;
    const max = searchParams.get('max') || 100000000;

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(searchVehicle(key, location, min, max));
    }, [searchParams]);

    const nextPage = () => {
        dispatch(nextSearchVehicle(key, location, min, max, search.pageInfo.currentPage + 1));
    };
    const beforePage = () => {
        dispatch(nextSearchVehicle(key, location, min, max, search.pageInfo.currentPage - 1));
    };
    const handleSubmit = (ev) => {
        ev.preventDefault();
        navigate(searchURL(ev));
    };

    return (
        <div className="vehicle-type">
            <section className="form-search">
                <form onSubmit={handleSubmit} className="container d-flex position-relative">
                    <div className="col-md-3">
                        <input className="form-control" name="brand" type="search" placeholder="Vehicle Name" />
                    </div>
                    <div className="col-md-3">
                        <input className="form-control" name="location" type="search" placeholder="Loc. Vehicle" />
                    </div>
                    <div className="col-md-3">
                        <input className="form-control" name="minimum" type="number" placeholder="Min. Price Vehicle" />
                    </div>
                    <div className="col-md-3">
                        <input className="form-control" name="maximum" type="number" placeholder="Max. Price Vehicle" />
                    </div>
                    <button type='submit' className="btn login d-flex position-relative">
                        {' '}
                        <i className="search-icon"><BiSearchAlt2 /></i>
                    </button>
                </form>
            </section>
            <section className="container">
                <div className="head mt-3">
                    {search.vehicle.length > 0 ? <p className="text-muted text-center">Click item to see details and reservation</p>
                        : (
                            <p className="text-center text-muted py-5">
                Did not find search results
                            </p>
                        )}
                </div>
                <div className="row">
                    {search.isLoading && <LoadingSkeleton count={8} />}
                    {search.vehicle?.map((data) => {
                        const props = {
                            image: data.image, location: data.location, brand: data.brand, id: data.idVehicle,
                        };
                        if (data.qty > 0) return <Vehicle key={props.id} props={props} />;
                    })}
                </div>
                <div className="my-4 text-end">
                    {search.vehicle.length > 0 && (search.pageInfo.next? 
                        <button onClick={beforePage} className="btn btn-green w-10" type="button">1</button>
                        : <p className="text-center text-muted py-5">There is no vehicle left</p>
                    )}
                    {search.vehicle.length > 0 && (search.pageInfo.next? 
                        <button onClick={nextPage} className="btn btn-green w-10" type="button">2</button>
                        : <button onClick={beforePage} className="btn btn-green w-10" type="button">1</button>
                        
                    )}
                </div>

            </section>
        </div>
    );
}