-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 12, 2022 at 08:27 AM
-- Server version: 5.7.24
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dempartner`
--

-- --------------------------------------------------------

--
-- Table structure for table `arrival_adress`
--

CREATE TABLE `arrival_adress` (
  `id` int(11) NOT NULL,
  `street` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `postcode` int(10) NOT NULL,
  `city` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `country` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `housing_type` int(11) NOT NULL,
  `area` int(11) NOT NULL,
  `volume` int(11) NOT NULL,
  `intern_notes` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Informations about arrival adress';

--
-- Dumping data for table `arrival_adress`
--

INSERT INTO `arrival_adress` (`id`, `street`, `postcode`, `city`, `country`, `housing_type`, `area`, `volume`, `intern_notes`) VALUES
(1, 'Première rue', 49000, 'Angers', 'France', 2, 10, 20, 'adresse de livraison'),
(2, 'Deuxième rue', 49000, 'Angers', 'France', 1, 20, 40, 'adresse de livraison'),
(3, 'Troisième rue', 49000, 'Angers', 'France', 2, 30, 60, 'adresse de livraison'),
(4, 'Quatrième rue', 49000, 'Angers', 'France', 1, 40, 80, 'adresse de livraison'),
(5, 'Cinquième rue', 49000, 'Angers', 'France', 2, 50, 100, 'adresse de livraison'),
(6, 'Sixième rue', 49000, 'Angers', 'France', 1, 60, 120, 'adresse de livraison'),
(7, '11 rue eugene pergeline', 44200, 'nantes', 'france', 2, 25, 5, 'd'),
(8, '11 rue eugene pergeline', 44200, 'nantes', 'france', 2, 25, 5, 'd'),
(9, '43 rue de mon fiak', 44200, 'nantes', 'france', 2, 5655, 444, '55');

-- --------------------------------------------------------

--
-- Table structure for table `collaborators`
--

CREATE TABLE `collaborators` (
  `id` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `status` int(11) NOT NULL,
  `roles` int(11) NOT NULL,
  `entity_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `modules_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `collaborators`
--

INSERT INTO `collaborators` (`id`, `firstname`, `lastname`, `email`, `password`, `status`, `roles`, `entity_id`, `company_id`, `modules_id`, `created_at`, `modified_at`) VALUES
(1, 'valentin', 'bouet', 'vkoplis@mail.com', 'root', 1, 1, 5, 2, 1, '2022-10-04 10:15:36', '2022-10-04 10:15:36'),
(2, 'camille', 'random', 'camillekoplis@mail.com', 'root', 1, 4, 2, 1, 1, '2022-10-04 10:15:36', '2022-10-04 10:15:36'),
(3, 'mael', 'giraud', 'mgkoplis@mail.com', 'root', 0, 2, 5, 3, 1, '2022-10-04 10:15:36', '2022-10-04 10:15:36'),
(4, 'marine', 'lololo', 'mckoplis@mail.com', 'root', 1, 3, 5, 2, 1, '2022-10-04 10:15:36', '2022-10-04 10:15:36'),
(5, 'draven', 'demacia', 'ddkoplis@mail.com', 'root', 1, 1, 5, 2, 1, '2022-10-04 10:15:36', '2022-10-04 10:15:36'),
(6, 'bozo', 'LeClown', 'blckoplis@mail.com', 'root', 0, 1, 2, 3, 1, '2022-10-04 10:15:36', '2022-10-04 10:15:36'),
(7, 'jesaispas', 'quoimettre', 'jspqmkoplis@mail.com', 'root', 0, 1, 5, 2, 1, '2022-10-04 10:15:36', '2022-10-04 10:15:36'),
(8, 'test', 'test', 'ttkoplis@mail.com', 'root', 1, 1, 5, 1, 1, '2022-10-04 10:15:36', '2022-10-04 10:15:36');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id` int(11) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `company_code` varchar(100) NOT NULL,
  `address` varchar(200) NOT NULL,
  `city` varchar(100) NOT NULL,
  `zip` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `entity_id` json NOT NULL,
  `state` int(11) NOT NULL,
  `Created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `company_name`, `company_code`, `address`, `city`, `zip`, `user_id`, `entity_id`, `state`, `Created_at`, `Updated_at`) VALUES
(1, 'VbouetDem', 'VB85', '70 ter boulevard guy chouteau', 'Cholet', 49300, 16, '1', 1, '2022-08-18 10:32:42', '2022-08-18 10:32:42'),
(2, 'ElvisDem', 'EV85', '70 ter charles de gaulles', 'Nantes', 95632, 17, '1', 1, '2022-08-18 10:32:42', '2022-08-18 10:32:42');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `civility` int(11) NOT NULL,
  `lastname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `state` int(11) NOT NULL,
  `commercial` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `moving_date` date NOT NULL,
  `date_flexible` tinyint(1) NOT NULL,
  `source` int(11) NOT NULL,
  `inter_notes` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `departure_adress` int(11) NOT NULL DEFAULT '1',
  `arrival_adress` int(11) NOT NULL DEFAULT '1',
  `user_email` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Informations about the customer';

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `type`, `civility`, `lastname`, `firstname`, `email`, `phone`, `state`, `commercial`, `moving_date`, `date_flexible`, `source`, `inter_notes`, `departure_adress`, `arrival_adress`, `user_email`) VALUES
(1, 1, 1, 'Bertrand', 'Pierre', 'pierre.bertrand@gmail.com', '0987654321', 1, 'bouet valentin', '2022-09-12', 1, 1, 'un super client', 1, 6, '3testvalentin@outlook.fr'),
(2, 1, 1, 'Client2', 'Paul', 'client2@gmail.com', '0987654321', 2, 'root2', '2022-09-12', 2, 2, 'un super client', 2, 5, '3testvalentin@outlook.fr'),
(3, 1, 1, 'Client3', 'Jacques', 'client3@gmail.com', '0987654321', 3, 'root3', '2022-09-12', 2, 3, 'un super client', 3, 4, '3testvalentin@outlook.fr'),
(4, 2, 2, 'Client4', 'Léa', 'client4@gmail.com', '0987654321', 4, 'root4', '2022-09-12', 1, 1, 'un client horrible', 4, 3, '3testvalentin@outlook.fr'),
(5, 2, 2, 'Client5', 'Pauline', 'client5@gmail.com', '0987654321', 5, '', '2022-09-12', 2, 2, 'un client horrible', 5, 2, '3testvalentin@outlook.fr'),
(6, 2, 2, 'Client6', 'Audrey', 'client6@gmail.com', '0987654321', 4, '', '2022-09-12', 1, 3, 'un client moyen', 6, 1, '3testvalentin@outlook.fr'),
(7, 1, 1, 'Client7', 'David', 'client7@gmail.com', '0987654321', 5, '', '2022-09-12', 1, 6, 'notes internes', 1, 1, '3testvalentin@outlook.fr'),
(8, 1, 1, 'Client8', 'Elvis', 'client8@gmail.com', '0987654321', 1, '', '2022-09-12', 2, 5, 'notes internes', 1, 2, '4testvalentin@outlook.fr'),
(9, 1, 1, 'Client9', 'Barnabé', 'client9@gmail.com', '0987654321', 2, '', '2022-09-12', 3, 4, 'notes internes', 1, 2, '4testvalentin@outlook.fr'),
(10, 2, 2, 'Client10', 'Louna', 'client10@gmail.com', '0987654321', 3, '', '2022-09-12', 4, 3, 'notes internes', 1, 2, '3testvalentin@outlook.fr'),
(11, 2, 2, 'Client11', 'Pascale', 'client11@gmail.com', '0987654321', 4, '', '2022-09-12', 5, 2, 'notes internes', 1, 2, '4testvalentin@outlook.fr'),
(12, 2, 2, 'Client12', 'Mathilde', 'client12@gmail.com', '0987654321', 5, '', '2022-09-12', 6, 1, 'notes internes', 1, 2, '4testvalentin@outlook.fr');

-- --------------------------------------------------------

--
-- Table structure for table `departure_adress`
--

CREATE TABLE `departure_adress` (
  `id` int(11) NOT NULL,
  `street` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `postcode` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `country` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `housing_type` int(11) NOT NULL,
  `area` int(11) NOT NULL,
  `volume` int(11) NOT NULL,
  `intern_notes` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `departure_adress`
--

INSERT INTO `departure_adress` (`id`, `street`, `postcode`, `city`, `country`, `housing_type`, `area`, `volume`, `intern_notes`) VALUES
(1, 'rue du premier', '44000', 'Nantes', 'France', 1, 10, 20, 'un bel appart'),
(2, 'rue du deuxième', '44000', 'Nantes', 'France', 2, 20, 40, 'une belle maison'),
(3, 'rue du troisième', '44000', 'Nantes', 'France', 1, 30, 60, 'un appart moyen'),
(4, 'rue du quatrième', '44000', 'Nantes', 'France', 2, 40, 80, 'une maison bof'),
(5, 'rue du cinquième', '44000', 'Nantes', 'France', 1, 50, 100, 'un appart spacieux'),
(6, 'rue du sixième', '44000', 'Nantes', 'France', 2, 60, 120, 'grande maison'),
(7, '70 ter boulevard guy chouteau', '49300', 'cholet', 'france', 1, 200, 1, 'd'),
(8, '70 ter boulevard guy chouteau', '49300', 'cholet', 'france', 1, 200, 1, 'd'),
(9, '70 ter bd guy chouteau', '44926', 'cholet', 'france', 1, 2, 2, '2');

-- --------------------------------------------------------

--
-- Table structure for table `entitys`
--

CREATE TABLE `entitys` (
  `id` int(11) NOT NULL,
  `entity_type` int(11) NOT NULL,
  `code_interne` varchar(50) NOT NULL,
  `name_social` varchar(100) NOT NULL,
  `name_commercial` varchar(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `address` varchar(200) NOT NULL,
  `phone` int(11) NOT NULL,
  `fax` int(11) NOT NULL,
  `city` varchar(100) NOT NULL,
  `zip` int(11) NOT NULL,
  `social_capital` int(11) NOT NULL,
  `siret` int(11) NOT NULL,
  `code_APE` varchar(50) NOT NULL,
  `logo_picture` varchar(100) NOT NULL,
  `TVA` varchar(100) NOT NULL,
  `website` varchar(100) NOT NULL,
  `state` int(11) NOT NULL,
  `Created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Modified_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `company_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `entitys`
--

INSERT INTO `entitys` (`id`, `entity_type`, `code_interne`, `name_social`, `name_commercial`, `mail`, `address`, `phone`, `fax`, `city`, `zip`, `social_capital`, `siret`, `code_APE`, `logo_picture`, `TVA`, `website`, `state`, `Created_at`, `Modified_at`, `company_id`) VALUES
(1, 1, 'ADC9', 'ADIDAS.inc', 'ADIDAS', 'adidas@root.fr', '70 ter boulevrad guy chouteau', 678956863, 12351, 'cholet', 49300, 4511518, 1225225, 'ACpe98A', 'test.jpg', 'testTVA', 'testEntity.fr', 1, '2022-08-17 16:28:11', '2022-08-17 16:28:11', 1),
(2, 1, 'SCF16', 'SCUDERIA FERRARI', 'FERRARI', 'ferra@root.fr', '15 rue de la pizza', 58983472, 9865, 'Maranello', 1236, 36526, 986547, ' getbd52', 'test.jpg', 'testTVA', 'testEntity.fr', 2, '2022-08-17 16:28:18', '2022-08-17 16:28:18', 1),
(3, 1, 'SCAT59', 'SCUDERIA ALPHATAURI', 'ALPHA TAURI', 'altauri@root.fr', '35 avenue de Nantes', 58983472, 9865, 'Montcuq', 44300, 36526, 986547, ' getbd52', 'test.jpg', 'testTVA', 'testEntity.fr', 2, '2022-08-17 16:28:18', '2022-08-17 16:28:18', 2),
(4, 1, 'ALP99', 'ALPINE.inc', 'ALPINE', 'alpnie@root.fr', '16 avenue des champs élysées', 678956863, 12351, 'Paris', 96000, 4511518, 1225225, 'ACpe98A', 'test.jpg', 'testTVA', 'testEntity.fr', 1, '2022-08-17 16:28:11', '2022-08-17 16:28:11', 1),
(5, 1, 'GOG02', 'GOOGLE.corp', 'GOOGLE', 'google@root.fr', '11 rue Eugéne pergellines', 58983472, 9865, 'nantes', 44300, 36526, 986547, ' getbd52', 'test.jpg', 'testTVA', 'testEntity.fr', 2, '2022-08-17 16:28:18', '2022-08-17 16:28:18', 2),
(6, 1, 'AD54t', 'MCDO.inc', 'MC DONALD', 'mcdonald@root.fr', 'boulevard des étoiles', 58983472, 9865, 'Thouarés-sur-loire', 44462, 36526, 986547, ' getbd52', 'test.jpg', 'testTVA', 'testEntity.fr', 1, '2022-08-17 16:28:18', '2022-08-17 16:28:18', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `company` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `company_id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `siret` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `job` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `postcode` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `adress` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(80) COLLATE utf8_unicode_ci NOT NULL,
  `key_secret` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datetime_secret` bigint(20) DEFAULT NULL,
  `link_secret` varchar(60) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `company`, `company_id`, `name`, `siret`, `job`, `postcode`, `city`, `adress`, `phone`, `email`, `password`, `key_secret`, `datetime_secret`, `link_secret`) VALUES
(11, 'entreprise 3', 0, 'User 3', '1235435676567809', 'Développeur', '44000', 'Nantes', 'route de Paris', '0987654321', 'entreprise3@gmail.com', '$2b$10$hmaZe7ACoRNLPQhHn8gUsOzPwAJz405gEXCs8yzZCq0IEXb5nVWU.', NULL, NULL, NULL),
(1, 'entreprise 1', 1, 'User 1', '098765432123456', 'Directeur', '44000', 'Nantes', 'route de Paris', '0987654321', 'entreprise1@gmail.com', '$2b$10$lxcyUEhi7QF/G7Lx.Kh2dekF7MCwB1lfnJaAYiFyoD8t66OIrqjPe', NULL, NULL, NULL),
(2, 'entreprise 2', 2, 'User 2', '098765432123456', 'Comptable', '44000', 'Nantes', 'route de Paris', '0987654321', 'entreprise2@gmail.com', 'root', NULL, NULL, NULL),
(16, 'entreprise 4', 1, 'bouet', '1235435676567819', 'developpeur', '44200', 'nantes', 'route de paris', '0672458969', '3testvalentin@outlook.fr', '$2b$10$y1DgaFf.GwAWUQjkvJjvT.gGBZnWS08XyGgkxDUnBEq8a7TGOg.Dy', NULL, NULL, NULL),
(17, 'entreprise 5', 2, 'bouet2', '123543565678', 'developpeur2', '44574', 'nantes', 'route de paris', '0672458969', '4testvalentin@outlook.fr', '$2b$10$y1DgaFf.GwAWUQjkvJjvT.gGBZnWS08XyGgkxDUnBEq8a7TGOg.Dy', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `arrival_adress`
--
ALTER TABLE `arrival_adress`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `collaborators`
--
ALTER TABLE `collaborators`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `departure_adress` (`departure_adress`),
  ADD KEY `arrival_adress` (`arrival_adress`);

--
-- Indexes for table `departure_adress`
--
ALTER TABLE `departure_adress`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `entitys`
--
ALTER TABLE `entitys`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `arrival_adress`
--
ALTER TABLE `arrival_adress`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `collaborators`
--
ALTER TABLE `collaborators`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `departure_adress`
--
ALTER TABLE `departure_adress`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `entitys`
--
ALTER TABLE `entitys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `arrival_adress` FOREIGN KEY (`arrival_adress`) REFERENCES `arrival_adress` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `departure_adress` FOREIGN KEY (`departure_adress`) REFERENCES `departure_adress` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
