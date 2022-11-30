function App() {
  return (
    <div className="container h-screen mx-auto flex flex-col justify-center items-center gap-10">
      <h1 className=" text-3xl text-bold text-center text-black font-black uppercase">
        dale click al botón para{' '}
        <span className="font-bold text-indigo-700 uppercase">
          {' '}
          descargar!!!!!{' '}
        </span>
      </h1>

      <a
        href=""
        className="bg-indigo-500 py-5 px-8 rounded-xl font-bold text-white uppercase shadow-xl"
      >
        Descargar Constancia
      </a>

      <p className="font-bold">Create by :p</p>
    </div>
  );
}

export default App;
