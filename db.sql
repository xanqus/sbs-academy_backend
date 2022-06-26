DROP DATABASE
IF EXISTS `sbs-academy_backend`;

CREATE DATABASE `sbs-academy_backend`;

USE `sbs-academy_backend`;

CREATE TABLE STUDYTIME (
    `id` VARCHAR(255),
    `videoTime` VARCHAR(255),
    `youtubeWatchCount` VARCHAR(255),
    `baekjoonTime` VARCHAR(255),
    `blogUploadCount` VARCHAR(255)
);

// db 추가사항

SELECT HOST, USER FROM mysql.user;

CREATE USER 'root'@'%' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

SELECT HOST,USER,PLUGIN,authentication_string FROM mysql.user;
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';

SELECT * FROM `STUDYTIME`;

// nest g 에러나면 실행
npm install @nestjs/schematics@8.0.11
npm install @nestjs/cli@8.2.6