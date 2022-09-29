import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import ExerciseList from './Component/ExerciseList/ExerciseList';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ExerciseList></ExerciseList>
      <Footer></Footer>
    </div>
  );
}

export default App;
