import React from 'react';
import InputMask from 'react-input-mask'
import Select from 'react-select'

import Checkbox from '/client/components/func/Checkbox'
import Input from '/client/components/func/Input'

const emailValidationRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ordering = ({context}) => {
  let emailValidation = emailValidationRegEx.test(String(context.state.cartOrdererEmail).toLowerCase())

  return (
    <div className="cabinet catalog row clearfix seria">
      <div className="cart">
        <div className="cart__title">Оформление заказа</div>
        <div className="tabs">
          <hr/>
            <h5>Информация о покупателе</h5>
            <div className="getin edit__buyer clearfix dn-form" style={{justifyContent: 'initial'}}>
              <div className="col buyer" style={{marginRight: 40}}>
                <label htmlFor="cartOrdererFirstName">Имя</label>
                <Input
                  name="cartOrdererFirstName"
                  type="text"
                  id="cartOrdererFirstName"
                  stateName="cartOrdererFirstName"
                  context={context}
                  placeholder="Ваше имя"
                />
                {!context.state.cartOrdererFirstName && context.state.submitted ?
                  <p id="spanLastNameError" className="error">*Поле обязательно для заполнения</p>
                  :
                  null
                }
              </div>
              <div className="col buyer">
                <label htmlFor="cartOrdererLastName">Фамилия</label>
                <Input
                  name="cartOrdererLastName"
                  type="text"
                  id="cartOrdererLastName"
                  stateName="cartOrdererLastName"
                  context={context}
                  placeholder="Ваша фамилия"
                />
                {!context.state.cartOrdererLastName && context.state.submitted ?
                  <p id="spanLastNameError" className="error">*Поле обязательно для заполнения</p>
                  :
                  null
                }
              </div>
              <div className="col buyer" style={{marginRight: 40}}>
                <label htmlFor="cartOrdererEmail">Адрес электронной почты</label>
                <Input
                  name="cartOrdererEmail"
                  type="text"
                  id="cartOrdererEmail"
                  stateName="cartOrdererEmail"
                  context={context}
                  placeholder="Введите e-mail"
                  onBlur={() => {
                    if(!emailValidation && context.state.submitted){
                      toastr.error("Неверный формат email")
                    }
                  }}
                />
                {!context.state.cartOrdererEmail && context.state.submitted ?
                  <p id="spanLastNameError" className="error">*Поле обязательно для заполнения</p>
                  :
                  null
                }
                {context.state.cartOrdererEmail && !emailValidation && context.state.submitted ?
                  <p className="error">Неверный формат e-mail</p>
                  :
                  null
                }
              </div>
              <div className="col buyer dn-col-with-tel">
                <label htmlFor="cartOrdererPhone">Телефон</label>
                <Input
                  data-mask="+7(999) 999-99-99"
                  name="cartOrdererPhone"
                  type="text"
                  id="cartOrdererPhone"
                  stateName="cartOrdererPhone"
                  context={context}
                  placeholder="+7(999) 999-99-99"
                />
                {!context.state.cartOrdererPhone && context.state.submitted ?
                  <p id="spanLastNameError" className="error">*Поле обязательно для заполнения</p>
                  :
                  null
                }
              </div>
            </div>
            <hr className="thin"/>
              <h5>Способ и адрес доставки</h5>
              <div style={{ textAlign: 'left' }}>
                <ul className="nav md-pills nav-justified pills-warning">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#courier"
                      role="tab"
                      style={{textDecoration: 'none'}}
                      onClick={() => context.setState({deliveryWay: "courier"})}>Курьерская доставка</a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#kazpost"
                      role="tab"
                      style={{textDecoration: 'none'}}
                      onClick={() => context.setState({deliveryWay: "kazpost"})}>Отделение КазПочта </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#postamat"
                      role="tab"
                      style={{textDecoration: 'none'}}
                      onClick={() => context.setState({deliveryWay: "postamat"})}>Постамат Казпочта </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#takeaway"
                      role="tab"
                      style={{textDecoration: 'none'}}
                      onClick={() => context.setState({deliveryWay: "takeaway"})}>Самовывоз из магазина </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade in show active" id="courier" role="tabpanel">
                    <div className="row">
                      <div className="col-md-12">
                        <Select
                          options={context.state.territories}
                          value={context.state.cartOrdererAddress}
                          onInputChange={ e => {
                            if(e.length > 3) {
                              context.setState({placeSelectLoading: true}, () => context.onPlaceSearch(e))
                            } else {
                              context.setState({ territories: [], territoriesNotFound: false})
                            }
                          }}
                          onChange={ value => context.setState({cartOrdererAddress: value}) }
                          placeholder="Введите местоположение: Город, Район, Область..."
                          noOptionsMessage={() => {
                            if(!context.state.placeSelectLoading && context.state.territoriesNotFound)
                              return 'Нам не удалось найти Ваш адрес'

                            if(!context.state.placeSelectLoading)
                              return '... необходимо ввести не менее трех символов ...'
                          }}
                          isLoading={context.state.placeSelectLoading}
                          loadingMessage={() => 'Мы ищем Ваш адрес, пожалуйста подождите...'}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 m-t-20">
                        <Input
                          name="cartOrdererAddressExtra"
                          type="text"
                          className="smkDeliveryStreet"
                          id="cartOrdererAddressExtra"
                          stateName="cartOrdererAddressExtra"
                          context={context}
                          placeholder="Улица, Дом, Квартира..."
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 m-t-20">
                        <h5>Выберите способ оплаты</h5>
                        <div style={{opacity: 1}}>
                          <div className="delivery">
                            <input
                              id="onlinePayment"
                              type="radio"
                              checked={context.state.selectedPayment === 1}
                              onChange={() => context.setState({selectedPayment: 1})}
                              name="onlinePayment"
                              style={{width: 'auto', height: 'auto', zIndex: 1}} />
                            <label htmlFor="onlinePayment">Оплатить онлайн на сайте</label>
                            <input
                              id="receivePayment"
                              type="radio"
                              checked={context.state.selectedPayment === 2}
                              onChange={() => context.setState({selectedPayment: 2})}
                              name="receivePayment"
                              style={{width: 'auto', height: 'auto', zIndex: 1}} />
                            <label htmlFor="receivePayment">Оплата при получении</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/.Panel 1*/}
                  {/*Panel 2*/}
                  <div className="tab-pane fade" id="kazpost" role="tabpanel">
                    <br />
                    <p>Необходимо отобразить список отделений казпочты (реализацию продумать)</p>
                  </div>
                  {/*/.Panel 2*/}
                  {/*Panel 3*/}
                  <div className="tab-pane fade" id="postamat" role="tabpanel">
                    <br />
                    <p>Отобразить или выбрать необходимый постамат для доставки (реализацию продумать)</p>
                  </div>
                  {/*/.Panel 3*/}
                  {/*Panel 4*/}
                  <div className="tab-pane fade" id="takeaway" role="tabpanel">
                    <br />
                    <p>Самовывоз производится по адресу г.Астана ул. Такая-то 19 офис 209</p>
                  </div>
                  {/*/.Panel 4*/}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 m-t-20">
                  { context.state.selectedPayment === 1 ?
                    <button
                      style={{width: '100%'}}>ПЕРЕЙТИ НА СТРАНИЦУ ОПЛАТЫ</button>
                    :
                    <button style={{width: '100%'}}>ПЕРЕЙТИ НА СТРАНИЦУ ЗАВЕРШЕНИЯ ЗАКАЗА</button>
                  }
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default ordering;
