CREATE DATABASE baseDeDatos;
use baseDeDatos;

-- creando las tablas para despues insertarles la informacion correspondiente -- 
CREATE TABLE usuarios (
    id_usuarios INT unsigned AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    fecha_de_nacimiento DATE NOT NULL,
    dni INT,
    foto_de_perfil TEXT,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE productos (
    id_producto INT unsigned AUTO_INCREMENT PRIMARY KEY,
    id_usuarios INT unsigned NOT NULL,
    nombre_archivo_imagen TEXT,
    nombre_producto VARCHAR(255),
    descripcion_producto TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuarios) REFERENCES usuarios(id_usuarios)
);

CREATE TABLE comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_producto INT unsigned NOT NULL,
    id_usuarios INT unsigned NOT NULL,
    texto_comentario TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL,
    FOREIGN KEY (post_id) REFERENCES productos(id_producto),
    FOREIGN KEY (id_usuarios) REFERENCES usuarios(id_usuarios)
);

-- aca voy a empezar a insertar la informacion en las tablas --


INSERT INTO usuarios (id_usuarios, email, contraseña, fecha_de_nacimiento, dni, foto_de_perfil)
VALUES
(DEFAULT, "vbosch@udesa.edu.ar" , "contraseña1" , "2000-02-01" , 46028156 , "/img/fotoDePerfil/1"),
(DEFAULT, "matrin@udesa.edu.ar" , "contraseña2" , "2002-06-03" , 38026172 , "/img/fotoDePerfil/2"),
(DEFAULT, "juana@udesa.edu.ar" , "contraseña3" , "2001-08-11" , 26819246 , "/img/fotoDePerfil/3"),
(DEFAULT, "pedro@udesa.edu.ar" , "contraseña4" , "2000-02-10" , 93297156 , "/img/fotoDePerfil/4"),
(DEFAULT, "bautista@udesa.edu.ar" , "contraseña5" , "2003-01-04" , 38038167 , "/img/fotoDePerfil/5");

INSERT INTO productos (id_producto, id_usuarios, nombre_archivo_imagen, nombre_producto, descripcion_producto)
VALUES
(DEFAULT, 1, "imagenAuto1.jpg", "ThunderCruiser" , " Un sedan deportivo con líneas elegantes y un motor potente que brinda una experiencia de conducción emocionante."),
(DEFAULT, 2, "imagenAuto2.jpg", "NovaBlade" , " Un coupé futurista con tecnología de vanguardia y un diseño aerodinámico que desafía los límites de la velocidad."),
(DEFAULT, 4, "imagenAuto3.jpg", "VelocityVortex" , " Un vehículo todo terreno diseñado para aventuras extremas, con tracción en las cuatro ruedas y capacidad para superar cualquier obstáculo."),
(DEFAULT, 5, "imagenAuto4.jpg", "BlazeRider" , "  Un convertible deportivo que combina estilo y rendimiento, perfecto para aquellos que disfrutan de la emoción de conducir con el viento en el cabello."),
(DEFAULT, 6, "imagenAuto5.jpg", "PhoenixFury" , "  Un automóvil deportivo de edición limitada, inspirado en el mitológico ave fénix, que renace con un diseño aerodinámico y una potencia impresionante."),
(DEFAULT, 7, "imagenAuto6.jpg", "EclipseTitan" , " Un SUV de lujo con un diseño elegante y características innovadoras que ofrecen comodidad y seguridad en cada viaje."),
(DEFAULT, 8, "imagenAuto7.jpg", "TurboCharger" , " Un hatchback compacto con un motor turboalimentado que ofrece una combinación perfecta de eficiencia y rendimiento."),
(DEFAULT, 9, "imagenAuto8.jpg", "ShadowRunner" , " Un sedán de aspecto futurista, equipado con tecnología avanzada y un diseño aerodinámico que lo hace destacar en la carretera.");

INSERT INTO comentarios (id, id_producto, id_usuarios, texto_comentario)
VALUES
(DEFAULT, 2, 3, "Exelente auto, recomendable"),
(DEFAULT, 4, 2, "No me resulto, no recomiendo"),
(DEFAULT, 7, 5, "Gran compra, muy contento!"),
(DEFAULT, 9, 1, "Tremendo auto, anda muy bien"),
(DEFAULT, 3, 2, "Frecuento rapido el mecanico, pero depspues se porta muy bien");

