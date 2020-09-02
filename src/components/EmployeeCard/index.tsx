import React, { useCallback, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import moment from 'moment';
import 'moment/locale/pt-br';

import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/edit.svg';
import closeIcon from '../../assets/close.svg';

import Button from '../Button';

import api from '../../services/api';

import {
  Container,
  IconsContainer,
  ModalContent,
  H1,
  Space,
  ButtonsBox,
  ModalContentEmployeeInfo,
  EmployeePhoto,
  EmployeeInfo,
} from './styles';

interface EmployeeProps {
  _id: string;
  imageUrl: string;
  name: string;
  last_name: string;
  job_role: string;
  salary: Number;
  age: Date;
}

interface EmployeeCardProps {
  employee: EmployeeProps;
  setEmployees: React.Dispatch<React.SetStateAction<Array<Object>>>;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  employee,
  setEmployees,
}) => {
  const [modalContent, setModalContent] = useState<Array<any>>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);
  const { addToast } = useToasts();

  ReactModal.setAppElement('#root');

  const handleCloseModal = useCallback(async () => {
    setModalIsOpen(false);
    const res = await api.get('employee');
    setEmployees(res.data);
  }, [setEmployees]);

  const handleCloseSecondModal = useCallback(async () => {
    setSecondModalIsOpen(false);
  }, []);

  const modalDeleteSuccess = useCallback(() => {
    setModalContent([
      <ModalContent key={employee._id}>
        <img src={closeIcon} alt="Fechar" onClick={handleCloseModal} />
        <H1>Funcionário excluído</H1>
        <span>Funcionário excluído com sucesso!</span>
        <Space />
      </ModalContent>,
    ]);
  }, [handleCloseModal, employee._id, setModalContent]);

  const deleteEmployeeFromApi = useCallback(async () => {
    try {
      await api.delete(`employee/${employee._id}`);
      modalDeleteSuccess();
    } catch (e) {
      addToast(
        'Ocorreu um erro tentar excluir o funcionário, tente novamente!',
        {
          appearance: 'warning',
          autoDismiss: true,
        },
      );
    }
  }, [employee._id, addToast, modalDeleteSuccess]);

  const modalConfirmToDelete = useCallback(() => {
    setModalContent([
      <ModalContent key={employee._id}>
        <H1>Excluir Funcionário</H1>
        <span>Tem certeza que deseja excluir este funcionário?</span>
        <ButtonsBox>
          <Button
            content="Cancelar"
            theme={'secundary'}
            onClick={handleCloseModal}
          />

          <Button content="Excluir" onClick={deleteEmployeeFromApi} />
        </ButtonsBox>
      </ModalContent>,
    ]);
    setModalIsOpen(true);
  }, [
    employee._id,
    deleteEmployeeFromApi,
    handleCloseModal,
    setModalContent,
    setModalIsOpen,
  ]);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      borderRadius: 0,
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
  };

  const customStylesSecond = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      borderRadius: 0,
      padding: 0,
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
  };

  return (
    <Container>
      <ReactModal isOpen={secondModalIsOpen} style={customStylesSecond}>
        <ModalContentEmployeeInfo key={employee._id}>
          <img src={closeIcon} alt="Fechar" onClick={handleCloseSecondModal} />
          <EmployeePhoto>
            <img src={employee.imageUrl} alt={employee.name} />
          </EmployeePhoto>

          <EmployeeInfo>
            <H1>
              {employee.name} {employee.last_name}
            </H1>
            <span>{employee.job_role}</span>
            <strong>Idade</strong>
            <span>{moment().diff(employee.age, 'years')} anos</span>
            <strong>Salário</strong>
            <span>
              {employee.salary.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>

            <IconsContainer>
              <img
                src={deleteIcon}
                alt="Excluir"
                onClick={modalConfirmToDelete}
              />
              <Link to={`/update/${employee._id}`}>
                <img src={editIcon} alt="Editar" />
              </Link>
            </IconsContainer>
          </EmployeeInfo>
        </ModalContentEmployeeInfo>
      </ReactModal>

      <ReactModal isOpen={modalIsOpen} style={customStyles}>
        {modalContent}
      </ReactModal>

      <img
        src={employee.imageUrl}
        alt={employee.name}
        onClick={() => setSecondModalIsOpen(true)}
      />
      <strong onClick={() => {}}>
        {employee.name} {employee.last_name}
      </strong>
      <span onClick={() => {}}>{employee.job_role}</span>

      <IconsContainer>
        <img src={deleteIcon} alt="Excluir" onClick={modalConfirmToDelete} />
        <Link to={`/update/${employee._id}`}>
          <img src={editIcon} alt="Editar" />
        </Link>
      </IconsContainer>
    </Container>
  );
};

export default EmployeeCard;
