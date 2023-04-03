import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Question from './components/Question/Question';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <Question></Question>
    </div>
  )
}

export default App;
