import Header from '@/components/layout/Header';
import Home from '@/pages/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Home />
      </main>
    </div>
  );
}

export default App;
