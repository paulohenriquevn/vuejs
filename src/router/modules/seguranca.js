import PageLogin from '@/pages/seguranca/login/PageLogin';
import ListaUsuario from '@/pages/seguranca/usuario/ListaUsuario';
import CadastroUsuario from '@/pages/seguranca/usuario/CadastroUsuario';

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: PageLogin
  },
  {
    path: '/usuarios',
    name: 'lista-usuarios',
    component: ListaUsuario,
    children: [
      {
        path: 'cadastro',
        name: 'cadastro-usuario',
        component: CadastroUsuario,
        meta: {
          menu: 'cadastro-usuario'
        }
      }
    ]
  }
];

export default routes;
