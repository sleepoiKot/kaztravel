import React from 'react';

const adminUsers = ({context}) => {
  renderUsersTable = () => ( context.props.users.map((user, index)=> (
      <tr key={user._id}>
        <th scope="row">{index+1}</th>
        <td>{user.profile.name}</td>
        <td>{user.emails[0].address}</td>
        <td>{user.profile.dispatch ? 'Да' : 'Нет'}</td>
        <td>№ 102-20111А</td>
        <td>Доставлено</td>
      </tr>
    ))
  )

  return (
    <main className="pt-5 mx-lg-5">
      <div className="container-fluid mt-5">
        <div className="card">
          <div className="card-header"><h3><strong>Зарегистрированные пользователи Books4Kids</strong></h3></div>
          <div className="card-body">
            {/*Table*/}
            <table className="table table-hover table-responsive-md table-fixed">
              {/*Table head*/}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Имя</th>
                  <th>Email</th>
                  <th>Рассылка</th>
                  <th>Текущий заказ</th>
                  <th>Статус</th>
                </tr>
              </thead>
              {/*Table head*/}
              {/*Table body*/}
              <tbody>
                {renderUsersTable()}
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

export default adminUsers;
