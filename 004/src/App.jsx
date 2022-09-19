import './App.css';
import RandomNumber from './Components/RandomNumber';

function App() {
	return (
		<div className="App">
			<RandomNumber maxNum={1000} />
		</div>
	);
}

export default App;
