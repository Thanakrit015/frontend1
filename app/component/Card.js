export default function Card() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 text-center mb-4">
          <h3>Product</h3>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="/images/card/01.jpg" className="card-img-top img-responsive" alt="..." width={500} height={300}/>
            <div className="card-body">
              <p className="card-text"></p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="/images/card/02.jpg" className="card-img-top imag-responsive" alt="..." width={500} height={300}/>
            <div className="card-body">
              <p className="card-text"></p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="/images/card/03.jpg" className="card-img-top img-responsive" alt="..." width={500} height={300}/>
            <div className="card-body">
              <p className="card-text"></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
