import "./App.css";
import Title from "./components/title/Title";
import QuestionField from "./components/question-field/QuestionField";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Title />
      <QuestionField />
      <Footer />
    </div>
  );
}

export default App;
