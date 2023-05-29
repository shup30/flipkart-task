import { TextField } from '@mui/material';
import React, {useState} from 'react'

const InputField = React.forwardRef(({
    className, 
    type, 
    field, 
    label, 
    showError, 
    showLabel, 
    isRequired, 
    onInputChange,
     validate,
      ...rest
    },ref)=>{
       const [value, setValue] = useState('');
       const [ errorField, setErrorField] = useState('');
       
       const onFieldChange = (e) =>{
           let val = e.target.value;
           let error = '';
           const nameRegex = /[^a-zA-Z\s]/g;
        //    const key = field.substr(0,1).toUpperCase().toLowerCase().concat(field.substr(1));

           if(validate){
               const testResult = validate(val, e);
               if(testResult){
                   setErrorField(testResult);
                   error = testResult;
               }else{
                   setErrorField('');
                   error = testResult;
               }
           } else if ((type === "text" || field === "title") && !nameRegex.test(val)) {
               setErrorField(`Please fill mandatory Fields.`);
               error = `Please fill mandatory Fields`;

        }

           onInputChange(e, val, error);
           setValue(val);
       };
       return(
           <>
                {(errorField && showLabel) ? <span>{errorField}</span>:
                
                (
                    <span>{label}</span>
                )}  
            {type === "textField" ? (
                <TextField
                {...rest}
                className={`${className} ${errorField ? `Input-error` : ''}`}
                required = {isRequired}
                onChange={onFieldChange}
                ref={ref} />

            ):(
                <input 
                {...rest}
                className={`${className} ${errorField ? 'input-error' :''}`}
                required = {isRequired}
                onChange={onFieldChange}
                ref={ref} 
                type={type}
                />
            )}
           </>
       );
});

InputField.defaultProps = {
    className: 'input-form',
    type:'text',
    showLabel:true,
    showError: true,
    isRequired:false,
    onInputChange: () =>{}
}

export default InputField;
