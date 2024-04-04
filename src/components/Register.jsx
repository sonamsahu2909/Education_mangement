
function Register() {
  return (
    <>
    <div className="custom-breadcrumns border-bottom">
      <div className="container">
        <a href="/">Home</a>
        <span className="mx-3 icon-keyboard_arrow_right"></span>
        <span className="current">Register</span>
      </div>
    </div>

    <div className="site-section">
        <div className="container">


            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label >Username</label>
                            <input type="text" id="username" className="form-control form-control-lg" />
                        </div>
                        <div className="col-md-12 form-group">
                            <label>Email</label>
                            <input type="email" id="email" className="form-control form-control-lg" />
                        </div>
                        <div className="col-md-12 form-group">
                            <label>Password</label>
                            <input type="password" id="pword" className="form-control form-control-lg" />
                        </div>
                        <div className="col-md-12 form-group">
                            <label> Re-type Password</label>
                            <input type="password" id="pword2" className="form-control form-control-lg" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <input type="submit" value="Register" className="btn btn-primary btn-lg px-5" />
                        </div>
                    </div>
                </div>
            </div>
            

          
        </div>
    </div>
    </>
  )
}

export default Register