CREATE TABLE `samp` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `phone` text NOT NULL,
  `brand` text NOT NULL,
  `duration` int(11) NOT NULL DEFAULT '0',
  `location` text NOT NULL,
  `area` double NOT NULL,
  `plan` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;