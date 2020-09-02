import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import EmployeeCard from '../../components/EmployeeCard';
import PageHeader from '../../components/PageHeader';

import { Container, TopBar, Content, CardsItem } from './styles';
import Loading from '../../components/Loading';

interface EmployeeProps {
  _id: string;
  imageUrl: string;
  name: string;
  last_name: string;
  job_role: string;
  salary: Number;
  age: Date;
}

const Home = () => {
  const [employees, setEmployees] = useState<Array<Object>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getEmployees() {
      const res = await api.get('employee');
      setEmployees(res.data);
      setLoading(false);
    }
    getEmployees();
  }, []);

  return (
    <Container>
      <PageHeader />
      <TopBar>
        <strong>Funcionários</strong>
        <div>
          <Link to="/categories">Gerenciar Cargos</Link>
          <Link to="/register">Adicionar Funcionário</Link>
        </div>
      </TopBar>

      <Content>
        {loading ? (
          <Loading />
        ) : (
          employees.map((employee: any) => (
            <CardsItem key={employee._id}>
              <EmployeeCard employee={employee} setEmployees={setEmployees} />
            </CardsItem>
          ))
        )}
      </Content>
    </Container>
  );
};

export default Home;
