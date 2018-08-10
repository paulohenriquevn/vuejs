import ModuleSeguranca from './seguranca';
import ModuleSistema from './sistema';

const merged = {
  ...ModuleSeguranca,
  ...ModuleSistema,
};

export default merged;
