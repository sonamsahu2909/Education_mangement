
function Login() {
  return (
   <>
   <div className="site-section ftco-subscribe-1 site-blocks-cover pb-4" style={{backgroundImage: "url('images/bg_1.jpg')"}}>
        <div className="container">
          <div className="row align-items-end justify-content-center text-center">
            <div className="col-lg-7">
              <h2 className="mb-0">Login</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
        </div>
      </div> 
    

    <div className="custom-breadcrumns border-bottom">
      <div className="container">
        <a href="/home">Home</a>
        <span className="mx-3 icon-keyboard_arrow_right"></span>
        <span className="current">Login</span>
      </div>
    </div>

    <div className="site-section">
        <div className="container">


            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label>Username</label>
                            <input type="text" id="username" className="form-control form-control-lg" />
                        </div>
                        <div className="col-md-12 form-group">
                            <label >Password</label>
                            <input type="text" id="pword" className="form-control form-control-lg" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <input type="submit" value="Log In" className="btn btn-primary btn-lg px-5" />
                        </div>
                    </div>
                </div>
            </div>
            

          
        </div>
    </div>

   </>
  )
}

export default Login