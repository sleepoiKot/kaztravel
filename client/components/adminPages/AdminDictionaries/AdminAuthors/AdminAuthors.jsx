import React from 'react';

import EditAuthorModal from './EditAuthorModal/EditAuthorModal'

const adminAuthors = ({context}) => {
  renderAuthorsTable = () => ( context.props.authors.map((author, index)=> (
      <tr key={author._id}>
        <th scope="row">{index+1}</th>
        <td>{author.name}</td>
        <td>{author.description}</td>
        <td className="actions text-center">
          <a
            href="#"
            className="on-default"
            title="редактировать"
            data-toggle="modal"
            data-target="#edit-author-modal"
            onClick={() => {
              context.setState({
                itemId: author._id,
                editAuthorName: author.name,
                editAuthorDescription: author.description
              })
            }}
          >
            <i className="fa fa-pencil" />
          </a>
        </td>
      </tr>
    ))
  )

  return (
    <main className="pt-5 mx-lg-5">
      <div className="container-fluid mt-5">
        <div className="card">
          <div className="card-header"><h3><strong>Авторы</strong></h3></div>
          <div className="card-body">
            {/*Table*/}
            <table className="table table-hover table-responsive-md table-fixed">
              {/*Table head*/}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Имя</th>
                  <th>Об авторе</th>
                  <th className="text-center">Действия</th>
                </tr>
              </thead>
              {/*Table head*/}
              {/*Table body*/}
              <tbody>
                {renderAuthorsTable()}
              </tbody>
              {/*Table body*/}
            </table>
            {/*Table*/}
          </div>
        </div>
      </div>
      <EditAuthorModal
        id="edit-author-modal"
        context={context}
      />
    </main>
  );
}

export default adminAuthors;
