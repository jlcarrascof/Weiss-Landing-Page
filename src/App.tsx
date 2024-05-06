import Header from './components/Header'
import Services from './components/Services';

const App = () => {
  return (
    <div className="w-full h-full flex flex-col relative box-border">
      <Header />
      <Services />
    </div>
  );
};

export default App;
