import React from 'react';
import { motion } from 'motion/react';

const certifications = [
  {
    id: '01',
    title: 'TensorFlow Developer Certificate',
    issuer: 'TensorFlow',
    date: 'Issued Jan 2024 · Expires Jan 2027',
    description: 'Earned the official TensorFlow Developer Certificate from Google, validating hands-on proficiency in building and training machine learning and deep learning models using TensorFlow. The certification covers computer vision with CNNs, natural language processing, time series forecasting, and real-world model deployment demonstrating the ability to solve practical ML problems end-to-end.',
    skills: ['TensorFlow', 'Deep Learning', 'Convolutional Neural Networks (CNNs)', 'Natural Language Processing (NLP)', 'Time Series Forecasting'],
    image: 'https://i.ibb.co/BD3W183/Your-paragraph-text.png',
    link: '#'
  },
  {
    id: '02',
    title: 'AWS Certified DevOps Engineer – Professional',
    issuer: 'Amazon Web Services',
    date: 'Issued Jun 2024 · Expires Jun 2026',
    description: 'Achieved the AWS Certified DevOps Engineer – Professional certification, one of AWS\'s most advanced credentials. Validates expertise in implementing and managing continuous delivery systems on AWS, automating security controls, governance, and compliance, and designing resilient, self-healing systems at scale. Demonstrates deep fluency in monitoring, logging, and incident response across complex cloud environments.',
    skills: ["Amazon Web Services (AWS)", "CI/CD Pipelines", "Infrastructure as Code (Terraform / CloudFormation)", "Site Reliability Engineering", "Monitoring & Incident Response"],
    image: 'https://i.ibb.co/XxrFYCKC/Shanon-Dsilva.png',
    link: '#'
  },
  {
    id: '03',
    title: 'Google Cloud Professional Machine Learning Engineer',
    issuer: 'Google Cloud',
    date: 'Issued May 2023 · Expires May 2025',
    description: 'Google-certified professional skilled in designing, building, and deploying machine learning models on Google Cloud Platform (GCP). This certification demonstrates advanced expertise in translating business challenges into ML solutions using tools like Vertex AI, TensorFlow, and BigQuery ML. It validates proficiency in data engineering, model optimisation, scalability, and governance ensuring that ML workflows align with enterprise performance and compliance standards.',
    skills: ['End-to-End ML System Design', 'Data Engineering for ML', 'Model Development & Optimisation', 'Operationalising ML Models (MLOps)', 'Model evaluation', 'NLP fundamentals', 'Feature Engineering'],
    image: 'https://i.ibb.co/bjDHTv4D/GCP.png',
    link: '#'
  }
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.2em] text-accent uppercase"
          >
            Credentials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mt-4 tracking-tighter"
          >
            CERTIFICATIONS
          </motion.h2>
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 max-w-sm text-sm leading-relaxed"
        >
          Professional certifications validating technical proficiency across AI, Cloud, and Frontend Engineering.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="group flex flex-col h-full"
          >
            <a 
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-100 mb-8 border border-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1 block cursor-pointer"
            >
              <img 
                src={cert.image} 
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </a>
            
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-mono font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded">{cert.id}</span>
                <div className="h-[1px] flex-grow bg-gray-100" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500">{cert.issuer}</span>
              </div>
              
              <h3 className="text-2xl font-bold leading-tight group-hover:text-accent transition-colors mb-3">
                {cert.title}
              </h3>
              
              <p className="text-[13px] font-medium text-gray-400 mb-4 font-mono">
                {cert.date}
              </p>

              <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-4">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {cert.skills?.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-50 text-gray-400 border border-gray-100 group-hover:border-accent/20 group-hover:text-accent transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
