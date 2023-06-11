import Validator from '../app';

test('Проверка имени пользователя. Имя корректное', () => {
  const nickName = 'ThePupas-M';
  const validateNickName = new Validator(nickName);
  expect(validateNickName.validateUserName()).toBe(nickName);
});

test('Проверка имени пользователя. Имя содержит не разрешенные символы', () => {
  expect(() => {
    const nickName = 'ThePupas-@';
    const validateNickName = new Validator(nickName);
    validateNickName.validateUserName();
  }).toThrowError(
    new Error(
      'Разрешены: только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)',
    ),
  );
});

test('Проверка имени пользователя. Имя содержит цифру в начале', () => {
  expect(() => {
    const nickName = '1ThePupas';
    const validateNickName = new Validator(nickName);
    validateNickName.validateUserName();
  }).toThrowError(
    new Error(
      'Имя пользоватебя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире.',
    ),
  );
});

test('Проверка имени пользователя. Имя содержит цифру в конце', () => {
  expect(() => {
    const nickName = 'ThePupas_1';
    const validateNickName = new Validator(nickName);
    validateNickName.validateUserName();
  }).toThrowError(
    new Error(
      'Имя пользоватебя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире.',
    ),
  );
});

test('Проверка имени пользователя. Имя содержит тире в начале', () => {
  expect(() => {
    const nickName = '-ThePupas';
    const validateNickName = new Validator(nickName);
    validateNickName.validateUserName();
  }).toThrowError(
    new Error(
      'Имя пользоватебя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире.',
    ),
  );
});

test('Проверка имени пользователя. Имя содержит знак подчеркивания в конце', () => {
  expect(() => {
    const nickName = 'ThePupas_';
    const validateNickName = new Validator(nickName);
    validateNickName.validateUserName();
  }).toThrowError(
    new Error(
      'Имя пользоватебя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире.',
    ),
  );
});

test('Проверка имени пользователя. Имя содержит более 3 цифр подряд', () => {
  expect(() => {
    const nickName = 'ThePupas-12342342M';
    const validateNickName = new Validator(nickName);
    validateNickName.validateUserName();
  }).toThrowError(
    new Error(
      'Имя не должно содержать подряд более трёх цифр.',
    ),
  );
});
