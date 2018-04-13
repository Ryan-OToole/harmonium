import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const BOOL_PROPS_TO_CLASS_NAMES = {
  small: ['rev-Card--small'],
  large: ['rev-Card--large'],
  primary: ['rev-Card--primary'],
  secondary: ['rev-Card--secondary'],
}
const BOOL_PROPS = Object.keys(BOOL_PROPS_TO_CLASS_NAMES)

export default class TableLayout extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    const {className, children, ...props} = this.props

    // Start building the className
    const boolClassNames = []

    BOOL_PROPS.forEach((name) => {
      if (props[name]) {
        boolClassNames.push(BOOL_PROPS_TO_CLASS_NAMES[name])
      }
      delete props[name]
    })

    const divClassName = classNames(className, 'rev-TableLayout', boolClassNames)

    return (
      <div {...props} className={divClassName}>
        {children}
      </div>
    )
  }
}
