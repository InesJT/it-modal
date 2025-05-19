import PropTypes from 'prop-types';

import './style.css';

const ItModal = ({ isVisible, setIsVisible, title, body, color }) => {
  if (!isVisible) {
    return null;
  }

  const handleClose = () => setIsVisible(false);

  const handleBackgroundClick = (event) => {
    if (event.target.className === 'modal-overlay') {
      setIsVisible(false);
    }
  }

  // Helper to check if color is a valid hex color
  const isValidHex = (hex) =>
    typeof hex === 'string' &&
    /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);

  return (
    <div className="modal-overlay" onClick={handleBackgroundClick}>
      <div className="modal-container">
        <button className="modal-close" onClick={handleClose}>
          ×
        </button>
        {title && (
          <div className="modal-header">
            <h2 className="modal-title">{title}</h2>
          </div>
        )}
        <div
          className={`modal-body ${!title ? 'no-header-body' : ''}`}
          style={isValidHex(color) ? { color } : undefined}
        >
          {body}
        </div>
      </div>
    </div>
  );
};

ItModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  title: PropTypes.string,
  body: PropTypes.node.isRequired,
  color: PropTypes.string,
};

export default ItModal;
