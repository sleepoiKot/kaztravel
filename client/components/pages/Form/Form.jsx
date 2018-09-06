import React from 'react';
import Scroll, { Element, scroller } from "react-scroll";

import Heading from '/client/components/func/Heading'
import Input from '/client/components/func/Input'
import Select from 'react-select'
import FileUploadContainer from '/client/containers/func/FileUploadContainer'
import Textarea from '/client/components/func/Textarea'

const form = ({context, submitForm}) => {
  let SUP = context.props.locStrings.formSup
  let HEAD = context.props.locStrings.formHead
  let LEAD = context.props.locStrings.formLead

  let isSmsVerified = Meteor.user() ? !Meteor.user().profile.confirmCode : false

  return (
    <div className="c-section -space-large">
      <div className="c-container">
        <Heading sup={SUP} head={HEAD} lead={LEAD} />
        {/* Space */}
        <div className="u-space-100 u-space-120@xl" />
        {/* Space End */}

        {/* Form */}
        <div className="row">
          <div className="col-lg-9">
            <div className="elements-section" id="variant-1">
              <div className="elements-section" id="variant-1-2">
                <div className="elements-example">
                  <div className="elements-example-body">
                    {isSmsVerified ?
                      <form
                        onSubmit={(e) => submitForm(e)}
                        className="c-form">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="c-form-group">
                              <Element name="formEmail" />
                              <label className="c-form-label">{context.props.locStrings.formEmail}</label>
                              <Input
                                type="text"
                                context={context}
                                id="formEmail"
                                stateName="formEmail"
                                placeholder={context.props.locStrings.emailPlaceholder}
                                onFocus={() => {
                                  let errors = context.state.errors.filter( err => err !== 'formEmail')

                                  context.setState({errors})
                                }}
                                className="c-form-input"/>
                                {context.state.errors.some(err => err === 'formEmail') ? <small style={{color: 'red'}}><i>{context.props.locStrings.emailValidation}</i></small> : null}
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="c-form-group">
                              <label className="c-form-label">{context.props.locStrings.formLastName}</label>
                              <Input
                                type="text"
                                context={context}
                                id="formLastName"
                                stateName="formLastName"
                                placeholder={context.props.locStrings.lastNamePlaceholder}
                                className="c-form-input"/>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="c-form-group">
                              <label className="c-form-label">{context.props.locStrings.formFirstName}</label>
                              <Input
                                type="text"
                                context={context}
                                id="formFirstName"
                                stateName="formFirstName"
                                placeholder={context.props.locStrings.firstNamePlaceholder}
                                className="c-form-input"/>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="c-form-group">
                              <label className="c-form-label">{context.props.locStrings.formMiddleName}</label>
                              <Input
                                type="text"
                                context={context}
                                id="formMiddleName"
                                stateName="formMiddleName"
                                placeholder={context.props.locStrings.middleNamePlaceholder}
                                className="c-form-input"/>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="c-form-group">
                              <label className="c-form-label">{context.props.locStrings.formOrganization}</label>
                              <Select
                                styles={{
                                  control: (base, state) => {
                                    return ({
                                      ...base,
                                      // none of react-selects styles are passed to <View />
                                      boxShadow: "none",
                                      borderColor: state.isFocused ? "#24b47e !important" : base.borderColor
                                    })
                                  }
                                }}
                                value={context.state.formOrganization}
                                onChange={value => context.setState({ formOrganization: value })}
                                placeholder={context.props.locStrings.selectPlaceholder}
                                options={context.organizationOptions}/>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="c-form-group">
                              <label className="c-form-label">{context.props.locStrings.formOrganizationAddress}</label>
                              <Input
                                type="text"
                                context={context}
                                id="formOrganizationAddress"
                                stateName="formOrganizationAddress"
                                placeholder={context.props.locStrings.addressPlaceholder}
                                className="c-form-input"/>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="c-form-group">
                              <label className="c-form-label">{context.props.locStrings.formOrganizationFunctions}</label>
                              <Textarea
                                rows={2}
                                context={context}
                                id="formOrganizationFunctions"
                                stateName="formOrganizationFunctions"
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="c-form-group">
                              <label className="c-form-label">{context.props.locStrings.formOrganizationPortfolio} (*.pdf)</label>
                              <FileUploadContainer
                                main
                                context={ context }
                                stateName='organizationPortfolio'
                                ext="pdf"
                                buttonName={context.props.locStrings.chooseFile}
                              />
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="c-form-group">
                              <label className="c-form-label">{context.props.locStrings.formPhone}</label>
                              <Input
                                type="text"
                                data-mask="+7(999) 999-99-99"
                                context={context}
                                id="formPhone"
                                stateName="formPhone"
                                placeholder={context.props.locStrings.phonePlaceholder}
                                className="c-form-input"/>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="c-form-group">
                              <label className="c-form-label">{context.props.locStrings.formWeb}</label>
                              <Input
                                type="text"
                                context={context}
                                id="formWeb"
                                stateName="formWeb"
                                placeholder={context.props.locStrings.webPlaceholder}
                                className="c-form-input"/>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="c-form-group">
                              <label className="c-form-label">{context.props.locStrings.formAddProject} (*.pdf)</label>
                              <FileUploadContainer
                                main
                                context={ context }
                                stateName='project'
                                ext="pdf"
                                buttonName={context.props.locStrings.chooseFile}
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="c-form-group">
                              <label className="c-form-label">{context.props.locStrings.formAdditionalInfo}</label>
                              <FileUploadContainer
                                multi
                                context={ context }
                                stateName='photos'
                                buttonName={context.props.locStrings.chooseFiles}
                              />
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="c-form-group">
                              <label className="c-form-label">{context.props.locStrings.formYoutubeLink}</label>
                              <Input
                                type="text"
                                context={context}
                                id="formYoutubeLink"
                                stateName="formYoutubeLink"
                                placeholder={context.props.locStrings.youtubePlaceholder}
                                className="c-form-input"/>
                            </div>
                          </div>
                        </div>
                        <hr/>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="c-form-group" style={{textAlign: 'right', margin: 0}}>
                              <button
                                type="submit"
                                className="c-button-1 -color-green-default -hover-green-outline -size-small">
                                {context.props.locStrings.send}
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      :
                      <form
                        onSubmit={(e) => context.verifySMS(e)}
                        className="c-form">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="c-form-group">
                              <label className="c-form-label">Введите СМС код полученный при регистрации</label>
                              <Input
                                type="number"
                                context={context}
                                id="smsCode"
                                stateName="smsCode"
                                placeholder="****"
                                className="c-form-input"/>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="c-form-group" style={{textAlign: 'right', margin: 0}}>
                              <button
                                type="submit"
                                className="c-button-1 -color-green-default -hover-green-outline -size-small">
                                Подтвердить код
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Form end */}
      </div>
    </div>
  );
}

export default form;
