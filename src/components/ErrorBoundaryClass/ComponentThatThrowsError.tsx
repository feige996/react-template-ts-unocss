import React from 'react'

class ComponentThatThrowsError extends React.Component {
  componentDidMount() {
    throw new Error('This is an error!')
  }

  render() {
    return <div>This component will throw an error.</div>
  }
}

export default ComponentThatThrowsError
