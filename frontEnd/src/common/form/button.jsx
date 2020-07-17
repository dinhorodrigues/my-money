import React from 'react'
import Grid from '../layout/grid'



export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <button {...props.input} type={props.type} className={`btn btn-${props.classbutton}`}>
              
               <i className={`fa fa-${props.icon}`}></i> 
            </button>

        </div>
    </Grid>
)



