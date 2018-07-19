import Content from '@/pages/layout/Content';
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
