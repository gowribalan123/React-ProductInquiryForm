import React,{useState} from 'react'
import { Form  } from 'react-router-dom'
 


const Product = () => {


const [customerDetails, setCustomerDetails] = useState({  
        name: '',  
        email: '',  
        message: ''  
    });  
    const [error, setError] = useState('');  
    const [submitted, setSubmitted] = useState(false);  
    //const navigate = useNavigate();  

    const handleChange = (e) => {  
        const { name, value } = e.target;  
      setCustomerDetails(prevDetails => ({ ...prevDetails, [name]: value }));  
    };  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        // Basic validation  
        if (!customerDetails.name || !customerDetails.email || !customerDetails.message) {  
            setError('All fields are required.');  
            return;  
        }  
        setSubmitted(true);  
    };  

    return (  
        <div className='hero'>   <h1>Welcome to Product Inquiry page !</h1>
            {submitted ? (  
                <div>  
                    <h2>Thank You for your Inquiry!</h2>  
                    <p>Customer Name: {customerDetails.name}</p>  
                    <p>Email ID: {customerDetails.email}</p>  
                    <p>Message: {customerDetails.message}</p>  
                </div>  
            ) : (  
                <Form onSubmit={handleSubmit}>  
                    <div  >  
                        <label>Name:</label>  
                        <input type="text" name="name" value={customerDetails.name} onChange={handleChange} class="form-control"/>  
                    </div>  
                    <div>  
                        <label>Email:</label>  
                        <input type="email" name="email" value={customerDetails.email} onChange={handleChange}  class="form-control"/>  
                    </div> 
                    <div>  
                        <label>Message:</label>  
                        <textarea name="message" value={customerDetails.message} onChange={handleChange} class="form-control"></textarea>  
                    </div>  
                    {error && <p style={{ color: 'red' }}>{error}</p>}  
                    <br />
                    <button type="submit"  class="btn btn-primary">Submit</button>  
                </Form>  
            )}  
        </div>  
    );  
};  


   


export default Product