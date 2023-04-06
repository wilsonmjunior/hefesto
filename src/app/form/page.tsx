"use client"

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormData = {
  name: string;
  cpf: string;
  birthdate: string;
};

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  cpf: yup
    .string()
    .required('Campo obrigatório')
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido'),
  birthdate: yup
    .string()
    .required('Campo obrigatório')
    .matches(
      /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/,
      'Data inválida'
    ),
});

type Props = {
  initialValues: FormData;
};

export default function Home({ initialValues }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  const [submittedData, setSubmittedData] = useState<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    setSubmittedData(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" {...register('name')} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="cpf">CPF:</label>
          <input type="text" id="cpf" {...register('cpf')} />
          {errors.cpf && <p>{errors.cpf.message}</p>}
        </div>

        <div>
          <label htmlFor="birthdate">Data de Nascimento:</label>
          <input type="text" id="birthdate" {...register('birthdate')} />
          {errors.birthdate && <p>{errors.birthdate.message}</p>}
        </div>

        <button type="submit">Enviar</button>
      </form>

      {submittedData && (
        <div>
          <h2>Dados enviados:</h2>
          <p>Nome: {submittedData.name}</p>
          <p>CPF: {submittedData.cpf}</p>
          <p>Data de Nascimento: {submittedData.birthdate}</p>
        </div>
      )}
    </div>
  );
}
