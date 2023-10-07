import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import ghost from './assets/ghost_flying.gif'
import bgSky from './assets/bg_space.jpg'
import planet from './assets/planet.png'
import mountain from './assets/bg_ice_mountain.png'
import cemetery from './assets/bg_cemetery.png'



function App() {

  return (
    // <>
    <div>
      <Parallax pages={4}>

        {/* Ghost */}
        <ParallaxLayer
          sticky={{ start: 0.5, end: 3 }}
          speed={1}
          style={{ textAlign: 'center' }}
        >
          <img src={ghost} alt="ghost" style={{ height: '350px' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          factor={4}
          style={{
            backgroundColor: '#03081b'
          }}
        />

        {/* Page 1 */}
        <ParallaxLayer
          offset={0}
          factor={1}
          speed={0.6}
          style={{
            backgroundImage: `url(${bgSky})`,
            backgroundSize: 'cover'
          }}
        />

        <ParallaxLayer
          speed={0.15}
          style={{
            backgroundImage: `url(${planet})`,
            backgroundSize: '20%',
            backgroundPosition: '75% 33%'
          }}
        />

        <ParallaxLayer
          speed={0.35}
          style={{
            backgroundImage: `url(${mountain})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <ParallaxLayer
          speed={0.5}
          offset={0.2}
          style={{
            backgroundImage: `url(${cemetery})`,
            backgroundSize: '100% auto',
          }}
        />

      </Parallax>
    </div>
    // </>
  )
}

export default App
