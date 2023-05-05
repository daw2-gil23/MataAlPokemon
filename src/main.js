
// Import our custom CSS
import './scss/styles.scss'

import { header } from './componentes/header'
import { enrutador } from './componentes/enrutador'


// Importamos el componente por defecto
const componenteHome = await import('./vistas/home')
// Extraemos el objeto
const homeVista = componenteHome.default
// Inyectamos el componente header
document.querySelector('header').innerHTML = header.template
header.script()


enrutador.observadorRutas()
// Cargamos la página home
window.location = '#/home'