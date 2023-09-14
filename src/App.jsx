import { useEffect } from 'react';
import { Dashboard } from './components/dashboard';
import { SideBar } from './components/sidebar/sidebar';
import { MakeCardAnimation } from './utils/animateFunction';

function App() {
  useEffect(() => {
    MakeCardAnimation();
  }, []);

  return (
    <main className="p-6 w-full min-h-screen absolute h-full flex gap-8">
      {/* Press button and make alert with form writing topics, classes, and flashcard*/}
      <SideBar />
      <Dashboard />
    </main>
  );
}

export default App;
