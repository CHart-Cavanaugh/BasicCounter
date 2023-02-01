import { useSelector, useDispatch } from 'react-redux';
import counterSlice, { increment, decrement, reset } from './counterSlice';

const Counter = (props) => {
    let count = useSelector(state => state.count);
    return (
        <div className='counter-container'>
            <div className='counter-display'>
                <h1>Count: </h1>
                <h1>{count}</h1>
            </div>
            <div className='counter-btns'>
                <button
                    className='increment-btn'
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button
                    className='decrement-btn'
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
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