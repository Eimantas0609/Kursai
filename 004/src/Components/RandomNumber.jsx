import { useState } from 'react';
import randomNumber from '../Functions/randomNumber';

function RandomNumber({ maxNum }) {
	const [number, setNumber] = useState(randomNumber(maxNum));
	return (
		<>
			<div className="container">
				<h1>{number}</h1>
				<button onClick={() => setNumber(randomNumber(maxNum))}>
					Generate new random number
				</button>
			</div>
		</>
	);
}

export default RandomNumber;
