import React from 'react';
import './EventForm.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import PanoramaTwoToneIcon from '@mui/icons-material/PanoramaTwoTone';
import {reduxForm} from 'redux-form';
import Input from '../../ui/input/Inputs';
import {events} from './EventAction';
import { useDispatch } from 'react-redux';

const event = [
  {
    value: 'select',
    label: 'Select....',
  },
  {
    value: 'Eve',
    label: 'Event',
  },
];


const EventForm = (prop) => {

  const dispatch = useDispatch();

    // const [events, setEvents] = React.useState('select');
    const [values, setValues] = React.useState({
        select:'select',
        total:'',
        
    })
    const handleChange = (prop) => (e) => {
        setValues({ ...values, [prop]: e.target.value });
      };
    
    const onFormSubmit = (e) =>{
      e.preventDefault();
      const noError = Object.keys(field).every(key => !!field[key].value  && !field[key].error );

      if(noError) {
        dispatch(events({
            event: field.event.value.trim(),
            title: field.title.value.trim(),
            categories: field.categories.value.trim(),
            summary: field.summary.value.trim(),
            type: field.type.value.trim(),
            link: field.link.value.trim(),
            timezone: field.timezone.value.trim(),


        }))
      }
    }
      
    return ( <>
    <div>
        <div className="head">
            <h3 className="h-name">Create Event</h3>
            {/* <button className="btn-create" onClick={()=>dispatch(events(values))}>create</button> */}
            <button className="btn-create" onSubmit={onFormSubmit} >create</button>
            <button className="btn-cancel">cancel</button>
        </div>
        <hr/>

        <div className="section">
            <div>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '80%', marginTop:3 },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
        <Inputs
        field="event"
        type="text"
        isRequired
          id="standard-select-event-native"
          select
          label="Add Event in*"
          value={values}
          className="d-input"
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
        //   helperText="Please select your Event"
          variant="standard"
        >
          {event.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Inputs>

        <Stack direction="row" alignItems="center" spacing={2} marginTop="0.5rem">
        <label htmlFor="icon-button-file" > Upload Image - Related To Events.........
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </Stack>

    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '80%'  }}>
        <label>Title*</label>
          <Input
            field="title"
            type="text"
            isRequired
            id="standard-adornment-title"
            value={values.Title}
            label="Title"
            onChange={handleChange('title')}
            aria-describedby="standard-title-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="standard-weight-helper-text" textAlign="right">(0-225)</FormHelperText>
        </FormControl>


        <TextField
          field="categories"
          type="text"
          isRequired
          id="standard-select-event-native"
          select
          label="Categories*"
          value={values}
          className="d-input"
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
        //   helperText="Please select your Event"
          variant="standard"
        >
          {event.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '80%'  }}>
        <label>Short Summary*</label>
          <Input
          field="summary"
          type="text"
            id="standard-adornment-title"
            value={values.Title}
            label="Summary"
            isRequired
            onChange={handleChange('title')}
            aria-describedby="standard-title-helper-text"
            inputProps={{
              'aria-label': 'summary',
            }}
          />
          <FormHelperText id="standard-weight-helper-text" textAlign="right">(0-500)</FormHelperText>
        </FormControl>

            <h5>Type: Public</h5>

       <TextField
            field="type"
            type="text"
             id="filled-basic"
             isRequired
              label="Registration Site"
               variant="filled"
         />
          <FormHelperText id="standard-weight-helper-text" textAlign="right">(0-225)</FormHelperText>


      <FormControlLabel label="Is this a virtual Event..?" control={<Switch defaultChecked />}  />


      <TextField 
            field="link"
            type="text"
             id="filled-basic"
              label="Online Link" 
              variant="filled"
     />

      <TextField
      field="timezone"
      type="text"
          id="standard-select-event-native"
          select 
          label="Select TimeZone*"
          isRequired
          value={values}
          endAdornment={<InputAdornment position="end">GMT+5:30</InputAdornment>}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          variant="standard"
        />
<div display="flex">

<TextField
        id="datetime-local"
        label="Start Events Date & Time"
        type="datetime-local"
        defaultValue="2021-10-02 T10:30am"
        sx={{ width: 50 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
            <TextField
        id="datetime-local"
        label="End Events Date & Time"
        type="datetime-local"
        defaultValue="2021-10-02 T12:30pm"
        sx={{ width: 50 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
        </div>
        <div>
          <label>Attachments</label><br/>
        <Box component="span" sx={{ p: 4, border: '3px dashed grey', width:90, marginTop:'2rem'}}>
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PanoramaTwoToneIcon />
          <h2 style={{marginLeft:"4rem", color:"rgb(32, 6, 94)"}}>Click Here to upload file(s)</h2>
        </IconButton>
       </Box>
       </div>
        </div>
            </Box>

            </div>
        </div>

        <div>

        </div>

    </div>
    </> );
}
 
export default reduxForm({
  form:'Event Create- form',
}) (EventForm);