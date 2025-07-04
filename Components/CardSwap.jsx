import React from 'react'
import CardSwap, { Card } from '../utils/CardSwap'

const CardSwapComponent = () => {
  return (

<div style={{ height: '600px',  position: 'relative' }}>
  <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={5000}
    pauseOnHover={false}
    skewAmount={4}
  >
    <Card>
      <h3>Card 1</h3>
      <p>Your content here</p>
    </Card>
    <Card>
      <h3>Card 2</h3>
      <p>Your content here</p>
    </Card>
    <Card>
      <h3>Card 3</h3>
      <p>Your content here</p>
    </Card>
      <Card>
        <h3>Card 4</h3>
        <p>Your content here</p>
    </Card>
      <Card>
        <h3>Card 4</h3>
        <p>Your content here</p>
    </Card>
   
  </CardSwap>
</div>
  )

}

export default CardSwapComponent