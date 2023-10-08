import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import ghost from './assets/ghost_flying.gif'
import bgSky from './assets/bg_space.jpg'
import planet from './assets/planet.png'
import mountain from './assets/bg_ice_mountain.png'
import cemetery from './assets/bg_cemetery.png'
import rain from './assets/rain.gif'


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

        {/* Background */}
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
          offset={0.1}
          speed={0.15}
          style={{
            backgroundImage: `url(${planet})`,
            backgroundSize: '20%',
            backgroundPosition: '75% 25%'
          }}
        />

        <ParallaxLayer
          offset={0.1}
          speed={0.35}
          style={{
            backgroundImage: `url(${mountain})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 100%'
          }}
        />

        <ParallaxLayer
          speed={0.5}
          offset={0.3}
          style={{
            backgroundImage: `url(${cemetery})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

      </Parallax>
    </div>
    // </>
  )
}

export default App
