import "./App.css"
import Layout from './components/layouts/Layout';
import ItemListContainer from './components/items/ItemListContainer';
import FormContainer from './components/items/FormContainer';

function App() {
  return (
    <Layout>
      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Seccion principal</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore </p> magna aliqua.</p>
      </section>
    </Layout>
  );
}

export default App;