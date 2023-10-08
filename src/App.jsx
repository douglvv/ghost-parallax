import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import ghost from './assets/ghost_flying.gif'
import bgSky from './assets/bg_aurora.jpg'
import planet from './assets/planet.png'
import mountain from './assets/bg_ice_mountain.png'
import cemetery from './assets/bg_cemetery.png'
import capetao from './assets/near.png'
import fundo_bottom from './assets/middle.png'
import ground from './assets/layer_ground.png'
import caveiras from './assets/skeletons.gif'

function App() {

  return (
    <div>
      <Parallax pages={2}>

        {/* Ghost */}
        <ParallaxLayer
          sticky={{start: 0.6, end: 1}}
          speed={.25}
          style={{ textAlign: 'center' }}
        >
          <img src={ghost} alt="ghost" style={{ height: '350px' }} />
        </ParallaxLayer>

        {/* Background */}
        <ParallaxLayer
          offset={0}
          factor={2}
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

        {/* Page 2 */}
        <ParallaxLayer
          offset={1}
          factor={1}
          speed={0.75}
          style={{
            backgroundImage: `url(${fundo_bottom})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom'
          }}
        />
        <ParallaxLayer
          offset={1}
          factor={1}
          speed={0.5}
          style={{
            backgroundImage: `url(${capetao})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom'
          }}
        />
        <ParallaxLayer
          offset={1}
          factor={1}
          speed={0.25}
          style={{
            backgroundImage: `url(${ground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom'
          }}
        />
        <ParallaxLayer
          offset={1}
          factor={1}
          speed={0.25}
          style={{
            backgroundImage: `url(${caveiras})`,
            backgroundSize: '25% auto',
            backgroundPosition: '20% 110%'
          }}
        />
        <ParallaxLayer
          offset={1}
          factor={1}
          speed={0.25}
          style={{
            backgroundImage: `url(${caveiras})`,
            backgroundSize: '25% auto',
            backgroundPosition: '80% 110%'
          }}
        />

      </Parallax>
    </div>
  )
}

export default App
