import { useForm } from 'react-hook-form';

export const FormCreateCard = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleSubmitFunc = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="absolute h-full left-0 top-0 z-20 w-full flex items-center justify-center text-black">
      <form onSubmit={handleSubmit(handleSubmitFunc)} className="flex flex-col gap-2 bg-slate-600 p-4 form" onMouseLeave={()=> {
        const formElement = document.querySelector('.form');
        formElement.classList.add('hidden');
      }}>
        <input
          type="text"
          name="classes"
          id="classes"
          placeholder="Write your class name"
          {...register('classes', { required: true })}
        />
        <input
          type="text"
          name="topic"
          id="topic"
          placeholder="Write what topic you want to study"
          {...register('topic', { required: true })}
        />
        <input
          type="number"
          name="flashCardNumber"
          id="flashCardNumber"
          placeholder="FlashCard number"
          {...register('flashCardNumber', { required: true })}
        />

        <button onClick={handleSubmit(handleSubmitFunc)}>Send</button>
      </form>
    </div>
  );
};
