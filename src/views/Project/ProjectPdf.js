import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { PDFReader } from 'reactjs-pdf-reader';

import Loading from '../../common/Loading/index';
import './styles.scss';

export default function ProjectPdf(props) {
  const [pdfLoading, setPdfLoading] = useState(false);
  return (
    <div className="pdf-view">
      <div className="pdf-nav-buttons">
        <button>
          {/*onClick={() => setState({ pdfPage: 1 })}*/}
          First
        </button>
        <button
        // {/*onClick={() => handleChangePage(false)}*/}
        >
          Previous
        </button>
        <p>
          Page
          {/*  {state.pdfPage} of {state.numPages} */}
        </p>
        <button>
          {/*onClick={() => handleChangePage(true)}*/}
          Next
        </button>
        <button>
          {/*onClick={() => setState({ pdfPage: state.numPages })}*/}
          Last
        </button>
      </div>
     {/* <PDFReader />
             url={props.projectResearch[0].url}
        onDocumentComplete={onDocumentComplete}
        page={state.pdfPage}*/}

      {pdfLoading ? <Loading /> : null}
      <div className="pdf-nav-buttons">
        <button>
          {/*onClick={() => setState({ pdfPage: 1 })}*/}
          First
        </button>
        <button>
          {/*onClick={() => handleChangePage(false)}*/}
          Previous
        </button>
        <p>Page {/*{state.pdfPage} of {state.numPages}*/}</p>
        <button>
          {/*onClick={() => handleChangePage(true)}*/}
          Next
        </button>
        <button>
          {/*onClick={() => setState({ pdfPage: state.numPages })}*/}
          Last
        </button>
      </div>
    </div>
  );
}
