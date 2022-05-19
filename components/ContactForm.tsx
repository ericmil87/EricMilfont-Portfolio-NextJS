import { FunctionComponent, useState } from "react";
import toast from "react-hot-toast";
import { sendContactMail } from "../services/sendMail";

import { IEmail } from "../types";



const ContactForm: FunctionComponent<{
            
        
     }> = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [message,setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
    
        if (!phone || !email || !message) {
          toast('Please fill up all required fields before sending your message.');
          return;
        }
    
        try {
          setLoading(true);
          console.log (name + ' - ' + phone + ' - ' + email + ' - ' + message )
          await sendContactMail(name, phone, email, message);
          setName('');
          setEmail('');
          setMessage('');
    
          toast('Mensagem enviada com sucesso!');
        } catch (error) {
          toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!');
        } finally {
          setLoading(false);
        }
    }
    return (
    <div className="">

        {/* init */} 
        <h5 className=" text-2xl font-bold mb-4">Contact form</h5>
        <form onSubmit={handleSubmit}>
        <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
            <input type="text" id="name"  placeholder="Type your name here" 
                    onChange={({ target }) => setName(target.value)}
                    value={name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        </div>
        <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-mail</label>
            <input type="email" id="email" placeholder="Type your best e-mail here"
                    onChange={({ target }) => setEmail(target.value)}
                    value={email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
        </div>
        <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone</label>
            <input type="text" id="phone" placeholder="Type your phone number with country code"
                    onChange={({ target }) => setPhone(target.value)}
                    value={phone} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        </div>
        <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
            <textarea rows={10} placeholder="I want to build a website for my company. Required features are contact form, clean design, responsive, SEO and booking form..." 
                        onChange={({ target }) => setMessage(target.value)}
                        value={message}
                        id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        </div>
        
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>


        {/* end */}
    
    </div>
  );
};
export default ContactForm;
