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
    id SERIAL PRIMARY KEY,
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
        'Mastercelta',
        'Juan Camilo Peñaloza',
        'juancamilo@bees.com.co',
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
        'https://cdn.pixabay.com/photo/2023/01/10/00/17/italy-7708551_1280.jpg',
        1,
        NOW()
    ),
    (
        'Segunda Publicación',
        'Contenido interesante de la segunda publicación.',
        'https://cdn.pixabay.com/photo/2024/12/28/13/28/tram-9296118_1280.jpg',
        2,
        NOW()
    ),
    (
        'Tercera Publicación',
        'Aquí está el contenido de la tercera publicación.',
        'https://cdn.pixabay.com/photo/2019/08/07/15/13/stairs-4390973_1280.jpg',
        3,
        NOW()
    ),
    (
        'Cuarta Publicación',
        'Contenido de la cuarta publicación.',
        'https://cdn.pixabay.com/photo/2024/11/25/10/38/mountains-9223041_1280.jpg',
        1,
        NOW()
    ),
    (
        'Quinta Publicación',
        'Contenido de la quinta publicación.',
        'https://cdn.pixabay.com/photo/2023/01/22/05/51/nature-7735653_1280.jpg',
        2,
        NOW()
    ),
    (
        'Sexta Publicación',
        'Contenido de la sexta publicación.',
        'https://cdn.pixabay.com/photo/2020/11/13/14/46/building-5738714_1280.jpg',
        3,
        NOW()
    ),
    (
        'Séptima Publicación',
        'Contenido de la séptima publicación.',
        'https://cdn.pixabay.com/photo/2023/05/21/15/01/speicherstadt-8008681_1280.jpg',
        1,
        NOW()
    ),
    (
        'Octava Publicación',
        'Contenido de la octava publicación.',
        'https://cdn.pixabay.com/photo/2022/11/02/05/53/cycling-7564103_1280.jpg',
        2,
        NOW()
    ),
    (
        'Novena Publicación',
        'Contenido de la novena publicación.',
        'https://cdn.pixabay.com/photo/2025/02/26/13/42/painting-9433099_1280.jpg',
        3,
        NOW()
    ),
    (
        'Décima Publicación',
        'Contenido de la décima publicación.',
        'https://cdn.pixabay.com/photo/2025/03/09/08/26/bridge-9456745_1280.jpg',
        1,
        NOW()
    ),
    (
        'Undécima Publicación',
        'Contenido de la undécima publicación.',
        'https://cdn.pixabay.com/photo/2025/03/19/19/04/man-9481358_1280.jpg',
        2,
        NOW()
    ),
    (
        'Duodécima Publicación',
        'Contenido de la duodécima publicación.',
        'https://cdn.pixabay.com/photo/2025/03/19/19/04/man-9481358_1280.jpg',
        3,
        NOW()
    ),
    (
        'Decimotercera Publicación',
        'Contenido de la decimotercera publicación.',
        'https://cdn.pixabay.com/photo/2025/03/19/19/04/man-9481358_1280.jpg',
        1,
        NOW()
    ),
    (
        'Decimocuarta Publicación',
        'Contenido de la decimocuarta publicación.',
        'https://cdn.pixabay.com/photo/2025/03/19/19/04/man-9481358_1280.jpg',
        2,
        NOW()
    ),
    (
        'Decimoquinta Publicación',
        'Contenido de la decimoquinta publicación.',
        'https://cdn.pixabay.com/photo/2025/03/19/19/04/man-9481358_1280.jpg',
        3,
        NOW()
    ),
    (
        'Decimosexta Publicación',
        'Contenido de la decimosexta publicación.',
        'https://cdn.pixabay.com/photo/2025/03/19/19/04/man-9481358_1280.jpg',
        1,
        NOW()
    ),
    (
        'Decimoséptima Publicación',
        'Contenido de la decimoséptima publicación.',
        'https://cdn.pixabay.com/photo/2025/03/19/19/04/man-9481358_1280.jpg',
        2,
        NOW()
    ),
    (
        'Decimoctava Publicación',
        'Contenido de la decimoctava publicación.',
        'https://cdn.pixabay.com/photo/2025/03/19/19/04/man-9481358_1280.jpg',
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