import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { CheckCircle, X } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import './Products.css';

const ProductModal = ({ 
  showModal, 
  isModalOpen, 
  handleCancel, 
  handleOk, 
  triggerLabel, 
  modalContent 
}) => {
  const { title, description, services, image } = modalContent;

  return (
    <>
      <div className="caption">
        <button className="btn" onClick={showModal}>
          <p>{triggerLabel}</p>
        </button>
      </div>

      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        closeIcon={<X size={24} />}
        closable={true}
        footer={[
          <div key="contact" style={{ display: 'flex', justifyContent: 'center' }}>
            <HashLink
              to="/#contact"
              smooth
              className="footer-btn get-started-btn"
              style={{ width: 'auto', minWidth: '120px', padding: '8px 24px', textAlign: 'center' }}
              onClick={handleOk}
            >
              Contact Us
            </HashLink>
          </div>
        ]}
      >
        <div className="modal-content">
          <div className="right-section">
            <h2>{title}</h2>
            <p>{description}</p>
            {services && services.length > 0 && (
              <>
                <h3>Our Services Include:</h3>
                <ul className="service-list">
                  {services.map((service, index) => (
                    <li key={index} className="service-item">
                      <CheckCircle color="#22c55e" size={20} />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          {image && (
            <div className="left-section">
              <img 
                src={image} 
                alt="Modal Visual" 
                className="image"
                height={100}
              />
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

ProductModal.propTypes = {
  showModal: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleOk: PropTypes.func.isRequired,
  triggerLabel: PropTypes.string.isRequired,
  modalContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
  }).isRequired,
};

export default ProductModal;