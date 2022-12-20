import loaderSVG from '../assets/loader.svg'

const Loader: React.FC = () => {
  return (
    <section className="loader">
      <div className="container loader__container">
        <img src={loaderSVG} alt="" />
      </div>
    </section>
  )
}

export default Loader
