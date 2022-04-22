import React, { useEffect } from 'react';
import '../assets/css/vehicle-type.css';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductHighlight from '../components/ProductHighlight';
import activeNav from '../helper/activeNav';
import { nextPopular } from '../redux/actions/vehicle';
import LoadingSkeleton from '../components/LoadingSkeleton';

export default function VehicleMore() {
  const [searchParams] = useSearchParams();
  const params = searchParams.get('type');
  const state = params ? `${params}` : 'popular';
  const data = useSelector((state) => state.vehicleReducer);
  const dispatch = useDispatch();

  const nextPage = () => {
    dispatch(nextPopular(data[state].pageInfo.currentPage + 1));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    activeNav();
  }, []);

  return (
    <div className="vehicle-type">
      <section className="container">
        {data[state].isLoading && <div className="row"><LoadingSkeleton count={data[state].vehicle.length} /></div>}
        <div className="head">
          <h2>{searchParams.get('type') || 'Popular in town'}</h2>
          <p className="text-muted text-center">Click item to see details and reservation</p>
        </div>
        <div className="row">
          {data[state].vehicle.map((data) => {
            const props = {
              image: data.image, location: data.location, brand: data.brand, id: data.idVehicle,
            };
            if (data.qty > 0) return <ProductHighlight key={props.id} props={props} />;
          })}
        </div>
        <div className="my-4 text-center">
          {data[state].vehicle.length > 0
            && (data[state].pageInfo.next
              ? <button onClick={nextPage} className="btn btn-green w-25" type="button">Load More</button>
              : <p className="text-center text-muted py-5">There is no vehicle left</p>
            )}
        </div>

      </section>
    </div>
  );
}
