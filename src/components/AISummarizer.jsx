import React, { useState } from 'react';
import './AISummarizer.css';

const AISummarizer = () => {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = () => {
    setLoading(true);
    setSummary("");

    fetch("https://news-api-flask-tmit.onrender.com/api/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input })
    })
      .then(res => res.json())
      .then(data => {
        setSummary(data.summary || "No summary returned.");
      })
      .catch(() => setSummary("Failed to fetch summary."))
      .finally(() => setLoading(false));
  };

  return (
    <div className="summarizer">
      <h2>AI Summarizer</h2>
      <textarea
        placeholder="Paste text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSummarize} disabled={loading || !input.trim()}>
        {loading ? "Summarizing..." : "Summarize"}
      </button>
      {summary && (
        <div className="summary-result">
          <h4>Summary:</h4>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default AISummarizer;
