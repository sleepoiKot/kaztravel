import React from 'react';
import { Link } from 'react-router-dom'

import Input from '/client/components/func/Input'

const adminLogin = ({context}) => (
  <section className="view intro-2">
    <div className="mask intro-2 h-100 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 col-md-10 col-sm-12 mx-auto mt-5">
            {/*Form with header*/}
            <div className="card wow fadeIn" data-wow-delay="0.3s">
              <div className="card-body">
                {/*Header*/}
                <div className="form-header purple-gradient">
                  <h3>KAZTRAVEL</h3>
                </div>
                {/*Body*/}
                <form
                  action="#"
                  onSubmit={ context.onSignInAsAdminitrator.bind(context) }>
                  <div className="md-form">
                    <i className="fa fa-user prefix white-text" />
                    <Input
                      type="text"
                      validation
                      id="orangeForm-name"
                      stateName="login"
                      context={context}
                      className="form-control"/>
                    <label htmlFor="orangeForm-name">Логин</label>
                  </div>
                  <div className="md-form">
                    <i className="fa fa-lock prefix white-text" />
                    <Input
                      type="password"
                      validation
                      id="orangeForm-pass"
                      stateName="password"
                      context={context}
                      className="form-control"/>
                    <label htmlFor="orangeForm-pass">Пароль</label>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn purple-gradient btn-lg">Войти</button>
                  </div>
                  <div className="text-center">
                    <Link to="/" className="white-text">Перейти на сайт</Link>
                  </div>
                </form>
              </div>
            </div>
            {/*/Form with header*/}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default adminLogin;
