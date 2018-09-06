import React from 'react';

import Heading from '/client/components/func/Heading'
import Input from '/client/components/func/Input'

const login = ({context, submitForm}) => {
  let SUP = context.props.locStrings.formSup
  let HEAD = "Вход"
  let LEAD = "Добро пожаловать на NATIONAL TOURISM AWARDS, пожалуйста введите Ваш логин и пароль"

  return (
    <div className="c-section -space-large">
      <div className="c-container">
        <Heading sup={SUP} head={HEAD} lead={LEAD} />
        {/* Space */}
        <div className="u-space-100 u-space-120@xl" />
        {/* Space End */}

        {/* Form */}
        <div className="row">
          <div className="col-lg-9">
            <div className="elements-section" id="variant-1">
              <div className="elements-section" id="variant-1-2">
                <div className="elements-example">
                  <div className="elements-example-body">
                    <form
                      onSubmit={(e) => context.signIn(e)}
                      className="c-form">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="c-form-group">
                            <label className="c-form-label">{context.props.locStrings.registrationEmail}</label>
                            <Input
                              type="text"
                              context={context}
                              id="loginEmail"
                              stateName="loginEmail"
                              placeholder={context.props.locStrings.emailPlaceholder}
                              className="c-form-input"/>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="c-form-group">
                            <label className="c-form-label">{context.props.locStrings.registrationPassword}</label>
                            <Input
                              type="password"
                              context={context}
                              id="loginPassword"
                              stateName="loginPassword"
                              placeholder="Введите пароль"
                              className="c-form-input"/>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="c-form-group" style={{textAlign: 'right', margin: 0}}>
                            <button
                              type="submit"
                              className="c-button-1 -color-green-default -hover-green-outline -size-small">
                              Войти
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Form end */}
      </div>
    </div>
  );
}

export default login;
