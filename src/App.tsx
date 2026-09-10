import Header from '@/components/layout/Header';
import Home from '@/pages/Home';
import { useViewportSync } from '@/hooks/useViewportSync';

function App() {
  useViewportSync();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <Home />
      </main>
    </div>
  );
}

export default App;
