import React from 'react';

import Input from '/client/components/func/Input'

const editNominationModal = ({context, ...rest}) => {
  const {
    editNominationNameRu,
    editNominationNameKz,
    editNominationNameEn,
    editNominationSource
  } = context.state

  const allFieldsAreFilledOut = editNominationNameRu && editNominationSource && editNominationNameKz && editNominationNameEn

  return (
    <div
      {...rest}
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="editNominationModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={(e) => {
              e.preventDefault()

              if(allFieldsAreFilledOut){
                context.closeEditNominationModal.click()
                context.onEditNomination()
              } else {
                toastr.warning(context.props.locStrings.fillInAllTheFields)
              }
            }}>
              <div className="modal-header">
                  <h5 className="modal-title" id="editNominationModalLabel">{context.props.locStrings.adminEditNomination}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div className="modal-body mx-3">
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="editNominationNameRu"
                    stateName="editNominationNameRu"
                    className="form-control form-control-sm"/>
                  <label className={context.state.editNominationNameRu ? "active" : null} htmlFor="editNominationNameRu">{context.props.locStrings.adminNominationName} (рус) *</label>
                </div>
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="editNominationNameKz"
                    stateName="editNominationNameKz"
                    className="form-control form-control-sm"/>
                  <label className={context.state.editNominationNameKz ? "active" : null} htmlFor="editNominationNameKz">{context.props.locStrings.adminNominationName} (қаз) *</label>
                </div>
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="editNominationNameEn"
                    stateName="editNominationNameEn"
                    className="form-control form-control-sm"/>
                  <label className={context.state.editNominationNameEn ? "active" : null} htmlFor="editNominationNameEn">{context.props.locStrings.adminNominationName} (eng) *</label>
                </div>
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="editNominationShortDescriptionRu"
                    stateName="editNominationShortDescriptionRu"
                    className="form-control form-control-sm"/>
                  <label className={context.state.editNominationShortDescriptionRu ? "active" : null} htmlFor="editNominationShortDescriptionRu">{context.props.locStrings.adminNominationShortDescription} (рус)</label>
                </div>
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="editNominationShortDescriptionKz"
                    stateName="editNominationShortDescriptionKz"
                    className="form-control form-control-sm"/>
                  <label className={context.state.editNominationShortDescriptionKz ? "active" : null} htmlFor="editNominationShortDescriptionKz">{context.props.locStrings.adminNominationShortDescription} (қаз)</label>
                </div>
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="editNominationShortDescriptionEn"
                    stateName="editNominationShortDescriptionEn"
                    className="form-control form-control-sm"/>
                  <label className={context.state.editNominationShortDescriptionEn ? "active" : null} htmlFor="editNominationShortDescriptionEn">{context.props.locStrings.adminNominationShortDescription} (eng)</label>
                </div>
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="editNominationSource"
                    stateName="editNominationSource"
                    className="form-control form-control-sm"/>
                  <label className={context.state.editNominationSource ? "active" : null} htmlFor="editNominationSource">{context.props.locStrings.adminNominationSource} *</label>
                </div>
              </div>
              <div className="modal-footer">
                  <button
                    type="button"
                    className="btn-md btn btn-outline-primary waves-effect"
                    ref={ closeButton => context.closeEditNominationModal = closeButton }
                    data-dismiss="modal">{context.props.locStrings.close}</button>
                  <button
                    type="submit"
                    className="btn-md btn btn-primary">{context.props.locStrings.save}</button>
              </div>
            </form>
          </div>
      </div>
  </div>
  );
}

export default editNominationModal;
