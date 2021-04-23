global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem vindo à Node Store!';

module.exports = {
    connectionString: 'mongodb+srv://gabriel:gabriel@cluster0.tapvz.mongodb.net/node-store?retryWrites=true&w=majority',
    sendgridKey: 'minha chave',
    containerConnectionString: 'TBD'
}