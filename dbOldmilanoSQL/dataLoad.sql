USE `oldmilano`;

INSERT INTO `category` (`id`, `name`) VALUES
	(1, 'damas');
INSERT INTO `category` (`id`, `name`) VALUES
	(2, 'caballeros');
INSERT INTO `category` (`id`, `name`) VALUES
	(3, 'niños');
INSERT INTO `category` (`id`, `name`) VALUES
	(4, 'unisex');


INSERT INTO `colors` (`id`, `color`) VALUES
	(1, 'blanco');
INSERT INTO `colors` (`id`, `color`) VALUES
	(2, 'azul');
INSERT INTO `colors` (`id`, `color`) VALUES
	(3, 'rojo');
INSERT INTO `colors` (`id`, `color`) VALUES
	(4, 'amarillo');
INSERT INTO `colors` (`id`, `color`) VALUES
	(5, 'negro');
INSERT INTO `colors` (`id`, `color`) VALUES
	(6, 'marron');


INSERT INTO `colorproduct` (`id`, `id_colors`) VALUES
	(1, 1);
INSERT INTO `colorproduct` (`id`, `id_colors`) VALUES
	(2, 2);
INSERT INTO `colorproduct` (`id`, `id_colors`) VALUES
	(3, 3);
INSERT INTO `colorproduct` (`id`, `id_colors`) VALUES
	(4, 4);
INSERT INTO `colorproduct` (`id`, `id_colors`) VALUES
	(5, 5);
INSERT INTO `colorproduct` (`id`, `id_colors`) VALUES
	(6, 6);


INSERT INTO `sizes` (`id`, `size`) VALUES
	(1, 's');
INSERT INTO `sizes` (`id`, `size`) VALUES
	(2, 'm');
INSERT INTO `sizes` (`id`, `size`) VALUES
	(3, 'l');
INSERT INTO `sizes` (`id`, `size`) VALUES
	(4, '35');
INSERT INTO `sizes` (`id`, `size`) VALUES
	(5, '36');
INSERT INTO `sizes` (`id`, `size`) VALUES
	(6, '37');
INSERT INTO `sizes` (`id`, `size`) VALUES
	(7, '38');
INSERT INTO `sizes` (`id`, `size`) VALUES
	(8, '39');
INSERT INTO `sizes` (`id`, `size`) VALUES
	(9, '40');
INSERT INTO `sizes` (`id`, `size`) VALUES
	(10, '41');
INSERT INTO `sizes` (`id`, `size`) VALUES
	(11, '42');
INSERT INTO `sizes` (`id`, `size`) VALUES
	(12, '43');


INSERT INTO `productsize` (`id`, `id_sizes`) VALUES
	(1, 1);
INSERT INTO `productsize` (`id`, `id_sizes`) VALUES
	(2, 2);
INSERT INTO `productsize` (`id`, `id_sizes`) VALUES
	(3, 3);
INSERT INTO `productsize` (`id`, `id_sizes`) VALUES
	(4, 4);
INSERT INTO `productsize` (`id`, `id_sizes`) VALUES
	(5, 5);
INSERT INTO `productsize` (`id`, `id_sizes`) VALUES
	(6, 6);
INSERT INTO `productsize` (`id`, `id_sizes`) VALUES
	(7, 7);
INSERT INTO `productsize` (`id`, `id_sizes`) VALUES
	(8, 8);
INSERT INTO `productsize` (`id`, `id_sizes`) VALUES
	(9, 9);
INSERT INTO `productsize` (`id`, `id_sizes`) VALUES
	(10, 10);
INSERT INTO `productsize` (`id`, `id_sizes`) VALUES
	(11, 11);
INSERT INTO `productsize` (`id`, `id_sizes`) VALUES
	(12, 12);



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



INSERT INTO `products` (`id`, `name`, `description`, `image`, `id_category`, `price`, `id_colorProduct`, `id_productSize`) VALUES
	(1, 'duomo', 'Blucher con cordones de estilo elegante.', '/img/products/1duomo', 2, 10995, 5, 12);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `id_category`, `price`, `id_colorProduct`, `id_productSize`) VALUES
	(2, 'dean', 'Blucher con cordones y serraje.', '/img/products/1dean', 4, 10995, 4, 8);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `id_category`, `price`, `id_colorProduct`, `id_productSize`) VALUES
	(3, 'lenny', 'Zapato con cordones de piel.', '/img/products/1lenny', 1, 9995, 4, 6);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `id_category`, `price`, `id_colorProduct`, `id_productSize`) VALUES
	(4, 'empire', 'Modelo de vestir presenta una suela muy flexible, lo que permite aumentar su comodidad.', '/img/products/1empire', 1, 6597, 2, 12);
INSERT INTO `products` (`id`, `name`, `description`, `image`, `id_category`, `price`, `id_colorProduct`, `id_productSize`) VALUES
	(5, 'broddy', 'Blucher de estilo casual, con suela en forma de cuña.', '/img/products/1brody', 2, 5397, 4, 5);
