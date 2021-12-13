-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 18.212.135.23    Database: crashes
-- ------------------------------------------------------
-- Server version	5.7.36-0ubuntu0.18.04.1

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
-- Temporary view structure for view `avg_speed`
--

DROP TABLE IF EXISTS `avg_speed`;
/*!50001 DROP VIEW IF EXISTS `avg_speed`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `avg_speed` AS SELECT 
 1 AS `Collision Type`,
 1 AS `Average Speed Limit per Crash`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `collision_type`
--

DROP TABLE IF EXISTS `collision_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collision_type` (
  `collision_type_id` int(11) NOT NULL,
  `collision_desc` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`collision_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collision_type`
--

LOCK TABLES `collision_type` WRITE;
/*!40000 ALTER TABLE `collision_type` DISABLE KEYS */;
INSERT INTO `collision_type` VALUES (1,'Same Direction Rear End'),(2,'Opposite Direction Rear End'),(3,'Same Direction Side Swipe'),(4,'Opposite Direction Side Swipe'),(5,'Head-on Left Turn'),(6,'Head-on Right Turn'),(7,'Head-on No Turn'),(8,'Same Direction Right Turn'),(9,'Same Direction Left Turn'),(10,'Same Movement Angle'),(11,'Single Vehicle'),(12,'Angle Meets Left Turn'),(13,'Angle Meets Right Turn'),(14,'Other'),(15,'UNK'),(16,NULL);
/*!40000 ALTER TABLE `collision_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `collision_v_culp`
--

DROP TABLE IF EXISTS `collision_v_culp`;
/*!50001 DROP VIEW IF EXISTS `collision_v_culp`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `collision_v_culp` AS SELECT 
 1 AS `Collision Description`,
 1 AS `Gender`,
 1 AS `Culpability`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `crash_information`
--

DROP TABLE IF EXISTS `crash_information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crash_information` (
  `report_id` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `person_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location_id` int(11) NOT NULL,
  `report_type` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `agency_code` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `acc_date` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `acc_time` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `light_code` int(11) NOT NULL,
  `collision_type_id` int(11) NOT NULL,
  `weather_id` int(11) NOT NULL,
  `surf_cond_code` int(11) NOT NULL,
  `junction_code` int(11) NOT NULL,
  `rd_div_code` int(11) NOT NULL,
  PRIMARY KEY (`report_id`),
  KEY `fk_crash_information_crash_location_idx` (`location_id`),
  KEY `fk_crash_information_road_conditions1_idx` (`junction_code`),
  KEY `fk_crash_information_weather_conditions1_idx` (`weather_id`),
  KEY `fk_crash_information_collision_type1_idx` (`collision_type_id`),
  KEY `fk_crash_information_lighting1_idx` (`light_code`),
  KEY `fk_crash_information_driver_demographics1_idx` (`person_id`),
  CONSTRAINT `fk_crash_information_collision_type1` FOREIGN KEY (`collision_type_id`) REFERENCES `collision_type` (`collision_type_id`),
  CONSTRAINT `fk_crash_information_crash_location` FOREIGN KEY (`location_id`) REFERENCES `crash_location` (`location_id`),
  CONSTRAINT `fk_crash_information_driver_demographics1` FOREIGN KEY (`person_id`) REFERENCES `driver_demographics` (`person_id`),
  CONSTRAINT `fk_crash_information_lighting1` FOREIGN KEY (`light_code`) REFERENCES `lighting` (`light_code`),
  CONSTRAINT `fk_crash_information_road_conditions1` FOREIGN KEY (`junction_code`) REFERENCES `road_conditions` (`junction_code`),
  CONSTRAINT `fk_crash_information_vehicle_data1` FOREIGN KEY (`report_id`) REFERENCES `vehicle_data` (`report_id`),
  CONSTRAINT `fk_crash_information_weather_conditions1` FOREIGN KEY (`weather_id`) REFERENCES `weather_conditions` (`weather_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crash_information`
--

LOCK TABLES `crash_information` WRITE;
/*!40000 ALTER TABLE `crash_information` DISABLE KEYS */;
INSERT INTO `crash_information` VALUES ('AA01280003','a6cca46c-bcd9-4438-9988-6dcfdb5eacd3',12,'Injury Crash','ABERDEEN','11/21/16','14:30:00',3,8,4,3,3,3),('AC1586000T','ee96a89f-b029-40bf-b3af-d8a2f918012a',2,'Fatal Crash','AACOPD','12/20/16','16:28:00',1,1,5,4,1,2),('AC16330014','b32c3f2e-25db-4c93-b803-75077086adfe',2,'Property Damage Crash','AACOPD','10/5/16','19:59:00',99,7,1,1,2,2),('ADJ590001Y','c5df70bf-eca1-4d09-9a79-6b1ff7dd41d8',24,'Injury Crash','BALTIMORE','12/5/16','17:08:00',1,2,6,2,4,2),('ADJ8180008','66b3e700-1e46-427e-b9ff-f69d71199cc6',24,'Injury Crash','BALTIMORE','12/20/16','16:00:00',1,1,5,4,2,4),('AE437900D1','f246c288-fcca-4eed-87bf-2a5b2df31db2',3,'Injury Crash','BACOPD','12/7/16','17:48:00',1,4,3,3,4,4),('AE5486002C','c106b827-1902-449f-ae8e-1f0c85b6e377',3,'Property Damage Crash','BACOPD','11/17/16','7:28:00',1,1,3,2,4,1),('BJ0163000L','6e95b575-c7fd-46db-badc-d9e4460493b9',20,'Property Damage Crash','EASTON','12/28/16','21:42:00',2,14,3,2,4,3),('BS0486001L','ba968eb4-f1c6-4c05-8997-6597dfce489e',10,'Injury Crash','FREDERICKPD','11/2/16','13:25:00',1,1,3,1,4,3),('CB46120002','28d8f62b-aff0-4770-b562-367515a84971',13,'Injury Crash','HOCPD','10/3/16','14:09:00',1,1,7,1,3,1),('CB58870010','f0b59516-25dd-4769-b121-e745a62cf26e',13,'Property Damage Crash','HOCPD','12/6/16','21:32:00',2,8,4,3,1,1),('CT82280001','d7cc7e8f-0a32-42d4-8063-cc140985c563',23,'Injury Crash','OCEANCITY','12/3/16','0:42:00',2,1,2,1,3,1),('DA3408001S','ea12b7ca-e64a-495d-b3e4-ddc35e819faf',16,'Property Damage Crash','PGCOPD','11/2/16','16:46:00',3,6,4,3,2,4),('DV0133000J','023dc526-9004-4c96-97b2-d81fff4b53e6',6,'Property Damage Crash','WESTMINSTER','10/1/16','18:29:00',1,2,2,1,3,4),('EE0094000V','3d2e86ea-e027-4eb6-a7b7-ea28f1b25b84',19,'Property Damage Crash','PRINCESSANNE','11/28/16','15:50:00',1,1,3,3,4,4),('MCP1500001G','6e71cd6b-5552-4690-a293-07f5a928b70b',15,'Injury Crash','MONTGOMERY','11/21/16','16:17:00',3,1,4,3,2,4),('MCP2921001B','5c1d71a7-ab75-4bac-aaa6-a530ef6807ab',15,'Injury Crash','MONTGOMERY','10/23/16','19:26:00',1,12,2,3,3,4),('MSP02000005','0eb4623d-6466-415f-a52a-4dc4edfb127a',11,'Property Damage Crash','MSP','12/18/16','13:46:00',1,1,3,2,4,2),('MSP2951001T','43df9baa-9dfb-4dc4-8108-02e475ef42b4',1,'Property Damage Crash','MSP','12/3/16','9:41:00',3,1,3,1,4,3),('MSP48890002','c060f4d7-8c0f-4c67-b911-f42bcc73b4cb',5,'Property Damage Crash','MSP','11/8/16','7:21:00',1,1,2,1,3,2),('MSP5416002L','ea236403-3d35-47cd-bd82-025202742a57',18,'Property Damage Crash','MSP','10/3/16','23:59:00',2,11,7,1,3,4),('MSP5458001S','b98c57a4-f284-4870-9201-eb0cd3125e40',7,'Property Damage Crash','MSP','12/11/16','15:32:00',3,1,5,4,2,4),('MSP57430059','87f39d9c-76b2-4725-bc64-c9d487c2361f',21,'Property Damage Crash','MSP','11/30/16','11:52:00',1,12,3,3,4,3),('MSP5930001L','727ec460-cdc5-439e-a9d7-2ff4273f90e9',9,'Injury Crash','MSP','11/29/16','18:21:00',3,1,5,4,3,4),('MSP6003001R','94a8bef8-5cd1-4897-91d9-7f986aebd7c7',20,'Property Damage Crash','MSP','11/14/16','9:03:00',1,1,1,1,2,4),('MSP6043003T','ea8e4926-d5ab-4dbe-9fb1-76d9a95d0daf',5,'Injury Crash','MSP','12/11/16','18:30:00',1,3,5,4,1,1),('MSP6065002P','ddb6c981-bb94-4b2a-8517-5d29a388247e',22,'Injury Crash','MSP','11/9/16','8:04:00',1,9,3,1,4,2),('MSP60660031','b3d981d2-3e00-42af-8567-2703522306ca',23,'Property Damage Crash','MSP','11/15/16','16:53:00',1,2,6,2,3,4),('MSP62540012','00bc61f1-d859-46a6-9a5a-fcc57f030976',9,'Fatal Crash','MSP','11/18/16','22:42:00',2,13,2,1,3,4),('MSP6269006C','00e0e3ce-d53f-409a-a653-38b5c4d8b629',17,'Fatal Crash','MSP','10/1/16','15:21:00',1,7,1,1,2,3),('MSP6354002R','79580b47-f878-42aa-87b2-c47be462b25b',17,'Property Damage Crash','MSP','11/17/16','0:21:00',2,3,3,2,4,4),('MSP6379002R','1f60b0c6-50ed-47e7-bc50-62a5ee7a7483',14,'Property Damage Crash','MSP','10/27/16','15:55:00',1,1,3,3,4,4),('MSP65010019','dc3ee8b1-8996-43ea-b2fd-3e881924fbee',19,'Property Damage Crash','MSP','10/16/16','21:02:00',2,12,4,3,4,2),('MSP6534001H','b84502ac-3392-4a7b-b525-28898521fb4e',16,'Injury Crash','MSP','10/9/16','14:41:00',1,1,3,1,4,4),('MSP6680000V','ce012145-bbb5-4199-a0b1-409b3cb7f08a',14,'Property Damage Crash','MSP','12/29/16','13:16:00',3,1,5,4,2,4),('ZA05300010','fa2da4ee-e4cf-4603-838d-785ca522637c',1,'Fatal Crash','ALLEGANY','11/13/16','6:52:00',1,2,2,3,3,3),('ZD4930001P','0ecc5f6e-81f7-422e-9ee5-92b4fac1836e',4,'Fatal Crash','CALVERT','11/6/16','18:57:00',1,8,1,3,2,3),('ZD6258000D','8e9c2103-ed1f-4f1c-8cf7-0256ede5fa9e',4,'Injury Crash','CALVERT','12/24/16','10:36:00',3,1,3,2,4,2),('ZF0487001K','91dc4b81-f8c2-4101-8aa8-67d010163d24',6,'Property Damage Crash','CARROLL','12/27/16','5:02:00',1,1,3,2,4,2),('ZG0932000P','4f05ba02-b6ae-41b3-8c22-b5309a15aaa4',7,'Injury Crash','CECIL','12/23/16','22:49:00',2,12,3,2,4,1),('ZH04220009','d8e05851-d18e-4368-9c9a-c557295243bd',8,'Property Damage Crash','CHARLES','11/9/16','21:28:00',2,2,2,1,3,1),('ZH05480012','e9f77e75-decc-4d98-85cc-db8a0bb68170',8,'Injury Crash','CHARLES','11/17/16','15:17:00',1,12,3,1,4,2),('ZJ0502001D','18ff290b-8870-467c-9550-309d5e9ee592',10,'Property Damage Crash','FREDERICK','12/1/16','6:36:00',1,1,2,3,3,4),('ZK0209001T','5cdaab6e-389c-4260-ac37-e932cbcb3168',11,'Property Damage Crash','GARRETT','11/11/16','6:55:00',2,1,4,3,2,2),('ZL11000005','b06b670e-ac17-4b92-911b-d2b5dd4397b4',12,'Property Damage Crash','HARFORD','11/7/16','7:10:00',1,4,1,1,2,3),('ZR0091001L','19a0f47a-122a-42f5-ac20-ced9fae4ff89',18,'Property Damage Crash','STMARYS','11/24/16','13:49:00',1,10,5,4,1,4),('ZU6482000M','df61ec03-aa27-4d16-8b00-2e59e10af723',21,'Property Damage Crash','WASHINGTON','11/18/16','10:55:00',1,1,2,1,3,4),('ZVW2680016','819aa31c-ce48-4f84-8f36-2b4d5121624a',22,'Property Damage Crash','WICOMICO','12/1/16','18:42:00',3,1,3,1,4,4);
/*!40000 ALTER TABLE `crash_information` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crash_location`
--

DROP TABLE IF EXISTS `crash_location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crash_location` (
  `location_id` int(11) NOT NULL,
  `county_name` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crash_location`
--

LOCK TABLES `crash_location` WRITE;
/*!40000 ALTER TABLE `crash_location` DISABLE KEYS */;
INSERT INTO `crash_location` VALUES (1,'ALLEGHANY'),(2,'ANNE ARUNDLE'),(3,'BALTIMORE COUNTY'),(4,'CALVERT'),(5,'CAROLINE'),(6,'CARROLL'),(7,'CECIL'),(8,'CHARLES'),(9,'DORCHESTER'),(10,'FREDERICK'),(11,'GARRETT'),(12,'HARFORD'),(13,'HOWARD'),(14,'KENT'),(15,'MONTGOMERY'),(16,'PRNICE GEORGE\'S'),(17,'QUEEN ANNE\'S'),(18,'ST MARY\'S'),(19,'SOMERSET'),(20,'TALBOT'),(21,'WASHINGTON'),(22,'WICOMICO'),(23,'WORCESTER'),(24,'BALTIMORE CITY');
/*!40000 ALTER TABLE `crash_location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `driver_culpability`
--

DROP TABLE IF EXISTS `driver_culpability`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driver_culpability` (
  `culpability_id` int(11) NOT NULL,
  `culpability_desc` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`culpability_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver_culpability`
--

LOCK TABLES `driver_culpability` WRITE;
/*!40000 ALTER TABLE `driver_culpability` DISABLE KEYS */;
INSERT INTO `driver_culpability` VALUES (0,'None'),(1,'DWI'),(2,'Using Cell Phone'),(3,'DUI'),(4,'No Seatbelt'),(5,'No Lights On'),(6,'Speeding'),(7,'Eating'),(8,'Distracted'),(9,'Swerving'),(99,'N/A');
/*!40000 ALTER TABLE `driver_culpability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `driver_demographics`
--

DROP TABLE IF EXISTS `driver_demographics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driver_demographics` (
  `report_id` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `person_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sex_code` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_of_birth` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `culpability_id` int(11) NOT NULL,
  PRIMARY KEY (`person_id`),
  KEY `fk_driver_demographics_driver_culpability1_idx` (`culpability_id`),
  CONSTRAINT `fk_driver_demographics_driver_culpability1` FOREIGN KEY (`culpability_id`) REFERENCES `driver_culpability` (`culpability_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver_demographics`
--

LOCK TABLES `driver_demographics` WRITE;
/*!40000 ALTER TABLE `driver_demographics` DISABLE KEYS */;
INSERT INTO `driver_demographics` VALUES ('MSP62540012','00bc61f1-d859-46a6-9a5a-fcc57f030976','M','19-Dec-88',7),('MSP6269006C','00e0e3ce-d53f-409a-a653-38b5c4d8b629','F','17-Oct-88',6),('DV0133000J','023dc526-9004-4c96-97b2-d81fff4b53e6','F','1-Nov-90',8),('MSP02000005','0eb4623d-6466-415f-a52a-4dc4edfb127a','F','12-Oct-58',3),('ZD4930001P','0ecc5f6e-81f7-422e-9ee5-92b4fac1836e','F','7-Jun-50',6),('1','1','F','1',1),('ZJ0502001D','18ff290b-8870-467c-9550-309d5e9ee592','F','9-Jul-94',6),('ZR0091001L','19a0f47a-122a-42f5-ac20-ced9fae4ff89','F','16-Mar-97',6),('MSP6379002R','1f60b0c6-50ed-47e7-bc50-62a5ee7a7483','F','27-Nov-85',6),('CB46120002','28d8f62b-aff0-4770-b562-367515a84971','M','18-Mar-81',8),('EE0094000V','3d2e86ea-e027-4eb6-a7b7-ea28f1b25b84','F','7-Dec-95',6),('MSP2951001T','43df9baa-9dfb-4dc4-8108-02e475ef42b4','F','20-Aug-86',5),('ZG0932000P','4f05ba02-b6ae-41b3-8c22-b5309a15aaa4','M','1-Aug-80',7),('MCP2921001B','5c1d71a7-ab75-4bac-aaa6-a530ef6807ab','F','17-May-39',0),('ZK0209001T','5cdaab6e-389c-4260-ac37-e932cbcb3168','M','15-Nov-90',8),('ADJ8180008','66b3e700-1e46-427e-b9ff-f69d71199cc6','M','7-May-97',1),('MCP1500001G','6e71cd6b-5552-4690-a293-07f5a928b70b','M','4-Jul-96',2),('BJ0163000L','6e95b575-c7fd-46db-badc-d9e4460493b9','M','11-Dec-38',5),('MSP5930001L','727ec460-cdc5-439e-a9d7-2ff4273f90e9','F','15-Oct-73',6),('MSP6354002R','79580b47-f878-42aa-87b2-c47be462b25b','M','29-Dec-78',5),('ZVW2680016','819aa31c-ce48-4f84-8f36-2b4d5121624a','M','29-Apr-55',3),('MSP57430059','87f39d9c-76b2-4725-bc64-c9d487c2361f','F','20-Apr-00',8),('ZD6258000D','8e9c2103-ed1f-4f1c-8cf7-0256ede5fa9e','F','12-Oct-62',0),('ZF0487001K','91dc4b81-f8c2-4101-8aa8-67d010163d24','F','31-Dec-98',0),('MSP6003001R','94a8bef8-5cd1-4897-91d9-7f986aebd7c7','F','12-Dec-98',0),('AA01280003','a6cca46c-bcd9-4438-9988-6dcfdb5eacd3','F','14-Jul-45',6),('ZL11000005','b06b670e-ac17-4b92-911b-d2b5dd4397b4','F','8-Nov-66',8),('AC16330014','b32c3f2e-25db-4c93-b803-75077086adfe','F','2-Jun-83',8),('MSP60660031','b3d981d2-3e00-42af-8567-2703522306ca','M','26-Feb-96',0),('MSP6534001H','b84502ac-3392-4a7b-b525-28898521fb4e','M','1-Jan-00',1),('MSP5458001S','b98c57a4-f284-4870-9201-eb0cd3125e40','M','1-Jun-38',6),('BS0486001L','ba968eb4-f1c6-4c05-8997-6597dfce489e','M','11-Jan-59',3),('MSP48890002','c060f4d7-8c0f-4c67-b911-f42bcc73b4cb','M','20-Jan-97',6),('AE5486002C','c106b827-1902-449f-ae8e-1f0c85b6e377','F','24-Apr-61',6),('ADJ590001Y','c5df70bf-eca1-4d09-9a79-6b1ff7dd41d8','F','17-Aug-96',2),('MSP6680000V','ce012145-bbb5-4199-a0b1-409b3cb7f08a','M','30-Jul-84',9),('CT82280001','d7cc7e8f-0a32-42d4-8063-cc140985c563','F','22-Mar-75',4),('ZH04220009','d8e05851-d18e-4368-9c9a-c557295243bd','F','30-Nov-98',5),('MSP65010019','dc3ee8b1-8996-43ea-b2fd-3e881924fbee','F','3-Oct-65',4),('MSP6065002P','ddb6c981-bb94-4b2a-8517-5d29a388247e','M','24-Feb-92',0),('ZU6482000M','df61ec03-aa27-4d16-8b00-2e59e10af723','M','13-Aug-68',2),('ZH05480012','e9f77e75-decc-4d98-85cc-db8a0bb68170','M','8-Feb-98',9),('DA3408001S','ea12b7ca-e64a-495d-b3e4-ddc35e819faf','M','2-Apr-66',9),('MSP5416002L','ea236403-3d35-47cd-bd82-025202742a57','F','19-Jun-98',5),('MSP6043003T','ea8e4926-d5ab-4dbe-9fb1-76d9a95d0daf','F','19-Jul-81',7),('AC1586000T','ee96a89f-b029-40bf-b3af-d8a2f918012a','M','29-Dec-81',3),('CB58870010','f0b59516-25dd-4769-b121-e745a62cf26e','F','20-May-92',1),('AE437900D1','f246c288-fcca-4eed-87bf-2a5b2df31db2','F','29-Jun-75',0),('ZA05300010','fa2da4ee-e4cf-4603-838d-785ca522637c','F','20-Jan-80',2);
/*!40000 ALTER TABLE `driver_demographics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `hit_and_runs`
--

DROP TABLE IF EXISTS `hit_and_runs`;
/*!50001 DROP VIEW IF EXISTS `hit_and_runs`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `hit_and_runs` AS SELECT 
 1 AS `light_desc`,
 1 AS `Number of Hit and Runs`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `lighting`
--

DROP TABLE IF EXISTS `lighting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lighting` (
  `light_code` int(11) NOT NULL,
  `light_desc` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`light_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lighting`
--

LOCK TABLES `lighting` WRITE;
/*!40000 ALTER TABLE `lighting` DISABLE KEYS */;
INSERT INTO `lighting` VALUES (1,'Day'),(2,'Night'),(3,'Dark No Light'),(99,'UNK');
/*!40000 ALTER TABLE `lighting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `road_conditions`
--

DROP TABLE IF EXISTS `road_conditions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `road_conditions` (
  `junction_code` int(11) NOT NULL,
  `junction_desc` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surf_cond_code` int(11) NOT NULL,
  `surf_cond_desc` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rd_div_code` int(11) NOT NULL,
  `rd_div_desc` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`junction_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `road_conditions`
--

LOCK TABLES `road_conditions` WRITE;
/*!40000 ALTER TABLE `road_conditions` DISABLE KEYS */;
INSERT INTO `road_conditions` VALUES (1,'No Junction',1,'No Obstruction',1,'Median - Guardrail'),(2,'Four Way Stop',2,'Icy',2,'Median- No Guardrail'),(3,'Two Way Stop',3,'Wet',3,'No Median'),(4,'Merge Lane',4,'Snow',4,'No Division');
/*!40000 ALTER TABLE `road_conditions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `two_car_collisions`
--

DROP TABLE IF EXISTS `two_car_collisions`;
/*!50001 DROP VIEW IF EXISTS `two_car_collisions`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `two_car_collisions` AS SELECT 
 1 AS `report_id`,
 1 AS `county_name`,
 1 AS `report_type`,
 1 AS `collision_desc`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `vehicle_data`
--

DROP TABLE IF EXISTS `vehicle_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle_data` (
  `report_id` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vin_num` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `harm_event_code` int(11) DEFAULT NULL,
  `harm_event_desc` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `towed_away` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `airbag_deployed` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `hit_and_run` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `speed_limit` int(11) DEFAULT NULL,
  PRIMARY KEY (`report_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_data`
--

LOCK TABLES `vehicle_data` WRITE;
/*!40000 ALTER TABLE `vehicle_data` DISABLE KEYS */;
INSERT INTO `vehicle_data` VALUES ('AA01280003','1N4BA41E64C905442',1,'Other Vehicle','N','N','Y',40),('AC1586000T','1GCRKREA9BZ291295',3,'Wildlife','N','N','N',25),('AC16330014','1FTRX17L41NB05864',1,'Other Vehicle','N','N','N',25),('ADJ590001Y','2HKRM4H57GH664165',1,'Other Vehicle','N','N','N',35),('ADJ8180008','1FALP54P1PA317454',9,'Fixed Object','Y','N','N',30),('AE437900D1','KNDJC736475703229',1,'Other Vehicle','Y','N','N',55),('AE5486002C','JTDKB20U853032704',9,'Fixed Object','Y','N','N',40),('BJ0163000L','1G1PE5SBXG7207002',1,'Other Vehicle','Y','N','N',25),('BS0486001L','1MEFM41125G612209',9,'Fixed Object','N','N','N',35),('CB46120002','JF2SH63699H719574',3,'Wildlife','N','Y','N',55),('CB58870010','2G1WD58C969265548',1,'Other Vehicle','N','Y','N',35),('CT82280001','3HAMNAAL1BL407473',10,'Waterway','N','Y','N',45),('DA3408001S','1HGFA16816L115046',1,'Other Vehicle','Y','Y','N',25),('DV0133000J','1GCFG15WXX1150551',1,'Other Vehicle','Y','Y','N',5),('EE0094000V','JHMES966X4S01220',9,'Fixed Object','N','N','Y',55),('MCP1500001G','2GNFLFEKXG6190932',6,'Pedestrian','N','N','N',40),('MCP2921001B','5TDYK3DC7S6001625',1,'Other Vehicle','N','N','Y',0),('MSP02000005','3VW2K7AJ0FM242373',9,'Fixed Object','N','N','N',30),('MSP2951001T','WAUHGAFC0EN055335',6,'Pedestrian','Y','Y','N',55),('MSP48890002','1GNKVGKD6FJ249903',5,'Overturn','Y','Y','N',40),('MSP5416002L','KNAGD128625149771',1,'Other Vehicle','N','N','N',35),('MSP5458001S','2T1BURHE1FC466410',3,'Wildlife','Y','N','N',30),('MSP57430059','JTDBE32K530231099',1,'Other Vehicle','N','Y','N',15),('MSP5930001L','4T1BE32KX4U848388',9,'Fixed Object','Y','Y','N',40),('MSP6003001R','3VWJP7AT2CM642538',3,'Wildlife','N','Y','N',25),('MSP6043003T','JN1AZ4EH0BM553438',2,'Parked Vehicle','Y','N','N',25),('MSP6065002P','1B3LC46K98N126264',1,'Other Vehicle','N','Y','N',40),('MSP60660031','2HGFB2F51CH573705',1,'Other Vehicle','Y','Y','N',25),('MSP62540012','5N4EB4AC1CH502216',1,'Other Vehicle','N','N','N',25),('MSP6269006C','3AKJGLD62ESFV6302',1,'Other Vehicle','N','Y','N',25),('MSP6354002R','3FA6P0K94DR198661',2,'Parked Vehicle','N','Y','N',5),('MSP6379002R','JTEES42A882015774',3,'Wildlife','Y','N','N',0),('MSP65010019','3A4FY58B56T304484',1,'Other Vehicle','Y','Y','N',55),('MSP6534001H','1N4AL3AP7FN908262',8,'Bicycle','Y','N','N',45),('MSP6680000V','JTMWFREV7GJ061514',3,'Wildlife','Y','Y','N',55),('ZA05300010','JF1ZNAA16G9708951',1,'Other Vehicle','N','N','Y',15),('ZD4930001P','5FYH4YU149B038289',1,'Other Vehicle','N','Y','N',50),('ZD6258000D','2D8HN54129R611771',11,'Fell/Jumped from Motor Vehicle','Y','Y','N',35),('ZF0487001K','1C3CDZB7DN740726',9,'Fixed Object','N','N','N',55),('ZG0932000P','KNDJD733855424480',1,'Other Vehicle','N','N','N',25),('ZH04220009','1FTSF20R78ED44182',1,'Other Vehicle','Y','Y','N',15),('ZH05480012','1C3CDZCB1DN681396',1,'Other Vehicle','Y','N','N',25),('ZJ0502001D','5NPET4AC9AH586652',9,'Fixed Object','Y','N','N',55),('ZK0209001T','2T1BURHE2EC192343',9,'Fixed Object','Y','N','N',30),('ZL11000005','1D3HB18T19S763056',3,'Wildlife','Y','Y','N',65),('ZR0091001L','3D4GG57VX9T200301',1,'Other Vehicle','N','N','N',25),('ZU6482000M','1GCEK14K9RE120686',3,'Wildlife','N','N','Y',25),('ZVW2680016','1FMCU9G96FUA93355',12,'Offroad','N','Y','N',0);
/*!40000 ALTER TABLE `vehicle_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weather_conditions`
--

DROP TABLE IF EXISTS `weather_conditions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weather_conditions` (
  `weather_id` int(11) NOT NULL,
  `weather_desc` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`weather_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weather_conditions`
--

LOCK TABLES `weather_conditions` WRITE;
/*!40000 ALTER TABLE `weather_conditions` DISABLE KEYS */;
INSERT INTO `weather_conditions` VALUES (1,'Clear'),(2,'Partly Cloudy'),(3,'Cloudy'),(4,'Raining'),(5,'Snowing'),(6,'Sleet'),(7,'High Winds');
/*!40000 ALTER TABLE `weather_conditions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `weather_crash_count`
--

DROP TABLE IF EXISTS `weather_crash_count`;
/*!50001 DROP VIEW IF EXISTS `weather_crash_count`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `weather_crash_count` AS SELECT 
 1 AS `Weather Description`,
 1 AS `COUNT(weather_desc)`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `avg_speed`
--

/*!50001 DROP VIEW IF EXISTS `avg_speed`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `avg_speed` AS select `collision_type`.`collision_desc` AS `Collision Type`,format(avg(`vehicle_data`.`speed_limit`),2) AS `Average Speed Limit per Crash` from ((`vehicle_data` join `crash_information` on((`vehicle_data`.`report_id` = `crash_information`.`report_id`))) join `collision_type` on((`crash_information`.`collision_type_id` = `collision_type`.`collision_type_id`))) group by `collision_type`.`collision_desc` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `collision_v_culp`
--

/*!50001 DROP VIEW IF EXISTS `collision_v_culp`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `collision_v_culp` AS select `collision_type`.`collision_desc` AS `Collision Description`,`driver_demographics`.`sex_code` AS `Gender`,`driver_culpability`.`culpability_desc` AS `Culpability` from (((`crash_information` join `driver_demographics` on((`crash_information`.`person_id` = `driver_demographics`.`person_id`))) join `driver_culpability` on((`driver_demographics`.`culpability_id` = `driver_culpability`.`culpability_id`))) join `collision_type` on((`crash_information`.`collision_type_id` = `collision_type`.`collision_type_id`))) where ((`driver_demographics`.`culpability_id` = 1) or (`driver_demographics`.`culpability_id` = 3)) order by `driver_culpability`.`culpability_desc` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `hit_and_runs`
--

/*!50001 DROP VIEW IF EXISTS `hit_and_runs`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `hit_and_runs` AS select `lighting`.`light_desc` AS `light_desc`,count(`vehicle_data`.`hit_and_run`) AS `Number of Hit and Runs` from ((`lighting` join `crash_information` on((`lighting`.`light_code` = `crash_information`.`light_code`))) join `vehicle_data` on((`crash_information`.`report_id` = `vehicle_data`.`report_id`))) where (`vehicle_data`.`hit_and_run` = 'Y') group by `lighting`.`light_desc` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `two_car_collisions`
--

/*!50001 DROP VIEW IF EXISTS `two_car_collisions`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `two_car_collisions` AS select `crash_information`.`report_id` AS `report_id`,`l`.`county_name` AS `county_name`,`crash_information`.`report_type` AS `report_type`,`t`.`collision_desc` AS `collision_desc` from ((`crash_information` join `crash_location` `l` on((`crash_information`.`location_id` = `l`.`location_id`))) join `collision_type` `t` on((`crash_information`.`collision_type_id` = `t`.`collision_type_id`))) where `crash_information`.`report_id` in (select `ci`.`report_id` from (`crash_information` `ci` join `vehicle_data` on((`ci`.`report_id` = `vehicle_data`.`report_id`))) where (`vehicle_data`.`harm_event_code` = 1)) order by `crash_information`.`report_type`,`t`.`collision_desc` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `weather_crash_count`
--

/*!50001 DROP VIEW IF EXISTS `weather_crash_count`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `weather_crash_count` AS select `weather_conditions`.`weather_desc` AS `Weather Description`,count(`weather_conditions`.`weather_desc`) AS `COUNT(weather_desc)` from (`crash_information` join `weather_conditions` on((`crash_information`.`weather_id` = `weather_conditions`.`weather_id`))) group by `weather_conditions`.`weather_desc` having (count(`weather_conditions`.`weather_desc`) > 5) order by count(`weather_conditions`.`weather_desc`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-13 12:07:23
