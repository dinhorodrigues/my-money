import React from 'react'

import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <select className='form-control'>
                <option>Escolha...</option>
                <option>Masculino</option>
                <option>Feminino</option>
                


            </select>
        </div>

    </Grid>
)