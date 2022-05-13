import React, { useEffect} from 'react'
import '../assets/css/vehicle-type.css'
import Vehicle from '../components/Vehicle';
import {BiSearchAlt2} from 'react-icons/bi'
import {IoChevronForward} from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom';
import { category, popular as popularVehicle } from '../redux/actions/vehicle';
import { useDispatch, useSelector } from 'react-redux';
import searchURL from '../helper/searchURL';
import LoadingSkeleton from '../components/LoadingSkeleton';

const VehicleType = () => {
  const { popular } = useSelector((state) => state.vehicleReducer);
  const { cars } = useSelector((state) => state.vehicleReducer);
  const { motorbike } = useSelector((state) => state.vehicleReducer);
  const { bike } = useSelector((state) => state.vehicleReducer);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(popularVehicle());
    dispatch(category('CARS', 'cars'));
    dispatch(category('MOTORBIKE', 'motorbike'));
    dispatch(category('BIKE', 'bike'));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    navigate(searchURL(ev));
  };

  const product = (head, state, type) => (
    <section className="container" id="parrent">
      <div className="d-flex justify-content-between head">
        <h2>{head}</h2>
        <Link to={type ? `/vehicle?type=${type}` : '/vehicle'} className="view-all">
          View all
          <IoChevronForward />
        </Link>
      </div>
      <div className="row mb-5">
        {state.isLoading && <LoadingSkeleton count="4" />}
        {state.vehicle.map((data, index) => {
          const props = {
            image: data.image, location: data.location, brand: data.brand, id: data.idVehicle,
          };
          return (index < 4 && <Vehicle key={props.id} props={props} />);
        })}
      </div>
    </section>
  );

  return (      
    <div className='vehicle-type'>
      <form onSubmit={handleSubmit} className="container d-flex position-relative">
        <input className="form-control" name='search' type="search" placeholder="Search vehicle name" />
        <input className="form-control" name='location' type="search" placeholder="Location" />
        <input className="form-control" name='min' type="number" placeholder="Min. Price" />
        <input className="form-control" name='max' type="number" placeholder="Max. Price" />
        <button type='submit' className="btn login">
        <i className="search-icon"><BiSearchAlt2 /></i>
        </button>
      </form>
      {product('Popular in town', popular)}
      {product('Cars', cars, 'cars')}
      {product('Motorbike', motorbike, 'motorbike')}
      {product('Bike', bike, 'Bike')}
    </div>
  )
}

export default VehicleType