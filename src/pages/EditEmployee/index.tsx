import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import ReactModal from 'react-modal';
import { FormHandles } from '@unform/core';
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
  LoadingStyle,
} from './styles';

interface EmployeeProps {
  _id: string;
  imageUrl: string;
  name: string;
  last_name: string;
  job_role: string;
  salary: Number;
  age: Date | string;
}

const EditEmployee = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [categories, setCategories] = useState([{}]);
  const [defaultJob, setDefaultJob] = useState('');
  const [loading, setLoading] = useState(true);
  const { addToast } = useToasts();

  ReactModal.setAppElement('#root');

  const { id } = useParams();
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    async function getEmployeeInfo() {
      try {
        const res = await api.get(`employee/${id}`);
        const { data } = await api.get('category');

        setCategories(data);
        setDefaultJob(res.data.job_role);

        res.data.age = moment(res.data.age).format('YYYY-MM-DD');

        setLoading(false);
        const node = formRef.current;
        node?.setData(res.data);
      } catch (e) {
        addToast(
          'Ocorreu um erro ao tentar localizar o Funcionário, tente novamente!',
          {
            appearance: 'warning',
            autoDismiss: true,
          },
        );
      }
    }
    getEmployeeInfo();
  }, [addToast, id]);

  const handleSubmit = useCallback(
    async (data: EmployeeProps) => {
      const age = new Date(data.age);

      data.age = age.toLocaleDateString('en-US');

      try {
        setLoading(true);
        await api.put(`employee/${id}`, data);
        setModalIsOpen(true);
        setLoading(false);
      } catch (e) {
        addToast(
          'Ocorreu um erro tentar atualizar o Funcionário, tente novamente!',
          {
            appearance: 'warning',
            autoDismiss: true,
          },
        );
        setLoading(false);
      }
    },
    [addToast, id],
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
          <H1>Funcionário atualizado</H1>
          <span>Funcionário atualizado com sucesso!</span>
          <Space />
        </ModalContent>
      </ReactModal>
      <PageHeader />

      <Content>
        <StyledForm onSubmit={handleSubmit} ref={formRef}>
          <GoBackBox>
            <Link to="/home">
              <img src={goBackIcon} alt="Voltar" />
              Editar Funcionário
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
              defaultValue={defaultJob}
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
          {!loading && (
            <ButtonBox>
              <Button type="submit" content="Salvar" />
            </ButtonBox>
          )}
          {loading && (
            <LoadingStyle>
              <Loading />
            </LoadingStyle>
          )}
        </StyledForm>
      </Content>
    </Container>
  );
};

export default EditEmployee;
