import React from 'react'
import Grid from '../layout/grid'



export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <button  {...props.button}  type={props.typebutton} className={`btn btn-${props.classbutton}`} 
            onClick={props.onClick}><i className={`fa fa-${props.icon}`}/>{props.description}
            </button>

        </div>
    </Grid>


    
)

