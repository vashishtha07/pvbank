import React from 'react'

const ContactUs = () => {
    const [result, setResult] = React.useState("Please fill out your query along with your details. We will contact you shortly :)");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "05b300a5-723e-4b85-8ca1-29b95035e9b4");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='h-screen bg-gradient-to-b from-black via-indigo-900 to-blue-800 flex flex-col items-center'>
            <h1 className='font-bold text-white text-bold text-3xl p-10 items-center justify-center flex'>Contact Us</h1>
            <div className='items-center justify-center flex w-full'>
                <form onSubmit={onSubmit} className="flex-col flex w-1/4 p-10">
                    <label className='text-xl text-gray-300'>Your name</label>
                    <input type="text" name="name" placeholder='Enter your name' required className='my-5 p-2 rounded-sm' />
                    <label className='text-xl text-gray-300'>Phone Number</label>
                    <input type="tel" name="phone" placeholder='Enter your mobile number' required className='my-5 p-2 rounded-sm' />
                    <label className='text-xl text-gray-300'>Write your messages here</label>
                    <textarea type="message" name="message" rows="6" placeholder='Enter your message' required className='my-5  rounded-sm' />
                    <button type='submit' className='bg-gray-300 rounded-xl w-1/2 items-center justify-center flex hover:bg-gray-500 p-3'>Submit now  </button>
                </form>
            </div>
            <span className='flex bg-white w-1/4 items-center justify-center p-2 font-bold'>{result}</span>
        </div>
    )
}

export default ContactUs