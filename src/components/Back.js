import React, { Component } from 'react'
import {IoChevronBack} from 'react-icons/io5'

export default class Back extends Component {


  render() {
    return (
      <div class="d-flex flex-row head">
        <a href="/more-detail.html" class="back d-flex mb-5">
          <IoChevronBack className='me-5' />
        </a>
        <span>{this.props.page}</span>
      </div>
    )
  }
}
