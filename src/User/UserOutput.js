import React from 'react'

const UserOutput = (props) => {
  const cardStyle = {
    background: '#FFF',
    width: '60%',
    padding: '20px',
    margin: '20px auto',
    border: '1px solid gray',
    borderRadius: '5px'
  }

  return (
    <div style={cardStyle}>
      <p>{props.paragraph}</p>
      <p className='user'>{props.username}</p>
    </div>
  )
}

export default UserOutput
