import React from 'react';

const adminDispatches = ({context}) => {
  renderDispatchesTable = () => (
    context.props.dispatches.map((dispatch, index)=> (
      <tr key={dispatch._id}>
        <th scope="row">{index+1}</th>
        <td>{dispatch.email}</td>
      </tr>
    ))
  )

  return (
    <main className="pt-5 mx-lg-5">
      <div className="container-fluid mt-5">
        <div className="card">
          <div className="card-header"><h3><strong>Email адреса для рассылок</strong></h3></div>
          <div className="card-body">
            {/*Table*/}
            <table className="table table-hover table-responsive-md table-fixed">
              {/*Table head*/}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email</th>
                </tr>
              </thead>
              {/*Table head*/}
              {/*Table body*/}
              <tbody>
                {renderDispatchesTable()}
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

export default adminDispatches;
