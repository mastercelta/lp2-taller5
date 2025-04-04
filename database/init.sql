DROP TABLE IF EXISTS usuarios;

CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    fecha_creacion timestamptz NOT NULL
);

DROP TABLE IF EXISTS publicaciones;

CREATE TABLE IF NOT EXISTS publicaciones (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    contenido TEXT NOT NULL,
    -- The length 2083 is chosen as it is the maximum URL length supported by most browsers.
    url_imagen VARCHAR(2083),
    id_usuario INT REFERENCES usuarios (id) ON DELETE CASCADE,
    "fecha_creacion" timestamptz NOT NULL
);

DROP TABLE IF EXISTS comentarios;

CREATE TABLE IF NOT EXISTS comentarios (
    comentario VARCHAR(2083) NOT NULL,
    id_publicacion INT REFERENCES publicaciones (id),
    id_usuario INT REFERENCES usuarios (id) ON DELETE SET NULL,
    fecha_creacion timestamptz NOT NULL
);

-- Insertar datos de prueba para la tabla usuarios
INSERT INTO
    usuarios (
        usuario,
        nombre,
        email,
        password,
        fecha_creacion
    )
VALUES (
        'jdoe',
        'John Doe',
        'jdoe@example.com',
        'password123',
        NOW()
    ),
    (
        'asmith',
        'Alice Smith',
        'asmith@example.com',
        'password456',
        NOW()
    ),
    (
        'bwayne',
        'Bruce Wayne',
        'bwayne@example.com',
        'password789',
        NOW()
    ),
    (
        'CrysisDavid',
        'Cristian David',
        'davidsoliss123@gmail.com',
        'password789',
        NOW()
    ),
    (
        'CrysisDavid',
        'Cristian David',
        'davidsoliss123@gmail.com',
        'password789',
        NOW()
    );

-- Insertar datos de prueba para la tabla publicaciones
INSERT INTO
    publicaciones (
        titulo,
        contenido,
        url_imagen,
        id_usuario,
        fecha_creacion
    )
VALUES (
        'Primera Publicación',
        'Este es el contenido de la primera publicación.',
        'https://example.com/image1.jpg',
        1,
        NOW()
    ),
    (
        'Segunda Publicación',
        'Contenido interesante de la segunda publicación.',
        'https://example.com/image2.jpg',
        2,
        NOW()
    ),
    (
        'Tercera Publicación',
        'Aquí está el contenido de la tercera publicación.',
        'https://example.com/image3.jpg',
        3,
        NOW()
    ),
    (
        'Cuarta Publicación',
        'Contenido de la cuarta publicación.',
        'https://example.com/image4.jpg',
        1,
        NOW()
    ),
    (
        'Quinta Publicación',
        'Contenido de la quinta publicación.',
        'https://example.com/image5.jpg',
        2,
        NOW()
    ),
    (
        'Sexta Publicación',
        'Contenido de la sexta publicación.',
        'https://example.com/image6.jpg',
        3,
        NOW()
    ),
    (
        'Séptima Publicación',
        'Contenido de la séptima publicación.',
        'https://example.com/image7.jpg',
        1,
        NOW()
    ),
    (
        'Octava Publicación',
        'Contenido de la octava publicación.',
        'https://example.com/image8.jpg',
        2,
        NOW()
    ),
    (
        'Novena Publicación',
        'Contenido de la novena publicación.',
        'https://example.com/image9.jpg',
        3,
        NOW()
    ),
    (
        'Décima Publicación',
        'Contenido de la décima publicación.',
        'https://example.com/image10.jpg',
        1,
        NOW()
    ),
    (
        'Undécima Publicación',
        'Contenido de la undécima publicación.',
        'https://example.com/image11.jpg',
        2,
        NOW()
    ),
    (
        'Duodécima Publicación',
        'Contenido de la duodécima publicación.',
        'https://example.com/image12.jpg',
        3,
        NOW()
    ),
    (
        'Decimotercera Publicación',
        'Contenido de la decimotercera publicación.',
        'https://example.com/image13.jpg',
        1,
        NOW()
    ),
    (
        'Decimocuarta Publicación',
        'Contenido de la decimocuarta publicación.',
        'https://example.com/image14.jpg',
        2,
        NOW()
    ),
    (
        'Decimoquinta Publicación',
        'Contenido de la decimoquinta publicación.',
        'https://example.com/image15.jpg',
        3,
        NOW()
    ),
    (
        'Decimosexta Publicación',
        'Contenido de la decimosexta publicación.',
        'https://example.com/image16.jpg',
        1,
        NOW()
    ),
    (
        'Decimoséptima Publicación',
        'Contenido de la decimoséptima publicación.',
        'https://example.com/image17.jpg',
        2,
        NOW()
    ),
    (
        'Decimoctava Publicación',
        'Contenido de la decimoctava publicación.',
        'https://example.com/image18.jpg',
        3,
        NOW()
    );

-- Insertar datos de prueba para la tabla comentarios
INSERT INTO
    comentarios (
        comentario,
        id_publicacion,
        id_usuario,
        fecha_creacion
    )
VALUES (
        'Este contenido es muy útil, gracias por compartir.',
        4,
        2,
        NOW()
    ),
    (
        'No estoy de acuerdo con algunos puntos, pero es interesante.',
        5,
        3,
        NOW()
    ),
    (
        '¡Excelente trabajo! Espero más publicaciones como esta.',
        6,
        1,
        NOW()
    ),
    (
        'Esto me ayudó mucho, gracias.',
        7,
        3,
        NOW()
    ),
    (
        '¿Podrías profundizar más en este tema?',
        8,
        1,
        NOW()
    ),
    (
        'Muy bien explicado, gracias.',
        9,
        2,
        NOW()
    ),
    (
        'Esto es justo lo que estaba buscando.',
        10,
        3,
        NOW()
    ),
    (
        '¡Qué gran aporte! Sigue así.',
        11,
        1,
        NOW()
    ),
    (
        'Me gustaría saber más sobre este tema.',
        12,
        2,
        NOW()
    ),
    (
        'Gracias por compartir esta información.',
        13,
        3,
        NOW()
    ),
    (
        'Muy interesante, espero más publicaciones como esta.',
        14,
        1,
        NOW()
    ),
    (
        'Esto es muy útil, gracias.',
        15,
        2,
        NOW()
    ),
    (
        '¡Gran publicación! Me encantó.',
        16,
        3,
        NOW()
    ),
    (
        'Espero que sigas publicando contenido como este.',
        17,
        1,
        NOW()
    ),
    (
        'Esto me hizo reflexionar, gracias.',
        18,
        2,
        NOW()
    );