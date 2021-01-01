import React from 'react'

export default function Content() {
    return (
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
        
        </div>{/* /.col */}

      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      {/* Small boxes (Stat box) */}
      <div className="row">
        <div className="col-lg-4 col-6">
          {/* small box */}
          <div className="small-box bg-info">
            <div className="inner">
              <h3>150</h3>
              <p>Payment</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag" />
            </div>
           
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-4 col-6">
          {/* small box */}
          <div className="small-box bg-success">
            <div className="inner">
              <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
              <p>Projects</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars" />
            </div>
           
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-4 col-6">
          {/* small box */}
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>44</h3>
              <p>User Registrations</p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add" />
            </div>
           
          </div>
        </div>

      </div>
      {/* /.row */}
      {/* Main row */}
      <div className="row">
        {/* Left col */}
        <section className="col-lg-12 connectedSortable">
          {/* Custom tabs (Charts with tabs)*/}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <i className="fas fa-chart-pie mr-1" />
                Seo Analytcs
              </h3>

            </div>{/* /.card-header */}
            <div className="card-body">
              <div className="tab-content p-0">
                {/* Morris chart - Sales */}
                <div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative', height: 300}}>
                  <canvas id="revenue-chart-canvas" height={300} style={{height: 300}} />                         
                </div>
                <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}}>
                  <canvas id="sales-chart-canvas" height={300} style={{height: 300}} />                         
                </div>  
              </div>
            </div>{/* /.card-body */}
          </div>
        </section>
        {/* right col (We are only adding the ID to make the widgets sortable)*/}
     </div></div></section></div>


    )
}
