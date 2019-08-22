import React from 'react'
import PropTypes from 'prop-types'

const CountButton = ({ action, label }) => (
    <button onClick={action}>{label}</button>
)

CountButton.propTypes = {
    action: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default CountButton