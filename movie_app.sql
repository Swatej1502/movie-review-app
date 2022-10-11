-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2022 at 01:14 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movie_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `name` varchar(100) DEFAULT NULL,
  `year` varchar(100) DEFAULT NULL,
  `rating` int(10) DEFAULT NULL,
  `genre` varchar(100) DEFAULT NULL,
  `sl` int(100) NOT NULL,
  `url` varchar(250) DEFAULT NULL,
  `language` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`name`, `year`, `rating`, `genre`, `sl`, `url`, `language`) VALUES
('KGF', '2001-12-22', 8, 'Action', 1, 'https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/05/07/file7kvi55wd6ywm71m431t-1107229-1651918967.jpg', 'Kannada'),
('spider man ', '2001-12-22', 8, 'Action', 2, 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg', 'English'),
('Avengers', '2001-06-06', 8, 'Adventure', 9, 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg', 'English'),
('RRR', '2022-06-06', 8, 'Drama', 10, 'https://stat2.bollywoodhungama.in/wp-content/uploads/2019/03/RRR-2022-306x393.jpeg', 'Telugu'),
('Conjuring', '2006-11-14', 7, 'Horror', 33, 'https://images.squarespace-cdn.com/content/v1/511eea22e4b06642027a9a99/1473717135106-6WRDQJ3A6DBGMP2O938T/The+Conjuring+2.jpg', 'English'),
('Avatar', '20-02-2002', 10, 'Adventure', 34, 'https://tse4.mm.bing.net/th?id=OIP.Xv2AhvdeytUkKxevJkET1wHaKf&pid=Api&P=0', 'English'),
('God Father', '2022-08-09', 9, 'Emotional', 35, 'https://tse1.mm.bing.net/th?id=OIF.T0lbdwMuaH0B4sLu94Cv9Q&pid=Api&P=0', 'telugu'),
('Bramhastra', '2022-10-09', 0, 'Mysterical', 36, 'https://starsunfolded.com/wp-content/uploads/2019/03/Brahmastra.jpg', 'Hindi'),
('Vikram Vedha', '2022-10-20', 0, 'Action', 37, 'https://myimg.bid/images/2022/10/01/Vikram-Vedha-2022-Hindi-CAMRip-Full-Movie.jpg', 'Hindi'),
('PS-1', '2022-10-19', 2, 'Family', 38, 'https://media-exp1.licdn.com/dms/image/sync/C5627AQFe80uSN8strg/articleshare-shrink_800/0/1664514984396?e=1665576000&v=beta&t=-LbIUeGv6QF-C250cUGmMzOVMKjhfDU8khv51gtNhtM', 'Kannada'),
('Sita Ramam', '2022-08-10', 10, 'Love', 39, 'https://filmy4u.cfd/wp-content/uploads/2022/09/Sita-Ramam-1-683x1024.jpg', 'Telugu');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `sl` int(10) NOT NULL,
  `movie_id` int(100) DEFAULT NULL,
  `user_id` varchar(100) DEFAULT NULL,
  `user_role` int(100) DEFAULT NULL,
  `rating` int(10) DEFAULT NULL,
  `value` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`sl`, `movie_id`, `user_id`, `user_role`, `rating`, `value`) VALUES
(7, 1, 'gandhamswatej.123@gmail.com', 1, 7, 'nice'),
(8, 9, 'gandhamswatej.123@gmail.com', 0, 9, 'good'),
(9, 1, 'nari@gmail.com', 0, 8, 'nice'),
(10, 9, 'povi@gmail.com', 2, 9, 'nice'),
(14, 1, 'povi@gmail.com', 0, 10, 'nice'),
(19, 10, 'gandhamswatej.123@gmail.com', 1, 8, 'good'),
(20, 2, 'gandhamswatej.123@gmail.com', 0, 8, 'nice'),
(22, 33, 'gandhamswatej.123@gmail.com', 0, 8, 'nice'),
(23, 2, 'nari@gmail.com', 0, 8, 'good'),
(24, 9, 'nari@gmail.com', 0, 9, 'good'),
(25, 35, 'gandhamswatej.123@gmail.com', 1, 10, 'good'),
(26, 36, 'gandhamswatej.123@gmail.com', 1, 9, 'high visuals'),
(27, 39, 'gandhamswatej.123@gmail.com', 1, 10, 'unmachable love'),
(28, 34, 'gandhamswatej.123@gmail.com', 1, 10, 'best movie'),
(29, 38, 'gandhamswatej.123@gmail.com', 1, 2, 'low');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `sl` int(100) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `role` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`sl`, `name`, `email`, `password`, `role`) VALUES
(10, 'nari', 'nari@gmail.com', '12345', 0),
(11, 'swatej', 'gandhamswatej.123@gmail.com', '12345', 1),
(13, 'povi', 'povi@gmail.com', '12345', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`sl`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`sl`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`sl`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movie`
--
ALTER TABLE `movie`
  MODIFY `sl` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `sl` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `sl` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
