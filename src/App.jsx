import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
//import MainGoal from "./components/MainGoal";
import { CORE_CONCEPTS } from "./data";
import TapButton from "./components/TapButton/TapButton";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => {
              return <CoreConcept {...concept} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton>Componets</TapButton>
            <TapButton>JSX</TapButton>
            <TapButton>Props</TapButton>
            <TapButton>State</TapButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
