-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.21-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para oldmilano
CREATE DATABASE IF NOT EXISTS `oldmilano` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `oldmilano`;

-- Volcando estructura para tabla oldmilano.category
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla oldmilano.category: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
/*!40000 ALTER TABLE `category` ENABLE KEYS */;

-- Volcando estructura para tabla oldmilano.order_summary
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

-- Volcando datos para la tabla oldmilano.order_summary: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `order_summary` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_summary` ENABLE KEYS */;

-- Volcando estructura para tabla oldmilano.products
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

-- Volcando datos para la tabla oldmilano.products: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Volcando estructura para tabla oldmilano.product_colors
CREATE TABLE IF NOT EXISTS `product_colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `color` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla oldmilano.product_colors: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `product_colors` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_colors` ENABLE KEYS */;

-- Volcando estructura para tabla oldmilano.product_order
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

-- Volcando datos para la tabla oldmilano.product_order: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `product_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_order` ENABLE KEYS */;

-- Volcando estructura para tabla oldmilano.product_sizes
CREATE TABLE IF NOT EXISTS `product_sizes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `size` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla oldmilano.product_sizes: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `product_sizes` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_sizes` ENABLE KEYS */;

-- Volcando estructura para tabla oldmilano.users
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

-- Volcando datos para la tabla oldmilano.users: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Volcando estructura para tabla oldmilano.user_type
CREATE TABLE IF NOT EXISTS `user_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla oldmilano.user_type: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `user_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_type` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
