import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const CreateIcon = () => {
    const navigate = useNavigate();

  const handleCreateNew = () => {
    navigate('/create');
  };

  return (
    <div className="create-icon">
      <Button className="icon-button" onClick={handleCreateNew}>+</Button>
    </div>
  );
};

export default CreateIcon;
