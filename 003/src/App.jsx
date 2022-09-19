import './App.css';
import PetInfo from './Components/PetInfo';

function App() {
	return (
		<div className="App">
			<PetInfo animal="dog" age="4" hasPet />
			<PetInfo animal="cat" age="7" hasPet={true} />
			<PetInfo animal="cow" age="5" hasPet={false} />
		</div>
	);
}

export default App;
