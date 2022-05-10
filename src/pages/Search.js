// import React, { useEffect, useState } from 'react'
// import '../assets/css/vehicle-type.css'
// import Vehicle from '../components/Vehicle'
// import {default as axios} from 'axios';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import {BiSearchAlt2} from 'react-icons/bi'
// import searchURL from '../helper/searchURL';
// import { searchVehicle } from '../redux/actions/vehicle';
// import { useDispatch, useSelector } from 'react-redux';
// import { nextSearchVehicle } from '../redux/actions/vehicle';

// export default function Search(props) {
//   const {search} = useSelector(state => state.vehicleReducer)
//   const dispatch = useDispatch()
//   // const [vehicle, setVehilcle] = useState([])
//   const [page, setPage] = useState({})
  
//   const navigate = useNavigate()
//   const [searchParams] = useSearchParams()

//   const key = searchParams.get('keyword') || ''
//   const location = searchParams.get('location') || ''
//   const min = searchParams.get('min') || 0
//   const max = searchParams.get('max') || 100000000

//   useEffect(() => {
//     window.scrollTo(0, 0)
//     // let url = `http://localhost:5000/vehicles/category/?limit=8&search=${key}&location=${location}&minimum=${min}&maximum=${max}`
//     // getVehicle(url)
//     dispatch(searchVehicle(key, location, min, max))
//   }, [searchParams])

//   const getVehicle = async (url) => {
//     const {data} = await axios.get(url)
//     // setVehilcle(data.results) 
//     setPage(data.pageInfo) 
//   }

//   const nextPage = () => {
//     dispatch(nextSearchVehicle(key, location, min, max, search.pageInfo.currentPage + 1))
//     // try {
//     //   const {data} = await axios.get(page.next)
//     //   // setVehilcle([...vehicle, ...data.results])
//     //   setPage(data.pageInfo)
//     // } catch (err) {
//     //   console.log(err.message)
//     // }
//   }
//   const handleSubmit = (ev) => {
//     ev.preventDefault()
//     navigate(searchURL(ev))
//   }

//   return (
//     <div className='vehicle-type'>
//       <section className='form-search'>
//         <form onSubmit={handleSubmit} className="container row g-2 mx-auto">
//           <div className='col-12 col-md-6 my-2'>
//             <input className="form-control" name='brand' type="search" placeholder="Search vehicle (ex. cars, cars name)" />
//           </div>
//           <div className='col-12 col-md-6 my-2'>
//             <input className="form-control" name='location' type="search" placeholder="Location" />
//           </div>
//           {/* <div className='col-12 col-md-6'>
//             <input className='form-control my-2' name='minimum' type='number' placeholder='Min price' />
//           </div>
//           <div className='col-12 col-md-6'>
//             <input className='form-control my-2' name='maximum' type='number' placeholder='Max price' />
//           </div> */}
//           <button type="submit" className="col-12 btn-green btn text-center fs-5" aria-label="search button">
//             Search <i className="search-icon"><BiSearchAlt2 /></i>
//           </button>
//         </form>
//       </section>
//       <section className='container'>
//         <div className="head mt-5">
//           {/* <h2>{searchParams.get('type') || searchParams.get('search') || 'Popular in town'}</h2> */}
//           {search.vehicle.length > 0 ? <p className="text-muted text-center">Click item to see details and reservation</p> 
//           : <p className="text-center text-muted py-5">
//             {/* Your search '{searchParams.get('keyword')} {searchParams.get('filter')}' did not match any document */}
//             Did not find search results
//             </p>}
//         </div>
//         <div className='row'>
//           {search.vehicle.map(data => {
//             const props = {image: data.image, location: data.location, brand: data.brand, id: data.idVehicle}
//             if (data.qty > 0) return <Vehicle key={props.id} props={props} />
//           })}
//         </div>
//         <div className='my-4 text-center'>
//           {search.vehicle.length > 0 ?
//           (search.pageInfo.next ?
//             <button onClick={nextPage} className='btn btn-green w-25'>Load More</button> :
//             <p className="text-center text-muted py-5">There is no vehicle left</p>   
//           ) : <></>
//           }
//         </div>
        
//       </section>
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react'
import '../assets/css/vehicle-type.css'
import Vehicle from '../components/Vehicle'
import {default as axios} from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {BiSearchAlt2} from 'react-icons/bi'

export default function Search() {
  const [vehicle, setVehilcle] = useState([])
  const [page, setPage] = useState({})
  
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    window.scrollTo(0, 0)
    const params = searchParams.get('type') ? {type: searchParams.get('type')} 
    : {search: searchParams.get('keyword') || '', filter: searchParams.get('filter') || ''}
    getVehicle(params)
  }, [searchParams])

  const getVehicle = async (params) => {
    const url = params.search ?
    (params.type ? 
      `http://localhost:5000/popular?limit=8&search=${params.type}` 
      : `http://localhost:5000/vehicles/category/?search=${params.search}&filter=${params.filter}&limit=8`) 
    : 'http://localhost:5000/popular?limit=8'
    const {data} = await axios.get(url)
    setVehilcle(data.results) 
    setPage(data.pageInfo) 
  }

  const nextPage = async () => {
    try {
      const {data} = await axios.get(page.next)
      setVehilcle([...vehicle, ...data.results])
      setPage(data.pageInfo)
    } catch (err) {
      console.log(err.message)
    }
  }
  const handleSubmit = (ev) => {
    ev.preventDefault()
    const key = ev.target.elements['search'].value
    const fil = ev.target.elements['filter'].value
    navigate(fil ? `/search?keyword=${key}&filter=${fil}` : `/search?keyword=${key}`)
  }

  return (
    <div className='vehicle-type'>
      <section className='container'>
        <form onSubmit={handleSubmit} className="container d-flex position-relative">
          <input className="form-control" name='search' type="search" placeholder="Search vehicle (ex. cars name)" />
          <input className="form-control" name='filter' type="search" placeholder="Filter (ex. location)" />
          <button type="submit" className="btn position-absolute end-0" aria-label="search button">
            <i className="search-icon"><BiSearchAlt2 /></i>
          </button>
        </form>
        <div className="head">
          {/* <h2>{searchParams.get('type') || searchParams.get('search') || 'Popular in town'}</h2> */}
          {vehicle.length > 0 ? <p className="text-muted text-center">Click item to see details and reservation</p> 
          : <p className="text-center text-muted py-5">
            Your search '{searchParams.get('keyword')} {searchParams.get('filter')}' did not match any document
            </p>}
        </div>
        <div className='row'>
          {vehicle.map(data => {
            const props = {image: data.image, location: data.location, brand: data.brand, id: data.idVehicle}
            return <Vehicle key={props.id} props={props} />
          })}
        </div>
        <div className='my-4 text-center'>
          {vehicle.length > 0 ?
          (page.next ?
            <button onClick={nextPage} className='btn btn-green w-25'>Load More</button> :
            <p className="text-center text-muted py-5">There is no vehicle left</p>   
          ) : <></>
          }
        </div>
        
      </section>
    </div>
  )
}
