import styles from './Footer.module.css';

const integrantes = [
{
    id: 1,
    nombre: 'Ana Gómez',
    puesto: 'Desarrolladora Frontend',
    contacto: 'ana@empresa.com',
},
{
    id: 2,
    nombre: 'Carlos López',
    puesto: 'Diseñador UX/UI',
    contacto: 'carlos@empresa.com',
    
},
{
    id: 3,
    nombre: 'María Rodríguez',
    puesto: 'Project Manager',
    contacto: 'maria@empresa.com',
    
}
];

const Footer = () => {
return (
    <footer className={styles.footer}>
      {/* Información de la empresa */}
    <div className={styles.empresaInfo}>
        <h3>Talento Tech Corp</h3>
        <p>Soluciones digitales e innovación web.</p>
        <p>© 2026 Todos los derechos reservados.</p>
    </div>

      {/* Seccion con tarjetas de 3 personas */}
    <div className={styles.equipoSeccion}>
        <h4>Nuestro Equipo</h4>
        <div className={styles.tarjetasGrid}>
        {integrantes.map((persona) => (
            <div key={persona.id} className={styles.tarjeta}>
            <img src={persona.imagen} alt={persona.nombre} className={styles.avatar} />
            <h5>{persona.nombre}</h5>
            <p className={styles.puesto}>{persona.puesto}</p>
            <span className={styles.contacto}>{persona.contacto}</span>
            </div>
        ))}
        </div>
    </div>
    </footer>
);
};

export default Footer;