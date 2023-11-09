import { Document, Page, pdfjs } from 'react-pdf';
import PropTypes from 'prop-types';
import { useState } from 'react';

// Ensure you set the worker source for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

const PreviewPdf = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className='w-full'>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button
        className='gradient-bg gradient-anim px-5 py-1 rounded-full mr-3 cursor-pointer font-semibold text-white'
        onClick={() => setPageNumber(Math.max(pageNumber - 1, 1))}
        disabled={pageNumber <= 1}
      >
        Previous
      </button>
      <button
        className='gradient-bg gradient-anim px-5 py-1 rounded-full mr-3 cursor-pointer font-semibold text-white'
        onClick={() => setPageNumber(Math.min(pageNumber + 1, numPages))}
        disabled={pageNumber >= numPages}
      >
        Next
      </button>
      <a
        className='gradient-bg gradient-anim px-5 py-1 rounded-full mr-3 cursor-pointer font-semibold text-white'
        href={pdfUrl}
        download='document.pdf'
      >
        Download PDF
      </a>
    </div>
  );
};

PreviewPdf.propTypes = {
  pdfUrl: PropTypes.string,
};

export default PreviewPdf;
