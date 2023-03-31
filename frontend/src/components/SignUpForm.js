import { useState } from "react";

function SignUpForm(props) {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");
    const [userPassCheck, setUserPassCheck] = useState("");

    function submitHandler(event) {
        
        // have to call submithandler twice check the problem

        event.preventDefault();

        setUserName(event.target.userName.value);
        setUserEmail(event.target.userEmail.value);
        setUserPass(event.target.userPass.value);
        setUserPassCheck(event.target.userPassCheck.value);

        console.log(userName+" "+userEmail+" "+userPass+" "+userPassCheck);
        // event.target.reset();
    }
    
    return (
        <section className="vh-120" style={{backgroundColor: "#eee"}}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{borderRadius: "25px", marginTop: "20px", marginBottom: "20px"}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form className="mx-1 mx-md-4" onSubmit={submitHandler}>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input name="userName" type="text" id="form3Example1c" className="form-control" onChange={(event)=>{
                              setUserName(event.target.value)
                            }}/>
                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input name="userEmail" type="email" id="form3Example3c" className="form-control" onChange={(event)=>{
                              setUserEmail(event.target.value)
                            }}/>
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input name="userPass" type="password" id="form3Example4c" className="form-control" onChange={(event)=>{
                              setUserPass(event.target.value)
                            }}/>
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input name="userPassCheck" type="password" id="form3Example4cd" className="form-control" onChange={(event)=>{
                              setUserPassCheck(event.target.value)
                            }}/>
                            <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c"/>
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt ="Noway"/>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )

}

export default SignUpForm;