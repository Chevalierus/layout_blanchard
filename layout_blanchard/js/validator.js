new JustValidate('#form', {
    rules: {
        name: {
        required: true,
        minLength: 2,
        maxLength: 15,
        },
        tel: {
        required: true,
        },
    },
  messages: {
    name: {
        required: 'Введите ваше имя'
    },
    tel: {
        required: 'Введите ваш телефон',
        tel: 'Введите ваш телефон'
    },
},
    colorWrong: '#D11616',
});