SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET time_zone = "+00:00";

CREATE TABLE `pokemon` (
  `_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `url` varchar(300) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO `pokemon` (`_id`, `name`, `url`)
VALUES
  (1, 'pikachu', 'https://wallpapers-clan.com/wp-content/uploads/2023/11/cute-pokemon-pikachu-rain-desktop-wallpaper-preview.jpg'),
  (2, 'gengar', 'https://wallpapers-clan.com/wp-content/uploads/2024/04/pokemon-gengar-cool-red-desktop-wallpaper-preview.jpg'),
  (3, 'mewtwo', 'https://wallpapers-clan.com/wp-content/uploads/2024/04/aesthetic-pokemon-mewtwo-desktop-wallpaper-preview.jpg');


CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `clearence` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` (`user_id`, `name`, `email`, `password`, `clearence`) 
VALUES
  (1, 'GASPI', 'gaspi.tudai@gmail.com', '$2y$10$d/AcpkdKVEeHr7Cd/uAM/.EYA86EsjR/Noy/avzyB4UkpztWlCuYq', 'admin'),
  (2, 'LAUTA', 'arielvincennao@hotmail.com', '$2y$10$8Xt2oAL8ZazAXNS5bQxT5eA9lT.myDGgHRrt41BcytlPlqdWvuXHW', 'admin'),

COMMIT;