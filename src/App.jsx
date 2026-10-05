import React, { useCallback, useMemo, useState } from 'react';
import './App.css';
import { useGlobalContext } from './GlobalContext';

function App() {
  const { storeData, updateData } = useGlobalContext();
  const [headerTitle, setHeaderTitle] = useState('Header Component');
  const [count, setCount] = useState(0);

  const updateCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const itemClick = useCallback((title) => {
    console.log('Item clicked: ', title);
  }, []);

  const heavyItems = useMemo(
    () => [
      { id: 1, name: 'Item Alpha - Heavy Data' },
      { id: 2, name: 'Item Beta - Heavy Data' },
      { id: 3, name: 'Item Gamma - Heavy Data' },
    ],
    []
  );

  return (
    <>
      <div className="">
        <HeaderComponent title={headerTitle} />
        <CounterComponent count={count} updateCount={updateCount} />
        <HeavyListCalcComponent items={heavyItems} onItemClick={itemClick} />
      </div>
    </>
  );
}

export default App;

const HeaderComponent = React.memo(function HeaderComponent({ title }) {
  console.log('Render -> Component Header');
  return <div>{title}</div>;
});

const CounterComponent = React.memo(function CounterComponent({
  count,
  updateCount,
}) {
  console.log('Render -> Counter module');

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={updateCount}>Update</button>
    </div>
  );
});

const HeavyListCalcComponent = React.memo(function HeavyListCalcComponent({
  items,
  onItemClick,
}) {
  console.log('Render -> Heavy list render is done.');

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li onClick={() => onItemClick(item.name)} key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
});
