import React from 'react';

import Input from '/client/components/func/Input'

const addNominationModal = ({context, ...rest}) => {
  const {
    addNominationNameRu,
    addNominationNameKz,
    addNominationNameEn,
    addNominationSource,
    addNominationSuffix
  } = context.state

  const allFieldsAreFilledOut = addNominationNameRu && addNominationSource && addNominationSuffix && addNominationNameKz && addNominationNameEn

  return (
    <div
      {...rest}
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="addNominationModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={(e) => {
              e.preventDefault()

              if(allFieldsAreFilledOut){
                context.closeAddNominationModal.click()
                context.onAddNomination()
              } else {
                toastr.warning(context.props.locStrings.fillInAllTheFields)
              }
            }}>
              <div className="modal-header">
                  <h5 className="modal-title" id="addNominationModalLabel">{context.props.locStrings.adminAddNomination}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div className="modal-body mx-3">
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="addNominationNameRu"
                    stateName="addNominationNameRu"
                    className="form-control form-control-sm"/>
                  <label htmlFor="addNominationNameRu">{context.props.locStrings.adminNominationName} (рус) *</label>
                </div>
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="addNominationNameKz"
                    stateName="addNominationNameKz"
                    className="form-control form-control-sm"/>
                  <label htmlFor="addNominationNameKz">{context.props.locStrings.adminNominationName} (қаз) *</label>
                </div>
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="addNominationNameEn"
                    stateName="addNominationNameEn"
                    className="form-control form-control-sm"/>
                  <label htmlFor="addNominationNameEn">{context.props.locStrings.adminNominationName} (eng) *</label>
                </div>
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="addNominationShortDescriptionRu"
                    stateName="addNominationShortDescriptionRu"
                    className="form-control form-control-sm"/>
                  <label htmlFor="addNominationShortDescriptionRu">{context.props.locStrings.adminNominationShortDescription} (рус)</label>
                </div>
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="addNominationShortDescriptionKz"
                    stateName="addNominationShortDescriptionKz"
                    className="form-control form-control-sm"/>
                  <label htmlFor="addNominationShortDescriptionKz">{context.props.locStrings.adminNominationShortDescription} (қаз)</label>
                </div>
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="addNominationShortDescriptionEn"
                    stateName="addNominationShortDescriptionEn"
                    className="form-control form-control-sm"/>
                  <label htmlFor="addNominationShortDescriptionEn">{context.props.locStrings.adminNominationShortDescription} (eng)</label>
                </div>
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="addNominationSource"
                    stateName="addNominationSource"
                    className="form-control form-control-sm"/>
                  <label htmlFor="addNominationSource">{context.props.locStrings.adminNominationSource} *</label>
                </div>
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="addNominationSuffix"
                    stateName="addNominationSuffix"
                    className="form-control form-control-sm"/>
                  <label htmlFor="addNominationSuffix">SUFFIX *</label>
                </div>
              </div>
              <div className="modal-footer">
                  <button
                    type="button"
                    className="btn-md btn btn-blue-grey"
                    ref={ closeButton => context.closeAddNominationModal = closeButton }
                    data-dismiss="modal">{context.props.locStrings.close}</button>
                  <button
                    type="submit"
                    className="btn-md btn btn-deep-orange">{context.props.locStrings.save}</button>
              </div>
            </form>
          </div>
      </div>
  </div>
  );
}

export default addNominationModal;
