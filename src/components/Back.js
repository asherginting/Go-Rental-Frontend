import React, { Component } from 'react'

export default class Back extends Component {


  render() {
    return (
      <div class="d-flex flex-row head">
        <a href="/more-detail.html" class="back d-flex mb-5">
          <i class="fa-solid fa-angle-left me-5"></i>
        </a>
        <span>{this.props.page}</span>
      </div>
    )
  }
}
