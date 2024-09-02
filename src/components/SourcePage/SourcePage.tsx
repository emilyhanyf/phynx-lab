import React from "react";
import "./SourcePage.css";
import { ReactComponent as Cross } from "../../assets/Cross.svg";
import Preview from "../../assets/Preview.png";

const SourcePage: React.FC = () => {
  return (
    <div className="source-section">

      <div className="source-section-header">
        <h3>240809 RAG_백서.pdf</h3>
        <div className="cross-container">
          <Cross />
        </div>
      </div>

      <div className="source-section-body">
        <div className="preview-img">
          <img src={Preview} alt="PDF Preview" className="bordered-img"/>
        </div>
        <div className="button-container">
            <button> 보기 </button>
            <button> 다운로드 </button>
        </div>
        <div className="line" />
      </div>

    </div>
  );
};

export default SourcePage;
