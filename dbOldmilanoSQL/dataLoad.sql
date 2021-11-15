USE `oldmilano`;

INSERT INTO `category` (`id`, `name`) VALUES
	(1, 'damas');
INSERT INTO `category` (`id`, `name`) VALUES
	(2, 'caballeros');
INSERT INTO `category` (`id`, `name`) VALUES
	(3, 'niños');
INSERT INTO `category` (`id`, `name`) VALUES
	(4, 'unisex');


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
