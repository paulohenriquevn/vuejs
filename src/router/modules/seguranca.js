import Layout from '@/views/layout/Layout';
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
    component: Layout,
    meta: {
      title: 'Segurança',
      icon: 'fa fa-users'
    },
    children: [
      {
        path: 'usuarios',
        name: 'lista-usuarios',
        component: ListaUsuario,
        meta: {
          title: 'Lista de Usuários',
          icon: 'fa fa-users',
          hidden: false,
          roles: ['admin']
        }
      },
      {
        path: 'cadastro',
        name: 'cadastro-usuario',
        component: CadastroUsuario,
        meta: {
          title: 'Cadastro de Usuários',
          icon: 'fa fa-users',
          hidden: false,
          roles: ['admin']
        }
      }
    ]
  }
];

export default routes;
