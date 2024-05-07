import Header from './components/Header'
import Services from './components/Services';
import Blog from './components/Blog';

const App = () => {
  return (
    <div className="w-full h-full flex flex-col relative box-border">
      <Header />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
