// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => (
  <div>Hello {props.name}! Welcome to AAA. </div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('hello_data')
  const container = document.getElementById('bg')
  const data = node.getAttribute('data-name')

  ReactDOM.render(
    <Hello name={data} />,
    container.appendChild(document.createElement('div')),
  )
})
