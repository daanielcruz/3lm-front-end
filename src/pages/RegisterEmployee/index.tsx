import React, { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import ReactModal from 'react-modal';
import moment from 'moment';

import api from '../../services/api';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import Loading from '../../components/Loading';

import goBackIcon from '../../assets/goback.svg';
import closeIcon from '../../assets/close.svg';

import {
  Container,
  Content,
  StyledForm,
  InputGroup,
  ButtonBox,
  GoBackBox,
  ModalContent,
  H1,
  Space,
} from './styles';

interface NewEmployeeFormData {
  _id: string;
  imageUrl: string;
  name: string;
  last_name: string;
  job_role: string;
  salary: Number;
  age: Date | string;
}

const RegisterEmployee: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [categories, setCategories] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToasts();

  useEffect(() => {
    async function getCategories() {
      const { data } = await api.get('category');
      setCategories(data);
      setLoading(false);
    }
    getCategories();
  }, []);

  const handleSubmit = useCallback(
    async (data: NewEmployeeFormData, { reset }) => {
      data.age = moment(data.age).format('MM-DD-YYYY');

      console.log(data.age);
      try {
        setLoading(true);
        await api.post('employee', data);
        setModalIsOpen(true);
        setLoading(false);
        reset();
      } catch (e) {
        addToast(
          'Ocorreu um erro tentar adicionar o funcionário, tente novamente!',
          {
            appearance: 'warning',
            autoDismiss: true,
          },
        );
        setLoading(false);
      }
    },
    [addToast],
  );

  const handleCloseModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

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

  return (
    <Container>
      <ReactModal isOpen={modalIsOpen} style={customStyles}>
        <ModalContent>
          <img src={closeIcon} alt="Fechar" onClick={handleCloseModal} />
          <H1>Funcionário criado</H1>
          <span>Funcionário criado com sucesso!</span>
          <Space />
        </ModalContent>
      </ReactModal>
      <PageHeader />

      <Content>
        <StyledForm onSubmit={handleSubmit}>
          <GoBackBox>
            <Link to="/home">
              <img src={goBackIcon} alt="Voltar" />
              Adicionar Funcionário
            </Link>
          </GoBackBox>
          <InputGroup>
            <Input
              type="text"
              id="name"
              name="name"
              label="Nome"
              placeholder="Nome"
              required
            />
            <Input
              type="text"
              id="last_name"
              name="last_name"
              label="Sobrenome"
              placeholder="Sobrenome"
              required
            />
          </InputGroup>

          <InputGroup>
            <Select
              defaultChecked={true}
              label="Cargo"
              options={categories}
              id="job_role"
              name="job_role"
              required
            />
            <Input
              type="date"
              id="age"
              name="age"
              label="Idade"
              placeholder="Idade"
              min="0"
              required
            />
          </InputGroup>

          <InputGroup>
            <Input
              type="number"
              id="salary"
              name="salary"
              label="Salário"
              placeholder="Salário"
              required
            />
            <Input
              type="url"
              id="imageUrl"
              name="imageUrl"
              label="URL da foto do Funcionário"
              placeholder="URL da foto do Funcionário"
              required
            />
          </InputGroup>
          <ButtonBox>
            {!loading ? <Button type="submit" content="Salvar" /> : <Loading />}
          </ButtonBox>
        </StyledForm>
      </Content>
    </Container>
  );
};

export default RegisterEmployee;
