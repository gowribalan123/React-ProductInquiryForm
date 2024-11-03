import React,{useState} from 'react'
import { Form  } from 'react-router-dom'
 import  './Product.css'
 


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
        <div className='hero' > 
            {submitted ? (  
        <div class="mb-3"> 
              

                 <div class='success'>
                 <h2>Your form is submitted successfully.</h2>  
                 </div>
                
                <p>Your  details are :- </p>
                <div class="cust">

                <p>Name: {customerDetails.name}</p>  
                    <p>Email ID: {customerDetails.email}</p>  
                    <p>Product Inquiry: {customerDetails.message}</p>  
                </div>
               
                    <div class="alert">
  
    Thank you for your inquiry about our product. We will get back to you shortly.
</div>
                 
                </div>  
            ) : (  
                <Form onSubmit={handleSubmit} >  
                    <div  class="mb-3">  
                        <label>Name:</label>  
                        <input type="text" name="name" value={customerDetails.name} onChange={handleChange} class="form-control" placeholder='Enter your name'/>  
                    </div>  
                    <div class="mb-3">  
                        <label>Email:</label>  
                        <input type="email" name="email" value={customerDetails.email} onChange={handleChange}  class="form-control" placeholder='example@gmail.com'/>  
                    </div> 
                    <div class="mb-3">  
                        <label>Product Inquiry:</label>  
                        <textarea name="message" value={customerDetails.message} onChange={handleChange}  class="form-control" placeholder='What would you like to know?'></textarea>  
                    </div>  
                    {error && <p style={{ color: 'red' }}>{error}</p>}  
                    <br />
                    <button type="submit"  class="btn btn-light">Send Inquiry</button>  

                </Form>  
            )}  
        </div>  
    );  
};  


   


export default Product