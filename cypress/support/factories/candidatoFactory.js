import { fakerPT_BR as faker } from '@faker-js/faker';

export function gerarCandidato(sobrescrever = {}) {
  return {
    nome: `${faker.person.firstName('female')} ${faker.person.lastName()}`,
    email: faker.internet.email(),
    telefone: `${faker.number.int({ min: 11, max: 99 })}9${faker.string.numeric(8)}`,
    sexo: 'Feminino',
    cep: '59015900',
    logradouro: 'Avenida Nevaldo Rocha',
    numero: '100',
    bairro: 'Tirol',
    cidade: 'NATAL/RN',
    escolaridade: 'Ensino Técnico Completo',
    curso: 'Ciência da Computação',
    linkedin: 'https://www.linkedin.com/in/candidato-teste',
    comoChegouAteAVaga: 'Rede Social',
    pretensaoSalarial: '2000',
    ...sobrescrever, //em JS, s euma chave aparece duas vezes no mesmo objeto, o valor que vinher por ultimo será o em vigor
  };
}

//escreveria no padrão builder se tivesse mais regras