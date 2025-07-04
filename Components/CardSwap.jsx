import React from 'react'
import CardSwap, { Card } from '../utils/CardSwap'

const CardSwapComponent = () => {
  return (
    <section className="cardswap-section">
      <div className="cardswap-container">
        {/* Left side - Text content */}
        <div className="cardswap-text">
          <h2 className="cardswap-title">
            Card stacks have never 
            <br />
            looked so good
          </h2>
          <p className="cardswap-subtitle">
            Just look at it go!
          </p>
        </div>

        {/* Right side - Card animation */}
        <div className="cardswap-animation">
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
            skewAmount={4}
          >
            {/* Reliable Card */}
            <Card className="reliable-card">
              <div className="card-header">
                <div className="card-badge">⚡ Reliable</div>
              </div>
              <div className="card-content">
                <h3>Built for Scale</h3>
                <p>Enterprise-grade infrastructure that grows with your business needs.</p>
              </div>
            </Card>

            {/* Smooth Card */}
            <Card className="smooth-card">
              <div className="card-header">
                <div className="card-badge">✨ Smooth</div>
              </div>
              <div className="card-content">
                <h3>Seamless Experience</h3>
                <p>Buttery smooth animations and interactions that delight users.</p>
              </div>
            </Card>

            {/* Customizable Card */}
            <Card className="customizable-card">
              <div className="card-header">
                <div className="card-badge">🎨 Customizable</div>
              </div>
              <div className="card-content">
                <h3>Your Brand, Your Way</h3>
                <p>Flexible theming and customization options to match your design.</p>
              </div>
            </Card>

            {/* Performance Card */}
            <Card className="performance-card">
              <div className="card-header">
                <div className="card-badge">🚀 Fast</div>
              </div>
              <div className="card-content">
                <h3>Lightning Speed</h3>
                <p>Optimized for performance with minimal bundle size impact.</p>
              </div>
            </Card>

            {/* Developer Experience Card */}
            <Card className="dev-card">
              <div className="card-header">
                <div className="card-badge">💻 DX</div>
              </div>
              <div className="card-content">
                <h3>Developer First</h3>
                <p>Simple API with TypeScript support and excellent documentation.</p>
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  )
}

export default CardSwapComponent