
import React, {useState} from 'react'

const Form = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("");
    
    const handleSubmit = (e) => {
        // prevents default  page from refreshing and losing info. allows us to have access and keep our data after it is submitted 
        e.preventDefault();
        console.log(firstName, lastName, email);
    }

  return (
    <div>
        <h2>Fill Out This Awesome Form!</h2>
        {/* dont forget to pass the above variable into the onSubmit event handler */}
        <form action="" className="form col-md-4 mx-auto" onSubmit={handleSubmit}>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" placeholder='First Name' onChange={(e) => setFirstName(e.target.value) }/>
                {/* onChange is event handler. When onchange happens, we pass the event object (e) in and get access to the information which we can pull out later to do something with it  */}
                <label htmlFor="">First Name:</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" placeholder='Last Name' onChange={(e) => setLastName(e.target.value) }/>
                <label htmlFor="">Last Name:</label>
            </div>

            <div class="form-floating mb-3">
                <input type="email" class="form-control" placeholder='Email' onChange={(e) => setEmail(e.target.value) }/>
                <label htmlFor="">Email:</label>
            </div>

            <div class="form-floating mb-3">
                <input type="password" class="form-control" placeholder='Password'/>
                <label htmlFor="">Password:</label>
            </div>

            <div class="form-floating mb-3">
                <input type="password" class="form-control" placeholder='Confirm Password:'/>
                <label htmlFor="">Confirm Password:</label>
            </div>
            <div>
                <button class="btn btn-outline-dark">Submit!</button>
            </div>
        </form>

        <div class="mt-3">
            <h3>Your Form Info:</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
        </div>
    </div>
  )
}

export default Form