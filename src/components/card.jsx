export const Card = ({ schoolClass, topic, flashcardNumber }) => {
  return (
    <div className="bg-grisAzulado rounded-xl min-h-[9rem] max-h-16 elemento elemento-animar p-4 hover:brightness-90 flex flex-col gap-2">
      <header className="text-base w-full">
        {schoolClass} - {topic}
      </header>
      <div className="text-sm text-gray-500">{flashcardNumber} flashcards</div>
    </div>
  );
};
