/* eslint-disable */

// Validação do CPF
function isValidCPF(cpf) {
  if(cpf === undefined || cpf === null) return false;

  if ((cpf = cpf.replace(/[^\d]/g, '')).length !== 11) return false;

  const cpfInvalidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
  ];

  if (cpfInvalidos.indexOf(cpf) > -1) return false;

  let r,
    i;
  let s = 0;
  for (i = 1; i <= 9; i++) s += parseInt(cpf[i - 1]) * (11 - i);
  r = (s * 10) % 11;
  if (r === 10 || r === 11) r = 0;
  if (r !== parseInt(cpf[9])) return false;
  s = 0;
  for (i = 1; i <= 10; i++) s += parseInt(cpf[i - 1]) * (12 - i);
  r = (s * 10) % 11;

  if (r === 10 || r === 11) r = 0;

  if (r !== parseInt(cpf[10])) return false;

  return true;
}

function isValidCNPJ(cnpjFull) {
  if (cnpjFull === null || cnpjFull === undefined) {
    return false;
  }
  var cnpj = cnpjFull.toString().replace(/[-_./]/g, '');

  if(cnpj.length !== 14){
    return false;
  }

  let i;
  const c = cnpj.substr(0, 12);
  const dv = cnpj.substr(12, 2);
  let d1 = 0;

  for (i = 0; i < 12; i++) {
    d1 += c.charAt(11 - i) * (2 + (i % 8));
  }

  if (d1 === 0) {
    return false;
  }

  d1 = 11 - (d1 % 11);

  if (d1 > 9) {
    d1 = 0;
  }

  if (parseInt(dv.charAt(0)) !== d1) {
    return false;
  }

  d1 *= 2;

  for (i = 0; i < 12; i++) {
    d1 += c.charAt(11 - i) * (2 + ((i + 1) % 8));
  }

  d1 = 11 - (d1 % 11);

  if (d1 > 9) {
    d1 = 0;
  }

  if (parseInt(dv.charAt(1)) !== d1) {
    return false;
  }

  return true;
}

function isValidTelefone(telefone) {
  //(##) #####-####
  const regexFixo = /[(]\d\d[)] \d\d\d\d[-]\d\d\d\d/g;
  if (telefone.match(regexFixo)) {
    return true;
  }
  const regexCelular = /[(]\d\d[)] \d\d\d\d\d[-]\d\d\d\d/g;
  if (telefone.match(regexCelular)) {
    return true;
  }
  return false;
}

export default (Validator) => {
  // Validação do CPF
  Validator.extend('cpf', {
    getMessage: field => 'CPF inválido.',
    validate: value => isValidCPF(value),
  });
  // Validação do CPF
  Validator.extend('cnpj', {
    getMessage: field => 'CNPJ inválido.',
    validate: value => isValidCNPJ(value),
  });
  // Validação de telefone
  Validator.extend('telefone', {
    getMessage: field => 'Número de telefone inválido.',
    validate: value => (isValidTelefone(value)),
  });
};