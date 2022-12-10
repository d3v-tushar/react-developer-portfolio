import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const dataForm = e.target;

    emailjs.sendForm('service_w2x9fgm', 'template_op3wkdg', form.current, '4QOEH-MRAB5dnGy4O')
      .then((result) => {
          console.log(result.text);
          dataForm.reset();
          toast.success('Message Sent!');
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div className=" dark:bg-gray-800 dark:text-gray-100">
            <div className="space-y-4 text-center">
          <h1 className="text-5xl font-bold leading-none">Contact</h1>
          <p className="text-lg">
            I will love to hear from you, Please Contact
          </p>
        </div>
	<div className='grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32'>
    <div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
			<div className="dark:text-gray-400">Please fill this form to contact Me</div>
		</div>
		<img src="https://www.mambaui.com/assets/svg/doodle.svg" alt="" className="p-6 h-60 md:h-64" />
	</div>
	<form ref={form} onSubmit={sendEmail} novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div>
			<label htmlFor="name" className="text-lg font-semibold">Full name</label>
			<input name="from_name" id="name" type="text" placeholder="" className="w-full p-3 rounded outline dark:bg-gray-800" />
		</div>
		<div>
			<label htmlFor="email" className="text-lg font-semibold">Email</label>
			<input name="from_email" id="email" type="email" className="w-full p-3 rounded outline dark:bg-gray-800" />
		</div>
		<div>
			<label htmlFor="message" className="text-lg font-semibold">Message</label>
			<textarea name="message" id="message" rows="3" className="w-full p-3 rounded outline dark:bg-gray-800"></textarea>
		</div>
		<button type="submit" value="Send" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-cyan-400 dark:text-gray-900">Send Message</button>
	</form>
    </div>
</div>
    );
};

export default Contact;