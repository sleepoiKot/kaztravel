import React from 'react';

import AddNominationModal from './AddNominationModal/AddNominationModal'
import EditNominationModal from './EditNominationModal/EditNominationModal'

import RemoveModal from '/client/components/func/RemoveModal'

const adminNominations = ({context}) => {
  renderNominations = () => (
    context.props.nominations.map((nomination, index) => (
      <tr key={nomination._id}>
        <td>{index+1}</td>
        <td>{nomination.name[context.props.lang]}</td>
        <td>{nomination.shortDescription[context.props.lang]}</td>
        <td className="actions text-center">
          <a
            href="#"
            className="on-default"
            title={context.props.locStrings.edit}
            data-toggle="modal"
            data-target="#edit-nomination-modal"
            onClick={() => {
              context.setState({
                itemId: nomination._id,
                editNominationNameRu: nomination.name.ru,
                editNominationNameKz: nomination.name.kz,
                editNominationNameEn: nomination.name.en,
                editNominationShortDescriptionRu: nomination.shortDescription.ru,
                editNominationShortDescriptionKz: nomination.shortDescription.kz,
                editNominationShortDescriptionEn: nomination.shortDescription.en,
                editNominationSource: nomination.src
              })
            }}
          >
            <i className="fa fa-pencil" />
          </a>
          <a
            href="#"
            className="red-text ml-2"
            title={context.props.locStrings.delete}
            onClick={() => context.setState({itemId: nomination._id, itemName: nomination.name.ru})}
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
              <h3><strong>{context.props.locStrings.adminNominations}</strong></h3>
              <button
                type="button"
                data-toggle="modal"
                data-target="#add-nomination-modal"
                className="btn-md btn btn-outline-warning waves-effect">{context.props.locStrings.add} <i className="fa fa-plus"></i></button>
            </div>
          </div>
          <div className="card-body">
            {/*Table*/}
            <table className="table table-hover table-responsive-md table-fixed">
              {/*Table head*/}
              <thead>
                <tr>
                  <th>#</th>
                  <th>{context.props.locStrings.name}</th>
                  <th>{context.props.locStrings.shortDescription}</th>
                  <th className="text-center">{context.props.locStrings.adminTableActions}</th>
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
        titleName={context.props.locStrings.adminNomination}
        bodyContent={context.state.itemName}
        id="remove-nomination-modal"
        onConfirm={context.onDeleteNomination}
        context={context}
      />
    </main>
  );
}

export default adminNominations;
