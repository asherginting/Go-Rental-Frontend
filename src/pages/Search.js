import React, { useEffect, useState } from 'react'
import '../assets/css/vehicle-type.css'
import ProductHighlight from '../components/ProductHighlight'
import {default as axios} from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {BiSearchAlt2} from 'react-icons/bi'
import searchURL from '../helper/searchURL';
import { searchVehicle } from '../redux/actions/vehicle';
import { useDispatch, useSelector } from 'react-redux';
import { nextSearchVehicle } from '../redux/actions/vehicle';

export default function Search(props) {
  const {search} = useSelector(state => state.vehicleReducer)
  const dispatch = useDispatch()
  // const [vehicle, setVehilcle] = useState([])
  const [page, setPage] = useState({})
  
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const key = searchParams.get('keyword') || ''
  const location = searchParams.get('location') || ''
  const min = searchParams.get('min') || 0
  const max = searchParams.get('max') || 100000000

  useEffect(() => {
    window.scrollTo(0, 0)
    // let url = `http://localhost:5000/vehicles/category/?limit=8&search=${key}&location=${location}&minimum=${min}&maximum=${max}`
    // getVehicle(url)
    dispatch(searchVehicle(key, location, min, max))
  }, [searchParams])

  const getVehicle = async (url) => {
    const {data} = await axios.get(url)
    // setVehilcle(data.results) 
    setPage(data.pageInfo) 
  }

  const nextPage = () => {
    dispatch(nextSearchVehicle(key, location, min, max, search.pageInfo.currentPage + 1))
    // try {
    //   const {data} = await axios.get(page.next)
    //   // setVehilcle([...vehicle, ...data.results])
    //   setPage(data.pageInfo)
    // } catch (err) {
    //   console.log(err.message)
    // }
  }
  const handleSubmit = (ev) => {
    ev.preventDefault()
    navigate(searchURL(ev))
  }

  return (
    <div className='vehicle-type'>
      <section className='form-search'>
        <form onSubmit={handleSubmit} className="container row g-2 mx-auto">
          <div className='col-12 col-md-6 my-2'>
            <input className="form-control" name='brand' type="search" placeholder="Search vehicle (ex. cars, cars name)" />
          </div>
          <div className='col-12 col-md-6 my-2'>
            <input className="form-control" name='location' type="search" placeholder="Location" />
          </div>
          {/* <div className='col-12 col-md-6'>
            <input className='form-control my-2' name='minimum' type='number' placeholder='Min price' />
          </div>
          <div className='col-12 col-md-6'>
            <input className='form-control my-2' name='maximum' type='number' placeholder='Max price' />
          </div> */}
          <button type="submit" className="col-12 btn-green btn text-center fs-5" aria-label="search button">
            Search <i className="search-icon"><BiSearchAlt2 /></i>
          </button>
        </form>
      </section>
      <section className='container'>
        <div className="head mt-5">
          {/* <h2>{searchParams.get('type') || searchParams.get('search') || 'Popular in town'}</h2> */}
          {search.vehicle.length > 0 ? <p className="text-muted text-center">Click item to see details and reservation</p> 
          : <p className="text-center text-muted py-5">
            {/* Your search '{searchParams.get('keyword')} {searchParams.get('filter')}' did not match any document */}
            Did not find search results
            </p>}
        </div>
        <div className='row'>
          {search.vehicle.map(data => {
            const props = {image: data.image, location: data.location, brand: data.brand, id: data.idVehicle}
            if (data.qty > 0) return <ProductHighlight key={props.id} props={props} />
          })}
        </div>
        <div className='my-4 text-center'>
          {search.vehicle.length > 0 ?
          (search.pageInfo.next ?
            <button onClick={nextPage} className='btn btn-green w-25'>Load More</button> :
            <p className="text-center text-muted py-5">There is no vehicle left</p>   
          ) : <></>
          }
        </div>
        
      </section>
    </div>
  )
}
