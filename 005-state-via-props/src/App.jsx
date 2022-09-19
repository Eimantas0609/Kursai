import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';
import Button from './Components/Button';

function App() {
	const [count, setCount] = useState(0);
	const incrCount = () => {
		setCount(count + 1);
	};

	return (
		<div className="App">
			<Counter count={count} />
			<Button onClick={incrCount} />
			<Button onClick={incrCount} />
			<Button onClick={incrCount} />
			<Button onClick={incrCount} />
		</div>
	);
}

export default App;
