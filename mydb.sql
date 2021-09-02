-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 02, 2021 at 08:18 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--
CREATE DATABASE IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `mydb`;

-- --------------------------------------------------------

--
-- Table structure for table `affichage`
--

DROP TABLE IF EXISTS `affichage`;
CREATE TABLE IF NOT EXISTS `affichage` (
  `idAffichage` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(45) DEFAULT NULL,
  `longueur` varchar(45) DEFAULT NULL,
  `largeur` varchar(45) DEFAULT NULL,
  `lien` varchar(45) DEFAULT NULL,
  `Client_idClient` int(11) NOT NULL,
  `Maquette_idMaquette` int(11) DEFAULT NULL,
  PRIMARY KEY (`idAffichage`),
  KEY `fk_Affichage_Client1_idx` (`Client_idClient`),
  KEY `fk_Affichage_Maquette1_idx` (`Maquette_idMaquette`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `animation`
--

DROP TABLE IF EXISTS `animation`;
CREATE TABLE IF NOT EXISTS `animation` (
  `idAnimation` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(45) DEFAULT NULL,
  `lien` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`idAnimation`)
) ENGINE=InnoDB AUTO_INCREMENT=219 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `animation`
--

INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(1, '3D Cubes', '/resources/animation/screensaver.best/3d-cubes.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(2, 'A-Team', '/resources/animation/screensaver.best/a-team.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(3, 'Alien Gallery', '/resources/animation/screensaver.best/alien-gallery.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(4, 'Ambient', '/resources/animation/screensaver.best/ambient.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(5, 'Ball', '/resources/animation/screensaver.best/ball.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(6, 'Barber', '/resources/animation/screensaver.best/barber.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(7, 'Bicycle Cat', '/resources/animation/screensaver.best/bicycle-cat.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(8, 'Birds', '/resources/animation/screensaver.best/birds.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(9, 'Blurb', '/resources/animation/screensaver.best/blurb.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(10, 'Boxes', '/resources/animation/screensaver.best/boxes.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(11, 'Bubble Action', '/resources/animation/screensaver.best/bubble-action.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(12, 'Bubbles', '/resources/animation/screensaver.best/bubbles.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(13, 'Burner', '/resources/animation/screensaver.best/burner.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(14, 'Burning', '/resources/animation/screensaver.best/burning.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(15, 'Camper', '/resources/animation/screensaver.best/camper.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(16, 'Candle', '/resources/animation/screensaver.best/candle.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(17, 'Candy', '/resources/animation/screensaver.best/candy.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(18, 'Car', '/resources/animation/screensaver.best/car.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(19, 'Carpet', '/resources/animation/screensaver.best/carpet.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(20, 'Carrera', '/resources/animation/screensaver.best/carrera.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(21, 'Cat', '/resources/animation/screensaver.best/cat.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(22, 'Cat in Bath', '/resources/animation/screensaver.best/cat-in-bath.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(23, 'Cat in Car', '/resources/animation/screensaver.best/cat-in-car.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(24, 'Cellopane', '/resources/animation/screensaver.best/cellopane.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(25, 'Cherry Blossom', '/resources/animation/screensaver.best/cherry-blossom.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(26, 'Circ', '/resources/animation/screensaver.best/circ.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(27, 'Circle Race', '/resources/animation/screensaver.best/circle-race.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(28, 'Circler', '/resources/animation/screensaver.best/circler.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(29, 'Circlus', '/resources/animation/screensaver.best/circlus.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(30, 'Clouds', '/resources/animation/screensaver.best/clouds.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(31, 'Color Blurb', '/resources/animation/screensaver.best/color-blurb.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(32, 'Color Rain', '/resources/animation/screensaver.best/color-rain.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(33, 'Color Sheep', '/resources/animation/screensaver.best/color-sheep.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(34, 'Colors RGB', '/resources/animation/screensaver.best/colors-rgb.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(35, 'Connect RGB', '/resources/animation/screensaver.best/connect-rgb.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(36, 'Crazy', '/resources/animation/screensaver.best/crazy.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(37, 'Cube Circle', '/resources/animation/screensaver.best/cube-circle.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(38, 'Dancing Rows', '/resources/animation/screensaver.best/dancing-rows.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(39, 'Dark Circles', '/resources/animation/screensaver.best/dark-circles.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(40, 'Dark Clouds', '/resources/animation/screensaver.best/dark-clouds.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(41, 'Death Star', '/resources/animation/screensaver.best/death-star.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(42, 'Deep Love', '/resources/animation/screensaver.best/deep-love.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(43, 'Deep Star', '/resources/animation/screensaver.best/deep-star.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(44, 'Desert', '/resources/animation/screensaver.best/desert.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(45, 'Dimension', '/resources/animation/screensaver.best/dimension.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(46, 'Disco', '/resources/animation/screensaver.best/disco.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(47, 'Disco Light', '/resources/animation/screensaver.best/disco-light.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(48, 'DNA', '/resources/animation/screensaver.best/dna.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(49, 'DNS', '/resources/animation/screensaver.best/dns.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(50, 'Drop', '/resources/animation/screensaver.best/drop.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(51, 'Electricity', '/resources/animation/screensaver.best/electricity.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(52, 'Encircle', '/resources/animation/screensaver.best/encircle.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(53, 'Explosion', '/resources/animation/screensaver.best/explosion.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(54, 'Explosions', '/resources/animation/screensaver.best/explosions.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(55, 'Eye', '/resources/animation/screensaver.best/eye.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(56, 'F1', '/resources/animation/screensaver.best/f1.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(57, 'Falling Stars', '/resources/animation/screensaver.best/falling-stars.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(58, 'Fast RGB', '/resources/animation/screensaver.best/fast-rgb.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(59, 'Fish', '/resources/animation/screensaver.best/fish.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(60, 'Flash', '/resources/animation/screensaver.best/flash.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(61, 'Flip Clock', '/resources/animation/screensaver.best/flip-clock.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(62, 'Floor', '/resources/animation/screensaver.best/floor.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(63, 'Flower', '/resources/animation/screensaver.best/flower.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(64, 'Flowers', '/resources/animation/screensaver.best/flowers.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(65, 'Flying', '/resources/animation/screensaver.best/flying.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(66, 'Forest', '/resources/animation/screensaver.best/forest.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(67, 'Gallery 2047', '/resources/animation/screensaver.best/gallery-2047.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(68, 'Galaxy', '/resources/animation/screensaver.best/galaxy.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(69, 'Glas', '/resources/animation/screensaver.best/glas.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(70, 'Globe Cube', '/resources/animation/screensaver.best/globe-cube.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(71, 'Globy', '/resources/animation/screensaver.best/globy.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(72, 'Glowing Heart', '/resources/animation/screensaver.best/glowing-heart.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(73, 'Gradient', '/resources/animation/screensaver.best/gradient.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(74, 'Gradient Ground', '/resources/animation/screensaver.best/gradient-ground.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(75, 'Gradient Pixel', '/resources/animation/screensaver.best/gradient-pixel.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(76, 'Growy', '/resources/animation/screensaver.best/growy.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(77, 'Hadoken', '/resources/animation/screensaver.best/hadoken.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(78, 'Haircut', '/resources/animation/screensaver.best/haircut.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(79, 'Hand', '/resources/animation/screensaver.best/hand.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(80, 'Happy Boom', '/resources/animation/screensaver.best/happy-boom.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(81, 'Happy Toiletpaper', '/resources/animation/screensaver.best/happy-toiletpaper.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(82, 'Heart', '/resources/animation/screensaver.best/heart.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(83, 'Hearts', '/resources/animation/screensaver.best/hearts.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(84, 'Heavy Snow', '/resources/animation/screensaver.best/heavy-snow.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(85, 'Hexagon', '/resources/animation/screensaver.best/hexagon.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(86, 'Hexocet', '/resources/animation/screensaver.best/hexocet.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(87, 'Honey', '/resources/animation/screensaver.best/honey.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(88, 'Hope', '/resources/animation/screensaver.best/hope.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(89, 'HQ Gradient', '/resources/animation/screensaver.best/hq-gradient.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(90, 'Hyper Cosmos', '/resources/animation/screensaver.best/hyper-cosmos.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(91, 'Island', '/resources/animation/screensaver.best/island.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(92, 'Julia', '/resources/animation/screensaver.best/julia.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(93, 'Knight Rider', '/resources/animation/screensaver.best/knight-rider.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(94, 'Knight Rider – Kitt', '/resources/animation/screensaver.best/kitt.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(95, 'Las Vagos', '/resources/animation/screensaver.best/las-vagos.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(96, 'Lava Lamp', '/resources/animation/screensaver.best/lava-lamp.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(97, 'Lens', '/resources/animation/screensaver.best/lens.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(98, 'Lightsaber', '/resources/animation/screensaver.best/lightsaber.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(99, 'Lightsabers', '/resources/animation/screensaver.best/lightsabers.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(100, 'Lines', '/resources/animation/screensaver.best/lines.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(101, 'Liquid', '/resources/animation/screensaver.best/liquid.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(102, 'Looking', '/resources/animation/screensaver.best/looking.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(103, 'Love leave', '/resources/animation/screensaver.best/love-leave.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(104, 'Loveee', '/resources/animation/screensaver.best/loveee.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(105, 'Loveplosion', '/resources/animation/screensaver.best/loveplosion.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(106, 'Lover', '/resources/animation/screensaver.best/lover.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(107, 'LSD Party', '/resources/animation/screensaver.best/lsd-party.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(108, 'Matrix', '/resources/animation/screensaver.best/matrix.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(109, 'Midnight Drive', '/resources/animation/screensaver.best/midnight-drive.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(110, 'Moon & Sun', '/resources/animation/screensaver.best/moon-sun.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(111, 'Morph', '/resources/animation/screensaver.best/morph.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(112, 'Motorcycle', '/resources/animation/screensaver.best/motorcycle.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(113, 'Moving Star', '/resources/animation/screensaver.best/moving-star.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(114, 'Neuro', '/resources/animation/screensaver.best/neuro.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(115, 'Night', '/resources/animation/screensaver.best/night.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(116, 'Night Cat', '/resources/animation/screensaver.best/night-cat.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(117, 'Oldstyle', '/resources/animation/screensaver.best/oldstyle.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(118, 'One World', '/resources/animation/screensaver.best/one-world.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(119, 'Opening', '/resources/animation/screensaver.best/opening.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(120, 'Orbit', '/resources/animation/screensaver.best/orbit.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(121, 'Paint', '/resources/animation/screensaver.best/paint.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(122, 'Piano', '/resources/animation/screensaver.best/piano.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(123, 'Ping Pong', '/resources/animation/screensaver.best/ping-pong.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(124, 'Pixel', '/resources/animation/screensaver.best/pixel.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(125, 'Planets', '/resources/animation/screensaver.best/planets.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(126, 'Plasma Globe', '/resources/animation/screensaver.best/plasma-globe.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(127, 'Plus', '/resources/animation/screensaver.best/plus.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(128, 'Police', '/resources/animation/screensaver.best/police.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(129, 'Poltergeist', '/resources/animation/screensaver.best/poltergeist.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(130, 'Psygrow', '/resources/animation/screensaver.best/psygrow.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(131, 'Quadgrow', '/resources/animation/screensaver.best/quadgrow.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(132, 'Quadizer', '/resources/animation/screensaver.best/quadizer.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(133, 'Quadrat', '/resources/animation/screensaver.best/quadrat.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(134, 'Quall', '/resources/animation/screensaver.best/quall.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(135, 'R2-D2', '/resources/animation/screensaver.best/r2-d2.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(136, 'Rainbow Coin', '/resources/animation/screensaver.best/rainbow-coin.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(137, 'Rainbow Kiss', '/resources/animation/screensaver.best/rainbow-kiss.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(138, 'Rainbow Matrix', '/resources/animation/screensaver.best/rainbow-matrix.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(139, 'Rainbow Road', '/resources/animation/screensaver.best/rainbow-road.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(140, 'Rave', '/resources/animation/screensaver.best/rave.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(141, 'Real Love', '/resources/animation/screensaver.best/real-love.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(142, 'RGB Ball', '/resources/animation/screensaver.best/rgb-ball.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(143, 'RGB Circles', '/resources/animation/screensaver.best/rgb-circles.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(144, 'RGB Gears', '/resources/animation/screensaver.best/rgb-gears.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(145, 'Ring', '/resources/animation/screensaver.best/ring.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(146, 'Rotater', '/resources/animation/screensaver.best/rotater.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(147, 'Rowsi', '/resources/animation/screensaver.best/rowsi.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(148, 'Saturday Night', '/resources/animation/screensaver.best/saturday-night.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(149, 'Shader', '/resources/animation/screensaver.best/shader.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(150, 'Slow Move', '/resources/animation/screensaver.best/slow-move.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(151, 'Slowgrow', '/resources/animation/screensaver.best/slowgrow.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(152, 'Slowspeed', '/resources/animation/screensaver.best/slowspeed.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(153, 'Smoke', '/resources/animation/screensaver.best/smoke.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(154, 'Snakes', '/resources/animation/screensaver.best/snakes.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(155, 'Snow', '/resources/animation/screensaver.best/snow.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(156, 'Soap Bubbles', '/resources/animation/screensaver.best/soap-bubbles.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(157, 'Space', '/resources/animation/screensaver.best/space.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(158, 'Spermium', '/resources/animation/screensaver.best/spermium.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(159, 'Spin in', '/resources/animation/screensaver.best/spin-in.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(160, 'Spiral', '/resources/animation/screensaver.best/spiral.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(161, 'Spirograph', '/resources/animation/screensaver.best/spirograph.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(162, 'Spironet', '/resources/animation/screensaver.best/spironet.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(163, 'Spiroquad', '/resources/animation/screensaver.best/spiroquad.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(164, 'Splashy', '/resources/animation/screensaver.best/splashy.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(165, 'Square Dance', '/resources/animation/screensaver.best/square-dance.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(166, 'Star', '/resources/animation/screensaver.best/star.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(167, 'Star Wars', '/resources/animation/screensaver.best/star-wars.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(168, 'Star Wars BB-8', '/resources/animation/screensaver.best/star-wars-bb-8.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(169, 'Stars', '/resources/animation/screensaver.best/stars.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(170, 'Sunglasses', '/resources/animation/screensaver.best/sunglasses.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(171, 'Sunrise', '/resources/animation/screensaver.best/sunrise.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(172, 'Surfing Stone', '/resources/animation/screensaver.best/surfing-stone.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(173, 'Tentacle', '/resources/animation/screensaver.best/tentacle.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(174, 'Tetris', '/resources/animation/screensaver.best/tetris.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(175, 'The First', '/resources/animation/screensaver.best/the-first.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(176, 'Toiletpaper', '/resources/animation/screensaver.best/toiletpaper.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(177, 'Tools', '/resources/animation/screensaver.best/tools.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(178, 'Tour de France', '/resources/animation/screensaver.best/tour-de-france.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(179, 'Traces', '/resources/animation/screensaver.best/traces.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(180, 'Transforming', '/resources/animation/screensaver.best/transforming.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(181, 'Tree', '/resources/animation/screensaver.best/tree.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(182, 'Triangle', '/resources/animation/screensaver.best/triangle.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(183, 'Turner', '/resources/animation/screensaver.best/turner.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(184, 'Underwater', '/resources/animation/screensaver.best/underwater.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(185, 'Up&Down', '/resources/animation/screensaver.best/updown.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(186, 'Vampire Lady', '/resources/animation/screensaver.best/vampire-lady.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(187, 'Waiting', '/resources/animation/screensaver.best/waiting.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(188, 'Wallpaper', '/resources/animation/screensaver.best/wallpaper.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(189, 'Wave', '/resources/animation/screensaver.best/wave.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(190, 'Waves', '/resources/animation/screensaver.best/waves.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(191, 'Wholething', '/resources/animation/screensaver.best/wholething.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(192, 'Wine Berries', '/resources/animation/screensaver.best/wine-berries.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(193, 'Wired Steps', '/resources/animation/screensaver.best/wired-steps.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(194, 'Woop', '/resources/animation/screensaver.best/woop.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(195, 'World', '/resources/animation/screensaver.best/world.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(196, 'Kaleidoscope', '/resources/animation/screensaver.best/kaleidoscope.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(197, 'Moving Triangle', '/resources/animation/screensaver.best/moving-triangle.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(198, 'Space Lights', '/resources/animation/screensaver.best/space-lights.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(199, 'Moon View', '/resources/animation/screensaver.best/moon-view.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(200, 'Rotate Clock', '/resources/animation/screensaver.best/rotate-clock.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(201, 'RGB Clock', '/resources/animation/screensaver.best/rgb-clock.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(202, 'Wind', '/resources/animation/screensaver.best/wind.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(203, 'Octodance', '/resources/animation/screensaver.best/octodance.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(204, 'Fast Turn', '/resources/animation/screensaver.best/fast-turn.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(205, 'Endless Zoom', '/resources/animation/screensaver.best/endless-zoom.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(206, 'Gradient Animation', '/resources/animation/screensaver.best/gradient-animation.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(207, 'Color Changer', '/resources/animation/screensaver.best/color-changer.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(208, 'SkyView', '/resources/animation/screensaver.best/skyview.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(209, 'Bear', '/resources/animation/screensaver.best/bear.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(210, 'Rocket', '/resources/animation/screensaver.best/rocket.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(211, 'Cosmos', '/resources/animation/screensaver.best/cosmos.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(212, 'Pink Planet', '/resources/animation/screensaver.best/pink-planet.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(213, 'Snowing', '/resources/animation/screensaver.best/snowing.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(214, 'Radial Gradient', '/resources/animation/screensaver.best/radial-gradient.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(215, 'Neon Light', '/resources/animation/screensaver.best/neon-light.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(216, 'Gradient Frame', '/resources/animation/screensaver.best/gradient-frame.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(217, 'Horse Power', '/resources/animation/screensaver.best/horse-power.html');
INSERT INTO `animation` (`idAnimation`, `label`, `lien`) VALUES(218, 'Matrix Frame', '/resources/animation/screensaver.best/matrix-frame.html');

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `idClient` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idClient`),
  UNIQUE KEY `nom` (`nom`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `colonne`
--

DROP TABLE IF EXISTS `colonne`;
CREATE TABLE IF NOT EXISTS `colonne` (
  `ColonneNbr` int(11) NOT NULL,
  `Maquette_idMaquette` int(11) NOT NULL,
  `Playlist_idPlaylist` int(11) DEFAULT NULL,
  `Type` varchar(20) NOT NULL DEFAULT 'Media',
  PRIMARY KEY (`ColonneNbr`,`Maquette_idMaquette`),
  KEY `fk_Colonne_Maquette1_idx` (`Maquette_idMaquette`),
  KEY `fk_Colonne_Playlist1_idx` (`Playlist_idPlaylist`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `demande`
--

DROP TABLE IF EXISTS `demande`;
CREATE TABLE IF NOT EXISTS `demande` (
  `idDemande` int(5) NOT NULL AUTO_INCREMENT,
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Client_idClient` int(11) NOT NULL,
  `User_idUser` int(11) NOT NULL,
  PRIMARY KEY (`idDemande`),
  UNIQUE KEY `User_idUser` (`User_idUser`),
  KEY `Client_idClient_idx` (`Client_idClient`),
  KEY `fk_Demande_User1_idx` (`User_idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `maquette`
--

DROP TABLE IF EXISTS `maquette`;
CREATE TABLE IF NOT EXISTS `maquette` (
  `idMaquette` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(45) DEFAULT NULL,
  `grid_template_columns` varchar(255) DEFAULT '0',
  `nbrColonne` int(11) DEFAULT '3',
  `Client_idClient` int(11) NOT NULL,
  PRIMARY KEY (`idMaquette`),
  KEY `fk_Maquette_Client1_idx` (`Client_idClient`)
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8;

--
-- Triggers `maquette`
--
DROP TRIGGER IF EXISTS `exess_col_delete`;
DELIMITER $$
CREATE TRIGGER `exess_col_delete` AFTER UPDATE ON `maquette` FOR EACH ROW DELETE colonne FROM colonne 
INNER JOIN maquette ON colonne.Maquette_idMaquette = maquette.idMaquette
WHERE colonne.ColonneNbr > maquette.nbrColonne
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
CREATE TABLE IF NOT EXISTS `media` (
  `idMedia` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `lien` varchar(45) DEFAULT NULL,
  `Client_idClient` int(11) DEFAULT NULL,
  `Animation_idAnimation` int(11) DEFAULT NULL,
  PRIMARY KEY (`idMedia`),
  UNIQUE KEY `lien` (`lien`,`Client_idClient`),
  KEY `fk_Media_Client1_idx` (`Client_idClient`),
  KEY `fk_Media_Animation1_idx` (`Animation_idAnimation`)
) ENGINE=InnoDB AUTO_INCREMENT=277 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(7, '', 'Animation', NULL, 0, 1);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(8, '', 'Animation', NULL, 0, 2);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(9, '', 'Animation', NULL, 0, 3);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(10, '', 'Animation', NULL, 0, 4);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(11, '', 'Animation', NULL, 0, 5);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(12, '', 'Animation', NULL, 0, 6);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(13, '', 'Animation', NULL, 0, 7);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(14, '', 'Animation', NULL, 0, 8);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(15, '', 'Animation', NULL, 0, 9);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(16, '', 'Animation', NULL, 0, 10);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(17, '', 'Animation', NULL, 0, 11);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(18, '', 'Animation', NULL, 0, 12);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(19, '', 'Animation', NULL, 0, 13);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(20, '', 'Animation', NULL, 0, 14);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(21, '', 'Animation', NULL, 0, 15);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(22, '', 'Animation', NULL, 0, 16);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(23, '', 'Animation', NULL, 0, 17);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(24, '', 'Animation', NULL, 0, 18);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(25, '', 'Animation', NULL, 0, 19);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(26, '', 'Animation', NULL, 0, 20);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(27, '', 'Animation', NULL, 0, 21);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(28, '', 'Animation', NULL, 0, 22);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(29, '', 'Animation', NULL, 0, 23);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(30, '', 'Animation', NULL, 0, 24);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(31, '', 'Animation', NULL, 0, 25);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(32, '', 'Animation', NULL, 0, 26);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(33, '', 'Animation', NULL, 0, 27);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(34, '', 'Animation', NULL, 0, 28);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(35, '', 'Animation', NULL, 0, 29);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(36, '', 'Animation', NULL, 0, 30);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(37, '', 'Animation', NULL, 0, 31);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(38, '', 'Animation', NULL, 0, 32);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(39, '', 'Animation', NULL, 0, 33);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(40, '', 'Animation', NULL, 0, 34);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(41, '', 'Animation', NULL, 0, 35);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(42, '', 'Animation', NULL, 0, 36);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(43, '', 'Animation', NULL, 0, 37);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(44, '', 'Animation', NULL, 0, 38);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(45, '', 'Animation', NULL, 0, 39);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(46, '', 'Animation', NULL, 0, 40);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(47, '', 'Animation', NULL, 0, 41);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(48, '', 'Animation', NULL, 0, 42);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(49, '', 'Animation', NULL, 0, 43);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(50, '', 'Animation', NULL, 0, 44);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(51, '', 'Animation', NULL, 0, 45);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(52, '', 'Animation', NULL, 0, 46);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(53, '', 'Animation', NULL, 0, 47);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(54, '', 'Animation', NULL, 0, 48);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(55, '', 'Animation', NULL, 0, 49);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(56, '', 'Animation', NULL, 0, 50);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(57, '', 'Animation', NULL, 0, 51);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(58, '', 'Animation', NULL, 0, 52);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(59, '', 'Animation', NULL, 0, 53);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(60, '', 'Animation', NULL, 0, 54);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(61, '', 'Animation', NULL, 0, 55);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(62, '', 'Animation', NULL, 0, 56);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(63, '', 'Animation', NULL, 0, 57);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(64, '', 'Animation', NULL, 0, 58);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(65, '', 'Animation', NULL, 0, 59);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(66, '', 'Animation', NULL, 0, 60);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(67, '', 'Animation', NULL, 0, 61);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(68, '', 'Animation', NULL, 0, 62);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(69, '', 'Animation', NULL, 0, 63);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(70, '', 'Animation', NULL, 0, 64);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(71, '', 'Animation', NULL, 0, 65);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(72, '', 'Animation', NULL, 0, 66);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(73, '', 'Animation', NULL, 0, 67);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(74, '', 'Animation', NULL, 0, 68);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(75, '', 'Animation', NULL, 0, 69);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(76, '', 'Animation', NULL, 0, 70);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(77, '', 'Animation', NULL, 0, 71);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(78, '', 'Animation', NULL, 0, 72);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(79, '', 'Animation', NULL, 0, 73);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(80, '', 'Animation', NULL, 0, 74);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(81, '', 'Animation', NULL, 0, 75);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(82, '', 'Animation', NULL, 0, 76);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(83, '', 'Animation', NULL, 0, 77);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(84, '', 'Animation', NULL, 0, 78);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(85, '', 'Animation', NULL, 0, 79);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(86, '', 'Animation', NULL, 0, 80);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(87, '', 'Animation', NULL, 0, 81);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(88, '', 'Animation', NULL, 0, 82);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(89, '', 'Animation', NULL, 0, 83);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(90, '', 'Animation', NULL, 0, 84);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(91, '', 'Animation', NULL, 0, 85);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(92, '', 'Animation', NULL, 0, 86);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(93, '', 'Animation', NULL, 0, 87);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(94, '', 'Animation', NULL, 0, 88);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(95, '', 'Animation', NULL, 0, 89);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(96, '', 'Animation', NULL, 0, 90);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(97, '', 'Animation', NULL, 0, 91);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(98, '', 'Animation', NULL, 0, 92);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(99, '', 'Animation', NULL, 0, 93);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(100, '', 'Animation', NULL, 0, 94);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(101, '', 'Animation', NULL, 0, 95);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(102, '', 'Animation', NULL, 0, 96);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(103, '', 'Animation', NULL, 0, 97);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(104, '', 'Animation', NULL, 0, 98);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(105, '', 'Animation', NULL, 0, 99);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(106, '', 'Animation', NULL, 0, 100);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(107, '', 'Animation', NULL, 0, 101);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(108, '', 'Animation', NULL, 0, 102);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(109, '', 'Animation', NULL, 0, 103);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(110, '', 'Animation', NULL, 0, 104);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(111, '', 'Animation', NULL, 0, 105);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(112, '', 'Animation', NULL, 0, 106);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(113, '', 'Animation', NULL, 0, 107);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(114, '', 'Animation', NULL, 0, 108);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(115, '', 'Animation', NULL, 0, 109);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(116, '', 'Animation', NULL, 0, 110);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(117, '', 'Animation', NULL, 0, 111);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(118, '', 'Animation', NULL, 0, 112);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(119, '', 'Animation', NULL, 0, 113);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(120, '', 'Animation', NULL, 0, 114);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(121, '', 'Animation', NULL, 0, 115);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(122, '', 'Animation', NULL, 0, 116);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(123, '', 'Animation', NULL, 0, 117);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(124, '', 'Animation', NULL, 0, 118);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(125, '', 'Animation', NULL, 0, 119);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(126, '', 'Animation', NULL, 0, 120);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(127, '', 'Animation', NULL, 0, 121);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(128, '', 'Animation', NULL, 0, 122);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(129, '', 'Animation', NULL, 0, 123);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(130, '', 'Animation', NULL, 0, 124);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(131, '', 'Animation', NULL, 0, 125);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(132, '', 'Animation', NULL, 0, 126);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(133, '', 'Animation', NULL, 0, 127);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(134, '', 'Animation', NULL, 0, 128);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(135, '', 'Animation', NULL, 0, 129);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(136, '', 'Animation', NULL, 0, 130);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(137, '', 'Animation', NULL, 0, 131);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(138, '', 'Animation', NULL, 0, 132);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(139, '', 'Animation', NULL, 0, 133);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(140, '', 'Animation', NULL, 0, 134);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(141, '', 'Animation', NULL, 0, 135);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(142, '', 'Animation', NULL, 0, 136);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(143, '', 'Animation', NULL, 0, 137);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(144, '', 'Animation', NULL, 0, 138);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(145, '', 'Animation', NULL, 0, 139);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(146, '', 'Animation', NULL, 0, 140);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(147, '', 'Animation', NULL, 0, 141);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(148, '', 'Animation', NULL, 0, 142);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(149, '', 'Animation', NULL, 0, 143);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(150, '', 'Animation', NULL, 0, 144);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(151, '', 'Animation', NULL, 0, 145);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(152, '', 'Animation', NULL, 0, 146);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(153, '', 'Animation', NULL, 0, 147);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(154, '', 'Animation', NULL, 0, 148);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(155, '', 'Animation', NULL, 0, 149);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(156, '', 'Animation', NULL, 0, 150);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(157, '', 'Animation', NULL, 0, 151);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(158, '', 'Animation', NULL, 0, 152);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(159, '', 'Animation', NULL, 0, 153);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(160, '', 'Animation', NULL, 0, 154);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(161, '', 'Animation', NULL, 0, 155);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(162, '', 'Animation', NULL, 0, 156);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(163, '', 'Animation', NULL, 0, 157);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(164, '', 'Animation', NULL, 0, 158);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(165, '', 'Animation', NULL, 0, 159);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(166, '', 'Animation', NULL, 0, 160);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(167, '', 'Animation', NULL, 0, 161);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(168, '', 'Animation', NULL, 0, 162);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(169, '', 'Animation', NULL, 0, 163);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(170, '', 'Animation', NULL, 0, 164);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(171, '', 'Animation', NULL, 0, 165);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(172, '', 'Animation', NULL, 0, 166);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(173, '', 'Animation', NULL, 0, 167);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(174, '', 'Animation', NULL, 0, 168);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(175, '', 'Animation', NULL, 0, 169);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(176, '', 'Animation', NULL, 0, 170);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(177, '', 'Animation', NULL, 0, 171);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(178, '', 'Animation', NULL, 0, 172);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(179, '', 'Animation', NULL, 0, 173);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(180, '', 'Animation', NULL, 0, 174);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(181, '', 'Animation', NULL, 0, 175);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(182, '', 'Animation', NULL, 0, 176);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(183, '', 'Animation', NULL, 0, 177);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(184, '', 'Animation', NULL, 0, 178);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(185, '', 'Animation', NULL, 0, 179);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(186, '', 'Animation', NULL, 0, 180);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(187, '', 'Animation', NULL, 0, 181);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(188, '', 'Animation', NULL, 0, 182);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(189, '', 'Animation', NULL, 0, 183);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(190, '', 'Animation', NULL, 0, 184);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(191, '', 'Animation', NULL, 0, 185);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(192, '', 'Animation', NULL, 0, 186);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(193, '', 'Animation', NULL, 0, 187);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(194, '', 'Animation', NULL, 0, 188);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(195, '', 'Animation', NULL, 0, 189);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(196, '', 'Animation', NULL, 0, 190);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(197, '', 'Animation', NULL, 0, 191);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(198, '', 'Animation', NULL, 0, 192);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(199, '', 'Animation', NULL, 0, 193);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(200, '', 'Animation', NULL, 0, 194);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(201, '', 'Animation', NULL, 0, 195);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(202, '', 'Animation', NULL, 0, 196);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(203, '', 'Animation', NULL, 0, 197);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(204, '', 'Animation', NULL, 0, 198);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(205, '', 'Animation', NULL, 0, 199);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(206, '', 'Animation', NULL, 0, 200);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(207, '', 'Animation', NULL, 0, 201);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(208, '', 'Animation', NULL, 0, 202);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(209, '', 'Animation', NULL, 0, 203);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(210, '', 'Animation', NULL, 0, 204);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(211, '', 'Animation', NULL, 0, 205);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(212, '', 'Animation', NULL, 0, 206);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(213, '', 'Animation', NULL, 0, 207);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(214, '', 'Animation', NULL, 0, 208);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(215, '', 'Animation', NULL, 0, 209);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(216, '', 'Animation', NULL, 0, 210);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(217, '', 'Animation', NULL, 0, 211);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(218, '', 'Animation', NULL, 0, 212);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(219, '', 'Animation', NULL, 0, 213);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(220, '', 'Animation', NULL, 0, 214);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(221, '', 'Animation', NULL, 0, 215);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(222, '', 'Animation', NULL, 0, 216);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(223, '', 'Animation', NULL, 0, 217);
INSERT INTO `media` (`idMedia`, `label`, `type`, `lien`, `Client_idClient`, `Animation_idAnimation`) VALUES(224, '', 'Animation', NULL, 0, 218);

-- --------------------------------------------------------

--
-- Table structure for table `playlist`
--

DROP TABLE IF EXISTS `playlist`;
CREATE TABLE IF NOT EXISTS `playlist` (
  `idPlaylist` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(45) DEFAULT 'default',
  `userCreated` varchar(5) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT 'No',
  `Client_idClient` int(11) NOT NULL,
  PRIMARY KEY (`idPlaylist`),
  KEY `fk_Playlist_Client1_idx` (`Client_idClient`)
) ENGINE=InnoDB AUTO_INCREMENT=510 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Stand-in structure for view `playlistdetails`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `playlistdetails`;
CREATE TABLE IF NOT EXISTS `playlistdetails` (
`id` int(11)
,`playlist` varchar(45)
,`media` varchar(45)
,`type` varchar(45)
);

-- --------------------------------------------------------

--
-- Table structure for table `playlist_has_media`
--

DROP TABLE IF EXISTS `playlist_has_media`;
CREATE TABLE IF NOT EXISTS `playlist_has_media` (
  `Playlist_idPlaylist` int(11) NOT NULL,
  `Media_idMedia` int(11) NOT NULL,
  `rang` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Playlist_idPlaylist`,`Media_idMedia`,`rang`),
  KEY `fk_Playlist_has_Media_Media1_idx` (`Media_idMedia`),
  KEY `fk_Playlist_has_Media_Playlist1_idx` (`Playlist_idPlaylist`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(16) NOT NULL,
  `email` varchar(55) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `salt` varchar(255) NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `admin` int(3) UNSIGNED DEFAULT '0',
  `Client_idClient` int(11) DEFAULT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `password` (`password`),
  UNIQUE KEY `username_2` (`username`),
  UNIQUE KEY `username` (`username`,`email`),
  UNIQUE KEY `email` (`email`),
  KEY `fk_user_Client_idx` (`Client_idClient`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`idUser`, `username`, `email`, `password`, `salt`, `create_time`, `admin`, `Client_idClient`) VALUES(1, 'admin', 'admin@admin.com', '0b2f96cfce74b159ba76b0d83397b319955870e6669865c62a9df10d202109c35338a888c03782f17d3bb0339cc63ef4e17a76b1921888c0b1bb4278ee975b05', '6226519eb126265163f5e8556211c4fb199b9b14196fddf746ede4bdc129004a', '2021-08-30 22:57:26', 2, NULL);

-- --------------------------------------------------------

--
-- Structure for view `playlistdetails`
--
DROP TABLE IF EXISTS `playlistdetails`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `playlistdetails`  AS  select `playlist`.`idPlaylist` AS `id`,`playlist`.`label` AS `playlist`,`media`.`label` AS `media`,`media`.`type` AS `type` from ((`playlist` join `media`) join `playlist_has_media`) where ((`playlist`.`idPlaylist` = `playlist_has_media`.`Playlist_idPlaylist`) and (`media`.`idMedia` = `playlist_has_media`.`Media_idMedia`)) ;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `affichage`
--
ALTER TABLE `affichage`
  ADD CONSTRAINT `fk_Affichage_Client1` FOREIGN KEY (`Client_idClient`) REFERENCES `client` (`idClient`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Affichage_Maquette1` FOREIGN KEY (`Maquette_idMaquette`) REFERENCES `maquette` (`idMaquette`) ON DELETE SET NULL ON UPDATE SET NULL;

--
-- Constraints for table `colonne`
--
ALTER TABLE `colonne`
  ADD CONSTRAINT `fk_Colonne_Maquette1` FOREIGN KEY (`Maquette_idMaquette`) REFERENCES `maquette` (`idMaquette`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Colonne_Playlist1` FOREIGN KEY (`Playlist_idPlaylist`) REFERENCES `playlist` (`idPlaylist`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `demande`
--
ALTER TABLE `demande`
  ADD CONSTRAINT `fk_Demande_Client1` FOREIGN KEY (`Client_idClient`) REFERENCES `client` (`idClient`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Demande_User1` FOREIGN KEY (`User_idUser`) REFERENCES `user` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `maquette`
--
ALTER TABLE `maquette`
  ADD CONSTRAINT `fk_Maquette_Client1` FOREIGN KEY (`Client_idClient`) REFERENCES `client` (`idClient`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `media`
--
ALTER TABLE `media`
  ADD CONSTRAINT `fk_Media_Animation1` FOREIGN KEY (`Animation_idAnimation`) REFERENCES `animation` (`idAnimation`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Media_Client1` FOREIGN KEY (`Client_idClient`) REFERENCES `client` (`idClient`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `playlist`
--
ALTER TABLE `playlist`
  ADD CONSTRAINT `fk_Playlist_Client1` FOREIGN KEY (`Client_idClient`) REFERENCES `client` (`idClient`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `playlist_has_media`
--
ALTER TABLE `playlist_has_media`
  ADD CONSTRAINT `fk_Playlist_has_Media_Media1` FOREIGN KEY (`Media_idMedia`) REFERENCES `media` (`idMedia`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Playlist_has_Media_Playlist1` FOREIGN KEY (`Playlist_idPlaylist`) REFERENCES `playlist` (`idPlaylist`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `Client_idClient` FOREIGN KEY (`Client_idClient`) REFERENCES `client` (`idClient`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
