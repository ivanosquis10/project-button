const Buttons = ({ pdf, urlPDF, docx, urlDOCX }) => {
  return (
    <a
      href={urlPDF || urlDOCX}
      target="_blank"
      className="bg-indigo-500 hover:bg-indigo-800 w-6/12 text-center py-5 px-8 rounded-xl font-bold text-white uppercase shadow-xl ease-in-out duration-300"
    >
      Descargar Constancia de Residencia en {pdf || docx}
    </a>
  );
};

export default Buttons;