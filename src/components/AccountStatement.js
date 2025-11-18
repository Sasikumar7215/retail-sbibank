import React from "react";
import "./AccountStatement.css";

export default function AccountStatement({ data }) {
  if (!data || data.length === 0) {
    return <p className="text-muted">No data available.</p>;
  }

  return (
    <div className="statement-box">
      <div className="header">Account Statement</div>
      <table>
        <tbody>
          {data.map((row, index) => {
            if (row.section && Array.isArray(row.value)) {
              // Section like Address
              return (
                <tr key={index}>
                  <td className="label section-label">{row.label}</td>
                  <td className="value">
                    {row.value.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </td>
                </tr>
              );
            } else {
              return (
                <tr key={index}>
                  <td className="label">{row.label}</td>
                  <td className="value">{row.value}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
