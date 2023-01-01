import { FaGithub } from 'react-icons/fa';
import Buttons from './components/Buttons';

function App() {
  const urlPDF =
    'https://drive.google.com/file/d/1JDTfuNLLlBs5lfHsdtYTpLrVPNDLNy49/view?usp=sharing';
  const urlDOCX =
    'https://docs.google.com/document/d/1hm2slmr7ZVIFjSgJo2VYSFKwd7KFXpgU/edit?usp=sharing&ouid=110421330497981010445&rtpof=true&sd=true';

  return (
    <div className="container h-screen mx-auto flex flex-col justify-center items-center gap-10">
      <h1 className="text-3xl text-bold text-center text-black font-black uppercase">
        dale click al botón para{' '}
        <span className="font-bold text-indigo-700 uppercase">
          {' '}
          descargar!!!!!
        </span>
      </h1>
      <Buttons pdf="PDF" urlPDF={urlPDF} />
      <Buttons docx="DOCX" urlDOCX={urlDOCX} />
      <p className="text-2xl font-medium">
        Create by{' '}
        <span className="font-bold text-indigo-700">@ivanosquis13</span>
      </p>
    </div>
  );
}

export default App;
