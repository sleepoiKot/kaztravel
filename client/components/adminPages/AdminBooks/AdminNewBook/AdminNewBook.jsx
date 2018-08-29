import React from 'react';
import Select from 'react-select'

import Input from '/client/components/func/Input'
import Checkbox from '/client/components/func/Checkbox'
import FileUploadContainer from '/client/containers/func/FileUploadContainer'

import AdminNewBookCancelModal from './AdminNewBookCancelModal/AdminNewBookCancelModal'

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

const adminNewBook = ({context, addMoreShortDescriptions}) => {
  const {
    value,
    bookName,
    bookAuthor,
    bookAmount,
    bookSerialNumber,
    bookSubject,
    bookAge,
    bookPublishingHouse,
    bookPrice,
    bookDiscount,
    bookShortDescriptions,
    bookImages,
    bookCover,
    bookPages,
    bookProportions,
    bookWeight,
    autocomplete
  } = context.state

  const allFieldsAreFilledOut = value.document.text.trim() !== '' &&
                                bookName &&
                                bookAuthor &&
                                bookAmount &&
                                bookSerialNumber &&
                                bookSubject.length !== 0 &&
                                bookAge.length !== 0 &&
                                bookPublishingHouse &&
                                bookPrice &&
                                bookDiscount &&
                                !bookShortDescriptions.some(desc => desc.trim() === '') &&
                                bookCover &&
                                bookPages &&
                                bookProportions &&
                                bookWeight

  const isThereAnyChanges = value.document.text.trim() !== '' ||
                            bookName ||
                            bookAuthor ||
                            bookAmount ||
                            bookSerialNumber ||
                            bookSubject.length !== 0 ||
                            bookAge.length !== 0 ||
                            bookPublishingHouse ||
                            bookPrice ||
                            bookDiscount ||
                            !bookShortDescriptions.some(desc => desc.trim() === '') ||
                            bookImages.length !== 0 ||
                            bookCover ||
                            bookPages ||
                            bookProportions ||
                            bookWeight

  renderBookShortDescription = () => (
    bookShortDescriptions.map((desc, index) => (
      <div key={index} className="row align-items-center">
        <div className="col mr-auto">
          <div className="md-form">
            <i className="fas fa-info prefix" />
            <input
              type="text"
              value={context.state.bookShortDescriptions[index]}
              id={`bookShortDescription-${index}`}
              onChange={(e) => {
                let value = !context.state.bookShortDescriptions[index] ? e.currentTarget.value.trim() : e.currentTarget.value
                let arrayOfShortDescriptions = [...context.state.bookShortDescriptions]
                arrayOfShortDescriptions[index] = value

                context.setState({ bookShortDescriptions: arrayOfShortDescriptions})
              }}
              className="form-control"/>
            <label htmlFor={`bookShortDescription-${index}`} className={context.state.bookShortDescriptions[index] ? 'active' : null}>Характеристики *</label>
          </div>
        </div>
        {index !== 0 ? (
          <div className="col-auto">
            <a
              onClick={() => {
                let arrayOfDescriptions = [...context.state.bookShortDescriptions]
                const newArrayOfDescriptions = arrayOfDescriptions.filter((_, i) => i !== index)

                context.setState({ bookShortDescriptions: newArrayOfDescriptions })
              }}><i className="fa fa-close" style={{color: '#dc3545'}}/></a>
          </div>
        ) : null}
      </div>
    ))
  )

  autocompleteAuthors = () => {
    if(!bookAuthor || !autocomplete) return

    const regex = new RegExp(escapeRegex(bookAuthor), 'gi')

    return context.props.authors.filter(author => {
      let autocompleteAuthor = author.name.match(regex)

      if(autocompleteAuthor && autocompleteAuthor.length !== 0)
        return true

      return false
    }).map(author =>
      <li
        key={author._id}
        onClick={() =>
          context.setState({
            bookAuthor: author.name,
            autocomplete: false
          })
        }>{author.name}
      </li>
    )
  }

  return (
    <main className="pt-5 pb-5 mx-lg-5">
      <div className="container-fluid mt-5">
        <div className="card">
          <div className="card-header"><h3><strong>Новая книга</strong></h3></div>
          <div className="card-body">
            <FileUploadContainer
              main
              buttonName="Выберите обложку книги *"
              context={ context }
              stateName='bookCover'
            />
            <FileUploadContainer
              multi
              title="Изображения книги"
              buttonName="Выберите файлы"
              context={ context }
              stateName='bookImages'
            />
            <div className="row">
              <div className="col-lg-12">
                <div className="md-form">
                  <i className="fas fa-book prefix" />
                  <Input
                    type="text"
                    context={context}
                    id="bookName"
                    stateName="bookName"
                    validation
                    className="form-control"/>
                  <label htmlFor="bookName" className={context.state.bookName ? 'active' : null}>Название книги *</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="md-form">
                  <i className="fas fa-tag prefix" />
                  <Input
                    type="text"
                    context={context}
                    id="bookSerialNumber"
                    stateName="bookSerialNumber"
                    validation
                    className="form-control"/>
                  <label htmlFor="bookSerialNumber" className={context.state.bookSerialNumber ? 'active' : null}>Серийный номер *</label>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="md-form">
                  <i className="fas fa-user-tie prefix" />
                  <input
                    type="text"
                    id="bookAuthor"
                    onChange={ e => {
                      let value = e.currentTarget.value
                      if(!context.state.bookAuthor)
                        value = e.currentTarget.value.trim()

                      context.setState({ bookAuthor: value, autocomplete: true})
                    } }
                    value={ context.state.bookAuthor }
                    className="form-control"/>
                  <label htmlFor="bookAuthor" className={context.state.bookAuthor ? 'active' : null}>Автор *</label>
                  <ul className="mdb-autocomplete-wrap">
                    {autocompleteAuthors()}
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="md-form">
                  <i className="fas fa-list-ol prefix" />
                  <Input
                    type="number"
                    context={context}
                    id="bookAmount"
                    stateName="bookAmount"
                    className="form-control"/>
                  <label htmlFor="bookAmount" className={bookAmount || bookAmount === 0 ? 'active' : null}>Количество *</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 p-0">
                <div className="md-form">
                  <div className="d-flex align-items-center">
                    <h3 className="col-1"><i className="fas fa-book-open pr-2" /></h3>
                    <div className="col-11">
                      <Select
                        isMulti
                        value={context.state.bookSubject.map(subject => {
                          return {
                            value: subject.value,
                            label: subject.label.length > 20 ? subject.label.slice(0, 19).concat('...') : subject.label
                          }
                        })}
                        onChange={values => context.setState({
                          bookSubject: context.subjectsOptions.filter(subject => values.some(value => value.value === subject.value))
                        })}
                        placeholder="Выберите тематику *"
                        options={context.subjectsOptions}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 p-0">
                <div className="md-form">
                  <div className="d-flex align-items-center">
                    <h3 className="col-1"><i className="fas fa-universal-access pr-2" /></h3>
                    <div className="col-11">
                      <Select
                        isMulti
                        value={context.state.bookAge.map(age => {
                          return {
                            value: age.value,
                            label: age.label.length > 20 ? age.label.slice(0, 19).concat('...') : age.label
                          }
                        })}
                        onChange={values => context.setState({
                          bookAge: context.agesOptions.filter(age => values.some(value => value.value === age.value))
                        })}
                        placeholder="Выберите возраст *"
                        options={context.agesOptions}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 p-0">
                <div className="md-form">
                  <div className="d-flex align-items-center">
                    <h3 className="col-1"><i className="fas fa-home pr-2" /></h3>
                    <div className="col-11">
                      <Select
                        value={context.state.bookPublishingHouse}
                        onChange={values => context.setState({bookPublishingHouse: values})}
                        placeholder="Выберите издательство *"
                        options={context.publishingHousesOptions}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="md-form">
                  <i className="fas fa-credit-card prefix" />
                  <Input
                    type="number"
                    context={context}
                    id="bookPrice"
                    stateName="bookPrice"
                    className="form-control"/>
                  <label htmlFor="bookPrice" className={context.state.bookPrice ? 'active' : null}>Цена *</label>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="md-form">
                  <i className="fas fa-angle-double-right prefix" />
                  <Input
                    type="number"
                    context={context}
                    id="bookNewPrice"
                    stateName="bookNewPrice"
                    className="form-control"/>
                  <label
                    htmlFor="bookNewPrice"
                    className={context.state.bookNewPrice || context.state.bookNewPrice === 0 ? 'active' : null}>
                    Новая цена (доп.)
                  </label>
                </div>
              </div>
              <div className="col-lg-4 p-0">
                <div className="md-form">
                  <div className="d-flex align-items-center">
                    <h3 className="col-1"><i className="fas fa-percentage pr-2" /></h3>
                    <div className="col-11">
                      <Select
                        value={context.state.bookDiscount}
                        onChange={values => context.setState({ bookDiscount: values })}
                        placeholder="Выберите скидку *"
                        options={context.discountOptions}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="md-form">
                  <i className="fab fa-page4 prefix" />
                  <Input
                    type="number"
                    context={context}
                    id="bookPages"
                    stateName="bookPages"
                    className="form-control"/>
                  <label htmlFor="bookPages" className={context.state.bookPages ? 'active' : null}>Количество страниц *</label>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="md-form">
                  <i className="fas fa-project-diagram prefix" />
                  <Input
                    type="text"
                    context={context}
                    id="bookProportions"
                    stateName="bookProportions"
                    className="form-control"/>
                  <label htmlFor="bookProportions" className={context.state.bookProportions ? 'active' : null}>Размеры (ШДВ) *</label>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="md-form">
                  <i className="fas fa-weight prefix" />
                  <Input
                    type="number"
                    context={context}
                    id="bookWeight"
                    stateName="bookWeight"
                    className="form-control"/>
                  <label htmlFor="bookWeight" className={context.state.bookWeight ? 'active' : null}>Вес (в граммах) *</label>
                </div>
              </div>
            </div>
            {renderBookShortDescription()}
            <div className="d-flex flex-row-reverse">
              <button
                onClick={addMoreShortDescriptions}
                type="button"
                className="btn btn-md btn-outline-warning">Добавить еще +</button>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="md-form">
                  <i className="fas fa-fire prefix" />
                  <Checkbox
                    context={context}
                    id="bookIsNew"
                    stateName="bookIsNew"/>
                  <label htmlFor="bookIsNew">Новинка</label>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="md-form">
                  <i className="fas fa-flag prefix" />
                  <Checkbox
                    context={context}
                    id="bookMadeInKz"
                    stateName="bookMadeInKz"/>
                  <label htmlFor="bookMadeInKz">Сделано в Казахстане</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <h3 className="mt-2"><i className="fas fa-info-circle pr-2" />Описание *</h3>
                <div className="card">
                  <div className="card-body">
                    {context.renderToolbar()}
                    {context.renderEditor()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="d-flex flex-row-reverse">
              <button
                style={{zIndex: 0}}
                type="button"
                onClick={() => {
                  if(bookCover && bookCover.progress !== 100 || bookImages.some(img => img.progress !== 100)){
                    toastr.warning("Пожалуйста дождитесь окончания загрузки файлов")
                    return
                  }

                  if(!allFieldsAreFilledOut){
                    toastr.warning("Пожалуйста заполните все поля для продолжения")
                    return
                  }
                  context.onBookSaveHandler()
                }}
                className="btn btn-outline-primary waves-effect">Сохранить</button>
              {isThereAnyChanges ?
                <a
                  style={{zIndex: 0}}
                  type="button"
                  data-toggle="modal"
                  data-target="#admin-new-book-cancel-modal"
                  className="btn btn-outline-danger waves-effect">Отменить</a>
                  :
                <a
                  style={{zIndex: 0}}
                  type="button"
                  onClick={() => context.props.history.push('/admin/books')}
                  className="btn btn-outline-danger waves-effect">Отменить</a>
                }
            </div>
          </div>
        </div>
      </div>
      <AdminNewBookCancelModal id="admin-new-book-cancel-modal"/>
    </main>
  );
}

export default adminNewBook;
