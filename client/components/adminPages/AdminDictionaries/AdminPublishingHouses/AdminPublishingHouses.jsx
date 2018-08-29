import React from 'react';

import AddPublishingHouseModal from './AddPublishingHouseModal/AddPublishingHouseModal'
import EditPublishingHouseModal from './EditPublishingHouseModal/EditPublishingHouseModal'

import RemoveModal from '/client/components/func/RemoveModal'

const adminPublishingHouses = ({context}) => {
  renderPublishingHousesDictionary = () => (
    context.props.publishingHouses.map((publishingHouse, index) => (
      <tr key={publishingHouse._id}>
        <td>{index+1}</td>
        <td>{publishingHouse.name}</td>
        <td className="actions text-center">
          <a
            href="#"
            className="on-default"
            title="редактировать"
            data-toggle="modal"
            data-target="#edit-publishingHouse-modal"
            onClick={() => {
              context.setState({
                itemId: publishingHouse._id,
                editPublishingHouseName: publishingHouse.name
              })
            }}
          >
            <i className="fa fa-pencil" />
          </a>
          <a
            href="#"
            className="red-text ml-2"
            title="удалить"
            onClick={() => context.setState({itemId: publishingHouse._id, itemName: publishingHouse.name})}
            data-toggle="modal"
            data-target="#remove-publishingHouse-modal"
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
              <h3><strong>Издательства</strong></h3>
              <button
                type="button"
                data-toggle="modal"
                data-target="#add-publishingHouse-modal"
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
                {renderPublishingHousesDictionary()}
              </tbody>
              {/*Table body*/}
            </table>
            {/*Table*/}
          </div>
        </div>
      </div>
      <AddPublishingHouseModal
        id="add-publishingHouse-modal"
        context={context}
      />
      <EditPublishingHouseModal
        id="edit-publishingHouse-modal"
        context={context}
      />
      <RemoveModal
        titleName="Издательство"
        bodyContent={context.state.itemName}
        id="remove-publishingHouse-modal"
        onConfirm={context.onDeletePublishingHouseDictionary}
        context={context}
      />
    </main>
  );
}

export default adminPublishingHouses;
