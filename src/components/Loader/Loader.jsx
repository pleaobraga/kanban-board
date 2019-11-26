import React from 'react'
import PropTypes from 'prop-types'
import LoaderIcon from './LoaderIcon'
import './Loader.scss'

export const Loader = ({ className, color }) => {
  return (
    <div className={`loader ${className}`}>
      <LoaderIcon color={color} />
    </div>
  )
}

Loader.defaultProps = {
  color: '#298a95'
}

Loader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string
}

export default React.memo(Loader)
