var login = function (name, password) {
    console.log('values name ', name, 'password ', password);
    if (name === 'pula') {
        console.log('User::Pula');
        if (password === '1234') {
            console.log('User::Pula logged successful');
            var value = `successfully logged name :: ${name} password :: ${password}`;

            return value;
        } else {
            console.log('User::Pula password::not_matching');
            var value = 'password not matching';

            return value;
        }
    } else {
        console.log('User::Not_found');
        var value = 'user not found';

        return value;
    }
}

module.exports = login;