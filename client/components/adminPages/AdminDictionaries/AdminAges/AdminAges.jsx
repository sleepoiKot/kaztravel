import React from 'react';

import AddAgeModal from './AddAgeModal/AddAgeModal'
import EditAgeModal from './EditAgeModal/EditAgeModal'

import RemoveModal from '/client/components/func/RemoveModal'

const adminAges = ({context}) => {
  renderAgesDictionary = () => (
    context.props.ages.map((age, index) => (
      <tr key={age._id}>
        <td>{index+1}</td>
        <td>{age.name}</td>
        <td>{age.range.value.join(', ')}</td>
        <td className="actions text-center">
          <a
            href="#"
            className="on-default"
            title="редактировать"
            data-toggle="modal"
            data-target="#edit-age-modal"
            onClick={() => {
              context.setState({
                itemId: age._id,
                editAgeName: age.name,
                editAgeRange: age.range
              })
            }}
          >
            <i className="fa fa-pencil" />
          </a>
          <a
            href="#"
            className="red-text ml-2"
            title="удалить"
            onClick={() => context.setState({itemId: age._id, itemName: age.name})}
            data-toggle="modal"
            data-target="#remove-age-modal"
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
              <h3><strong>Возраст</strong></h3>
              <button
                type="button"
                data-toggle="modal"
                data-target="#add-age-modal"
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
                  <th>Название</th>
                  <th>Возрастной диапазон</th>
                  <th className="text-center">Действия</th>
                </tr>
              </thead>
              {/*Table head*/}
              {/*Table body*/}
              <tbody>
                {renderAgesDictionary()}
              </tbody>
              {/*Table body*/}
            </table>
            {/*Table*/}
          </div>
        </div>
      </div>
      <AddAgeModal
        id="add-age-modal"
        context={context}
      />
      <EditAgeModal
        id="edit-age-modal"
        context={context}
      />
      <RemoveModal
        titleName="Возраст"
        bodyContent={context.state.itemName}
        id="remove-age-modal"
        onConfirm={context.onDeleteAgeDictionary}
        context={context}
      />
    </main>
  );
}

export default adminAges;
