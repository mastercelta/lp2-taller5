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
        '$2b$12$BWICxpbxqTHX3erEDgUWXeB.u8NFlFJrsyhRumSqB8oAdmb3FHuHG',
        NOW()
    ),
    (
        'asmith',
        'Alice Smith',
        'asmith@example.com',
        '$2b$12$BWICxpbxqTHX3erEDgUWXeB.u8NFlFJrsyhRumSqB8oAdmb3FHuHG',
        NOW()
    ),
    (
        'bwayne',
        'Bruce Wayne',
        'bwayne@example.com',
        '$2b$12$BWICxpbxqTHX3erEDgUWXeB.u8NFlFJrsyhRumSqB8oAdmb3FHuHG',
        NOW()
    ),
    (
        'CrysisDavid',
        'Cristian David',
        'davidsoliss123@gmail.com',
        '$2b$12$BWICxpbxqTHX3erEDgUWXeB.u8NFlFJrsyhRumSqB8oAdmb3FHuHG',
        NOW()
    ),
    (
        'Mastercelta',
        'Juan Camilo Peñaloza',
        'juancamilo@bees.com.co',
        '$2b$12$BWICxpbxqTHX3erEDgUWXeB.u8NFlFJrsyhRumSqB8oAdmb3FHuHG',
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
        'Publicación 2',
        '{"ops":[{"insert":"Contenido de la publicación 2"},{"attributes":{"header":2},"insert":"\n"}]}',
        'https://cdn.pixabay.com/photo/2023/01/10/00/17/italy-7708551_1280.jpg',
        2,
        NOW()
    ),
    (
        'Publicación 3',
        '{"ops":[{"insert":"Contenido de la publicación 3"},{"attributes":{"header":2},"insert":"\n"}]}',
        'https://cdn.pixabay.com/photo/2024/12/28/13/28/tram-9296118_1280.jpg',
        3,
        NOW()
    ),
    (
        'Publicación 4',
        '{"ops":[{"insert":"Contenido de la publicación 4"},{"attributes":{"header":2},"insert":"\n"}]}',
        'https://cdn.pixabay.com/photo/2019/08/07/15/13/stairs-4390973_1280.jpg',
        4,
        NOW()
    ),
    (
        'Publicación 5',
        '{"ops":[{"insert":"Contenido de la publicación 5"},{"attributes":{"header":2},"insert":"\n"}]}',
        'https://cdn.pixabay.com/photo/2024/11/25/10/38/mountains-9223041_1280.jpg',
        5,
        NOW()
    ),
    (
        'Publicación 6',
        '{"ops":[{"insert":"Contenido de la publicación 6"},{"attributes":{"header":2},"insert":"\n"}]}',
        'https://cdn.pixabay.com/photo/2023/01/22/05/51/nature-7735653_1280.jpg',
        1,
        NOW()
    ),
    (
        'Publicación 7',
        '{"ops":[{"insert":"Contenido de la publicación 7"},{"attributes":{"header":2},"insert":"\n"}]}',
        'https://cdn.pixabay.com/photo/2020/11/13/14/46/building-5738714_1280.jpg',
        2,
        NOW()
    ),
    (
        'Publicación 8',
        '{"ops":[{"insert":"Contenido de la publicación 8"},{"attributes":{"header":2},"insert":"\n"}]}',
        'https://cdn.pixabay.com/photo/2023/05/21/15/01/speicherstadt-8008681_1280.jpg',
        3,
        NOW()
    ),
    (
        'Publicación 9',
        '{"ops":[{"insert":"Contenido de la publicación 9"},{"attributes":{"header":2},"insert":"\n"}]}',
        'https://cdn.pixabay.com/photo/2022/11/02/05/53/cycling-7564103_1280.jpg',
        4,
        NOW()
    ),
    (
        'Publicación 10',
        '{"ops":[{"insert":"Contenido de la publicación 10"},{"attributes":{"header":2},"insert":"\n"}]}',
        'https://cdn.pixabay.com/photo/2025/02/26/13/42/painting-9433099_1280.jpg',
        5,
        NOW()
    ),
    (
        'Publicación 11',
        '{"ops":[{"insert":"Contenido de la publicación 11"},{"attributes":{"header":2},"insert":"\n"}]}',
        'https://dummyimage.com/900x400/ced4da/6c757d.jpg',
        1,
        NOW()
    ),
    (
        'Publicación 12',
        '{"ops":[{"insert":"Contenido de la publicación 12"},{"attributes":{"header":2},"insert":"\n"}]}',
        'https://dummyimage.com/900x400/ced4da/6c757d.jpg',
        2,
        NOW()
    ),
    (
        'Publicación 13',
        '{"ops":[{"insert":"Contenido de la publicación 13"},{"attributes":{"header":2},"insert":"\n"}]}',
        'https://dummyimage.com/900x400/ced4da/6c757d.jpg',
        3,
        NOW()
    ),
    (
        'Publicación 14',
        '{"ops":[{"insert":"Contenido de la publicación 14"},{"attributes":{"header":2},"insert":"\n"}]}',
        'https://dummyimage.com/900x400/ced4da/6c757d.jpg',
        4,
        NOW()
    ),
    (
        'Publicación 15',
        '{"ops":[{"insert":"Contenido de la publicación 15"},{"attributes":{"header":2},"insert":"\n"}]}',
        'https://dummyimage.com/900x400/ced4da/6c757d.jpg',
        5,
        NOW()
    ),
    (
        'Publicación 16',
        '{"ops":[{"insert":"Contenido de la publicación 16"},{"attributes":{"header":2},"insert":"\n"}]}',
        'https://dummyimage.com/900x400/ced4da/6c757d.jpg',
        1,
        NOW()
    ),
    (
        'Publicación 17',
        '{"ops":[{"insert":"Contenido de la publicación 17"},{"attributes":{"header":2},"insert":"\n"}]}',
        'https://dummyimage.com/900x400/ced4da/6c757d.jpg',
        2,
        NOW()
    ),
    (
        'Publicación 18',
        '{"ops":[{"insert":"Contenido de la publicación 18"},{"attributes":{"header":2},"insert":"\n"}]}',
        'https://dummyimage.com/900x400/ced4da/6c757d.jpg',
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
VALUES
    (
        '¡Gran publicación! Me encantó el contenido.',
        1,
        2,
        NOW()
    ),
    (
        'Interesante perspectiva, gracias por compartir.',
        2,
        3,
        NOW()
    ),
    (
        'Esto es exactamente lo que estaba buscando.',
        3,
        4,
        NOW()
    ),
    (
        'Muy bien explicado, gracias.',
        4,
        5,
        NOW()
    ),
    (
        'Tengo una pregunta sobre este tema.',
        5,
        1,
        NOW()
    ),
    (
        '¡Qué buena imagen! ¿Dónde fue tomada?',
        6,
        2,
        NOW()
    ),
    (
        'Gracias por la información, muy útil.',
        7,
        3,
        NOW()
    ),
    (
        'Me gustaría saber más sobre este tema.',
        8,
        4,
        NOW()
    ),
    (
        'Excelente publicación, sigue así.',
        9,
        5,
        NOW()
    ),
    (
        'Esto me ayudó mucho, gracias.',
        10,
        1,
        NOW()
    );