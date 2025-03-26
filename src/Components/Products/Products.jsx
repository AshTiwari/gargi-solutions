import './Products.css';
import contentCreation from '../../assets/contentCreation.jpeg';
import websolution from '../../assets/web.jpeg'
import fintech from '../../assets/fintech.jpeg'
import resumeReview from '../../assets/resume.jpeg'
import consumables1 from '../../assets/consumables1.png';
import { useState } from 'react';
import ProductModal from './ProductModal';

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  const openModal = (product) => {
    setActiveProduct(product);
  };

  const closeModal = () => {
    setActiveProduct(null);
  };

  const products = [
    {
      id: 1,
      name: "Content Creation",
      image: contentCreation,
      modalContent: {
        title: "Elevate Your Brand with Compelling Content",
        description:
        "Kratoos  has made a remarkable impact on job seekers by refining and enhancing professional resumes. Our meticulous attention to detail and expert craftsmanship ensure a standout resume that accelerates career success.",   
        services: [
          "Content Strategy Development",
          "Copywriting & Blogging",
          "Social Media Content",
          "Visual & Multimedia Content",
          "SEO-Optimized Content",
          "Brand Voice Consistency"
        ],
        image: contentCreation
      }
    },
    {
      id: 2,
      name: "Resume Review",
      image: resumeReview,
      modalContent: {
        title: "Transform Your Resume Into A Career-Winning Document",
        description:
          "Kratoos  has made a remarkable impact on job seekers by refining and enhancing professional resumes. Our meticulous attention to detail and expert craftsmanship ensure a standout resume that accelerates career success.",
        services: [
          "Professional resume analysis and detailed feedback",
          "ATS (Applicant Tracking System) optimization",
          "Industry-specific keyword optimization",
          "Format and layout enhancement",
          "Achievement highlighting and quantification",
          "Career narrative development"
        ],
        image: consumables1
      }
    },
    {
      id: 3,
      name: "Web Solutions",
      image: websolution,
      modalContent: {
        title: "Innovative Web Solutions for a Digital World",
        description:
          "Kratoos empowers brands with visually captivating, user-friendly, and technically robust web solutions, ensuring a strong and impactful online presence.",
        services: [
          "Custom Website Design",
          "Responsive Development",
          "SEO & Performance Optimization",
          "E-commerce Solutions",
          "Content Management Integration",
          "Ongoing Maintenance & Support"
        ],
        image: websolution
      }
    },
    {
      id: 4,
      name: "Fin Tech Solutions",
      image: fintech,
      modalContent: {
        title: "Empowering Finance with Fin Tech Solutions",
        description:
          "Kratoos simplifies the fintech landscape for businesses with cutting-edge software solutions and strategic content. From seamless financial integrations to compelling industry-focused content, we empower brands to navigate fintech complexities with confidence and efficiency.",
        services: [
          "Digital Payment Solutions",
          "Blockchain Integration",
          "Financial Analytics",
          "Security & Compliance",
          "Mobile Banking Solutions",
          "Automated Investment Tools"
        ],
        image: fintech
      }
    },
    {
      id: 5,
      name: "Accounting Services",
      image: fintech,
      modalContent: {
        title: "Professional Accounting Services",
        description:
          "Kratoos provides comprehensive accounting solutions to help businesses maintain financial health and compliance. Our expert team ensures accurate bookkeeping, tax preparation, and financial planning services.",
        services: [
          "Bookkeeping & Financial Records",
          "Tax Planning & Preparation",
          "Financial Statement Preparation",
          "Payroll Services",
          "Business Advisory Services",
          "Audit & Assurance"
        ],
        image: fintech
      }
    },
  ];

  return (
    <div className='products'>
      <div className="products-heading">
        <h2>Our Products & Services</h2>
        {/* <p>Discover our comprehensive range of professional solutions</p> */}
      </div>
      <div className="products-box">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} height={250} width={400} />
            <div className="caption">
              <button className='btn' onClick={() => openModal(product)}>
                <p>{product.name}</p>
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeProduct && (
        <ProductModal
          // In this context, showModal is not used since we trigger the modal from the product button.
          showModal={() => { }}
          isModalOpen={true}
          handleCancel={closeModal}
          handleOk={closeModal}
          triggerLabel={activeProduct.name}
          modalContent={activeProduct.modalContent}
        />
      )}
    </div>
  );
};

export default Products;
