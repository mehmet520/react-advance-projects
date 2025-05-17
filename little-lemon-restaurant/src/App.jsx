import reactLogo from './assets/react.svg';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <h1 className="p-2 text-3xl font-bold">Little Lemon Restaurant</h1>
      <div className="card">
        <HomePage />
      </div>
      <p className="">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
