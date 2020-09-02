import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import ReactModal from 'react-modal';
import { FormHandles } from '@unform/core';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import Loading from '../../components/Loading';
import Input from '../../components/Input';
import Button from '../../components/Button';

import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/edit.svg';
import goBackIcon from '../../assets/goback.svg';

import {
  Container,
  Content,
  ModalContent,
  H1,
  GoBackBox,
  CategoriesContainer,
  IconsContainer,
  StyledForm,
  ButtonsBox,
  StyledFormEdit,
} from './styles';

const ManageCategories = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');
  const [categories, setCategories] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToasts();

  const formRef = useRef<FormHandles>(null);

  ReactModal.setAppElement('#root');

  useEffect(() => {
    async function getEmployeeInfo() {
      try {
        const { data } = await api.get('category');
        setCategories(data);

        setLoading(false);
      } catch (e) {
        addToast(
          'Ocorreu um erro ao tentar carregar as categorias, tente novamente!',
          {
            appearance: 'warning',
            autoDismiss: true,
          },
        );
      }
    }
    getEmployeeInfo();
  }, [addToast]);

  const handleOpenModal = useCallback((id: string) => {
    setCurrentId(id);
    setModalIsOpen(true);
  }, []);

  const handleOpenSecondModal = useCallback((id: string, category: string) => {
    setCurrentId(id);
    setCurrentCategory(category);
    setSecondModalIsOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  const handleCloseSecondModal = useCallback(() => {
    setSecondModalIsOpen(false);
  }, []);

  const handleSubmit = useCallback(
    async ({ name }) => {
      setLoading(true);
      try {
        const { data } = await api.post('category', {
          name,
        });
        setCategories((state) => [...state, data]);
        addToast('Cargo adicionado com sucesso!', {
          appearance: 'success',
          autoDismiss: true,
        });
      } catch (e) {
        addToast(
          'Ocorreu um erro ao tentar enviar a categoria, tente novamente!',
          {
            appearance: 'warning',
            autoDismiss: true,
          },
        );
      }
      setLoading(false);
    },
    [addToast],
  );

  const handleUpdateCategory = async ({ name }: { name: string }) => {
    setLoading(true);
    try {
      await api.put('category', {
        id: currentId,
        name,
      });

      const { data } = await api.get('category');
      setCategories(data);
      addToast('Cargo adicionado com sucesso!', {
        appearance: 'success',
        autoDismiss: true,
      });
    } catch (e) {
      addToast(
        'Ocorreu um erro ao tentar editar a categoria, tente novamente!',
        {
          appearance: 'warning',
          autoDismiss: true,
        },
      );
    }
    setSecondModalIsOpen(false);
    setLoading(false);
  };

  const deleteEmployeeFromApi = async () => {
    setLoading(true);
    try {
      await api.delete(`category/${currentId}`);
      const { data } = await api.get('category');
      setCategories(data);
      addToast('Cargo deletado com sucesso!', {
        appearance: 'success',
        autoDismiss: true,
      });
    } catch (e) {
      addToast(
        'Ocorreu um erro tentar excluir o funcionário, tente novamente!',
        {
          appearance: 'warning',
          autoDismiss: true,
        },
      );
    }
    handleCloseModal();
    setLoading(false);
  };

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
          <H1>Excluir cargo</H1>
          <span>
            Ao excluir um categoria que tenha funcionários cadastrados, os
            mesmos também serão excluídos, tem certeza disso?
          </span>
          <ButtonsBox>
            <Button
              content="Cancelar"
              theme={'secundary'}
              onClick={handleCloseModal}
            />

            <Button content="Excluir" onClick={deleteEmployeeFromApi} />
          </ButtonsBox>
        </ModalContent>
      </ReactModal>

      <ReactModal isOpen={secondModalIsOpen} style={customStyles}>
        <ModalContent>
          <H1>Editar cargo</H1>
          <StyledFormEdit onSubmit={handleUpdateCategory}>
            <Input name="name" defaultValue={currentCategory} />
            <ButtonsBox>
              <Button
                content="Cancelar"
                theme={'secundary'}
                onClick={handleCloseSecondModal}
              />

              <Button content="Enviar" />
            </ButtonsBox>
          </StyledFormEdit>
        </ModalContent>
      </ReactModal>

      <PageHeader />

      <Content>
        <CategoriesContainer>
          <GoBackBox>
            <Link to="/home">
              <img src={goBackIcon} alt="Voltar" />
              Gerenciar Cargos
            </Link>
          </GoBackBox>
          {loading && <Loading />}
          {!loading && (
            <ul>
              {categories.map((category: any) => {
                return (
                  <li>
                    {category.name}

                    <IconsContainer>
                      <img
                        src={deleteIcon}
                        alt="Excluir"
                        onClick={() => handleOpenModal(category._id)}
                      />
                      <Link to={`/update/${category._id}`}></Link>
                      <img
                        src={editIcon}
                        alt="Editar"
                        onClick={() =>
                          handleOpenSecondModal(category._id, category.name)
                        }
                      />
                    </IconsContainer>
                  </li>
                );
              })}
            </ul>
          )}
          <StyledForm ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Nova categoria..." />
            <Button content={'Enviar'} />
          </StyledForm>
        </CategoriesContainer>
      </Content>
    </Container>
  );
};

export default ManageCategories;
