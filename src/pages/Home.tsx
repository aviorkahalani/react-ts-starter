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
        <p>{count}</p>
        <button onClick={() => increaseCount(1000)}>INCREASE COUNT</button>
        <button onClick={() => decreaseCount(1000)}>INCREASE COUNT</button>
        <button onClick={() => resetCount()}>INCREASE COUNT</button>
      </div>
    </section>
  )
}

export default Home
