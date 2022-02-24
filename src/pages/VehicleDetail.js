import React, { Component } from 'react'
import '../assets/css/vehicle-detail.css'
import {BiMinus, BiPlus} from 'react-icons/bi'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'

export default class VehicleDetail extends Component {
  render() {
    return (
      <div className='vehicle-detail'>
        <section className='container first-container'>

          <div class="row pt-5 detail-vehicle">
            <div class="col-12 col-lg-6 img-section">
              <div class="cover-image overflow-hidden">
                <img src="../assets/images/fixie-detail.png" alt="fixie" />
              </div>
              <div class="row carousel d-flex align-items-center mt-4">
                <button class="col-1 btn" aria-label="previous button">
                  <GrFormPrevious className='prev' />
                  <i class="fa-solid fa-angle-left prev"></i>
                </button>
                <div class="col-5 overflow-hidden rounded">
                  <img src="../assets/images/fixie-detail.png" alt="fixie" class="rounded" />
                </div>
                <div class="col-5 overflow-hidden rounded">
                  <img src="../assets/images/fixie-detail.png" alt="fixie" class="rounded" />
                </div>
                <button class="col-1 btn" aria-label="next button">
                  <GrFormNext className='next' />
                  <i class="fa-solid fa-angle-right next"></i>
                </button>
              </div>
            </div>
            <div class="col-12 col-lg-6 description-section">
              <div class="description">
                <h2 class="fw-bold">Fixie-Gray Only</h2>
                <p class="text-muted">Yogyakarta</p>
              </div>
              <div class="status my-3 d-flex flex-column">
                <span class="text-success fw-bold my-2">Available</span>
                <span class="text-danger">No prepayment</span>
              </div>
              <div class="mt-4">
                Capacity: 1 Person
              </div>
              <div class="my-2">
                Type : Bike
              </div>
              <div>
                Reservation: before 2 PM
              </div>
              <div class="price mt-5 text-end">
                Rp.78.000/day
              </div>
              <div class="my-auto">
                <div class="total-day d-flex flex-row justify-content-between align-items-center">
                  <button class="btn plus" aria-label="button plus"><BiPlus className=''/></button>
                  <div class="count">2</div>
                  <button class="btn minus" aria-label="button minus"><BiMinus className=''/></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container form-section mt-5">
          <form class="row">
            <div class="col-12 col-md">
              <a href="#" class="btn btn-black">Chat Admin</a>
            </div>
            <div class="col-12 col-md text-center btn-reservation">
              <a href="/reservation.html" class="btn btn-green">Reservation</a>
            </div>
            <div class="col-12 col-md-3 text-end">
              <button class="btn btn-black">
                <i class="fa-solid fa-heart"></i>
                Like
              </button>
            </div>
          </form>
        </section>
      </div>
    )
  }
}
