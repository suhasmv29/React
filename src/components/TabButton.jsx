import Tabs from './Tabs'
import { useState } from 'react';
import { EXAMPLES } from '../data';
export default function TabButton () {
    const [getSelected, setSelected] = useState();
    function handleSelect(identifier){
      setSelected(identifier)
    }
  
    let tabContent = <p>Please select a topic.</p>;
    if (getSelected) {
      tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[getSelected].title}</h3>
          <p>{EXAMPLES[getSelected].description}</p>
          <pre>
            <code>{EXAMPLES[getSelected].code}</code>
          </pre>
        </div>
      );
    }
    return (
            <div>
        <menu>
        <Tabs onClick={() => handleSelect('components')} isSelected={getSelected == 'components'} >Component</Tabs>
        <Tabs onClick={() => handleSelect('jsx')} isSelected={getSelected == 'jsx'}>Jsx</Tabs>
        <Tabs onClick={() => handleSelect('props')} isSelected={getSelected == 'props'}>Props</Tabs>
        <Tabs onClick={() => handleSelect('state')} isSelected={getSelected == 'state'}>State</Tabs>
    </menu>
    {tabContent}
  </div>);
}