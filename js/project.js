let login = prompt('Введите ваш логин: ', '');

if (login == 'Админ') {
    var password = prompt('Введите пароль: ', '');
    if (password == 'Чёрный Властелин') {
        alert('Добро пожаловать!');
    } else if (password == null) {
        alert('Вход отменен!');
    } else if (password !== 'Чёрный Властелин') {
        alert('Пароль неверен!');
    }
} else if (login == null) {
    alert('Вход отменен!');
} else if (login !== 'Админ') {
    alert('Я вас не знаю!');
} 