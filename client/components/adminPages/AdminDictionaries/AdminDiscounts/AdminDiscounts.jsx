import React from 'react';

import AddDiscountModal from './AddDiscountModal/AddDiscountModal'
import EditDiscountModal from './EditDiscountModal/EditDiscountModal'

import RemoveModal from '/client/components/func/RemoveModal'

const adminDiscounts = ({context}) => {
  renderDiscountsDictionary = () => (
    context.props.discounts.map((discount, index) => (
      <tr key={discount._id}>
        <td>{index+1}</td>
        <td>{discount.label}</td>
        <td>{discount.value}</td>
        <td className="actions text-center">
          <a
            href="#"
            className="on-default"
            title="редактировать"
            data-toggle="modal"
            data-target="#edit-discount-modal"
            onClick={() => {
              context.setState({
                itemId: discount._id,
                editDiscountLabel: discount.label,
                editDiscountValue: discount.value
              })
            }}
          >
            <i className="fa fa-pencil" />
          </a>
          <a
            href="#"
            className="red-text ml-2"
            title="удалить"
            onClick={() => context.setState({itemId: discount._id, itemName: discount.label})}
            data-toggle="modal"
            data-target="#remove-discount-modal"
          >
            <i className="fa fa-trash" />
          </a>
        </td>
      </tr>
    ))
  )

  return (
    <main className="pt-5 mx-lg-5">
      <div className="container-fluid mt-5">
        <div className="card">
          <div className="card-header">
            <div className="d-flex align-items-center">
              <h3><strong>Скидки</strong></h3>
              <button
                type="button"
                data-toggle="modal"
                data-target="#add-discount-modal"
                className="btn-md btn btn-outline-warning waves-effect">Добавить <i className="fa fa-plus"></i></button>
            </div>
          </div>
          <div className="card-body">
            {/*Table*/}
            <table className="table table-hover table-responsive-md table-fixed">
              {/*Table head*/}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Наименование</th>
                  <th>Значение</th>
                  <th className="text-center">Действия</th>
                </tr>
              </thead>
              {/*Table head*/}
              {/*Table body*/}
              <tbody>
                {renderDiscountsDictionary()}
              </tbody>
              {/*Table body*/}
            </table>
            {/*Table*/}
          </div>
        </div>
      </div>
      <AddDiscountModal
        id="add-discount-modal"
        context={context}
      />
      <EditDiscountModal
        id="edit-discount-modal"
        context={context}
      />
      <RemoveModal
        titleName="Скидку"
        bodyContent={context.state.itemName}
        id="remove-discount-modal"
        onConfirm={context.onDeleteDiscountDictionary}
        context={context}
      />
    </main>
  );
}

export default adminDiscounts;
