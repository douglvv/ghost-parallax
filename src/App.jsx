import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import bgSky from './assets/bg_space.jpg'
import planet from './assets/planet.png'
import mountain from './assets/bg_ice_mountain.png'
import cemetery from './assets/bg_cemetery.png'



function App() {

  return (
    // <>
    <div>
      <Parallax pages={4}>
        {/* Page 1 */}
        <ParallaxLayer
          speed={0.5}
          style={{
            backgroundImage: `url(${bgSky})`,
            backgroundSize: 'cover'
          }}
        />

        <ParallaxLayer
          speed={0.75}
          style={{
            backgroundImage: `url(${planet})`,
            backgroundSize: '25% auto',
            backgroundPosition: '100% 15%'
          }}
        />

        <ParallaxLayer
          speed={1}
          style={{
            backgroundImage: `url(${mountain})`,
            backgroundSize: 'cover'
          }}
        />

        <ParallaxLayer
          speed={1.25}
          offset={0.25}
          factor={1.25}
          style={{
            backgroundImage: `url(${cemetery})`,
            backgroundSize: 'contain'
          }}
        />

      </Parallax>
    </div>
    // </>
  )
}

export default App
