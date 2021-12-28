import React from 'react' ; 

import './form.scss' ; 
import Button from '@material-ui/core/Button';
import DatePicker from '../date/Date';


function Form() {
    // const classes:any = useStyles();
  
    return (
        <div className="form">
                <form className=" form-wrapper">
                    <div className={`input-group  row`}>
                        <div className='col'>
                          <input type="text" className="form-control" placeholder="Please enter weight" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        </div>
                        <div className='col'>
                            <DatePicker />
                        </div>
                        <div className='col'>
                          <Button variant="contained" color="primary">
                            Add weight 
                          </Button>
                        </div>
                    </div>
                </form>
        </div>       
    )
}

export default Form ; 