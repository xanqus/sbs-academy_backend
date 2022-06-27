DROP DATABASE
IF EXISTS `sbs-academy_backend`;

CREATE DATABASE `sbs-academy_backend`;

USE `sbs-academy_backend`;

CREATE TABLE `User` (
    `id` INT(255) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `studentName` VARCHAR(255) NOT NULL,
    `discordId` VARCHAR(255) NOT NULL
);

CREATE TABLE StudyTime (
    `id` INT(255) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `discordId` VARCHAR(255) NOT NULL,
    `videoTime` FLOAT(3,1),
    `youtubeWatchCount` FLOAT(3,1),
    `baekjoonTime` FLOAT(3,1),
    `blogUploadCount` FLOAT(3,1)
);