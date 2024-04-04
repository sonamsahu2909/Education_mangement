
function Contact() {
  return (
    <>
     
     <div className="site-section ftco-subscribe-1 site-blocks-cover pb-4" style={{backgroundImage: "url('images/bg_1.jpg')"}}>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <h2 className="mb-0">Contact</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
        </div>
      </div> 
    

    <div className="custom-breadcrumns border-bottom">
      <div className="container">
        <a href="/home">Home</a>
        <span className="mx-3 icon-keyboard_arrow_right"></span>
        <span className="current">Contact</span>
      </div>
    </div>

    <div className="site-section">
        <div className="container">
            <div className="row">
                <div className="col-md-6 form-group">
                    <label >First Name</label>
                    <input type="text" id="fname" className="form-control form-control-lg" />
                </div>
                <div className="col-md-6 form-group">
                    <label >Last Name</label>
                    <input type="text" id="lname" className="form-control form-control-lg" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 form-group">
                    <label >Email Address</label>
                    <input type="text" id="eaddress" className="form-control form-control-lg" />
                </div>
                <div className="col-md-6 form-group">
                    <label >Tel. Number</label>
                    <input type="text" id="tel" className="form-control form-control-lg" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 form-group">
                    <label >Message</label>
                    <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <input type="submit" value="Send Message" className="btn btn-primary btn-lg px-5" />
                </div>
            </div>
        </div>
    </div>

    <div className="section-bg style-1" style={{backgroundImage: "url('images/hero_1.jpg')"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
              <span className="icon flaticon-mortarboard"></span>
              <h3>Our Philosphy</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure repellat quis delectus ea? Dolore, amet reprehenderit.</p>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
              <span className="icon flaticon-school-material"></span>
              <h3>Academics Principle</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure repellat quis delectus ea?
                Dolore, amet reprehenderit.</p>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
              <span className="icon flaticon-library"></span>
              <h3>Key of Success</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure repellat quis delectus ea?
                Dolore, amet reprehenderit.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact