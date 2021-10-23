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

-- Volcando estructura para tabla oldmilano.colorproduct
CREATE TABLE IF NOT EXISTS `colorproduct` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_colors` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `colorproduct_FK` (`id_colors`),
  CONSTRAINT `colorproduct_FK` FOREIGN KEY (`id_colors`) REFERENCES `colors` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla oldmilano.colorproduct: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `colorproduct` DISABLE KEYS */;
/*!40000 ALTER TABLE `colorproduct` ENABLE KEYS */;

-- Volcando estructura para tabla oldmilano.colors
CREATE TABLE IF NOT EXISTS `colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `color` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla oldmilano.colors: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;

-- Volcando estructura para tabla oldmilano.ordersummary
CREATE TABLE IF NOT EXISTS `ordersummary` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `id_productOrder` int(11) DEFAULT NULL,
  `orderAmount` float DEFAULT NULL,
  `shippingAddress` varchar(100) DEFAULT NULL,
  `orderDate` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ordersummary_FK` (`id_user`),
  KEY `ordersummary_FK_1` (`id_productOrder`),
  CONSTRAINT `ordersummary_FK` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  CONSTRAINT `ordersummary_FK_1` FOREIGN KEY (`id_productOrder`) REFERENCES `productorder` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla oldmilano.ordersummary: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `ordersummary` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordersummary` ENABLE KEYS */;

-- Volcando estructura para tabla oldmilano.productorder
CREATE TABLE IF NOT EXISTS `productorder` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_users` int(11) DEFAULT NULL,
  `id_products` int(11) DEFAULT NULL,
  `productQuantity` int(11) DEFAULT NULL,
  `priceTotal` float DEFAULT NULL,
  `id_colorProduct` int(11) DEFAULT NULL,
  `id_productSize` int(11) DEFAULT NULL,
  `active_flag` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productorder_FK` (`id_users`),
  KEY `productorder_FK_1` (`id_products`),
  KEY `productorder_FK_2` (`id_colorProduct`),
  KEY `productorder_FK_3` (`id_productSize`),
  CONSTRAINT `productorder_FK` FOREIGN KEY (`id_users`) REFERENCES `users` (`id`),
  CONSTRAINT `productorder_FK_1` FOREIGN KEY (`id_products`) REFERENCES `products` (`id`),
  CONSTRAINT `productorder_FK_2` FOREIGN KEY (`id_colorProduct`) REFERENCES `colorproduct` (`id`),
  CONSTRAINT `productorder_FK_3` FOREIGN KEY (`id_productSize`) REFERENCES `productsize` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla oldmilano.productorder: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `productorder` DISABLE KEYS */;
/*!40000 ALTER TABLE `productorder` ENABLE KEYS */;

-- Volcando estructura para tabla oldmilano.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `id_colorProduct` int(11) DEFAULT NULL,
  `id_productSize` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_FK` (`id_category`),
  KEY `products_FK_1` (`id_colorProduct`),
  KEY `products_FK_2` (`id_productSize`),
  CONSTRAINT `products_FK` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`),
  CONSTRAINT `products_FK_1` FOREIGN KEY (`id_colorProduct`) REFERENCES `colorproduct` (`id`),
  CONSTRAINT `products_FK_2` FOREIGN KEY (`id_productSize`) REFERENCES `productsize` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla oldmilano.products: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Volcando estructura para tabla oldmilano.productsize
CREATE TABLE IF NOT EXISTS `productsize` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_sizes` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productsize_FK` (`id_sizes`),
  CONSTRAINT `productsize_FK` FOREIGN KEY (`id_sizes`) REFERENCES `sizes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla oldmilano.productsize: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `productsize` DISABLE KEYS */;
/*!40000 ALTER TABLE `productsize` ENABLE KEYS */;

-- Volcando estructura para tabla oldmilano.sizes
CREATE TABLE IF NOT EXISTS `sizes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `size` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla oldmilano.sizes: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;

-- Volcando estructura para tabla oldmilano.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `id_userType` int(11) DEFAULT NULL,
  `avatarImage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_FK` (`id_userType`),
  CONSTRAINT `users_FK` FOREIGN KEY (`id_userType`) REFERENCES `usertype` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla oldmilano.users: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Volcando estructura para tabla oldmilano.usertype
CREATE TABLE IF NOT EXISTS `usertype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla oldmilano.usertype: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `usertype` DISABLE KEYS */;
/*!40000 ALTER TABLE `usertype` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
