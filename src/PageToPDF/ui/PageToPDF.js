import React, { Component } from "react";
import Spinner from "Spinner/";
import { ErrorMessage, DarkButton } from "styles/Layout";

import {createPDFfromReact, getPDF, createHiddenPDFLink} from 'PageToPDF/utils-PDF';

const API_PDF_ENDPOINT = `http://localhost:3001/api/pdf`;
const questionnaireUrl = `http://localhost:3000/questionnaire/`;

class PageToPDF extends Component {
  state = {
    loading: false,
    error: null
  };
  savePDF = () => {
    const url = `${API_PDF_ENDPOINT}/${encodeURIComponent(questionnaireUrl)}`

    this.setState({ loading: true });
    return getPDF(url) // API call
      .then(blob => {
        const filename = `phq9-completed-${Date.now()}.pdf`;
        createHiddenPDFLink(blob, filename);
        this.setState({ loading: false, completed: true });
      })
      .catch(err => {
        this.setState({ loading: false, error: "Error saving to PDF" });
      });
  };

  render() {
    const { loading, error, completed } = this.state;

    return (
      <div className="pdf-download">
        {loading ? (
          <Spinner />
        ) : (
          <DarkButton>
            <a href="#" onClick={this.savePDF}>Save{completed && 'd'} as PDF</a>
          </DarkButton>          
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    );
  }
}

export default PageToPDF;
