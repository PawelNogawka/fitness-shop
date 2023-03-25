import React from 'react'

import classes from './Error.module.scss'

const Error = ({error, small}) => {
  return (
    <div className={`${small && classes['error--small']} ${!small && classes['error--big']}`}>
      <p className={classes.message}>{error}</p>
    </div>
  )
}

export default Error
