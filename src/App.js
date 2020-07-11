import React, { Component, useEffect } from 'react';
import './App.css';
import Slide from './components/header/slide';
import Menu from './components/header/menu';
import Footer_end from './components/footer/footer_end';
import 'bootstrap/dist/css/bootstrap.min.css';

import Trangchu from './components/contents/trangchu';
import Tintuc from './page/Tintuc';
import Timkiem from './page/Timkiem';
import Danhsach from './components/tinbds/Danhsach';
import Chitiettin from './components/tinbds/Chitiettin';

import { Switch, Route } from 'react-router-dom';
import DangNhap from './page/Dangnhap';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { useDispatch } from 'react-redux';
import { getAllBds } from './services/tinBds.service';
import { getAllThanhpho } from './services/thanhpho.service';
import { getAllHinhthuc } from './services/hinhthuc.service';
import { getAllDanhmuc } from './services/danhmuc.service';
import { getAllHuong } from './services/huong.service';
import { getAllDichvu } from './services/dichvu.service';
import { getAllTienich } from './services/tienich.service';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllBds(dispatch);
    getAllThanhpho(dispatch);
    getAllHinhthuc(dispatch);
    getAllDanhmuc(dispatch);
    getAllHuong(dispatch);
    getAllDichvu(dispatch);
    getAllTienich(dispatch);
    
  }, []);

  

  return (
    <div>
      <Menu />
      <Slide />
     
      <Switch>
        <Route path="/timkiem" exact component={Timkiem} />;

        <Route path="/danhsach" exact component={Danhsach} />;

        <Route path="/chitiet" exact component={Chitiettin} />;

        <Route path="/dangnhap" exact component={DangNhap} />;

        <Route path="/dangtin" exact component={Tintuc} />

        <Route path="/" component={Trangchu} />;

      </Switch>
      <Footer_end></Footer_end>
    </div>
  );
}
export default App;