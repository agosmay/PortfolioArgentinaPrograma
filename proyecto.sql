-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-06-2023 a las 16:40:57
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuentas`
--

CREATE TABLE `cuentas` (
  `email` varchar(255) NOT NULL,
  `clave` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cuentas`
--

INSERT INTO `cuentas` (`email`, `clave`) VALUES
('admin@admin.com', '12345');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `info`
--

CREATE TABLE `info` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `sobremi` varchar(255) NOT NULL,
  `experiencia` varchar(255) NOT NULL,
  `educacion` varchar(255) NOT NULL,
  `skills` varchar(255) NOT NULL,
  `proyectos` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `info`
--

INSERT INTO `info` (`id`, `titulo`, `sobremi`, `experiencia`, `educacion`, `skills`, `proyectos`) VALUES
(701, 'Full Stack Software Engineer Junior', 'Soy traductora Pública de Idioma Inglés y programadora. Apasionada por el Desarrollo Web.', 'Me encuentro buscando mi primera experiencia laboral como desarrolladora.\r\nHe trabajado desde hace más de 10 años como traductora de inglés y profesora de inglés.', '~Traductorado Publico Idioma Ingles(UMSA)\r\n2006-2010\r\n~Curso Argentina Programa Desarrollo Web FullStack ', 'HTML CSS JS BOOTSTRAP NODEJS REACT MYSQL', '~Portfolio Web Angular\r\n~App de Peliculas\r\n~App Clima \r\n~To Do App \r\n~App de e-commerce\r\n');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `info`
--
ALTER TABLE `info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=702;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
