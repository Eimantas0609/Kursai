import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';
import Button from './Components/Button';

function App() {
	const [count, setCount] = useState(0);
	const incrCount = () => {
		setCount(count + 1);
	};

	const texts = [
		'Try me!',
		'Click me!',
		'Click!',
		'Boom!',
		'Press me!',
		'Hit me!',
	];

	return (
		<div className="App">
			<Counter count={count} />
			{texts.map((text, index) => {
				return <Button onClick={incrCount} text={text} key={index} />;
			})}
		</div>
	);
}

export default App;
