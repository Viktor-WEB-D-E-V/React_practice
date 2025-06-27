import { useState } from "react";

import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
//import MainGoal from "./components/MainGoal";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TapButton from "./components/TapButton/TapButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleSelect(selector) {
    setSelectedTopic(selector);
  }
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
            <TapButton onSelect={() => handleSelect("components")}>
              Componets
            </TapButton>
            <TapButton onSelect={() => handleSelect("jsx")}>JSX</TapButton>
            <TapButton onSelect={() => handleSelect("props")}>Props</TapButton>
            <TapButton onSelect={() => handleSelect("state")}>State</TapButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
