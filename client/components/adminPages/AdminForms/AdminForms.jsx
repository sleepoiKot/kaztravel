import React from 'react';
import { Link } from 'react-router-dom'

const adminForms = ({context}) => {
  renderForms = () => (
    context.props.forms.map((form, index) => (
      <tr key={form._id}>
        <td>{form.nomination.label}</td>
        <td>{form.organizationName}</td>
        <td>{form.email}</td>
        <td className="actions text-center">
          <Link
            className="on-default"
            title={context.props.locStrings.titleWatchForm}
            to={`/nominations/${form._id}`}
          >
            <i className="fas fa-eye" />
          </Link>
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
              <h3><strong>{context.props.locStrings.adminForms}</strong></h3>
            </div>
          </div>
          <div className="card-body">
            {/*Table*/}
            <table className="table table-hover table-responsive-md table-fixed">
              {/*Table head*/}
              <thead>
                <tr>
                  <th>{context.props.locStrings.adminFormTableNomination}</th>
                  <th>{context.props.locStrings.adminFormTableOrganizationName}</th>
                  <th>{context.props.locStrings.adminFormTableEmail}</th>
                  <th className="text-center">{context.props.locStrings.adminTableActions}</th>
                </tr>
              </thead>
              {/*Table head*/}
              {/*Table body*/}
              <tbody>
                {renderForms()}
              </tbody>
              {/*Table body*/}
            </table>
            {/*Table*/}
          </div>
        </div>
      </div>
    </main>
  );
}

export default adminForms;
