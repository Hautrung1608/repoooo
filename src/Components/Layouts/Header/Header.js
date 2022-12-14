import React from 'react';
import classNames from 'classnames/bind';
import { Link } from "react-router-dom"
import style from './header.module.css';
import { FaSearch } from 'react-icons/fa';
import { GrMenu } from 'react-icons/gr';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import logo from "~/Asset/logo.png";
import 'antd/dist/antd.css';
import './header.module.css';
import { Button, DatePicker, Space, version } from "antd";

let cx = classNames.bind(style);

function Header() {
  return (
    <div>
      {/* laptop */}
      <div className={cx('container-fluid', 'header', 'laptop')}>
        <div className='row'>
          <div className={cx('col-lg-4', 'col-md-2', 'col-2')}>
            <div className='row'>
              <div className={cx('col-lg-2', 'logo-header')}>
                <img src={logo} />
              </div>
              <div className={cx('font-logo', 'col-lg-10')}>
                <a>Làm Trước - Học Sau</a>
              </div>
            </div>
          </div>
          <div className={cx('col-lg-6', 'position-relative', 'col-md-7', 'col-5', 'input-form')}>
            <input className={cx('input-header',)} placeholder='Tim kiem khoa hoc, bai viet, v.v...' />
            <AiOutlineSearch className={cx('icon-search')} />
          </div>
          <div className={cx('col-lg-2', 'header-log', 'col-md-3', 'col-4')}>
            <div className='row'>
              <div className={cx('col-lg-3', 'cart-icon')}>
                <AiOutlineShoppingCart />
              </div>
              <div className={cx('col-lg-9', 'col-4',)}>
                <Button className={cx('bt-header')}>Đăng Nhập</Button>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className={cx('container-fluid', 'header', 'mobile')}>
        <div className='row'>
          <div className={cx('col-2')}>
            <GrMenu className={cx('menu-mobile')} />
          </div>
          <div className={cx('col-5')}>

          </div>
          <div className={cx('col-1')}>

          </div>
          <div className={cx('col-4')}>
            <Button type='danger' className={cx('bt-header')}>Đăng Nhập</Button>
          </div>
        </div>

      </div>

      {/* tablet */}
      <div className={cx('container-fluid', 'header', 'tablet')}>
        <div className='row'>
          <div className='col-md-2'>
            <GrMenu className={cx('menu-mobile')} />
          </div>
          <div className={cx('col-md-7', 'position-relative', 'input-form')}>
            <input className={cx('input-header',)} placeholder='Tim kiem khoa hoc, bai viet, v.v...' />
            <AiOutlineSearch className={cx('icon-search')} />
          </div>
          <div className={cx('col-md-3', 'icon-log')}>
            <Button type='danger' className={cx('bt-header')}>Đăng Nhập</Button>
          </div>
        </div>
      </div>

      {/* sidebar mobile tablet */}
      <div className={cx('sidebar-moblie')}>
        <li className={cx("home",)}>
          <Link to="/" className={cx("cursor-pointer")}>
            <p>Home</p>
          </Link>
        </li>

        <li className={cx("home",)}>
          <Link to="/road" className={cx("cursor-pointer")}>
            <p>Lo Trinh</p>
          </Link>
        </li>

        <li className={cx("home",)}>
          <Link to="/learn" className={cx("cursor-pointer")}>
            <p>Hoc</p>
          </Link>
        </li>

        <li className={cx("home",)}>
          <Link to="/blog" className={cx("cursor-pointer")}>
            <p>Blog</p>
          </Link>
        </li>
        <li className='px-3'>
          <input className={cx('form-control', "fom-tablet")} placeholder="Tim kiem khoa hoc, bai viet, v.v..."></input>
        </li>

      </div>


    </div>


  )
}

export default Header