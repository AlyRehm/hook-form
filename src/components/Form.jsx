
import React, {useState} from 'react'

const Form = () => {

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("")
    // const [email, setEmail] = useState("");

    // can rewrite the above into one User Object so that you are not having to destructure and call every single piece like above. Can access through users.firstName etc.
    const [users, setUsers] = useState({
        firstName: "",
        lastName: "", 
        email: "",
        password: "",
        confirmPassword: ""
    })
    
    // // need a change handler to keep track of what your changing. need to update state to see the errors. for .name to work, must add a name parameter to the input. DONT FORGET - add onChange to inputs 
    const changeHandler = (e) => {
        setUsers({...users, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        // prevents default  page from refreshing and losing info. allows us to have access and keep our data after it is submitted 
        e.preventDefault();

    }

  return (
    <div>
        <h2>Fill Out This Awesome Form!</h2>
        {/* dont forget to pass the above variable into the onSubmit event handler */}
        <form action="" className="form col-md-4 mx-auto" onSubmit={handleSubmit}>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" placeholder='First Name' name="firstName" onChange={changeHandler}/>
                <label htmlFor="">First Name:</label>
                {/* Ternary Operator replaces if/else statement for validations.  */}
                {/* // condition                       //if True do this                                 : //if false do that  */}
                {users.firstName && users.firstName.length < 2 ? <p className="text-danger">First name is required and must be at least 2 characters long</p> : ""}
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" placeholder='Last Name' name="lastName" onChange={changeHandler}/>
                <label htmlFor="">Last Name:</label>
                {users.lastName && users.lastName.length < 2 ? <p className="text-danger">Last name is required and must be at least 2 characters long</p> : ""}
            </div>

            <div class="form-floating mb-3">
                <input type="email" class="form-control" placeholder='Email' name="email" onChange={changeHandler}/>
                <label htmlFor="">Email:</label>
                {users.email && users.email.length < 5 ? <p className="text-danger">Email is required and must be at least 5 characters long</p> : ""}
            </div>

            <div class="form-floating mb-3">
                <input type="password" class="form-control" placeholder='Password' name="password" onChange={changeHandler}/>
                <label htmlFor="">Password:</label>
                {users.password && users.password.length <7 ? <p className="text-danger"> Password must be at least 8 characters long</p> : ""}
            </div>

            <div class="form-floating mb-3">
                <input type="password" class="form-control" placeholder='Confirm Password:' name="confirmPassword" onChange={changeHandler}/>
                <label htmlFor="">Confirm Password:</label>
                {users.confirmPassword && users.confirmPassword !== users.password ? <p className="text-danger">Passwords must match</p>: ""}
            </div>
            <div>
                <button class="btn btn-outline-dark">Submit!</button>
            </div>
        </form>

        {/* <div class="mt-3">
            <h3>Your Form Info:</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
        </div> */}
    </div>
  )
}

export default Form