USE `oldmilano`;

INSERT INTO `category` (`id`, `name`) VALUES
	(1, 'damas');
INSERT INTO `category` (`id`, `name`) VALUES
	(2, 'caballeros');
INSERT INTO `category` (`id`, `name`) VALUES
	(3, 'niños');
INSERT INTO `category` (`id`, `name`) VALUES
	(4, 'unisex');
INSERT INTO `category` (`id`, `name`) VALUES
	(5, 'accesorios');	


INSERT INTO `product_colors` (`id`, `color`) VALUES
	(1, 'blanco');
INSERT INTO `product_colors` (`id`, `color`) VALUES
	(2, 'azul');
INSERT INTO `product_colors` (`id`, `color`) VALUES
	(3, 'rojo');
INSERT INTO `product_colors` (`id`, `color`) VALUES
	(4, 'amarillo');
INSERT INTO `product_colors` (`id`, `color`) VALUES
	(5, 'negro');
INSERT INTO `product_colors` (`id`, `color`) VALUES
	(6, 'marron');


INSERT INTO `product_sizes` (`id`, `size`) VALUES
	(1, 's');
INSERT INTO `product_sizes` (`id`, `size`) VALUES
	(2, 'm');
INSERT INTO `product_sizes` (`id`, `size`) VALUES
	(3, 'l');
INSERT INTO `product_sizes` (`id`, `size`) VALUES
	(4, '35');
INSERT INTO `product_sizes` (`id`, `size`) VALUES
	(5, '36');
INSERT INTO `product_sizes` (`id`, `size`) VALUES
	(6, '37');
INSERT INTO `product_sizes` (`id`, `size`) VALUES
	(7, '38');
INSERT INTO `product_sizes` (`id`, `size`) VALUES
	(8, '39');
INSERT INTO `product_sizes` (`id`, `size`) VALUES
	(9, '40');
INSERT INTO `product_sizes` (`id`, `size`) VALUES
	(10, '41');
INSERT INTO `product_sizes` (`id`, `size`) VALUES
	(11, '42');
INSERT INTO `product_sizes` (`id`, `size`) VALUES
	(12, '43');


INSERT INTO `user_type` (`id`, `name`) VALUES
	(1, 'admin');
INSERT INTO `user_type` (`id`, `name`) VALUES
	(2, 'guest');
INSERT INTO `user_type` (`id`, `name`) VALUES
	(3, 'user');


INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `user_type_id`, `avatarImage`) VALUES
	(7, 'Pepe', 'Aguilar', 'pepe@nomail.com', 'choripan', 1, '/public/images/users/');
INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `user_type_id`, `avatarImage`) VALUES
	(8, 'Fulanito', 'Gonzalez', 'fulanito@nomail.com', 'nopassword', 2, '/public/images/users/');
INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `user_type_id`, `avatarImage`) VALUES
	(9, 'Sutanito', 'SinApellido', 'sutanito@nomail.com', 'sutanitonopw', 3, '/public/images/users/');
INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `user_type_id`, `avatarImage`) VALUES
	(10, 'Mengito', 'NoLastname', 'mengito@nomail.com', 'mengitopw', 3, '/public/images/users/');
INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `user_type_id`, `avatarImage`) VALUES
	(11, 'Piojito', 'sinNada', 'piojito@nomail.com', 'piojitonopw', 2, '/public/images/users/');



INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(1, 'duomo', 'Blucher con cordones de estilo elegante.', '1duomo.jpg', 2, 10995);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(2, 'dean', 'Blucher con cordones y serraje.', '2dean.jpg', 4, 10995);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(3, 'lenny', 'Zapato con cordones de piel.', '3lenny.jpg', 1, 9995);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(4, 'empire', 'Modelo de vestir presenta una suela muy flexible, lo que permite aumentar su comodidad.', '4empire.jpg', 1, 6597);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(5, 'broddy', 'Blucher de estilo casual, con suela en forma de cuña.', '5brody.jpg', 2, 5397);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(6, 'Chambers', 'Botín de corte bajo y fabricado en piel serraje', 'Chambers.jpg', 2, 9895);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(7, 'Cortland', 'Zapato clásico-atemporal de estilo "Castellano"', 'Cortland.jpg', 2, 8995);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(8, 'Austin', 'El clásico náutico atemporal con suela gruesa y dentada', 'Austin.jpg', 2, 8995);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(9, 'Edward', 'Deportivo que combina diferentes tejidos y texturas así como colores', 'Edward.jpg', 2, 7695);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(10, 'Sean', 'Destaca el piso grueso, cómodo y firme', 'Sean.jpg', 2, 10795);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(11, 'Milo', 'Este deportivo lleva el estilo "sport" a otro nivel', 'Milo.jpg', 2, 10795);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(12, 'Newport', 'diseño de deportivo básico', 'Newport.jpg', 2, 9596);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(13, 'Rawson', 'Lo más destacable de este modelo es su suela extra ligera', 'Rawson.jpg', 2, 9895);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(14, 'Warren', 'Elegante y atemporal botín o bota de estilo "chelsea', 'Warren.jpg', 2, 11695);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(15, 'Barton', 'Zapato de vestir de charol combinado con terciopelo.', 'Barton.jpg', 2, 10795);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(16, 'Bastille', 'Deportiva de diseño sencillo muy comoda y versátil', 'Bastille.jpg', 1, 8396);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(17, 'Bourgeois', 'Deportiva muy cómoda con planta interior de gel y suela extraligera"', 'Bourgeois.jpg', 1, 7996);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(18, 'Hermisilla', 'Bota en color cuero que consigue combinar con elegancia un estampado otoñal de tipo floral', 'Hermosilla.jpg', 1, 13495);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(19, 'Lagasca', 'Deportivo con cuña ligera', 'Lagasca.jpg', 1, 11695);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(20, 'Margana', 'Salón con tacón cuadrado de estilo "cubano" y suela muy flexible', 'Margana.jpg', 1, 8796);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(21, 'Pompidou', 'Este original botín con estampado de estilo serpiente destaca por su comodidad y versatilidad', 'Pompidou.jpg', 1, 12595);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(22, 'Recoletos', 'La suela de este deportivo es ligera y con volumen', 'Recoletos.jpg', 1, 9596);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(23, 'Santandrea', 'Mocasín de estilo clásico y elegante', 'Santandrea.jpg', 1, 9895);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(24, 'Thelma', 'Salón con carácter', 'Thelma.jpg', 2, 10445);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(25, 'Vivien', 'Bailarina con detalle original en el tacón, escote en forma de "V" y planta de gel para mayor comodidad', 'Vivien.jpg', 1, 8545);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(26, 'Billetera OS Camel', 'Creada con cuero vacuno graneado color marrón', 'Billetera.jpg', 5, 6800);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(27, 'Billetera Bifold Preto', 'Creada con cuero vacuno graneado"', 'cartera.jpg', 5, 4600);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(28, 'Tote Bag Preto', 'Para ir a una reunión, a trabajar, o a la facultad', 'carteraM.jpg', 5, 17000);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(29, 'Case', 'Lindo y funcional, liviano y con onda, neceser y morral', 'caseabaco.jpg', 5, 6510);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(30, 'Marconi Mesh', 'Reloj Marconi Mesh plateado de 40 milímetros de diámetro con correa de acero inoxidable imantada', 'Combo1.jpg', 5, 10800);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(31, 'Billetera Bifold Preto con Cierre', 'Creada con cuero vacuno graneado', 'Combo2.jpg', 5, 5200);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(32, 'Billetera OS Preto + Emily Mesh', 'Reloj color plateado de 40 milímetros con dial color azul ‘persa’ y correa mesh de acero inoxidable con hebilla imantada', 'Combo3.jpg', 5, 21000);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(33, 'Mochila WXS Preto', 'Elegante como una cartera, cómoda como una mochila', 'MochilaM.jpg', 5, 20400);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(34, 'Mochila XS', 'Salón con carácter', 'Mochilaxs.jpg', 5, 7650);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `category_id`, `price`) VALUES
	(35, 'Riñonera S', 'Usala para salir de día o de noche', 'rinonera.jpg', 5, 5610);