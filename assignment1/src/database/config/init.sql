BEGIN;

drop table if exists users, products, categories, cart cascade;

CREATE TABLE
    users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(200) UNIQUE NOT NULL,
        email VARCHAR(200) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        avatar TEXT
    );

CREATE TABLE
    categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(200)
    );

CREATE TABLE
    products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(200),
        image TEXT,
        price decimal,
        description text,
        categoryId INT,
        CONSTRAINT FKcategoryId FOREIGN KEY (categoryId) REFERENCES categories(id) ON DELETE CASCADE
    );

CREATE TABLE
cart (
        userId INT NOT NULL,
        productId INT NOT NULL,
        quantity INT DEFAULT 1,
        timeAdded TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT FKuserId FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
        CONSTRAINT FKproductId FOREIGN KEY (productId) REFERENCES users(id) ON DELETE CASCADE,
        PRIMARY KEY (userId, productId)
    );

INSERT INTO
    users (
        email,
        username,
        password,
        avatar
    )
VALUES (
        'katty@gmail.com',
        'Katty',
        '$2a$10$Q4WJ8gPjyvinnEawSsguju/DK7xUSYPQigBoRDGuY6bKT2IWjjsB2',
        'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=600'
    ), (
        'ex@gmail.com',
        'Example',
        '$2a$10$Q4WJ8gPjyvinnEawSsguju/DK7xUSYPQigBoRDGuY6bKT2IWjjsB2',
        'https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg?auto=compress&cs=tinysrgb&w=600'
    );

INSERT INTO categories (name)
VALUES ('Headphones'), ('Mobile phones'), ('Laptops'), ('Mouses'), ('Keyboards'),('Smart watches');

INSERT INTO
    products (name, image, price, categoryId)
VALUES (
        'Wyze watch',
        'https://cdn.shopify.com/s/files/1/0580/0450/4738/products/47cblue3.png?v=1651261060&width=1500',
        50,
        6
    ), (
        'Apple watch',
        'https://fastexpo.net/wp-content/uploads/2019/10/Apple-Watch-Apple-Watch-Iwatch-PNG-Image.png',
        200,
        6
    ), (
        'Sony Headphones',
        'https://www.pngmart.com/files/6/Sony-Headphone-PNG-Transparent-Picture.png',
        200,
        1
    ) , (
        'Beats Solo 2',
        'https://pngimg.com/uploads/headphones/small/headphones_PNG101980.png',
        200,
        1
    ), (
        'Nove',
        'https://pngimg.com/uploads/headphones/headphones_PNG101947.png',
        200,
        1
    ), (
        'iPhone 14 Pro', 
        'https://www.pngall.com/wp-content/uploads/13/iPhone-14-Pro-PNG-Pic.png', 
        100, 
        2
    ), (
        'A12s Samsung', 
        'https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/g/a/galaxy_sm-a12_a12.png', 
        800, 
        2
    ), (
        'HP Laptop', 
        'https://www.transparentpng.com/thumb/laptop/9oRuDc-refreshed-pavilion-gaming-series-launching-next-month.png', 
        1000, 
        3
    )
    , (
        'Acer Laptop', 
        'https://static.acer.com/up/Resource/Acer/Laptops/Aspire_5/images/20200707/Acer-Aspire-5_A515-44-44G_Pure-Silver_modelmain.png', 
        1000, 
        3
    ), (
        'Dell Laptop', 
        'https://pctrust.ca/wp-content/uploads/2022/08/Dell-XPS-13-13.3-Laptop-02.png', 
        900, 
        3
    ), (
        'GGG Keyboard', 
        'https://www.thermaltake.com/pub/media/wysiwyg/key3/img/l20keyboard/titanium/03b.png', 
        20, 
        5
    ),
    (
        'Razer keyboard', 
        'https://957839.smushcdn.com/2645180/wp-content/uploads/2022/06/Razer-Ornata-Chroma-Mechanical-Gaming-Keyboard-RZ03-02040200-R3U1.png?size=1000x1000&lossy=1&strip=1&webp=1', 
        30, 
        5
    ), (
        'Air Mouse', 
        'https://957839.smushcdn.com/2645180/wp-content/uploads/2022/03/Alienware-Wired-Wireless-Gaming-Mouse-AW610M-Dark-Side-of-the-Moon.png?size=1000x777&lossy=1&strip=1&webp=1', 
        50, 
        4
    ), 
     (
        'Gaming Mouse', 
        'https://957839.smushcdn.com/2645180/wp-content/uploads/2022/07/CORSAIR-NIGHTSWORD-RGB-Tunable-FPSMOBA-Gaming-Mouse-CH-9306011-AP-01.webp?size=1000x1000&lossy=1&strip=1&webp=1', 
        10, 
        4
    ), 
     (
        'iPhone 8Pro', 
        'https://www.pngall.com/wp-content/uploads/13/iPhone-14-Pro-PNG-Pic.png', 
        100, 
        2
    ), (
        'A13s Samsung', 
        'https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/g/a/galaxy_sm-a12_a12.png', 
        800, 
        2
    ), 
     (
        'iPhone X Pro', 
        'https://www.pngall.com/wp-content/uploads/13/iPhone-14-Pro-PNG-Pic.png', 
        100, 
        2
    ), (
        'A20s Samsung', 
        'https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/g/a/galaxy_sm-a12_a12.png', 
        1000, 
        2
    );
INSERT INTO
    cart (userId, productId, quantity)
VALUES (1, 1, 1), (2, 1, 2);

COMMIT;