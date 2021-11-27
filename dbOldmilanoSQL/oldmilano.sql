
CREATE DATABASE IF NOT EXISTS `oldmilano` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `oldmilano`;


CREATE TABLE IF NOT EXISTS `user_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_type_id` int(11) DEFAULT NULL,
  `avatarimage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_FK` (`user_type_id`),
  CONSTRAINT `users_FK` FOREIGN KEY (`user_type_id`) REFERENCES `user_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_FK` (`category_id`),
  CONSTRAINT `products_FK` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE IF NOT EXISTS `product_colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `color` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE IF NOT EXISTS `product_sizes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `size` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE IF NOT EXISTS `product_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `products_id` int(11) DEFAULT NULL,
  `product_quantity` int(11) DEFAULT NULL,
  `price_total` float DEFAULT NULL,
  `product_color_id` int(11) DEFAULT NULL,
  `product_sizes_id` int(11) DEFAULT NULL,
  `active_flag` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_order_FK` (`products_id`),
  KEY `product_order_FK_1` (`product_color_id`),
  KEY `product_order_FK_2` (`product_sizes_id`),
  CONSTRAINT `product_order_FK` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`),
  CONSTRAINT `product_order_FK_1` FOREIGN KEY (`product_color_id`) REFERENCES `product_colors` (`id`),
  CONSTRAINT `product_order_FK_2` FOREIGN KEY (`product_sizes_id`) REFERENCES `product_sizes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE IF NOT EXISTS `order_summary` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `users_id` int(11) DEFAULT NULL,
  `order_amount` float DEFAULT NULL,
  `shipping_address` varchar(255) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `product_order_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_summary_FK` (`users_id`),
  KEY `order_summary_FK_1` (`product_order_id`),
  CONSTRAINT `order_summary_FK` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`),
  CONSTRAINT `order_summary_FK_1` FOREIGN KEY (`product_order_id`) REFERENCES `product_order` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;