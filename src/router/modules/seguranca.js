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
    children: [
      {
        path: 'usuarios',
        name: 'lista-usuarios',
        component: ListaUsuario,
        meta: {
          title: 'pagePermission',
          icon: 'tab',
          roles: ['admin']
        }
      },
      {
        path: 'cadastro',
        name: 'cadastro-usuario',
        component: CadastroUsuario,
        meta: {
          title: 'pagePermission',
          icon: 'tab',
          roles: ['admin']
        }
      }
    ]
  }
];

export default routes;
