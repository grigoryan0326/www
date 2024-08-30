import "./Particle.scss"

const Particle = () => {
  let elems = []
  for (let i = 1; i <= 300; i++) {
    elems.push(<div className='c'></div>)
  }

  return <div className='wrap'>{elems.map((el) => el)}</div>
}
export default Particle
