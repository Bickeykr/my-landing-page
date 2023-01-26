import React, { useState, useEffect } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from './InputField';

const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === "success") clearFields();
    }, [status])

    const clearFields = () => {
        setEmail('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email,
            });
    }

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
        >
            {status === "sending" && (
                <div  >
                    sending...
                </div>
            )}
            {status === "error" && (
                <div
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            <div  >
                <InputField
                    onChangeHandler={setEmail}
                    type="email"
                    value={email}
                    placeholder="Enter your email to Get Started"
                    isRequired
                />
            </div>

            <InputField
                label="Get Started"
                type="submit"
                formValues={[email]}
            />
        </form>
    );
};



//MailchimpFormContainer Parent Component Below

const MailchimpFormContainer = props => {
    const postUrl = `https://gmail.us13.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    return (
        <div  >
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
};

export default MailchimpFormContainer;