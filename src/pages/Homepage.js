import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import item1 from '../assets/images/items-1.png'

export default class Homepage extends Component {
  state = {
    item: [
      {
        name: 'Merapi',
        location: 'Yogyakarta'
      },
      {
        name: 'Teluk Bogam',
        location: 'Kalimantan'
      },
      {
        name: 'Bromo',
        location: 'Malang'
      },
      {
        name: 'Malioboro',
        location: 'Yogyakarta'
      }
    ]
  }
  render() {
    return (
      <>
        <Navbar />
          <div className='container'>
            <div className='row d-flex align-items-center'>
              <div className='col'>
                <h2>Popular in town</h2>
              </div>
              <div className='col text-end'>
                <a className='link' href="#">View All</a>
              </div>
            </div>
            <div className='row'>
              {this.state.item.map((obj, idx)=>(
                  <div className='col-sm-6 col-md-3 text-center item-list'>
                    <div className='my-2 d-inline-block position-relative'>
                      <img className='img-fluid' src={item1} alt="item" />
                      <div className='position-absolute text bg-white bottom-0 start-0 rounded-end'>
                        <div>{obj.name}</div>
                        <div>{obj.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        <Footer />
      </>
    )
  }
}
