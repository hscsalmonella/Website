import React, { useState } from 'react';
import Modal from 'react-modal';
import { Document, Page } from 'react-pdf';

Modal.setAppElement('#root');

const PDFPopup = ({ isOpen, onClose, pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);

  const handleDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="PDF Popup"
      className="pdf-popup"
    >
      <div className="pdf-popup-content">
        <Document
          file={pdfUrl}
          onLoadSuccess={handleDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={400}
            />
          ))}
        </Document>
      </div>
    </Modal>
  );
};

export default PDFPopup;
