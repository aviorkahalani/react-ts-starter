import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { countActionCreators } from '../store'
import { RootState } from '../store/reducers'

const Home: React.FC = () => {
  const { count } = useSelector((state: RootState) => state.count)
  const dispatch = useDispatch()

  const { increaseCount, decreaseCount, resetCount } = bindActionCreators(
    countActionCreators,
    dispatch
  )

  return (
    <section className="home">
      <div className="container home__container">
        <h1>{count}</h1>
        <div className="row">
          <button className="col-4 btn" onClick={() => increaseCount(1)}>
            Increase count
          </button>
          <button className="col-4 btn" onClick={() => decreaseCount(1)}>
            Decrease count
          </button>
          <button className="col-4 btn" onClick={() => resetCount()}>
            Reset count
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
