import React from 'react';

import Heading from '/client/components/func/Heading'
import Input from '/client/components/func/Input'

const signup = ({context, submitForm}) => {
  let SUP = context.props.locStrings.formSup
  let HEAD = "Регистрация"
  let LEAD = "Заполните все необходимые поля для регистрации в конкурсе"

  const {
    registrationEmail,
    registrationPhone,
    registrationPassword,
    registrationPasswordConfirm,
    passwordValidation
  } = context.state

  return (
    <div className="c-section -space-large">
      <div className="c-container">
        <Heading sup={SUP} head={HEAD} lead={LEAD} />
        {/* Space */}
        <div className="u-space-100 u-space-120@xl" />
        {/* Space End */}

        {context.state.emailSentInfo ?
          <div className="row">
            <div className="col-lg-9">
              <div className="elements-section" id="variant-1">
                <div className="elements-section" id="variant-1-2">
                  <div className="elements-example">
                    <div className="elements-example-body">
                      Ссылка на подтверждение
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          <div className="row">
            <div className="col-lg-9">
              <div className="elements-section" id="variant-1">
                <div className="elements-section" id="variant-1-2">
                  <div className="elements-example">
                    <div className="elements-example-body">
                      <form
                        onSubmit={(e) => context.signUp(e)}
                        className="c-form">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="c-form-group">
                              <label className="c-form-label">{context.props.locStrings.registrationEmail}</label>
                              <Input
                                type="text"
                                context={context}
                                id="registrationEmail"
                                stateName="registrationEmail"
                                placeholder={context.props.locStrings.emailPlaceholder}
                                onFocus={() => {
                                  let errors = context.state.errors.filter( err => err !== 'registrationEmail')

                                  context.setState({errors})
                                }}
                                className="c-form-input"/>
                                {context.state.errors.some(err => err === 'registrationEmail') ? <small style={{color: 'red'}}><i>{context.props.locStrings.emailValidation}</i></small> : null}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="c-form-group">
                              <label className="c-form-label">{context.props.locStrings.registrationPhone}</label>
                              <Input
                                type="text"
                                data-mask="+7(999) 999-99-99"
                                context={context}
                                id="registrationPhone"
                                stateName="registrationPhone"
                                placeholder={context.props.locStrings.phonePlaceholder}
                                className="c-form-input"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="c-form-group">
                              <label className="c-form-label">{context.props.locStrings.registrationPassword}</label>
                              <Input
                                type="password"
                                context={context}
                                id="registrationPassword"
                                stateName="registrationPassword"
                                className="c-form-input"
                                placeholder="Введите пароль"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="c-form-group">
                              <label className="c-form-label">{context.props.locStrings.registrationPasswordConfirm}</label>
                              <Input
                                type="password"
                                context={context}
                                id="registrationPasswordConfirm"
                                stateName="registrationPasswordConfirm"
                                className="c-form-input"
                                onBlur={() => context.onCheckPasswordConfirmation()}
                                placeholder="Подтвердите пароль"/>
                                {!passwordValidation && registrationPasswordConfirm ?
                                  <div>
                                    <small style={{color: 'red'}}><i>Пароли не совпадают</i></small>
                                  </div>
                                  : null
                                }
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
                                Регистрация
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
        }
      </div>
    </div>
  );
}

export default signup;
