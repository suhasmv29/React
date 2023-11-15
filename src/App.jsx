import TabButton from '../src/components/TabButton.jsx';
import Section from './components/Section.jsx'
function App() {

  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
        <Section id="examples" TabButton={TabButton}>
          <h2>Examples</h2>
        </Section>
      </main>
    </div>
  );
}

export default App;
