import React from 'react';

import AddWhereToBuyModal from './AddWhereToBuyModal/AddWhereToBuyModal'
// import EditWhereToBuyModal from './EditWhereToBuyModal/EditWhereToBuyModal'

import RemoveModal from '/client/components/func/RemoveModal'

const adminSubjects = ({context}) => {
  renderSubjectsDictionary = () => (
    context.props.subjects.map((subject, index) => (
      <tr key={subject._id}>
        <td>{index+1}</td>
        <td>{subject.name}</td>
        <td className="actions text-center">
          <a
            href="#"
            className="on-default"
            title="редактировать"
            data-toggle="modal"
            data-target="#edit-subject-modal"
            onClick={() => {
              context.setState({
                itemId: subject._id,
                editSubjectName: subject.name
              })
            }}
          >
            <i className="fa fa-pencil" />
          </a>
          <a
            href="#"
            className="red-text ml-2"
            title="удалить"
            onClick={() => context.setState({itemId: subject._id, itemName: subject.name})}
            data-toggle="modal"
            data-target="#remove-subject-modal"
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
              <h3><strong>Где купить</strong></h3>
              <button
                type="button"
                data-toggle="modal"
                data-target="#add-where-to-buy-modal"
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
                  <th className="text-center">Действия</th>
                </tr>
              </thead>
              {/*Table head*/}
              {/*Table body*/}
              <tbody>
                {/* {renderSubjectsDictionary()} */}
              </tbody>
              {/*Table body*/}
            </table>
            {/*Table*/}
          </div>
        </div>
      </div>
      <AddWhereToBuyModal
        id="add-where-to-buy-modal"
        context={context}
      />
      {/* <EditSubjectModal
        id="edit-subject-modal"
        context={context}
      />
      <RemoveModal
        titleName="Тематику"
        bodyContent={context.state.itemName}
        id="remove-subject-modal"
        onConfirm={context.onDeleteSubjectDictionary}
        context={context}
      /> */}
    </main>
  );
}

export default adminSubjects;
