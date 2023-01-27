import React from 'react';



const InputField = props => {

    const validateInput = values => {
        if (values.some(f => f === "") || values[0].indexOf("@") === -1) {
            return true
        } else {
            return false
        }
    }

    if (props.type === "submit") {
        return (
            <input
                className='getStartedBtn'
                type='submit'
                value={props.label}
                disabled={validateInput(props.formValues)}
            />
        )
    } else {
        return (

            <input
                onChange={(e) => props.onChangeHandler(e.target.value)}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                required={props.isRequired}
                className="inputFieldField"
                name={props.name}
            />

        );
    }
};

export default React.memo(InputField);