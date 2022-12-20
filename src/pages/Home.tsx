import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increaseCount, decreaseCount, resetCount } from '../store/actions/countAction'
import { RootState } from '../store/reducers'
import { countActionCreators } from '../store'
import { CountAction } from '../store/types/countActions'

const Home = () => {
  const dispatch = useDispatch()
  const { count } = useSelector((state: RootState) => state.count)
  console.log(count)

  const { increaseCount, decreaseCount, resetCount } = bindActionCreators(
    countActionCreators,
    dispatch
  )

  const onIncreaseCount = () => {
    dispatch(increaseCount(1))
  }

  return (
    <section className="home">
      <div className="container home__container">
        <pre>{count}</pre>
        <button onClick={onIncreaseCount}>INCREASE COUNT</button>
      </div>
    </section>
  )
}

export default Home
