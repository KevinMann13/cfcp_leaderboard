-- Adminer 4.8.1 MySQL 8.0.27 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP DATABASE IF EXISTS `comp`;
CREATE DATABASE `comp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `comp`;

DROP TABLE IF EXISTS `athletes`;
CREATE TABLE `athletes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `team_id` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `athletes` (`id`, `team_id`, `name`) VALUES
(1, 6, 'Anna Nelson Gilmer'),
(2, 6, 'Gerald Talton'),
(3, 6, 'Lisa Vasile'),
(4, 6, 'Aimie Cryer Black'),
(5, 6, 'Calvin Ong'),
(6, 6, 'Aaron Medina'),
(7, 6, 'Chelsea Hanson'),
(8, 6, 'Lameace Salman'),
(9, 6, 'Shantel King'),
(10, 6, 'Trent Thompson'),
(11, 6, 'Bill Cyree'),
(12, 6, 'Paul Fenrich'),
(13, 6, 'Trevor Hance'),
(14, 6, 'Erin Crews'),
(15, 6, 'Matthew Whittington'),
(16, 6, 'K. Leigh Hamm Forell'),
(17, 6, 'Nikki Hall Torrez'),
(18, 6, 'Carla Khalsa Carruth'),
(19, 7, 'Christi Allen Hoover '),
(20, 7, 'Marcia Sanchez '),
(21, 7, 'Jeremy Brown'),
(22, 7, 'James Reese'),
(23, 7, 'Mandy Reese'),
(24, 7, 'Silvie Galarza'),
(25, 7, 'Shanel E. Fortney'),
(26, 7, 'Josh Rundell'),
(27, 7, 'Brian Gregory'),
(28, 7, 'Summer Demi Sturm'),
(29, 7, 'Adam Cox'),
(30, 7, 'Lydia L. Lai'),
(31, 7, 'Aaron Crews'),
(32, 7, 'Dan Castro'),
(33, 7, 'Mia Mann'),
(34, 8, 'Mari Maya Randels'),
(35, 8, 'Chad Mellon'),
(36, 8, 'Joye White Hooper'),
(37, 8, 'Alice Chisum Hulsey'),
(38, 8, 'Glen Pratt'),
(39, 8, 'Carrie Messer Weir'),
(40, 8, 'Eric Dehoux'),
(41, 8, 'Lindsay Gregory'),
(42, 8, 'Alexis Russell'),
(43, 8, 'Tami Luebbe Stromberg'),
(44, 8, 'TJ Moen'),
(45, 8, 'Aaron Merritt'),
(46, 8, 'Shawn Randels'),
(47, 8, 'Kelli Marie'),
(48, 8, 'Mark Sells'),
(49, 8, 'Gomti Mehra'),
(50, 8, 'Brad Floyd'),
(51, 5, 'Karen Kattawar Trenk'),
(52, 5, 'Kim Loftin'),
(53, 5, 'Kimber Kurachi'),
(54, 5, 'Sean Kenealy'),
(55, 5, 'Amy Doi Allen'),
(56, 5, 'Dede Lakey'),
(57, 5, 'Erica Pollock-Johnson'),
(58, 5, 'Kristen Munoz'),
(59, 5, 'Lauren Pettineo'),
(60, 5, 'Greg Meador'),
(61, 5, 'Kevin Mann'),
(62, 5, 'Kyle Meece'),
(63, 5, 'Anne Gillean Michel'),
(64, 5, 'Kevin Fox'),
(65, 5, 'Mark Geras'),
(66, 5, 'Molly Isbell Lewis'),
(67, 5, 'Bonnie Boyette Caudill');

DROP TABLE IF EXISTS `attendance`;
CREATE TABLE `attendance` (
  `athelete_id` int NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `attendance` (`athelete_id`, `date`) VALUES
(1,	'2021-11-09');


DROP TABLE IF EXISTS `teams`;
CREATE TABLE `teams` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `capitan_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `teams` (`id`, `name`, `capitan_name`) VALUES
(1,'Elijah\’s Bar-Barians', 'Elijah Subiono'),
(2,'Ka\’eo\’s Army', 'Ka\’eo Subiono'),
(3,'Kulani\’s Legion', 'Kulani Subiono'),
(4,'Oliver', 'Oliver Urbina'),
(5,'BiggD Spartan\'s', 'David Tillman'),
(6,'David G', 'David Gallaher'), 
(7,'Genny: The Dark Knights', 'Genny McElhaney'),  
(8,'Russell', 'Russell Allen ');
