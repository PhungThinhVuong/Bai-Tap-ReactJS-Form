import React, { Component } from 'react'
import DanhSachSinhVien from './DanhSachSinhVien'
import FormDangKy from './FormDangKy'

export default class QuanLySinhVien extends Component {
  render() {
    return (
      <div>
        <FormDangKy/>
        <DanhSachSinhVien/>
      </div>
    )
  }
}
