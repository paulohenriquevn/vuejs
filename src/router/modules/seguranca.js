import Content from '@/views/layout/Content';
import PageLogin from '@/views/seguranca/login/PageLogin';
import ListaUsuario from '@/views/seguranca/usuario/ListaUsuario';
import CadastroUsuario from '@/views/seguranca/usuario/CadastroUsuario';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: PageLogin
  },
  {
    path: '/seguranca',
    name: 'seguranca',
    component: Content,
    children: [
      {
        path: 'usuarios',
        name: 'lista-usuarios',
        component: ListaUsuario
      },
      {
        path: 'cadastro',
        name: 'cadastro-usuario',
        component: CadastroUsuario
      }
    ]
  }
];

export default routes;
