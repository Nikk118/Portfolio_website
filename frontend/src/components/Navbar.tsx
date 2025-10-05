// App.tsx
import Navbar from './Navbar';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      
      <section id="home" className="h-screen scroll-mt-24 flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">Home</h1>
      </section>
      
      <section id="about" className="h-screen scroll-mt-24 flex items-center justify-center bg-white">
        <h1 className="text-4xl font-bold">About</h1>
      </section>
      
      <section id="skills" className="h-screen scroll-mt-24 flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">Skills</h1>
      </section>
      
      <section id="projects" className="h-screen scroll-mt-24 flex items-center justify-center bg-white">
        <h1 className="text-4xl font-bold">Projects</h1>
      </section>
      
      <section id="contact" className="h-screen scroll-mt-24 flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">Contact</h1>
      </section>
    </>
  );
};

export default App;
