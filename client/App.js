import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import ScrollToTop from 'react-scroll-up'
import moment from 'moment'

import Aux from './hoc/Aux/Aux'
import Public from './components/func/Public'
import Authenticated from './components/func/Authenticated'

// Default components
import TopBarContainer from './containers/Header/TopBarContainer/TopBarContainer'
import FooterContainer from './containers/Footer/FooterContainer/FooterContainer'

// App Pages
import HomeContainer from './containers/pages/HomeContainer/HomeContainer'
import ForgotPasswordContainer from './containers/pages/ForgotPasswordContainer/ForgotPasswordContainer'
import BooksContainer from './containers/pages/BooksContainer/BooksContainer'
import BookDescriptionContainer from './containers/pages/BooksContainer/BookDescriptionContainer/BookDescriptionContainer'
import LoginContainer from './containers/pages/LoginContainer/LoginContainer'
import CartContainer from './containers/pages/CartContainer/CartContainer'
import ContactsContainer from './containers/pages/ContactsContainer/ContactsContainer'

import { cookie } from './libs/coreLib'
import { locStrings } from '/imports/localization/localization'

const defaultState = {
  // countdown state
  days: '',
  hours: '',
  minutes: '',
  seconds: ''
}

class App extends Component {
  state = defaultState

  componentWillMount() {
    document.getElementById("default-main-slate").disabled = true;
    document.getElementById("admin-main-styles").disabled = true;
    document.getElementById("default-main-styles").disabled = false;
    document.getElementById("default-theme-styles").disabled = false;
  }

  componentDidMount() {
    setTimeout(() => {$('#preloader').fadeOut('slow')}, 500)

    setInterval(() => {
      let countdown = moment('2018/09/20 23:59:59', 'YYYY/MM/DD HH:mm:ss').diff(moment())

      this.setState({
        days: moment.duration(countdown).days(),
        hours: moment.duration(countdown).hours(),
        minutes: moment.duration(countdown).minutes(),
        seconds: moment.duration(countdown).seconds()
      })
    }, 1000)
  }

  render() {
    let routes = (
      <Aux classNameAux="site-wrapper">
        <Preloader/>
        <Public path="/" component={ TopBarContainer } {...this.props} />
        <Switch>
          <Public exact path="/" component={ HomeContainer } {...this.props} />
          {/* <Public exact path="/books" component={ BooksContainer } {...this.props} />
          <Public exact path="/books/:_id" component={ BookDescriptionContainer } {...this.props} />
          <Public exact path="/login" component={ LoginContainer } {...this.props} />
          <Public exact path="/forgotPassword" component={ ForgotPasswordContainer } {...this.props} />
          <Public exact path="/cart" component={ CartContainer } {...this.props} />
          <Public exact path="/contacts" component={ ContactsContainer } {...this.props} />
          <Redirect to="/" /> */}
        </Switch>
        <Public path="/" component={ FooterContainer } {...this.props} />
      </Aux>
    )

    // if(this.props.authenticated) {
    //   routes = (
    //     <Aux>
    //       <Authenticated path="/" component={ TopBarContainer } {...this.props} />
    //       <Switch>
    //         <Authenticated exact path="/" component={ HomeContainer } {...this.props} />
    //         <Authenticated exact path="/books" component={ BooksContainer } {...this.props} />
    //         <Authenticated exact path="/books/:_id" component={ BookDescriptionContainer } {...this.props} />
    //         <Authenticated exact path="/cart" component={ CartContainer } {...this.props} />
    //         <Authenticated exact path="/contacts" component={ ContactsContainer } {...this.props} />
    //         <Redirect to="/" />
    //       </Switch>
    //       <Authenticated path="/" component={ FooterContainer } {...this.props} />
    //     </Aux>
    //   )
    // }

    // return (
    //     {/* Divider */}
    //     <div className="c-divider-1 -style-solid -size-large u-position-relative" />
    //     {/* Divider End */}
    //
    //     <Element name="voting" />
    //     {/* Section Testimonials */}
    //     <div className="c-section -space-large -bg-blue-light">
    //       <div className="c-container">
    //         {/* Heading */}
    //         <h6 className="u-text-sup u-text-center">КОНКУРСНЫЙ ОТБОР</h6>
    //         <p className="u-text-lead u-text-center">Заявки соискателей на участие принимаются в период <br /> с 20 сентября 2018 года по 31 октября 2018 года</p>
    //         {/* Heading End */}
    //         <h2 className="u-text-title u-text-center">до начала конкурсного отбора осталось:</h2>
    //         {/* Space */}
    //         <div className="u-space u-space-40@sm" />
    //         {/* Space End */}
    //         {/* Countdown */}
    //         <div className="c-countdown-1 -size-large -js-countdown" data-cursor-countdown="2018/09/20 23:59:59">
    //           <div className="c-countdown-1-inner row">
    //             <div className="c-countdown-1-item col-sm-6 col-md-3">
    //               <div className="c-countdown-1-value value-days">{this.state.days}</div>
    //               <div className="c-countdown-1-text">ДНЕЙ</div>
    //             </div>
    //             <div className="c-countdown-1-item col-sm-6 col-md-3">
    //               <div className="c-countdown-1-value value-hours">{this.state.hours}</div>
    //               <div className="c-countdown-1-text">ЧАСОВ</div>
    //             </div>
    //             <div className="c-countdown-1-item col-sm-6 col-md-3">
    //               <div className="c-countdown-1-value value-minutes">{this.state.minutes}</div>
    //               <div className="c-countdown-1-text">МИНУТ</div>
    //             </div>
    //             <div className="c-countdown-1-item col-sm-6 col-md-3">
    //               <div className="c-countdown-1-value value-seconds">{this.state.seconds}</div>
    //               <div className="c-countdown-1-text">СЕКУНД</div>
    //             </div>
    //           </div>
    //         </div>
    //         {/* Countdown End */}
    //       </div>
    //     </div>
    //     {/* Section Testimonials End */}
    //
    //     {/* Section Testimonials */}
    //     <div className="c-section -bg-green section-testimonials-1">
    //       <div className="c-container -size-full">
    //         <div className="row -gutter-none">
    //           <div className="col-lg-6 section-testimonials-1-photo"/>
    //           <div className="col-lg-6 section-testimonials-1-content">
    //             {/* Heading */}
    //             <h6 className="u-text-sup u-color-white">О НАЦИОНАЛЬНОЙ ПРЕМИИ</h6>
    //             <h2 className="u-text-title u-color-white">цели и задачи премии</h2>
    //             {/* Heading End */}
    //             {/* Testimonials */}
    //             <div className="c-testimonials-2 -align-left">
    //               {/*Carousel Wrapper*/}
    //               <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
    //                 {/*Indicators*/}
    //                 <ol className="carousel-indicators">
    //                   <li data-target="#carousel-example-1z" data-slide-to={0} className="active" />
    //                   <li data-target="#carousel-example-1z" data-slide-to={1} />
    //                   <li data-target="#carousel-example-1z" data-slide-to={2} />
    //                   <li data-target="#carousel-example-1z" data-slide-to={3} />
    //                   <li data-target="#carousel-example-1z" data-slide-to={4} />
    //                   <li data-target="#carousel-example-1z" data-slide-to={5} />
    //                   <li data-target="#carousel-example-1z" data-slide-to={6} />
    //                   <li data-target="#carousel-example-1z" data-slide-to={7} />
    //                 </ol>
    //                 {/*/.Indicators*/}
    //                 {/*Items*/}
    //                 <div className="carousel-inner" role="listbox">
    //
    //                   {/*First item*/}
    //                   <div className="carousel-item active">
    //                     <div className="c-testimonials-2-item">
    //     									<div className="c-testimonials-2-message">
    //     										<p>Организация и проведение открытого конкурсного отбора на соискание Национальной премии в области туризма, как инструмента по выявлению наиболее успешных проектов/турпродуктов/туроператоров в области туризма, их продвижению, и по формированию заинтересованного отношения к индустрии туризма широкой общественности</p><br/>
    //     									</div>
    //     								</div>
    //                   </div>
    //                   {/*/First item end*/}
    //
    //                   {/*Second item*/}
    //                   <div className="carousel-item">
    //                     <div className="c-testimonials-2-item">
    //     									<div className="c-testimonials-2-message">
    //     										<p>Создание информационной и коммуникационной площадок на базе Премии для обмена опытом и организации взаимодействия всех заинтересованных лиц и организаций в сфере развития туризма на территории регионов и страны, и как инструмента для  развития и продвижения территорий</p><br/>
    //     									</div>
    //     								</div>
    //                   </div>
    //                   {/*/Second item end*/}
    //
    //                   {/*Third item*/}
    //                   <div className="carousel-item">
    //                     <div className="c-testimonials-2-item">
    //     									<div className="c-testimonials-2-message">
    //     										<p>Улучшение качества сервиса сферы услуг в туризме</p><br/>
    //     									</div>
    //     								</div>
    //                   </div>
    //                   {/*/Third item end*/}
    //
    //                   {/*Fourth item*/}
    //                   <div className="carousel-item">
    //                     <div className="c-testimonials-2-item">
    //     									<div className="c-testimonials-2-message">
    //     										<p>Популяризация и развитие внутреннего туризма, улучшение его инвестиционной привлекательности</p><br/>
    //     									</div>
    //     								</div>
    //                   </div>
    //                   {/*/Fourth item end*/}
    //
    //                   {/*Fifth item*/}
    //                   <div className="carousel-item">
    //                     <div className="c-testimonials-2-item">
    //     									<div className="c-testimonials-2-message">
    //     										<p>Организация сотрудничества всех заинтересованных лиц и организаций в сфере развития туризма на территории страны</p><br/>
    //     									</div>
    //     								</div>
    //                   </div>
    //                   {/*/Fifth item end*/}
    //
    //                   {/*Sixth item*/}
    //                   <div className="carousel-item">
    //                     <div className="c-testimonials-2-item">
    //     									<div className="c-testimonials-2-message">
    //     										<p>Создание единой информационной базы наиболее интересных проектов и турпродуктов в сфере туризма</p><br/>
    //     									</div>
    //     								</div>
    //                   </div>
    //                   {/*/Sixth item end*/}
    //
    //                   {/*Seventh item*/}
    //                   <div className="carousel-item">
    //                     <div className="c-testimonials-2-item">
    //     									<div className="c-testimonials-2-message">
    //     										<p>Привлечение к участию в конкурсе как можно большего числа участников сферы туризма из как можно большего количества территорий страны</p><br/>
    //     									</div>
    //     								</div>
    //                   </div>
    //                   {/*/Seventh item end*/}
    //
    //                   {/*Eighth item*/}
    //                   <div className="carousel-item">
    //                     <div className="c-testimonials-2-item">
    //     									<div className="c-testimonials-2-message">
    //     										<p>Содействие внедрению механизма частно-государственного партнерства в сферу туризма</p><br/>
    //     									</div>
    //     								</div>
    //                   </div>
    //                   {/*/Eighth item end*/}
    //
    //                 </div>
    //                 {/*/.Slides*/}
    //               </div>
    //               {/*/.Carousel Wrapper*/}
    //             </div>
    //             {/* Testimonials End */}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* Section Testimonials End */}

    return (
      <Aux>
        {routes}
        {/* Back Top */}
        <div className="scrollToTop">
          <ScrollToTop duration={1000} showUnder={160}>
            <a className="btn-floating btn-large orange">
              <i className="fa fa-arrow-up" style={{fontSize: '2.625rem'}}></i>
            </a>
          </ScrollToTop>
        </div>
        {/* Back Top End */}
      </Aux>
    )
  }
}

export default withTracker(() => {
  let lang = cookie.get('lang')
  if(lang === '') {
    cookie.set('lang', 'ru', 9999);
    lang = 'ru';
  }

  const loggingIn = Meteor.loggingIn()
  const userId = Meteor.userId()
  const user = Meteor.user()

  return {
    locStrings: locStrings[lang],
    loggingIn,
    authenticated: !loggingIn && !!userId,
    user
  }
})(App);
