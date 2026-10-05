import Header from './Header';
import Footer from './Footer';
import estilo from './Layout.module.css';

const Layout = ({ children }) => {
return (
    <div className={estilo.layoutContainer}>
      {/* Encabezado con Nav */}
    <Header />

      {/* Contenido dinámico de la app */}
    <main className={estilo.contenidoPrincipal}>
        {children}
    </main>

      {/* Pie de página con equipo e info */}
    <Footer />
    </div>
);
};

export default Layout;









//import Contador from "../Contador"
//import FormContainer from "../items/FormContainer"
//import ItemListContainer from "../items/ItemListContainer"
//import estilo from "./Layout.module.css"

//const Layout = () => {
//return(
 //   <>
  //  <h1 className={estilo.titulo}>Charmings' Store</h1>
   // <h2 className={estilo.productos}>Probando Producto</h2>
   // <ItemListContainer />
   // <FormContainer />
   // </>
//)
//}

//export default Layout;*/