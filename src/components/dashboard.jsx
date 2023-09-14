import { Card } from './card';

export const Dashboard = () => {
  return (
    <section className="w-full h-full flex flex-col gap-6">
      <header className="w-full flex justify-between">
        <h1 className="text-4xl font-semibold">Conjuntos</h1>
        <button className="p-3 px-4 bg-verde rounded-xl flex gap-2 hover:bg-grisAzulado transition">
          <span>Crear nuevo conjunto</span>
        </button>
      </header>

      <section
        className="grid gap-4 w-full h-full overflow-auto pr-3 "
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr) )' }}
      >
        <Card schoolClass={'Matematicas'} topic={'Derivadas e Integrales'} flashcardNumber={6} />
        <Card schoolClass={'Matematicas'} topic={'Derivadas e Integrales'} flashcardNumber={6} />
        <Card schoolClass={'Matematicas'} topic={'Derivadas e Integrales'} flashcardNumber={6} />
        <Card schoolClass={'Matematicas'} topic={'Derivadas e Integrales'} flashcardNumber={6} />
      </section>
    </section>
  );
};
