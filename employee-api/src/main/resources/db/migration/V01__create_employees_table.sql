CREATE TABLE employee(
    id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    nis_pis VARCHAR(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `employee`(`name`, `last_name`, `email`, `nis_pis`) VALUES ("Yury","Alencar Lima","yuryalencar19@gmail.com","12345678910");
INSERT INTO `employee`(`name`, `last_name`, `email`, `nis_pis`) VALUES ("Juliana","Mareco Medeiros","julianamareco18@gmail.com","12345678910");
INSERT INTO `employee`(`name`, `last_name`, `email`, `nis_pis`) VALUES ("Lucas","da Silva Corrêa","eslucascorrea@gmail.com","12345678910");