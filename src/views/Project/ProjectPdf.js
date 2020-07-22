import React from 'react';
//import { useQuery } from 'react-apollo';
//import { PDFReader } from 'reactjs-pdf-reader';

import Loading from '../../common/Loading/index';
import './styles.scss';

export default function ProjectPdf() {
  //const [pdfLoading, setPdfLoading] = useState(false);
  const pdfLoading = false;
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
    </div>
  );
}
