import React from "react";
import { Link } from "react-router-dom";

interface ResultProps {
  result: string;
}

const Result: React.FC<ResultProps> = ({ result }) => {
    return (
        <div style={{ textAlign: "center" }}>
            <h1 className="result">{result}</h1>
            <Link to="/" style={{ textDecoration: "none" }}>
                <button style={{ marginTop: "20px" }}> Play Again</button>
            </Link>
        </div>
    );
};

export default Result;