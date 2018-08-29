import React from 'react';
import { Link } from 'react-router-dom'

import BooksSlider from '/client/components/func/BooksSlider'
import VideoModal from '/client/components/func/VideoModal'
import SubscribeDispatcher from './SubscribeDispatcher/SubscribeDispatcher'

const home = ({context, cart, favoriteBooks, onAddToCart, newBooks, popularBooks}) => (
  <div className="l-main">
    {newBooks.length >= 5 ? <div className="newest row dn-index-page-new-out" style={{marginBottom: 12}}>
      <h2 className="center"><Link onClick={() => context.props.onSortByNew()} to="/books">Новинки книг</Link></h2>
      <div className="catalog-page">
         <div className="books">
           <div className="clearfix">
            <BooksSlider
              context={context}
              onAddToCart={onAddToCart}
              favoriteBooks={favoriteBooks}
              cart={cart}
              books={newBooks} />
           </div>
         </div>
      </div>
    </div> : null}
    <div className="b-grid row bigblock">
      {/* ---Последние 5 материалов из раздела "КНИЖНЫЙ КЛУБ"--- */}
      <a className="b-block b-block--small" href="#">
        <img src="/img/examples/48 - rRC37kD.jpg"/>
        <div className="b-block-text">
          <div className="b-block-title">Типичные ситуации школьной жизни. Как справляться с трудностями? </div>
        </div>
      </a>
      <a className="b-block b-block--small" href="#">
        <img src="/img/examples/49 - eNTzN7D.jpg"/>
        <div className="b-block-text">
          <div className="b-block-title">Новый фирменный магазин: Clever в Краснодаре!</div>
        </div>
      </a>
      <a className="b-block b-block--small" href="#">
        <img src="/img/examples/50 - VgpyEP4.jpg"/>
        <div className="b-block-text">
          <div className="b-block-title">3 книги, которые помогут полюбить математику</div>
        </div>
      </a>
      <a className="b-block b-block--big" href="#">
        <img src="/img/examples/51 - pxryXgN.jpg"/>
        <div className="b-block-text">
          <div className="b-block-title">Вас ждет шведский… шкаф! Раздаем уютные подарки</div>
        </div>
      </a>
      <a className="b-block b-block--big" href="#">
        <img src="/img/examples/52 - NQC62Ge.jpg"/>
          <div className="b-block-text">
            <div className="b-block-title">Отдохнем от учебы за 10 минут: веселые игры</div>
          </div>
        </a>
      </div>
      {popularBooks.length >= 5 ? <div className="newest row dn-index-page-new-out" style={{marginBottom: 12}}>
        <h2 className="center">Самые популярные товары магазина</h2>
        <div className="catalog-page">
           <div className="books">
             <div className="clearfix">
              <BooksSlider
                context={context}
                onAddToCart={onAddToCart}
                favoriteBooks={favoriteBooks}
                cart={cart}
                books={popularBooks} />
             </div>
           </div>
        </div>
      </div> : null}
      <div className="l-videos">
        <h2 className="center c-green">Наше видео</h2>
        <div className="row video-content-home">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <VideoModal id="modal1"/>
            <a><img className="img-fluid z-depth-1" src="https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg" alt="modal1Name" data-toggle="modal" data-target="#modal1" /></a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <VideoModal id="modal6"/>
            <a><img className="img-fluid z-depth-1" src="https://mdbootstrap.com/img/screens/yt/screen-video-2.jpg" alt="video" data-toggle="modal" data-target="#modal6" /></a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <VideoModal id="modal4"/>
            <a><img className="img-fluid z-depth-1" src="https://mdbootstrap.com/img/screens/yt/screen-video-3.jpg" alt="video" data-toggle="modal" data-target="#modal4" /></a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <VideoModal id="modal5"/>
            <a><img className="img-fluid z-depth-1" src="https://mdbootstrap.com/img/screens/yt/screen-video-3.jpg" alt="video" data-toggle="modal" data-target="#modal5" /></a>
          </div>
        </div>
      </div>
      <SubscribeDispatcher context={context} />
  </div>
);

export default home;
