-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: fundraising_website_data
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` text NOT NULL,
  `page_id` int NOT NULL,
  `donation_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `donation_id_UNIQUE` (`donation_id`),
  KEY `fk_comments_page_id_idx` (`page_id`),
  KEY `fk_comments_donation_id_idx` (`donation_id`),
  CONSTRAINT `fk_comments_donation_id` FOREIGN KEY (`donation_id`) REFERENCES `donations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_comments_page_id` FOREIGN KEY (`page_id`) REFERENCES `fundraising_pages` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (18,'I’ve always believed that everyone should have a safe place to call home. When I learned about the struggles many people in our community face daily, I felt compelled to help. Your campaign resonated with me because it’s about more than just providing shelter, it’s about giving people hope and dignity. I wanted to be part of something that makes a real difference in people’s lives.',1,34,'2024-08-13 16:33:14','2024-08-13 18:32:47'),(19,'Seeing the growing number of people without basic necessities really struck a chord with me. I’ve been fortunate enough to have a roof over my head, and I can’t imagine what it would be like to live without that security. The idea that my donation could help someone get back on their feet and find stability again was all the motivation I needed to give. I believe we all have a responsibility to help our neighbors in need.',1,37,'2024-08-13 17:54:42','2024-08-13 18:33:26'),(20,'What motivated me to donate was the realization that homelessness isn’t just about lacking a roof over your head; it’s about losing a sense of safety and belonging. Your campaign’s message reminded me of how important it is to support those who are struggling. I wanted to contribute to something that not only provides shelter but also restores hope and helps people rebuild their lives. It’s a cause that aligns with my values, and I’m proud to support it.',1,40,'2024-08-13 17:58:12','2024-08-13 18:34:09'),(21,'I have always had a deep love for animals, and it breaks my heart to think of any creature suffering. When I saw your campaign, I knew I had to contribute. The work you are doing to rescue and care for these vulnerable animals is incredible, and I wanted to be a part of that positive change.',4,43,'2024-08-13 18:25:12','2024-08-13 18:35:31'),(22,'I donated because I believe every living being deserves to be treated with kindness and compassion. Your mission to rescue and rehabilitate animals in need aligns perfectly with my values. I want to help give these animals a second chance at a happy life.',4,46,'2024-08-13 18:26:49','2024-08-13 18:35:59'),(23,'I’ve seen firsthand how much joy and comfort animals can bring into our lives, and it’s devastating to think of them being neglected or abused. Supporting your cause was an easy decision because I know my donation will go toward giving these animals the love and care they deserve.',4,49,'2024-08-13 18:28:09','2024-08-13 18:36:31'),(24,'The cause of helping homeless people resonates with me. I dearly worry about the people living on the streets and having to fight everyday to make ends meet. I hope this donation will help in creating a shelter for homeless people.',1,55,'2024-08-21 13:29:15','2024-08-21 13:29:15'),(25,'I like animals and have many pets of my own. Most of them have been adopted. This cause is particularly personal to me and I feel like there should be a voice for these animals and care about them.',4,56,'2024-08-21 13:34:13','2024-08-21 13:34:13'),(26,'Animals who don\'t have a voice of their own, need to be taken care of. After all they are living beings who have to be respected. I dearly love animals and would want to donate as much as possible to take care of these living beings.',4,59,'2024-08-21 13:44:24','2024-08-21 13:44:24'),(27,'The promise to provide care, assistance etc. For the animals motivated me to donate to the cause.',4,62,'2024-08-21 15:26:42','2024-08-21 15:26:42'),(28,'I find peace in helping homeless people and its one of the causes that I support. It motivates me to keep helping those in need.',1,65,'2024-08-21 19:03:13','2024-08-21 19:03:13'),(29,'Being aware of housing crisis',1,67,'2024-08-22 06:30:50','2024-08-22 06:30:50'),(30,'I donate because I believe everyone deserves a chance at a better life. It feels good to help others when they need it most.',1,72,'2024-08-22 14:03:40','2024-08-22 14:03:40'),(31,'I care about animals and want to protect them from harm. It makes me happy to know I\'m helping improve their lives.',4,73,'2024-08-22 14:05:22','2024-08-22 14:05:22'),(32,'Helping animals is one that I like personally and seeing so many people support has also motivated me even more.',4,79,'2024-08-22 20:43:11','2024-08-22 20:43:11'),(33,'I like to help homeless people and i feel i can help them in my way',1,84,'2024-08-30 20:51:29','2024-08-30 20:51:29'),(34,'Helping out animals who cannot fend for themselves is one of the things that brings me peace.',4,87,'2024-08-30 20:55:21','2024-08-30 20:55:21'),(35,'Being able to help such helpless creatures is what everyone should do. As human beings it is our duty to help out each and every animal on the planet as we are the ones who are capable. Animals don\'t have a voice of their own and should be taken care of nicely.',4,90,'2024-08-30 20:58:46','2024-08-30 20:58:46'),(36,'Helping homeless people deeply moves me because it means giving them hope, comfort, and the chance to rebuild their lives. It\'s about showing kindness when they need it most.',1,91,'2024-08-30 21:47:48','2024-08-30 21:47:48'),(37,'Helping animals moves me deeply because it means giving them love, attention, and protection when they can\'t seek it on their own. It\'s about being kind to those who depend on us.',4,92,'2024-08-30 21:50:41','2024-08-30 21:50:41'),(38,'I love animals and it breaks my heart seeing them suffering',4,98,'2024-08-30 22:36:03','2024-08-30 22:36:03'),(46,'desire to bring change',1,131,'2024-09-05 18:34:49','2024-09-05 18:34:49');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donations`
--

DROP TABLE IF EXISTS `donations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` decimal(10,2) NOT NULL,
  `page_id` int NOT NULL,
  `user_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_anonymous` tinyint DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_donations_campaign_id_idx` (`page_id`),
  KEY `fk_donations_user_id_idx` (`user_id`),
  CONSTRAINT `fk_donations_campaign_id` FOREIGN KEY (`page_id`) REFERENCES `fundraising_pages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_donations_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=132 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donations`
--

LOCK TABLES `donations` WRITE;
/*!40000 ALTER TABLE `donations` DISABLE KEYS */;
INSERT INTO `donations` VALUES (34,96.00,1,498020,'2024-08-13 16:33:14','2024-08-13 16:33:14',0),(35,100.00,5,498020,'2024-08-13 16:40:28','2024-08-13 16:40:28',0),(36,300.00,3,498020,'2024-08-13 16:41:34','2024-08-13 16:41:34',0),(37,50.00,1,462554,'2024-08-13 17:54:42','2024-08-13 17:54:42',0),(38,100.00,2,462554,'2024-08-13 17:57:08','2024-08-13 17:57:08',0),(39,350.00,6,462554,'2024-08-13 17:57:27','2024-08-13 17:57:27',0),(40,100.00,1,387343,'2024-08-13 17:58:12','2024-08-13 17:58:12',0),(41,200.00,6,387343,'2024-08-13 18:24:03','2024-08-13 18:24:03',0),(42,200.00,3,387343,'2024-08-13 18:24:26','2024-08-13 18:24:26',0),(43,200.00,4,231861,'2024-08-13 18:25:12','2024-08-13 18:25:12',0),(44,200.00,2,231861,'2024-08-13 18:25:38','2024-08-13 18:25:38',0),(45,100.00,5,231861,'2024-08-13 18:25:58','2024-08-13 18:25:58',0),(46,200.00,4,284543,'2024-08-13 18:26:49','2024-08-13 18:26:49',0),(47,200.00,2,284543,'2024-08-13 18:27:30','2024-08-13 18:27:30',0),(48,100.00,6,284543,'2024-08-13 18:27:37','2024-08-13 18:27:37',0),(49,150.00,4,405090,'2024-08-13 18:28:09','2024-08-13 18:28:09',0),(50,200.00,5,405090,'2024-08-13 18:28:29','2024-08-13 18:28:29',0),(51,150.00,3,405090,'2024-08-13 18:28:38','2024-08-13 18:28:38',0),(52,150.00,1,755835,'2024-08-19 22:09:12','2024-08-19 22:09:12',0),(53,200.00,5,618982,'2024-08-21 13:27:19','2024-08-21 13:27:19',0),(54,150.00,3,618982,'2024-08-21 13:27:35','2024-08-21 13:27:35',0),(55,150.00,1,618982,'2024-08-21 13:29:15','2024-08-21 13:29:15',0),(56,200.00,4,151043,'2024-08-21 13:34:10','2024-08-21 13:34:10',0),(57,300.00,6,151043,'2024-08-21 13:34:30','2024-08-21 13:34:30',0),(58,100.00,3,505517,'2024-08-21 13:43:14','2024-08-21 13:43:14',0),(59,400.00,4,505517,'2024-08-21 13:44:24','2024-08-21 13:44:24',0),(60,50.00,1,5973,'2024-08-21 15:21:54','2024-08-21 15:21:54',0),(61,75.00,2,5973,'2024-08-21 15:22:51','2024-08-21 15:22:51',0),(62,150.00,4,5973,'2024-08-21 15:26:42','2024-08-21 15:26:42',0),(63,225.00,5,5973,'2024-08-21 15:27:16','2024-08-21 15:27:16',0),(64,500.00,2,895819,'2024-08-21 19:00:32','2024-08-21 19:00:32',0),(65,200.00,1,110371,'2024-08-21 19:03:13','2024-08-21 19:03:13',0),(66,500.00,6,349602,'2024-08-21 22:58:28','2024-08-21 22:58:28',0),(67,200.00,1,826100,'2024-08-22 06:30:49','2024-08-22 06:30:49',0),(68,150.00,6,826100,'2024-08-22 06:34:51','2024-08-22 06:34:51',0),(69,150.00,2,826100,'2024-08-22 06:35:43','2024-08-22 06:35:43',0),(70,200.00,3,399783,'2024-08-22 10:24:53','2024-08-22 10:24:53',0),(71,300.00,6,399783,'2024-08-22 10:25:12','2024-08-22 10:25:12',0),(72,200.00,1,342370,'2024-08-22 14:03:40','2024-08-22 14:03:40',0),(73,150.00,4,342370,'2024-08-22 14:05:21','2024-08-22 14:05:21',0),(74,50.00,2,342370,'2024-08-22 14:05:42','2024-08-22 14:05:42',0),(75,50.00,5,342370,'2024-08-22 14:05:50','2024-08-22 14:05:50',0),(76,30.00,3,342370,'2024-08-22 14:05:59','2024-08-22 14:05:59',0),(77,20.00,6,342370,'2024-08-22 14:06:07','2024-08-22 14:06:07',0),(78,100.00,2,41644,'2024-08-22 20:42:32','2024-08-22 20:42:32',0),(79,400.00,4,41644,'2024-08-22 20:43:10','2024-08-22 20:43:10',0),(80,200.00,4,375936,'2024-08-27 15:26:07','2024-08-27 15:26:07',0),(81,200.00,1,375936,'2024-08-27 15:26:24','2024-08-27 15:26:24',0),(82,50.00,5,375936,'2024-08-27 15:26:39','2024-08-27 15:26:39',0),(83,50.00,6,375936,'2024-08-27 15:26:44','2024-08-27 15:26:44',0),(84,300.00,1,832375,'2024-08-30 20:51:29','2024-08-30 20:51:29',0),(85,200.00,3,832375,'2024-08-30 20:51:43','2024-08-30 20:51:43',0),(86,300.00,3,929976,'2024-08-30 20:54:48','2024-08-30 20:54:48',0),(87,200.00,4,929976,'2024-08-30 20:55:21','2024-08-30 20:55:21',0),(88,500.00,2,686460,'2024-08-30 20:55:59','2024-08-30 20:55:59',0),(89,100.00,6,977162,'2024-08-30 20:57:25','2024-08-30 20:57:25',0),(90,400.00,4,977162,'2024-08-30 20:58:46','2024-08-30 20:58:46',0),(91,150.00,1,313490,'2024-08-30 21:47:45','2024-08-30 21:47:45',0),(92,120.00,4,313490,'2024-08-30 21:50:38','2024-08-30 21:50:38',0),(93,50.00,2,313490,'2024-08-30 21:51:29','2024-08-30 21:51:29',0),(94,60.00,3,313490,'2024-08-30 21:51:42','2024-08-30 21:51:42',0),(95,60.00,5,313490,'2024-08-30 21:51:58','2024-08-30 21:51:58',0),(96,60.00,6,313490,'2024-08-30 21:52:13','2024-08-30 21:52:13',0),(97,100.00,1,969683,'2024-08-30 22:34:54','2024-08-30 22:34:54',0),(98,150.00,4,969683,'2024-08-30 22:36:03','2024-08-30 22:36:03',0),(99,50.00,2,969683,'2024-08-30 22:36:12','2024-08-30 22:36:12',0),(100,100.00,6,969683,'2024-08-30 22:36:21','2024-08-30 22:36:21',0),(101,100.00,5,969683,'2024-08-30 22:36:29','2024-08-30 22:36:29',0),(102,100.00,1,983429,'2024-08-30 22:39:12','2024-08-30 22:39:12',0),(103,50.00,6,983429,'2024-08-30 22:39:22','2024-08-30 22:39:22',0),(104,100.00,3,983429,'2024-08-30 22:39:29','2024-08-30 22:39:29',0),(105,250.00,5,983429,'2024-08-30 22:39:40','2024-08-30 22:39:40',0),(106,50.00,3,946242,'2024-09-05 12:20:59','2024-09-05 12:20:59',0),(107,40.00,5,946242,'2024-09-05 12:21:25','2024-09-05 12:21:25',0),(108,60.00,1,946242,'2024-09-05 12:22:04','2024-09-05 12:22:04',0),(109,50.00,3,505132,'2024-09-05 16:30:23','2024-09-05 16:30:23',0),(110,60.00,2,505132,'2024-09-05 16:30:44','2024-09-05 16:30:44',0),(111,30.00,1,505132,'2024-09-05 16:31:20','2024-09-05 16:31:20',0),(112,10.00,3,880245,'2024-09-05 16:40:22','2024-09-05 16:40:22',0),(113,200.00,3,67388,'2024-09-05 16:40:54','2024-09-05 16:40:54',0),(114,60.00,3,837499,'2024-09-05 17:16:41','2024-09-05 17:16:41',0),(115,70.00,2,837499,'2024-09-05 17:17:00','2024-09-05 17:17:00',0),(116,10.00,1,837499,'2024-09-05 17:17:28','2024-09-05 17:17:28',0),(117,100.00,3,578846,'2024-09-05 17:23:37','2024-09-05 17:23:37',0),(118,40.00,1,578846,'2024-09-05 17:24:12','2024-09-05 17:24:12',0),(119,70.00,3,68337,'2024-09-05 17:43:24','2024-09-05 17:43:24',0),(120,50.00,3,18423,'2024-09-05 17:58:03','2024-09-05 17:58:03',0),(121,60.00,2,18423,'2024-09-05 17:58:19','2024-09-05 17:58:19',0),(122,60.00,1,18423,'2024-09-05 17:58:50','2024-09-05 17:58:50',0),(123,70.00,3,828059,'2024-09-05 18:08:41','2024-09-05 18:08:41',0),(124,80.00,2,828059,'2024-09-05 18:08:59','2024-09-05 18:08:59',0),(125,60.00,1,828059,'2024-09-05 18:09:29','2024-09-05 18:09:29',0),(126,40.00,3,494629,'2024-09-05 18:20:29','2024-09-05 18:20:29',0),(127,80.00,2,494629,'2024-09-05 18:20:44','2024-09-05 18:20:44',0),(128,30.00,1,494629,'2024-09-05 18:21:13','2024-09-05 18:21:13',0),(129,70.00,3,754711,'2024-09-05 18:34:00','2024-09-05 18:34:00',0),(130,50.00,2,754711,'2024-09-05 18:34:15','2024-09-05 18:34:15',0),(131,70.00,1,754711,'2024-09-05 18:34:49','2024-09-05 18:34:49',0);
/*!40000 ALTER TABLE `donations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fundraising_pages`
--

DROP TABLE IF EXISTS `fundraising_pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fundraising_pages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` text,
  `type` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `image_url` varchar(255) DEFAULT NULL,
  `version` varchar(250) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fundraising_pages`
--

LOCK TABLES `fundraising_pages` WRITE;
/*!40000 ALTER TABLE `fundraising_pages` DISABLE KEYS */;
INSERT INTO `fundraising_pages` VALUES (1,'Every person deserves a place to call home. In our community, too many individuals face the harsh reality of homelessness, struggling to survive without basic necessities. Your donation can make a difference. Join us in our mission to provide shelter, food, and essential services to those in need. Together, we can offer hope and a new beginning for those who have lost everything. Let\'s work together to ensure that everyone has a chance for a better tomorrow.','medical','2024-06-25 11:49:36','2024-09-06 10:57:57','http://localhost:4000/uploads/homeless_3.jpg','motivation','Helping the Homeless Find Hope'),(2,'Homelessness is a pressing issue that affects countless individuals and families. \n    Our organization is dedicated to providing not just temporary relief but long-term solutions to help people rebuild \n    their lives. With your support, we can offer comprehensive services, including housing assistance, job training, and \n    mental health support. Your generosity can empower\n    the homeless to regain their independence and dignity. Let\'s make a meaningful impact and transform lives together.','children','2024-06-25 11:49:36','2024-09-06 10:57:47','http://localhost:4000/uploads/homeless_4.jpg','normal','Empowering the Homeless'),(3,'Imagine a world where everyone has a safe place to sleep, \n    enough to eat, and the support they need to thrive. This is the world we\'re striving to create. \n    By contributing to our homeless care initiative, you\'re not just donating money—you\'re investing in hope,\n    dignity, and a future where homelessness is a thing of the past. Your contribution will provide vital resources \n    such as emergency shelters, \n    nutritious meals, and essential healthcare. Together, we can rise above this crisis and ensure that no one is left behind.','education','2024-06-25 11:49:36','2024-09-06 10:58:10','http://localhost:4000/uploads/homeless_AI.jpg','AI','Together We Rise: Ending Homelessness, One Life at a Time'),(4,'Every animal deserves a chance to live a healthy and happy life. Unfortunately, many pets and wildlife face neglect, abuse, and abandonment. Our mission is to rescue, rehabilitate, and rehome these animals, giving them the love and care they deserve. By donating to our cause, you can help provide medical treatment, shelter, and food for animals in need. Join us in making a difference and giving these animals a second chance at life. Together, we can create a better world for our furry friends.','medical','2024-06-25 22:48:32','2024-09-06 10:58:27','http://localhost:4000/uploads/Animal_3.jpg','motivation','Supporting Animal Welfare'),(5,'Animals across the world are facing harsh realities such as neglect, abuse, and abandonment. Our organization is dedicated to providing a safe haven for these vulnerable creatures. Through rescue operations, medical care, and rehoming efforts, we strive to give every animal a chance for a better life. Your support can help us continue our critical work. By donating, you ensure that these animals receive the care and love they desperately need. Stand with us in protecting and nurturing these innocent lives.','children','2024-06-25 22:48:32','2024-09-06 10:58:40','http://localhost:4000/uploads/Animal_4.jpg','normal','Help Us Protect Vulnerable Animals'),(6,'In a world where too many animals suffer from neglect and mistreatment, our mission is to be the beacon of hope they desperately need. Through rescue, rehabilitation, and rehoming, we work tirelessly to transform the lives of abandoned and abused animals. Your contribution can make a profound difference, providing essential medical care, nutritious food, and loving shelters. Let\'s put compassion into action and ensure every animal experiences the care and kindness they deserve. Join us in this vital cause and be a hero to those without a voice.','education','2024-06-25 22:48:32','2024-09-06 10:58:54','http://localhost:4000/uploads/Animal_AI.jpg','AI','Compassion in Action: Support Animal Rescue');
/*!40000 ALTER TABLE `fundraising_pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL,
  `points_remaining` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (100,500,'2024-08-30 22:50:40','2024-08-30 22:50:40'),(326,500,'2024-08-21 18:32:54','2024-08-21 18:32:54'),(5973,0,'2024-08-21 15:19:40','2024-08-21 15:27:16'),(18423,330,'2024-09-05 17:57:30','2024-09-05 17:58:50'),(18499,500,'2024-09-05 17:36:51','2024-09-05 17:36:51'),(25218,500,'2024-09-05 18:16:41','2024-09-05 18:16:41'),(37272,500,'2024-08-22 20:42:18','2024-08-22 20:42:18'),(41644,0,'2024-08-22 20:42:26','2024-08-22 20:43:10'),(51227,500,'2024-08-21 18:59:31','2024-08-21 18:59:31'),(51444,500,'2024-08-21 13:37:54','2024-08-21 13:37:54'),(67388,300,'2024-09-05 16:40:43','2024-09-05 16:40:54'),(68337,430,'2024-09-05 17:42:51','2024-09-05 17:43:24'),(72457,500,'2024-08-27 15:51:04','2024-08-27 15:51:04'),(79749,500,'2024-09-05 18:11:53','2024-09-05 18:11:53'),(89124,500,'2024-08-20 10:15:12','2024-08-20 10:15:12'),(92825,500,'2024-09-06 10:49:16','2024-09-06 10:49:16'),(99398,500,'2024-09-05 17:32:46','2024-09-05 17:32:46'),(110371,300,'2024-08-21 19:02:17','2024-08-21 19:03:13'),(128509,500,'2024-08-21 18:39:02','2024-08-21 18:39:02'),(129104,500,'2024-08-20 16:33:26','2024-08-20 16:33:26'),(150349,500,'2024-09-05 15:53:47','2024-09-05 15:53:47'),(151043,0,'2024-08-21 13:32:59','2024-08-21 13:34:31'),(157995,500,'2024-09-05 16:16:25','2024-09-05 16:16:25'),(171136,500,'2024-08-19 22:29:47','2024-08-19 22:29:47'),(199124,500,'2024-09-05 17:48:49','2024-09-05 17:48:49'),(214173,500,'2024-08-21 11:36:07','2024-08-21 11:36:07'),(215983,500,'2024-09-05 11:43:02','2024-09-05 11:43:02'),(216736,500,'2024-08-21 18:23:08','2024-08-21 18:23:08'),(223522,500,'2024-09-03 20:51:45','2024-09-03 20:51:45'),(231861,0,'2024-08-13 18:24:51','2024-08-13 18:25:58'),(233151,500,'2024-08-20 16:20:48','2024-08-20 16:20:48'),(247835,500,'2024-08-23 19:33:45','2024-08-23 19:33:45'),(255492,500,'2024-08-20 19:49:32','2024-08-20 19:49:32'),(259090,500,'2024-08-22 11:02:24','2024-08-22 11:02:24'),(261333,500,'2024-08-21 12:42:17','2024-08-21 12:42:17'),(265259,500,'2024-09-05 16:47:26','2024-09-05 16:47:26'),(275920,500,'2024-08-21 13:36:20','2024-08-21 13:36:20'),(278681,500,'2024-09-05 17:54:18','2024-09-05 17:54:18'),(279649,500,'2024-09-05 18:29:30','2024-09-05 18:29:30'),(284543,0,'2024-08-13 18:26:28','2024-08-13 18:27:37'),(299843,500,'2024-08-21 18:32:56','2024-08-21 18:32:56'),(302141,500,'2024-09-05 17:25:45','2024-09-05 17:25:45'),(313490,0,'2024-08-30 21:46:04','2024-08-30 21:52:14'),(316543,500,'2024-08-27 15:51:51','2024-08-27 15:51:51'),(327720,500,'2024-08-20 16:21:38','2024-08-20 16:21:38'),(342370,0,'2024-08-22 14:02:14','2024-08-22 14:06:07'),(349602,0,'2024-08-21 22:57:37','2024-08-21 22:58:28'),(375936,0,'2024-08-27 15:24:28','2024-08-27 15:26:44'),(386841,500,'2024-09-05 18:26:44','2024-09-05 18:26:44'),(387343,0,'2024-08-13 17:57:39','2024-08-13 18:24:26'),(392762,500,'2024-08-20 16:41:05','2024-08-20 16:41:05'),(399783,0,'2024-08-22 10:24:25','2024-08-22 10:25:12'),(403294,500,'2024-08-30 20:50:43','2024-08-30 20:50:43'),(405090,0,'2024-08-13 18:27:47','2024-08-13 18:28:38'),(422740,500,'2024-08-21 16:57:24','2024-08-21 16:57:24'),(437023,500,'2024-09-05 17:11:58','2024-09-05 17:11:58'),(462554,0,'2024-08-13 17:53:41','2024-08-13 17:57:27'),(465091,500,'2024-08-21 15:47:20','2024-08-21 15:47:20'),(469311,500,'2024-08-21 18:37:57','2024-08-21 18:37:57'),(494629,350,'2024-09-05 18:19:54','2024-09-05 18:21:13'),(498020,4,'2024-08-13 13:44:20','2024-08-13 16:41:35'),(499045,500,'2024-09-05 18:17:16','2024-09-05 18:17:16'),(505132,360,'2024-09-05 16:29:35','2024-09-05 16:31:20'),(505517,0,'2024-08-21 13:42:44','2024-08-21 13:44:24'),(507909,500,'2024-09-05 17:31:58','2024-09-05 17:31:58'),(509389,500,'2024-08-20 16:45:58','2024-08-20 16:45:58'),(510724,500,'2024-08-20 16:44:15','2024-08-20 16:44:15'),(535143,500,'2024-08-21 13:40:55','2024-08-21 13:40:55'),(542062,500,'2024-09-05 18:30:29','2024-09-05 18:30:29'),(554755,500,'2024-09-05 16:16:50','2024-09-05 16:16:50'),(557966,500,'2024-08-21 18:53:01','2024-08-21 18:53:01'),(560188,500,'2024-09-05 16:36:51','2024-09-05 16:36:51'),(573037,500,'2024-09-05 17:40:23','2024-09-05 17:40:23'),(578748,500,'2024-08-20 16:19:55','2024-08-20 16:19:55'),(578846,360,'2024-09-05 17:23:03','2024-09-05 17:24:12'),(600066,500,'2024-09-05 16:18:45','2024-09-05 16:18:45'),(605419,500,'2024-08-21 19:03:44','2024-08-21 19:03:44'),(618982,0,'2024-08-21 13:27:04','2024-08-21 13:29:15'),(638511,500,'2024-09-05 17:28:52','2024-09-05 17:28:52'),(648023,500,'2024-09-03 22:11:54','2024-09-03 22:11:54'),(648447,500,'2024-08-22 07:43:57','2024-08-22 07:43:57'),(648929,500,'2024-09-05 16:23:56','2024-09-05 16:23:56'),(658791,500,'2024-09-05 17:48:42','2024-09-05 17:48:42'),(668724,500,'2024-08-21 19:03:30','2024-08-21 19:03:30'),(686460,0,'2024-08-30 20:55:48','2024-08-30 20:55:59'),(728838,500,'2024-08-22 02:21:13','2024-08-22 02:21:13'),(731939,500,'2024-08-20 16:22:27','2024-08-20 16:22:27'),(745846,500,'2024-09-05 18:04:19','2024-09-05 18:04:19'),(750120,500,'2024-09-05 17:20:38','2024-09-05 17:20:38'),(753390,500,'2024-08-27 15:24:19','2024-08-27 15:24:19'),(754711,310,'2024-09-05 18:33:28','2024-09-05 18:34:49'),(755504,500,'2024-08-20 10:10:43','2024-08-20 10:10:43'),(755835,350,'2024-08-19 22:06:29','2024-08-19 22:09:12'),(756454,500,'2024-08-21 11:32:51','2024-08-21 11:32:51'),(779980,500,'2024-09-04 15:12:59','2024-09-04 15:12:59'),(796640,500,'2024-08-21 16:57:46','2024-08-21 16:57:46'),(821151,500,'2024-08-20 19:52:43','2024-08-20 19:52:43'),(826100,0,'2024-08-22 06:30:00','2024-08-22 06:35:43'),(828059,290,'2024-09-05 18:08:07','2024-09-05 18:09:29'),(832375,0,'2024-08-30 20:50:47','2024-08-30 20:51:43'),(837499,360,'2024-09-05 17:16:05','2024-09-05 17:17:28'),(849298,500,'2024-08-30 22:53:23','2024-08-30 22:53:23'),(851923,500,'2024-08-21 13:26:58','2024-08-21 13:26:58'),(859749,500,'2024-09-05 18:03:27','2024-09-05 18:03:27'),(869374,500,'2024-08-20 17:55:24','2024-08-20 17:55:24'),(870709,500,'2024-08-20 19:49:55','2024-08-20 19:49:55'),(877471,500,'2024-08-20 16:21:00','2024-08-20 16:21:00'),(880245,490,'2024-09-05 16:39:47','2024-09-05 16:40:22'),(888136,500,'2024-08-22 04:45:26','2024-08-22 04:45:26'),(895819,0,'2024-08-21 19:00:23','2024-08-21 19:00:32'),(901014,500,'2024-08-20 17:55:51','2024-08-20 17:55:51'),(924698,500,'2024-09-05 17:53:01','2024-09-05 17:53:01'),(926363,500,'2024-09-05 15:53:49','2024-09-05 15:53:49'),(929976,0,'2024-08-30 20:53:08','2024-08-30 20:55:21'),(946242,350,'2024-09-05 12:20:00','2024-09-05 12:22:04'),(951477,500,'2024-09-05 17:13:34','2024-09-05 17:13:34'),(962256,500,'2024-09-05 17:52:20','2024-09-05 17:52:20'),(968970,500,'2024-09-05 18:25:34','2024-09-05 18:25:34'),(969683,0,'2024-08-30 22:34:24','2024-08-30 22:36:29'),(976408,500,'2024-08-23 17:34:07','2024-08-23 17:34:07'),(977162,0,'2024-08-30 20:57:19','2024-08-30 20:58:46'),(980979,500,'2024-09-05 18:13:07','2024-09-05 18:13:07'),(983429,0,'2024-08-30 22:38:53','2024-08-30 22:39:40');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-06 12:01:28
