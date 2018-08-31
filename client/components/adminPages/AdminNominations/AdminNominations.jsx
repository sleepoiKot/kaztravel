import React from 'react';

import AddNominationModal from './AddNominationModal/AddNominationModal'
import EditNominationModal from './EditNominationModal/EditNominationModal'

import RemoveModal from '/client/components/func/RemoveModal'

const adminNominations = ({context}) => {
  renderNominations = () => (
    context.props.nominations.map((nomination, index) => (
      <tr key={nomination._id}>
        <td>{index+1}</td>
        <td>{nomination.name}</td>
        <td>{nomination.shortDescription}</td>
        <td className="actions text-center">
          <a
            href="#"
            className="on-default"
            title="редактировать"
            data-toggle="modal"
            data-target="#edit-nomination-modal"
            onClick={() => {
              context.setState({
                itemId: nomination._id,
                editNominationName: nomination.name,
                editNominationShortDescription: nomination.shortDescription
              })
            }}
          >
            <i className="fa fa-pencil" />
          </a>
          <a
            href="#"
            className="red-text ml-2"
            title="удалить"
            onClick={() => context.setState({itemId: nomination._id, itemName: nomination.name})}
            data-toggle="modal"
            data-target="#remove-nomination-modal"
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
              <h3><strong>Номинации</strong></h3>
              <button
                type="button"
                data-toggle="modal"
                data-target="#add-nomination-modal"
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
                  <th>Краткое описание</th>
                  <th className="text-center">Действия</th>
                </tr>
              </thead>
              {/*Table head*/}
              {/*Table body*/}
              <tbody>
                {renderNominations()}
              </tbody>
              {/*Table body*/}
            </table>
            {/*Table*/}
          </div>
        </div>
      </div>
      <AddNominationModal
        id="add-nomination-modal"
        context={context}
      />
      <EditNominationModal
        id="edit-nomination-modal"
        context={context}
      />
      <RemoveModal
        titleName="Номинация"
        bodyContent={context.state.itemName}
        id="remove-nomination-modal"
        onConfirm={context.onDeleteNomination}
        context={context}
      />
    </main>
  );
}

export default adminNominations;
