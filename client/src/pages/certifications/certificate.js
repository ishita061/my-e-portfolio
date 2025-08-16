// client/src/pages/certifications/certificate.js
import React from 'react';
import './certificate.css';

const Certifications = () => {
  const certList = [
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'June 2025',
      link: 'https://www.credly.com/badges/e4096455-d104-4c8b-8bbd-2c78f47a0bb8/linked_in_profile'
    },
    {
      title: 'Certificate of Participation in CodeClash 2025 – The Battle of Algorithms',
      issuer: 'Unstop',
      date: 'May 2025',
      link: 'https://unstop.com/certificate-preview/341d0001-91a3-4bf8-886c-95a7e123a520?utm_campaign='
    },
    {
      title: 'Problem Solving(Basic)',
      issuer: 'HackerRank',
      date: 'April 2024',
      link: 'https://www.hackerrank.com/certificates/0108b24d8e6a'
    },
    {
      title: 'Python Essentials-1',
      issuer: 'Cisco',
      date: 'July 26, 2024',
      link: 'https://www.credly.com/badges/a5d3dd19-4f1d-4b43-adb6-091d94e1b252/public_url'
    }
  ];

  return (
    <div className="certifications">
  <h1>My Certifications</h1>
  <div className="cert-grid">
    {certList.map((cert, index) => (
      <div
        className="cert-card"
        key={index}
        style={{ animationDelay: `${index * 0.2}s` }} 
      >
        <h2>{cert.title}</h2>
        <p><strong>Issued by:</strong> {cert.issuer}</p>
        <p><strong>Date:</strong> {cert.date}</p>
        <a href={cert.link} target="_blank" rel="noopener noreferrer">
          View Certificate
        </a>
      </div>
    ))}
  </div>
</div>
  );
};

export default Certifications;
