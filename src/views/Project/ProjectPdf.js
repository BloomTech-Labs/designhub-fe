import React from 'react';
//import { useQuery } from 'react-apollo';
//import { PDFReader } from 'reactjs-pdf-reader';

import Loading from '../../common/Loading/index';
import './styles.scss';

<<<<<<< HEAD
export default function ProjectPdf({ props, projectImg, project }) {
  const [pdfLoading, setPdfLoading] = useState(false);
  const [pdfPage, setPdfPage] = useState(1);
  const [numPages, setNumPages] = useState(null);

  const onDocumentComplete = (totalPage) => {
    setNumPages({ numPages: totalPage, pdfLoading: false });
  };

  const handleChangePage = (direction) => {
    if (direction && pdfPage !== numPages) {
      setPdfPage({ pdfPage: pdfPage + 1 });
    } else if (!direction && pdfPage !== 1) {
      setPdfPage({ pdfPage: pdfPage - 1 });
    }
  };
=======
export default function ProjectPdf() {
  //const [pdfLoading, setPdfLoading] = useState(false);
  const pdfLoading = false;
>>>>>>> cba8fd1f468182ef11996ae0c9d4418870d57b7b
  return (
    <div className="pdf-view">
      <div className="pdf-nav-buttons">
        <button onClick={() => setPdfPage({ pdfPage: 1 })}>First</button>
        <button onClick={() => handleChangePage(false)}>Previous</button>
        <p>
          Page
          {pdfPage} of {numPages}
        </p>
        {/* <button onClick={() => handleChangePage(true)}>Next</button>
        <button onClick={() => setPdfPage({ pdfPage: numPages })}>Last</button> */}
      </div>
<<<<<<< HEAD
      <PDFReader
        url={projectImg?.url}
=======
      {/* <PDFReader />
             url={props.projectResearch[0].url}
>>>>>>> cba8fd1f468182ef11996ae0c9d4418870d57b7b
        onDocumentComplete={onDocumentComplete}
        page={pdfPage}
      />

      {pdfLoading ? <Loading /> : null}
      <div className="pdf-nav-buttons">
        <button onClick={() => setPdfPage({ pdfPage: 1 })}>First</button>
        <button onClick={() => handleChangePage(false)}>Previous</button>
        <p>
          Page {pdfPage} of {numPages}
        </p>
        <button onClick={() => handleChangePage(true)}>Next</button>
        <button onClick={() => setPdfPage({ pdfPage: numPages })}>Last</button>
      </div>
    </div>
  );
}
