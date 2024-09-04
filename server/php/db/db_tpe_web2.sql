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

COMMIT;