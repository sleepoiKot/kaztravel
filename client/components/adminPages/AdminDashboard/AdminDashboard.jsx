import React from 'react';

const adminDashboard = (props) => (
  <main className="pt-5 mx-lg-5">
    <div className="container-fluid mt-5">
      <h1>Анкеты</h1>
    </div>
    {
      // (
      //   <div className="container-fluid mt-5">
      //     {/* Heading */}
      //     <div className="card mb-4 wow fadeIn">
      //       {/*Card content*/}
      //       <div className="card-body d-sm-flex justify-content-between">
      //         <h4 className="mb-2 mb-sm-0 pt-1">
      //           <a href="https://mdbootstrap.com/material-design-for-bootstrap/" target="_blank">Home Page</a>
      //           <span>/</span>
      //           <span>Dashboard</span>
      //         </h4>
      //         <form className="d-flex justify-content-center">
      //           {/* Default input */}
      //           <input type="search" placeholder="Type your query" aria-label="Search" className="form-control" />
      //           <button className="btn btn-primary btn-sm my-0 p" type="submit">
      //             <i className="fa fa-search" />
      //           </button>
      //         </form>
      //       </div>
      //     </div>
      //     {/* Heading */}
      //     {/*Grid row*/}
      //     <div className="row wow fadeIn">
      //       {/*Grid column*/}
      //       <div className="col-md-9 mb-4">
      //         {/*Card*/}
      //         <div className="card">
      //           {/*Card content*/}
      //           <div className="card-body">
      //             <canvas id="myChart" />
      //           </div>
      //         </div>
      //         {/*/.Card*/}
      //       </div>
      //       {/*Grid column*/}
      //       {/*Grid column*/}
      //       <div className="col-md-3 mb-4">
      //         {/*Card*/}
      //         <div className="card mb-4">
      //           {/* Card header */}
      //           <div className="card-header text-center">
      //             Pie chart
      //           </div>
      //           {/*Card content*/}
      //           <div className="card-body">
      //             <canvas id="pieChart" />
      //           </div>
      //         </div>
      //         {/*/.Card*/}
      //         {/*Card*/}
      //         <div className="card mb-4">
      //           {/*Card content*/}
      //           <div className="card-body">
      //             {/* List group links */}
      //             <div className="list-group list-group-flush">
      //               <a className="list-group-item list-group-item-action waves-effect">Sales
      //                 <span className="badge badge-success badge-pill pull-right">22%
      //                   <i className="fa fa-arrow-up ml-1" />
      //                 </span>
      //               </a>
      //               <a className="list-group-item list-group-item-action waves-effect">Traffic
      //                 <span className="badge badge-danger badge-pill pull-right">5%
      //                   <i className="fa fa-arrow-down ml-1" />
      //                 </span>
      //               </a>
      //               <a className="list-group-item list-group-item-action waves-effect">Orders
      //                 <span className="badge badge-primary badge-pill pull-right">14</span>
      //               </a>
      //               <a className="list-group-item list-group-item-action waves-effect">Issues
      //                 <span className="badge badge-primary badge-pill pull-right">123</span>
      //               </a>
      //               <a className="list-group-item list-group-item-action waves-effect">Messages
      //                 <span className="badge badge-primary badge-pill pull-right">8</span>
      //               </a>
      //             </div>
      //             {/* List group links */}
      //           </div>
      //         </div>
      //         {/*/.Card*/}
      //       </div>
      //       {/*Grid column*/}
      //     </div>
      //     {/*Grid row*/}
      //     {/*Grid row*/}
      //     <div className="row wow fadeIn">
      //       {/*Grid column*/}
      //       <div className="col-md-6 mb-4">
      //         {/*Card*/}
      //         <div className="card">
      //           {/*Card content*/}
      //           <div className="card-body">
      //             {/* Table  */}
      //             <table className="table table-hover">
      //               {/* Table head */}
      //               <thead className="blue-grey lighten-4">
      //                 <tr>
      //                   <th>#</th>
      //                   <th>Lorem</th>
      //                   <th>Ipsum</th>
      //                   <th>Dolor</th>
      //                 </tr>
      //               </thead>
      //               {/* Table head */}
      //               {/* Table body */}
      //               <tbody>
      //                 <tr>
      //                   <th scope="row">1</th>
      //                   <td>Cell 1</td>
      //                   <td>Cell 2</td>
      //                   <td>Cell 3</td>
      //                 </tr>
      //                 <tr>
      //                   <th scope="row">2</th>
      //                   <td>Cell 4</td>
      //                   <td>Cell 5</td>
      //                   <td>Cell 6</td>
      //                 </tr>
      //                 <tr>
      //                   <th scope="row">3</th>
      //                   <td>Cell 7</td>
      //                   <td>Cell 8</td>
      //                   <td>Cell 9</td>
      //                 </tr>
      //               </tbody>
      //               {/* Table body */}
      //             </table>
      //             {/* Table  */}
      //           </div>
      //         </div>
      //         {/*/.Card*/}
      //       </div>
      //       {/*Grid column*/}
      //       {/*Grid column*/}
      //       <div className="col-md-6 mb-4">
      //         {/*Card*/}
      //         <div className="card">
      //           {/*Card content*/}
      //           <div className="card-body">
      //             {/* Table  */}
      //             <table className="table table-hover">
      //               {/* Table head */}
      //               <thead className="blue lighten-4">
      //                 <tr>
      //                   <th>#</th>
      //                   <th>Lorem</th>
      //                   <th>Ipsum</th>
      //                   <th>Dolor</th>
      //                 </tr>
      //               </thead>
      //               {/* Table head */}
      //               {/* Table body */}
      //               <tbody>
      //                 <tr>
      //                   <th scope="row">1</th>
      //                   <td>Cell 1</td>
      //                   <td>Cell 2</td>
      //                   <td>Cell 3</td>
      //                 </tr>
      //                 <tr>
      //                   <th scope="row">2</th>
      //                   <td>Cell 4</td>
      //                   <td>Cell 5</td>
      //                   <td>Cell 6</td>
      //                 </tr>
      //                 <tr>
      //                   <th scope="row">3</th>
      //                   <td>Cell 7</td>
      //                   <td>Cell 8</td>
      //                   <td>Cell 9</td>
      //                 </tr>
      //               </tbody>
      //               {/* Table body */}
      //             </table>
      //             {/* Table  */}
      //           </div>
      //         </div>
      //         {/*/.Card*/}
      //       </div>
      //       {/*Grid column*/}
      //     </div>
      //     {/*Grid row*/}
      //     {/*Grid row*/}
      //     <div className="row wow fadeIn">
      //       {/*Grid column*/}
      //       <div className="col-lg-4 col-md-12 mb-4">
      //         {/*Card*/}
      //         <div className="card">
      //           {/* Card header */}
      //           <div className="card-header">Line chart</div>
      //           {/*Card content*/}
      //           <div className="card-body">
      //             <canvas id="lineChart" />
      //           </div>
      //         </div>
      //         {/*/.Card*/}
      //       </div>
      //       {/*Grid column*/}
      //       {/*Grid column*/}
      //       <div className="col-lg-4 col-md-6 mb-4">
      //         {/*Card*/}
      //         <div className="card">
      //           {/* Card header */}
      //           <div className="card-header">Radar Chart</div>
      //           {/*Card content*/}
      //           <div className="card-body">
      //             <canvas id="radarChart" />
      //           </div>
      //         </div>
      //         {/*/.Card*/}
      //       </div>
      //       {/*Grid column*/}
      //       {/*Grid column*/}
      //       <div className="col-lg-4 col-md-6 mb-4">
      //         {/*Card*/}
      //         <div className="card">
      //           {/* Card header */}
      //           <div className="card-header">Doughnut Chart</div>
      //           {/*Card content*/}
      //           <div className="card-body">
      //             <canvas id="doughnutChart" />
      //           </div>
      //         </div>
      //         {/*/.Card*/}
      //       </div>
      //       {/*Grid column*/}
      //     </div>
      //     {/*Grid row*/}
      //     {/*Grid row*/}
      //     <div className="row wow fadeIn">
      //       {/*Grid column*/}
      //       <div className="col-md-6 mb-4">
      //         {/*Card*/}
      //         <div className="card">
      //           {/* Card header */}
      //           <div className="card-header">Google map</div>
      //           {/*Card content*/}
      //           <div className="card-body">
      //             {/*Google map*/}
      //             <div id="map-container" className="z-depth-1" style={{height: 500}} />
      //           </div>
      //         </div>
      //         {/*/.Card*/}
      //       </div>
      //       {/*Grid column*/}
      //       {/*Grid column*/}
      //       <div className="col-md-6 mb-4">
      //         {/*Card*/}
      //         <div className="card">
      //           {/*Section: Modals*/}
      //           <section>
      //             {/* Frame Modal Top Info*/}
      //             <div className="modal fade top" id="frameModalTopInfoDemo" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="false">
      //               <div className="modal-dialog modal-frame modal-top modal-notify modal-info" role="document">
      //                 {/*Content*/}
      //                 <div className="modal-content">
      //                   {/*Body*/}
      //                   <div className="modal-body">
      //                     <div className="row d-flex justify-content-center align-items-center">
      //                       <p className="pt-3 pr-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo
      //                         provident fugiat reprehenderit nostrum quos..</p>
      //                       <a role="button" className="btn btn-info">Get it now
      //                         <i className="fa fa-diamond ml-1" />
      //                       </a>
      //                       <a role="button" className="btn btn-outline-info waves-effect" data-dismiss="modal">No, thanks</a>
      //                     </div>
      //                   </div>
      //                 </div>
      //                 {/*/.Content*/}
      //               </div>
      //             </div>
      //             {/* Frame Modal Bottom Success*/}
      //             {/* Frame Modal Bottom Success*/}
      //             <div className="modal fade bottom" id="frameModalBottomSuccessDemo" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="false">
      //               <div className="modal-dialog modal-frame modal-bottom modal-notify modal-success" role="document">
      //                 {/*Content*/}
      //                 <div className="modal-content">
      //                   {/*Body*/}
      //                   <div className="modal-body">
      //                     <div className="row d-flex justify-content-center align-items-center">
      //                       <p className="pt-3 pr-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo
      //                         provident fugiat reprehenderit nostrum quos..</p>
      //                       <a role="button" className="btn btn-success">Get it now
      //                         <i className="fa fa-diamond ml-1" />
      //                       </a>
      //                       <a role="button" className="btn btn-outline-success waves-effect" data-dismiss="modal">No, thanks</a>
      //                     </div>
      //                   </div>
      //                 </div>
      //                 {/*/.Content*/}
      //               </div>
      //             </div>
      //             {/* Frame Modal Bottom Success*/}
      //             {/* Side Modal Top Right Success*/}
      //             <div className="modal fade right" id="sideModalTRSuccessDemo" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="false">
      //               <div className="modal-dialog modal-side modal-top-right modal-notify modal-success" role="document">
      //                 {/*Content*/}
      //                 <div className="modal-content">
      //                   {/*Header*/}
      //                   <div className="modal-header">
      //                     <p className="heading lead">Modal Success</p>
      //                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      //                       <span aria-hidden="true" className="white-text">×</span>
      //                     </button>
      //                   </div>
      //                   {/*Body*/}
      //                   <div className="modal-body">
      //                     <div className="text-center">
      //                       <i className="fa fa-check fa-4x mb-3 animated rotateIn" />
      //                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto nulla
      //                         aperiam blanditiis ad consequatur in dolores culpa, dignissimos, eius
      //                         non possimus fugiat. Esse ratione fuga, enim, ab officiis totam.
      //                       </p>
      //                     </div>
      //                   </div>
      //                   {/*Footer*/}
      //                   <div className="modal-footer justify-content-center">
      //                     <a role="button" className="btn btn-success">Get it now
      //                       <i className="fa fa-diamond ml-1" />
      //                     </a>
      //                     <a role="button" className="btn btn-outline-success waves-effect" data-dismiss="modal">No, thanks</a>
      //                   </div>
      //                 </div>
      //                 {/*/.Content*/}
      //               </div>
      //             </div>
      //             {/* Side Modal Top Right Success*/}
      //             {/* Side Modal Top Left Info*/}
      //             <div className="modal fade left" id="sideModalTLInfoDemo" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="false">
      //               <div className="modal-dialog modal-side modal-top-left modal-notify modal-info" role="document">
      //                 {/*Content*/}
      //                 <div className="modal-content">
      //                   {/*Header*/}
      //                   <div className="modal-header">
      //                     <p className="heading lead">Modal Info</p>
      //                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      //                       <span aria-hidden="true" className="white-text">×</span>
      //                     </button>
      //                   </div>
      //                   {/*Body*/}
      //                   <div className="modal-body">
      //                     <img src="https://mdbootstrap.com/wp-content/uploads/2016/11/admin-dashboard-bootstrap.jpg" alt="Material Design for Bootstrap - dashboard" className="img-fluid" />
      //                     <div className="text-center">
      //                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt vero illo
      //                         error eveniet cum.
      //                       </p>
      //                     </div>
      //                   </div>
      //                   {/*Footer*/}
      //                   <div className="modal-footer justify-content-center">
      //                     <a role="button" className="btn btn-info">Get it now
      //                       <i className="fa fa-diamond ml-1" />
      //                     </a>
      //                     <a role="button" className="btn btn-outline-info waves-effect" data-dismiss="modal">No, thanks</a>
      //                   </div>
      //                 </div>
      //                 {/*/.Content*/}
      //               </div>
      //             </div>
      //             {/* Side Modal Top Left Info*/}
      //             {/* Side Modal Bottom Right Danger*/}
      //             <div className="modal fade right" id="sideModalBRDangerDemo" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="false">
      //               <div className="modal-dialog modal-side modal-bottom-right modal-notify modal-danger" role="document">
      //                 {/*Content*/}
      //                 <div className="modal-content">
      //                   {/*Header*/}
      //                   <div className="modal-header">
      //                     <p className="heading">Modal Danger</p>
      //                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      //                       <span aria-hidden="true" className="white-text">×</span>
      //                     </button>
      //                   </div>
      //                   {/*Body*/}
      //                   <div className="modal-body">
      //                     <div className="row">
      //                       <div className="col-3">
      //                         <p />
      //                         <p className="text-center">
      //                           <i className="fa fa-shopping-cart fa-4x" />
      //                         </p>
      //                       </div>
      //                       <div className="col-9">
      //                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, molestiae
      //                           provident temporibus sunt earum.</p>
      //                         <h2>
      //                           <span className="badge">v52gs1</span>
      //                         </h2>
      //                       </div>
      //                     </div>
      //                   </div>
      //                   {/*Footer*/}
      //                   <div className="modal-footer justify-content-center">
      //                     <a role="button" className="btn btn-danger">Get it now
      //                       <i className="fa fa-diamond ml-1" />
      //                     </a>
      //                     <a role="button" className="btn btn-outline-danger waves-effect" data-dismiss="modal">No, thanks</a>
      //                   </div>
      //                 </div>
      //                 {/*/.Content*/}
      //               </div>
      //             </div>
      //             {/* Side Modal Bottom Right Danger*/}
      //             {/* Side Modal Bottom Left Warning*/}
      //             <div className="modal fade left" id="sideModalBLWarningDemo" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="false">
      //               <div className="modal-dialog modal-side modal-bottom-left modal-notify modal-warning" role="document">
      //                 {/*Content*/}
      //                 <div className="modal-content">
      //                   {/*Header*/}
      //                   <div className="modal-header">
      //                     <p className="heading">Modal Warning</p>
      //                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      //                       <span aria-hidden="true" className="white-text">×</span>
      //                     </button>
      //                   </div>
      //                   {/*Body*/}
      //                   <div className="modal-body">
      //                     <div className="row">
      //                       <div className="col-3 text-center">
      //                         <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" alt="Michal Szymanski - founder of Material Design for Bootstrap" className="img-fluid z-depth-1-half rounded-circle" />
      //                         <div style={{height: 10}} />
      //                         <p className="title mb-0">Jane</p>
      //                         <p className="text-muted " style={{fontSize: 13}}>Consultant</p>
      //                       </div>
      //                       <div className="col-9">
      //                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, molestiae
      //                           provident temporibus sunt earum.</p>
      //                         <p className="card-text">
      //                           <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong>
      //                         </p>
      //                       </div>
      //                     </div>
      //                   </div>
      //                   {/*Footer*/}
      //                   <div className="modal-footer justify-content-center">
      //                     <a role="button" className="btn btn-warning">Get it now
      //                       <i className="fa fa-diamond ml-1" />
      //                     </a>
      //                     <a role="button" className="btn btn-outline-warning waves-effect" data-dismiss="modal">No, thanks</a>
      //                   </div>
      //                 </div>
      //                 {/*/.Content*/}
      //               </div>
      //             </div>
      //             {/* Side Modal Bottom Left Warning*/}
      //             {/*Modal Form Login with Avatar Demo*/}
      //             <div className="modal fade" id="modalLoginAvatarDemo" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      //               <div className="modal-dialog cascading-modal modal-avatar modal-sm" role="document">
      //                 {/*Content*/}
      //                 <div className="modal-content">
      //                   {/*Header*/}
      //                   <div className="modal-header">
      //                     <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg" className="rounded-circle img-responsive" alt="Avatar photo" />
      //                   </div>
      //                   {/*Body*/}
      //                   <div className="modal-body text-center mb-1">
      //                     <h5 className="mt-1 mb-2">Maria Doe</h5>
      //                     <div className="md-form ml-0 mr-0">
      //                       <input type="password" id="form1" className="form-control ml-0" />
      //                       <label htmlFor="form1" className="ml-0">Enter password</label>
      //                     </div>
      //                     <div className="text-center mt-4">
      //                       <button className="btn btn-cyan">Login
      //                         <i className="fa fa-sign-in ml-1" />
      //                       </button>
      //                     </div>
      //                   </div>
      //                 </div>
      //                 {/*/.Content*/}
      //               </div>
      //             </div>
      //             {/*Modal Form Login with Avatar Demo*/}
      //             {/*Modal: Login / Register Form Demo*/}
      //             <div className="modal fade" id="modalLRFormDemo" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      //               <div className="modal-dialog" role="document">
      //                 <div className="modal-content">
      //                   <div className="modal-header">
      //                     <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
      //                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      //                       <span aria-hidden="true">×</span>
      //                     </button>
      //                   </div>
      //                   <div className="modal-body">
      //                     ...
      //                   </div>
      //                   <div className="modal-footer">
      //                     <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      //                     <button type="button" className="btn btn-primary">Save changes</button>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //             {/*Modal: Login / Register Form Demo*/}
      //             {/* Central Modal Large Info*/}
      //             <div className="modal fade" id="centralModalLGInfoDemo" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      //               <div className="modal-dialog modal-lg modal-notify modal-info" role="document">
      //                 {/*Content*/}
      //                 <div className="modal-content">
      //                   {/*Header*/}
      //                   <div className="modal-header">
      //                     <p className="heading lead">Modal Info</p>
      //                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      //                       <span aria-hidden="true" className="white-text">×</span>
      //                     </button>
      //                   </div>
      //                   {/*Body*/}
      //                   <div className="modal-body">
      //                     <div className="text-center">
      //                       <i className="fa fa-check fa-4x mb-3 animated rotateIn" />
      //                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto nulla
      //                         aperiam blanditiis ad consequatur in dolores culpa, dignissimos, eius
      //                         non possimus fugiat. Esse ratione fuga, enim, ab officiis totam.
      //                       </p>
      //                     </div>
      //                     <img src="https://mdbootstrap.com/wp-content/uploads/2016/11/admin-dashboard-bootstrap.jpg" alt="Material Design for Bootstrap - dashboard" className="img-fluid" />
      //                   </div>
      //                   {/*Footer*/}
      //                   <div className="modal-footer">
      //                     <a role="button" className="btn btn-info">Get it now
      //                       <i className="fa fa-diamond ml-1" />
      //                     </a>
      //                     <a role="button" className="btn btn-outline-info waves-effect" data-dismiss="modal">No, thanks</a>
      //                   </div>
      //                 </div>
      //                 {/*/.Content*/}
      //               </div>
      //             </div>
      //             {/* Central Modal Large Info*/}
      //             {/* Central Modal Fluid Success*/}
      //             <div className="modal fade" id="centralModalFluidSuccessDemo" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      //               <div className="modal-dialog modal-fluid modal-notify modal-success" role="document">
      //                 {/*Content*/}
      //                 <div className="modal-content">
      //                   {/*Header*/}
      //                   <div className="modal-header">
      //                     <p className="heading lead">Modal Success</p>
      //                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      //                       <span aria-hidden="true" className="white-text">×</span>
      //                     </button>
      //                   </div>
      //                   {/*Body*/}
      //                   <div className="modal-body">
      //                     <div className="text-center">
      //                       <i className="fa fa-check fa-4x mb-3 animated rotateIn" />
      //                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto nulla
      //                         aperiam blanditiis ad consequatur in dolores culpa, dignissimos, eius
      //                         non possimus fugiat. Esse ratione fuga, enim, ab officiis totam.
      //                       </p>
      //                     </div>
      //                     <ul className="list-group z-depth-0">
      //                       <li className="list-group-item justify-content-between">
      //                         Cras justo odio
      //                         <span className="badge badge-primary badge-pill">14</span>
      //                       </li>
      //                       <li className="list-group-item justify-content-between">
      //                         Dapibus ac facilisis in
      //                         <span className="badge badge-primary badge-pill">2</span>
      //                       </li>
      //                       <li className="list-group-item justify-content-between">
      //                         Morbi leo risus
      //                         <span className="badge badge-primary badge-pill">1</span>
      //                       </li>
      //                       <li className="list-group-item justify-content-between">
      //                         Cras justo odio
      //                         <span className="badge badge-primary badge-pill">14</span>
      //                       </li>
      //                       <li className="list-group-item justify-content-between">
      //                         Dapibus ac facilisis in
      //                         <span className="badge badge-primary badge-pill">2</span>
      //                       </li>
      //                       <li className="list-group-item justify-content-between">
      //                         Morbi leo risus
      //                         <span className="badge badge-primary badge-pill">1</span>
      //                       </li>
      //                     </ul>
      //                   </div>
      //                   {/*Footer*/}
      //                   <div className="modal-footer">
      //                     <a role="button" className="btn btn-success">Get it now
      //                       <i className="fa fa-diamond ml-1" />
      //                     </a>
      //                     <a role="button" className="btn btn-outline-success waves-effect" data-dismiss="modal">No, thanks</a>
      //                   </div>
      //                 </div>
      //                 {/*/.Content*/}
      //               </div>
      //             </div>
      //             {/* Central Modal Fluid Success*/}
      //             {/* Full Height Modal Right Success Demo*/}
      //             <div className="modal fade right" id="fluidModalRightSuccessDemo" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="false">
      //               <div className="modal-dialog modal-full-height modal-right modal-notify modal-success" role="document">
      //                 {/*Content*/}
      //                 <div className="modal-content">
      //                   {/*Header*/}
      //                   <div className="modal-header">
      //                     <p className="heading lead">Modal Success</p>
      //                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      //                       <span aria-hidden="true" className="white-text">×</span>
      //                     </button>
      //                   </div>
      //                   {/*Body*/}
      //                   <div className="modal-body">
      //                     <div className="text-center">
      //                       <i className="fa fa-check fa-4x mb-3 animated rotateIn" />
      //                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto nulla
      //                         aperiam blanditiis ad consequatur in dolores culpa, dignissimos, eius
      //                         non possimus fugiat. Esse ratione fuga, enim, ab officiis totam.
      //                       </p>
      //                     </div>
      //                     <ul className="list-group z-depth-0">
      //                       <li className="list-group-item justify-content-between">
      //                         Cras justo odio
      //                         <span className="badge badge-primary badge-pill">14</span>
      //                       </li>
      //                       <li className="list-group-item justify-content-between">
      //                         Dapibus ac facilisis in
      //                         <span className="badge badge-primary badge-pill">2</span>
      //                       </li>
      //                       <li className="list-group-item justify-content-between">
      //                         Morbi leo risus
      //                         <span className="badge badge-primary badge-pill">1</span>
      //                       </li>
      //                       <li className="list-group-item justify-content-between">
      //                         Cras justo odio
      //                         <span className="badge badge-primary badge-pill">14</span>
      //                       </li>
      //                       <li className="list-group-item justify-content-between">
      //                         Dapibus ac facilisis in
      //                         <span className="badge badge-primary badge-pill">2</span>
      //                       </li>
      //                       <li className="list-group-item justify-content-between">
      //                         Morbi leo risus
      //                         <span className="badge badge-primary badge-pill">1</span>
      //                       </li>
      //                     </ul>
      //                   </div>
      //                   {/*Footer*/}
      //                   <div className="modal-footer justify-content-center">
      //                     <a role="button" className="btn btn-success">Get it now
      //                       <i className="fa fa-diamond ml-1" />
      //                     </a>
      //                     <a role="button" className="btn btn-outline-success waves-effect" data-dismiss="modal">No, thanks</a>
      //                   </div>
      //                 </div>
      //                 {/*/.Content*/}
      //               </div>
      //             </div>
      //             {/* Full Height Modal Right Success Demo*/}
      //             {/* Full Height Modal Left Info Demo*/}
      //             <div className="modal fade left" id="fluidModalLeftInfoDemo" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="false">
      //               <div className="modal-dialog modal-full-height modal-left modal-notify modal-info" role="document">
      //                 {/*Content*/}
      //                 <div className="modal-content">
      //                   {/*Header*/}
      //                   <div className="modal-header">
      //                     <p className="heading lead">Modal Success</p>
      //                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      //                       <span aria-hidden="true" className="white-text">×</span>
      //                     </button>
      //                   </div>
      //                   {/*Body*/}
      //                   <div className="modal-body">
      //                     <div className="text-center">
      //                       <i className="fa fa-check fa-4x mb-3 animated rotateIn" />
      //                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto nulla
      //                         aperiam blanditiis ad consequatur in dolores culpa, dignissimos, eius
      //                         non possimus fugiat. Esse ratione fuga, enim, ab officiis totam.
      //                       </p>
      //                     </div>
      //                     <ul className="list-group z-depth-0">
      //                       <li className="list-group-item justify-content-between">
      //                         Cras justo odio
      //                         <span className="badge badge-primary badge-pill">14</span>
      //                       </li>
      //                       <li className="list-group-item justify-content-between">
      //                         Dapibus ac facilisis in
      //                         <span className="badge badge-primary badge-pill">2</span>
      //                       </li>
      //                       <li className="list-group-item justify-content-between">
      //                         Morbi leo risus
      //                         <span className="badge badge-primary badge-pill">1</span>
      //                       </li>
      //                       <li className="list-group-item justify-content-between">
      //                         Cras justo odio
      //                         <span className="badge badge-primary badge-pill">14</span>
      //                       </li>
      //                       <li className="list-group-item justify-content-between">
      //                         Dapibus ac facilisis in
      //                         <span className="badge badge-primary badge-pill">2</span>
      //                       </li>
      //                       <li className="list-group-item justify-content-between">
      //                         Morbi leo risus
      //                         <span className="badge badge-primary badge-pill">1</span>
      //                       </li>
      //                     </ul>
      //                   </div>
      //                   {/*Footer*/}
      //                   <div className="modal-footer justify-content-center">
      //                     <a role="button" className="btn btn-info">Get it now
      //                       <i className="fa fa-diamond ml-1" />
      //                     </a>
      //                     <a role="button" className="btn btn-outline-info waves-effect" data-dismiss="modal">No, thanks</a>
      //                   </div>
      //                 </div>
      //                 {/*/.Content*/}
      //               </div>
      //             </div>
      //             {/* Full Height Modal Right Info Demo*/}
      //             {/* Full Height Modal Top Warning Demo*/}
      //             <div className="modal fade top" id="fluidModalTopWarningDemo" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="false">
      //               <div className="modal-dialog modal-full-height modal-top modal-notify modal-warning" role="document">
      //                 {/*Content*/}
      //                 <div className="modal-content">
      //                   {/*Header*/}
      //                   <div className="modal-header">
      //                     <p className="heading lead">Modal Warning</p>
      //                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      //                       <span aria-hidden="true" className="white-text">×</span>
      //                     </button>
      //                   </div>
      //                   {/*Body*/}
      //                   <div className="modal-body">
      //                     <div className="text-center">
      //                       <i className="fa fa-check fa-4x mb-3 animated rotateIn" />
      //                     </div>
      //                     <ul className="list-group z-depth-0">
      //                       <li className="list-group-item justify-content-between">
      //                         Cras justo odio
      //                         <span className="badge badge-primary badge-pill">14</span>
      //                       </li>
      //                       <li className="list-group-item justify-content-between">
      //                         Dapibus ac facilisis in
      //                         <span className="badge badge-primary badge-pill">2</span>
      //                       </li>
      //                       <li className="list-group-item justify-content-between">
      //                         Morbi leo risus
      //                         <span className="badge badge-primary badge-pill">1</span>
      //                       </li>
      //                     </ul>
      //                   </div>
      //                   {/*Footer*/}
      //                   <div className="modal-footer">
      //                     <a role="button" className="btn btn-warning">Get it now
      //                       <i className="fa fa-diamond ml-1" />
      //                     </a>
      //                     <a role="button" className="btn btn-outline-warning waves-effect" data-dismiss="modal">No, thanks</a>
      //                   </div>
      //                 </div>
      //                 {/*/.Content*/}
      //               </div>
      //             </div>
      //             {/* Full Height Modal Top Warning Demo*/}
      //             {/* Full Height Modal Bottom Danger Demo*/}
      //             <div className="modal fade bottom" id="fluidModalBottomDangerDemo" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="false">
      //               <div className="modal-dialog modal-full-height modal-bottom modal-notify modal-danger" role="document">
      //                 {/*Content*/}
      //                 <div className="modal-content">
      //                   {/*Header*/}
      //                   <div className="modal-header">
      //                     <p className="heading lead">Modal Danger</p>
      //                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      //                       <span aria-hidden="true" className="white-text">×</span>
      //                     </button>
      //                   </div>
      //                   {/*Body*/}
      //                   <div className="modal-body">
      //                     <div className="text-center">
      //                       <i className="fa fa-check fa-4x mb-3 animated rotateIn" />
      //                     </div>
      //                     <ul className="list-group z-depth-0">
      //                       <li className="list-group-item justify-content-between">
      //                         Cras justo odio
      //                         <span className="badge badge-primary badge-pill">14</span>
      //                       </li>
      //                       <li className="list-group-item justify-content-between">
      //                         Dapibus ac facilisis in
      //                         <span className="badge badge-primary badge-pill">2</span>
      //                       </li>
      //                       <li className="list-group-item justify-content-between">
      //                         Morbi leo risus
      //                         <span className="badge badge-primary badge-pill">1</span>
      //                       </li>
      //                     </ul>
      //                   </div>
      //                   {/*Footer*/}
      //                   <div className="modal-footer">
      //                     <a role="button" className="btn btn-danger">Get it now
      //                       <i className="fa fa-diamond ml-1" />
      //                     </a>
      //                     <a role="button" className="btn btn-outline-danger waves-effect" data-dismiss="modal">No, thanks</a>
      //                   </div>
      //                 </div>
      //                 {/*/.Content*/}
      //               </div>
      //             </div>
      //             {/* Full Height Modal Bottom Danger Demo*/}
      //           </section>
      //           {/*Section: Modals*/}
      //           {/* Card header */}
      //           <div className="card-header">Modals</div>
      //           {/*Card content*/}
      //           <div className="card-body">
      //             <div className="text-center mb-5">
      //               <p className="lead">Click buttons below to launch modals demo</p>
      //             </div>
      //             {/* First row*/}
      //             <div className="row">
      //               {/*First column*/}
      //               <div className="col-md-3">
      //                 <h5 className="text-center mb-3">Frame Modal</h5>
      //                 <img src="https://mdbootstrap.com/img/brandflow/modal4.jpg" alt="MDB graphics" className="img-fluid z-depth-1" />
      //                 <div className="text-center">
      //                   <h5 className="my-3">Position</h5>
      //                   <a className="btn btn-primary btn-sm" data-toggle="modal" data-target="#frameModalTopInfoDemo" data-backdrop="false">Top</a>
      //                   <br />
      //                   <a className="btn btn-primary btn-sm" data-toggle="modal" data-target="#frameModalBottomSuccessDemo" data-backdrop="false">Bottom</a>
      //                 </div>
      //               </div>
      //               {/*First column*/}
      //               {/*Second column*/}
      //               <div className="col-md-3">
      //                 <h5 className="text-center mb-3">Side Modal</h5>
      //                 <img src="https://mdbootstrap.com/img/brandflow/modal3.jpg" alt="MDB graphics" className="img-fluid z-depth-1" />
      //                 <div className="text-center">
      //                   <h5 className="my-3">Position</h5>
      //                   <a className="btn btn-primary btn-sm" data-toggle="modal" data-target="#sideModalTRSuccessDemo" data-backdrop="false">Top Right</a>
      //                   <br />
      //                   <a className="btn btn-primary btn-sm" data-toggle="modal" data-target="#sideModalTLInfoDemo">Top Left</a>
      //                   <br />
      //                   <a className="btn btn-primary btn-sm" data-toggle="modal" data-target="#sideModalBRDangerDemo">Bottom Right</a>
      //                   <br />
      //                   <a className="btn btn-primary btn-sm" data-toggle="modal" data-target="#sideModalBLWarningDemo">Bottom Left</a>
      //                 </div>
      //               </div>
      //               {/*Second column*/}
      //               {/*Third column*/}
      //               <div className="col-md-3">
      //                 <h5 className="text-center mb-3">Central Modal</h5>
      //                 <img src="https://mdbootstrap.com/img/brandflow/modal2.jpg" alt="MDB graphics" className="img-fluid z-depth-1" />
      //                 <div className="text-center">
      //                   <h5 className="my-3">Size</h5>
      //                   <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalLoginAvatarDemo">Small </button>
      //                   <br />
      //                   <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalLRFormDemo">Medium </button>
      //                   <br />
      //                   <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#centralModalLGInfoDemo">Large </button>
      //                   <br />
      //                   <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#centralModalFluidSuccessDemo">Fluid </button>
      //                 </div>
      //               </div>
      //               {/*Third column*/}
      //               {/*Fourth column*/}
      //               <div className="col-md-3">
      //                 <h5 className="text-center mb-3">Fluid Modal</h5>
      //                 <img src="https://mdbootstrap.com/img/brandflow/modal1.jpg" alt="MDB graphics" className="img-fluid z-depth-1" />
      //                 <div className="text-center">
      //                   <h5 className="my-3">Position</h5>
      //                   <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#fluidModalRightSuccessDemo">Right</button>
      //                   <br />
      //                   <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#fluidModalLeftInfoDemo">Left</button>
      //                   <br />
      //                   <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#fluidModalTopWarningDemo">Top</button>
      //                   <br />
      //                   <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#fluidModalBottomDangerDemo">Bottom</button>
      //                 </div>
      //               </div>
      //               {/*Fourth column*/}
      //             </div>
      //             {/* /.First row*/}
      //           </div>
      //         </div>
      //         {/*/.Card*/}
      //       </div>
      //       {/*Grid column*/}
      //     </div>
      //     {/*Grid row*/}
      //   </div>
      // )
    }

  </main>
);

export default adminDashboard;
