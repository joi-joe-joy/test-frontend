import * as React from 'react';
import Filter from "../filter/filter";
import CardsList from "../cards-list/cards-list";

const App: React.FC = () => {
  return (
    <div>
      <Filter/>
      <CardsList/>
    </div>
  );
};

export default App;
