import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const options = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  }
  return (
    <div className="planet-bg-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider {...options}>
        {planetsList.map(eachPlanet => (
          <PlanetItem planetDetails={eachPlanet} key={eachPlanet.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
