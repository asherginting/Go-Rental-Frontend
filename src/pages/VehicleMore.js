// import React, { useEffect } from 'react'
// import '../assets/css/vehicle-type.css'
// import ProductHighlight from '../components/ProductHighlight'
// import { useSearchParams } from 'react-router-dom';
// import activeNav from '../helper/activeNav';
// import { useDispatch, useSelector } from 'react-redux';
// import { nextPopular } from '../redux/actions/vehicle';
// import LoadingSkeleton from '../components/LoadingSkeleton';

// export default function VehicleMore() {
//   const [searchParams] = useSearchParams()
//   const params = searchParams.get('type')
//   const state = params ? `${params}` : 'popular'
//   const data = useSelector(state => state.vehicleReducer)
//   const dispatch = useDispatch()
  
//   const nextPage = () => {
//     dispatch(nextPopular(data[state].pageInfo.currentPage + 1))
//   }
//   useEffect(() => {
//     window.scrollTo(0, 0)
//     activeNav()
//   }, [])

//   return (
//     <div className='vehicle-type'>
//       <section className='container'>
//         {data[state].isLoading && <div className='row'><LoadingSkeleton count={data[state].vehicle.length} /></div>}
//         <div className="head">
//           <h2>{searchParams.get('type') || 'Popular in town'}</h2>
//           {<p className="text-muted text-center">Click item to see details and reservation</p>}
//         </div>
//         <div className='row'>
//           {data[state].vehicle.map(data => {
//             const props = {image: data.image, location: data.location, brand: data.brand, id: data.idVehicle}
//             if (data.qty > 0) return <ProductHighlight key={props.id} props={props} />
//           })}
//         </div>
//         <div className='my-4 text-center'>
//           {data[state].vehicle.length > 0 ?
//           (data[state].pageInfo.next ?
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
import ProductHighlight from '../components/ProductHighlight'
import {default as axios} from 'axios';
import { useSearchParams } from 'react-router-dom';
import env from 'react-dotenv'

export default function VehicleMore() {
  const [vehicle, setVehilcle] = useState([])
  const [page, setPage] = useState({})
  
  const [searchParams] = useSearchParams()

  useEffect(() => {
    window.scrollTo(0, 0)
    // const params = searchParams.get('type') ? {type: searchParams.get('type')} 
    // : {search: searchParams.get('search') || '', filter: searchParams.get('filter') || ''}
    const params = searchParams.get('type')
    getVehicle(params)
  }, [searchParams])

  const getVehicle = async (params) => {
    // const url = params.type || params.search ?
    // (params.type ? 
    //   `http://localhost:5000/popular?limit=8&search=${params.type}` 
    //   : `http://localhost:5000/vehicles/category/?search=${params.search}&filter=${params.filter}&limit=8`) 
    // : 'http://localhost:5000/popular?limit=8'
    const url = params ? `${env.REACT_APP_API}/popular?limit=8&search=${params}` : `${env.REACT_APP_API}/popular?limit=8`
    const {data} = await axios.get(url)
    setVehilcle(data.results) 
    setPage(data.pageInfo) 
  }

  const nextPage = async () => {
    const {data} = await axios.get(page.next)
    setVehilcle([...vehicle, ...data.results])
    setPage(data.pageInfo)
  }

  return (
    <div className='vehicle-type'>
      <section className='container'>
        <div className="head">
          <h2>{searchParams.get('type') || searchParams.get('search') || 'Popular in town'}</h2>
          {vehicle.length > 0 ? <p className="text-muted text-center">Click item to see details and reservation</p> 
          : <p className="text-center text-muted py-5">Your search '{searchParams.get('search')}' did not match any document</p>}
        </div>
        <div className='row'>
          {vehicle.map(data => {
            const props = {image: data.image, location: data.location, brand: data.brand, id: data.idVehicle}
            return <ProductHighlight key={props.id} props={props} />
          })}
        </div>
        <div className='my-4 text-center'>
          {vehicle.length > 0 ?
          (page.next ?
            <button onClick={nextPage} className='btn btn-primary w-25'>Load More</button> :
            <p className="text-center text-muted py-5">There is no vehicle left</p>   
          ) : <></>
          }
        </div>
        
      </section>
    </div>
  )
}
