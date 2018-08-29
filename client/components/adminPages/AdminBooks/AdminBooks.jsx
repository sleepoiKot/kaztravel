import React from 'react';
import { Link } from 'react-router-dom'

import RemoveModal from '/client/components/func/RemoveModal'

import Aux from '/client/hoc/Aux/Aux'

const adminBooks = ({context}) => {
  renderBooksTable = () => ( context.props.books.map((book, index)=> (
      <tr className={book.deleted ? "table-danger" : null} key={book._id}>
        <td>{book.serialNumber}</td>
        <td>{book.name}</td>
        <td>{book.author}</td>
        <td>{book.amount}</td>
        <td>{book.subject.map(sub => sub.label).join('; ')}</td>
        <td>{book.age.map(age => age.label).join('; ')}</td>
        <td>{book.publishingHouse.label}</td>
        <td>{book.price}</td>
        <td className="actions text-center">
          {book.deleted ? (
            <a
              className="blue-text ml-2"
              title="восстановить"
              onClick={() => {
                Meteor.call('book.restore', book._id, (err, res) => {
                  if(err){
                    toastr.error(err.reason, "Упс что-то пошло не так")
                  } else {
                    toastr.success("Книга успешно восстановлена!")
                  }
                })
              }}
            >
              <i className="fas fa-undo" />
            </a>
          ) : (
            <Aux>
              <Link
                to={`/admin/books/newBook/${book._id}`}
                className="on-default"><i className="fa fa-pencil" /></Link>
              <a
                className="red-text ml-2"
                title="удалить"
                onClick={() => context.setState({itemId: book._id, itemName: book.name})}
                data-toggle="modal"
                data-target="#remove-book-modal"
              >
                <i className="fa fa-trash" />
              </a>
            </Aux>
          )}
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
              <h3><strong>Коллекция книг</strong></h3>
              <Link
                to="/admin/books/newBook"
                type="button"
                className="btn-md btn btn-outline-warning waves-effect">Добавить <i className="fa fa-plus"></i></Link>
            </div>
          </div>
          <div className="card-body">
            <table className="table table-responsive-xl table-responsive-lg table-responsive-md table-responsive-sm table-hover table-fixed">
              <thead className="mdb-color darken-3">
                <tr className="text-white">
                  <th>Номер книги</th>
                  <th>Наименование</th>
                  <th>Автор</th>
                  <th>Кол-во</th>
                  <th>Тематика</th>
                  <th>Возраст</th>
                  <th>Издательство</th>
                  <th>Цена</th>
                  <th className="text-center">Действия</th>
                </tr>
              </thead>
              <tbody>
                {renderBooksTable()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <RemoveModal
        titleName="Книгу"
        bodyContent={context.state.itemName}
        id="remove-book-modal"
        onConfirm={context.onDeleteBook}
        context={context}
      />
    </main>
  );
}

export default adminBooks;
