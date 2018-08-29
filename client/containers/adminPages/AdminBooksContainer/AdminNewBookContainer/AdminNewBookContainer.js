import React, { Component } from 'react'
import { Editor } from 'slate-react'
import { Value } from 'slate'
import { withTracker } from 'meteor/react-meteor-data'
import { isKeyHotkey } from 'is-hotkey'

import { AgesCollection } from '/api/ages'
import { SubjectsCollection } from '/api/subjects'
import { PublishingHousesCollection } from '/api/publishingHouses'
import { AuthorsCollection } from '/api/authors'
import { DiscountsCollection } from '/api/discounts'

import { BooksCollection } from '/api/books'

import AdminNewBook from '/client/components/adminPages/AdminBooks/AdminNewBook/AdminNewBook'

import { multipleSubscribe } from '/client/libs/subscriptionsRelated'

const DEFAULT_NODE = 'paragraph'

const isBoldHotkey = isKeyHotkey('mod+b')
const isItalicHotkey = isKeyHotkey('mod+i')
const isUnderlinedHotkey = isKeyHotkey('mod+u')
const isCodeHotkey = isKeyHotkey('mod+`')

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: '',
              },
            ],
          },
        ],
      },
    ],
  },
})

const defaultState = {
  value: initialValue,

  bookId: '',
  bookName: '',
  bookAuthor: '',
  bookAmount: '',
  bookSerialNumber: '',
  bookSubject: [],
  bookAge: [],
  bookPublishingHouse: '',
  bookPrice: '',
  bookDiscount: '',
  bookShortDescriptions: [''],
  bookIsNew: false,
  bookNewPrice: '',
  bookImages: [],
  bookCover: '',
  bookMadeInKz: false,
  bookPages: '',
  bookProportions: '',
  bookWeight: '',
  autocomplete: false
}

class AdminNewBookContainer extends Component {
  state = defaultState

  componentWillMount() {
    document.getElementById("default-main-slate").disabled = false;
    if(this.props.match.params._id){
      Meteor.call('get.book', this.props.match.params._id, (err, res) => {
        if(err){
          toastr.error('Попробуйте перезагрузить страницу', "Не удалось загрузить данные о книге")
        } else {
          const description = JSON.stringify(res.description)

          this.setState({
            bookId: res._id,
            bookName: res.name,
            bookAuthor: res.author,
            bookAmount: res.amount,
            bookSerialNumber: res.serialNumber,
            value: Value.fromJSON(JSON.parse(description)),
            bookSubject: res.subject,
            bookAge: res.age,
            bookPublishingHouse: res.publishingHouse,
            bookPrice: res.oldPrice ? res.oldPrice : res.price,
            bookDiscount: res.discount,
            bookShortDescriptions: res.shortDescriptions,
            bookIsNew: res.new,
            bookNewPrice: res.oldPrice ? res.price : 0,
            bookImages: res.images,
            bookCover: res.cover,
            bookMadeInKz: res.madeInKz,
            bookPages: res.pages,
            bookProportions: res.proportions,
            bookWeight: res.weight
          })
        }
      })
    }
  }

  componentWillUnmount() {
    defaultState.bookImages = []
    this.setState(defaultState)
  }

  onBookSaveHandler = () => {
    const {
      bookId,
      bookName,
      bookAuthor,
      bookAmount,
      bookSerialNumber,
      value,
      bookSubject,
      bookAge,
      bookPublishingHouse,
      bookPrice,
      bookDiscount,
      bookShortDescriptions,
      bookIsNew,
      bookNewPrice,
      bookImages,
      bookCover,
      bookMadeInKz,
      bookPages,
      bookProportions,
      bookWeight
    } = this.state

    const data = {
      name: bookName,
      serialNumber: bookSerialNumber,
      author: bookAuthor.trim(),
      amount: parseInt(bookAmount),
      description: value.toJSON(),
      subject: bookSubject,
      age: bookAge,
      publishingHouse: bookPublishingHouse,
      price: bookNewPrice ? parseInt(bookNewPrice) : parseInt(bookPrice),
      discount: bookDiscount,
      shortDescriptions: bookShortDescriptions,
      new: bookIsNew,
      oldPrice: bookNewPrice ? parseInt(bookPrice) : 0,
      images: bookImages,
      cover: bookCover,
      madeInKz: bookMadeInKz,
      pages: parseInt(bookPages),
      proportions: bookProportions,
      weight: parseFloat(bookWeight)
    }

    Meteor.call('book.insert', bookId, data, (err, res) => {
      if(err) {
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        Meteor.call('author.insert', bookAuthor.trim())

        toastr.success("Книга успешно сохранена")
        this.props.history.push('/admin/books')
      }
    })
  }

  hasMark = type => {
    const { value } = this.state
    return value.activeMarks.some(mark => mark.type == type)
  }

  hasBlock = type => {
    const { value } = this.state
    return value.blocks.some(node => node.type == type)
  }

  onChange = ({ value }) => {
    this.setState({ value })
  }

  onKeyDown = (event, change) => {
    let mark

    if (isBoldHotkey(event)) {
      mark = 'bold'
    } else if (isItalicHotkey(event)) {
      mark = 'italic'
    } else if (isUnderlinedHotkey(event)) {
      mark = 'underlined'
    } else if (isCodeHotkey(event)) {
      mark = 'code'
    } else {
      return
    }

    event.preventDefault()
    change.toggleMark(mark)
    return true
  }

  onClickMark = (event, type) => {
    event.preventDefault()
    const { value } = this.state
    const change = value.change().toggleMark(type)
    this.onChange(change)
  }

  onClickBlock = (event, type) => {
    event.preventDefault()
    const { value } = this.state
    const change = value.change()
    const { document } = value

    // Handle everything but list buttons.
    if (type != 'bulleted-list' && type != 'numbered-list') {
      const isActive = this.hasBlock(type)
      const isList = this.hasBlock('list-item')

      if (isList) {
        change
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list')
      } else {
        change.setBlocks(isActive ? DEFAULT_NODE : type)
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      const isList = this.hasBlock('list-item')
      const isType = value.blocks.some(block => {
        return !!document.getClosest(block.key, parent => parent.type == type)
      })

      if (isList && isType) {
        change
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list')
      } else if (isList) {
        change
          .unwrapBlock(
            type == 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
          )
          .wrapBlock(type)
      } else {
        change.setBlocks('list-item').wrapBlock(type)
      }
    }

    this.onChange(change)
  }

  addMoreShortDescriptions = () => {
    let shortDescriptions = [...this.state.bookShortDescriptions]
    if(shortDescriptions[shortDescriptions.length - 1].trim() === ''){
      toastr.warning('Чтобы добавить еще, необходимо заполнить поле')
      return
    }
    if(shortDescriptions.length === 5) {
      toastr.warning("Обратитесь к администратору", "Превышен лимит")
      return
    }

    shortDescriptions.push('')

    this.setState({bookShortDescriptions: shortDescriptions})
  }

  render() {
    this.subjectsOptions = this.props.subjects.map(subject => {
      return {
        value: subject._id,
        label: subject.name
      }
    })

    this.agesOptions = this.props.ages.map(age => {
      return {
        value: age._id,
        label: age.name
      }
    })

    this.publishingHousesOptions = this.props.publishingHouses.map(publishingHouse => {
      return {
        value: publishingHouse._id,
        label: publishingHouse.name
      }
    })

    this.discountOptions = this.props.discounts.map( discount => {
      return {
        value: discount.value,
        label: discount.label
      }
    })

    return <AdminNewBook context={this} addMoreShortDescriptions={this.addMoreShortDescriptions.bind(this)}/>
  }

  renderToolbar = () => {
    return (
      <div className="menu toolbar-menu">
        {this.renderMarkButton('bold', 'format_bold')}
        {this.renderMarkButton('italic', 'format_italic')}
        {this.renderMarkButton('underlined', 'format_underlined')}
        {this.renderMarkButton('code', 'code')}
        {this.renderBlockButton('heading-one', 'looks_one')}
        {this.renderBlockButton('heading-two', 'looks_two')}
        {this.renderBlockButton('block-quote', 'format_quote')}
        {this.renderBlockButton('numbered-list', 'format_list_numbered')}
        {this.renderBlockButton('bulleted-list', 'format_list_bulleted')}
      </div>
    )
  }

  renderMarkButton = (type, icon) => {
    const isActive = this.hasMark(type)
    const onMouseDown = event => this.onClickMark(event, type)

    return (
      // eslint-disable-next-line react/jsx-no-bind
      <span className="button" onMouseDown={onMouseDown} data-active={isActive}>
        <span className="material-icons">{icon}</span>
      </span>
    )
  }

  renderBlockButton = (type, icon) => {
    let isActive = this.hasBlock(type)

    if (['numbered-list', 'bulleted-list'].includes(type)) {
      const { value } = this.state
      const parent = value.document.getParent(value.blocks.first().key)
      isActive = this.hasBlock('list-item') && parent && parent.type === type
    }
    const onMouseDown = event => this.onClickBlock(event, type)

    return (
      <span className="button" onMouseDown={onMouseDown} data-active={isActive}>
        <span className="material-icons">{icon}</span>
      </span>
    )
  }

  renderEditor = () => {
    return (
      <div className="editor">
        <Editor
          placeholder="Введите описание книги..."
          value={this.state.value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          renderNode={this.renderNode}
          renderMark={this.renderMark}
          spellCheck
        />
      </div>
    )
  }

  renderNode = props => {
    const { attributes, children, node } = props
    switch (node.type) {
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>
      case 'list-item':
        return <li {...attributes}>{children}</li>
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>
    }
  }

  renderMark = props => {
    const { children, mark, attributes } = props
    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{children}</strong>
      case 'code':
        return <code {...attributes}>{children}</code>
      case 'italic':
        return <em {...attributes}>{children}</em>
      case 'underlined':
        return <u {...attributes}>{children}</u>
    }
  }
}

export default withTracker(() => {
  multipleSubscribe([
    'ages',
    'subjects',
    'publishingHouses',
    'authors',
    'discounts'
  ])

  return {
    ages: AgesCollection.find().fetch(),
    subjects: SubjectsCollection.find().fetch(),
    publishingHouses: PublishingHousesCollection.find().fetch(),
    authors: AuthorsCollection.find().fetch(),
    discounts: DiscountsCollection.find().fetch()
  }
})(AdminNewBookContainer);
