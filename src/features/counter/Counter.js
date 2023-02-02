import { useSelector, useDispatch } from 'react-redux';
import counterSlice, { increment, decrement, reset } from './counterSlice';

const Counter = (props) => {
    let count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div className='counter-container'>
            <div className='counter-display'>
                <h1>Count: </h1>
                <h1>{count}</h1>
            </div>
            <div className='counter-btns'>
                <button
                    className='decrement-btn'
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <button
                    className='increment-btn'
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <button
                    className='reset-btn'
                    onClick={() => dispatch(reset())}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;