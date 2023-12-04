create table visitor (
	id int not null primary key auto_increment,
    name varchar(10) not null,
    comment mediumtext
);

insert INTO visitor VALUES (NULL, '홍길동', '내가 왔다.');
insert INTO visitor values (NULL, '이찬혁', '으라차차');

select * from visitor;


select * from mysql.user;

set global validate_password.policy=LOW;
show variables like 'validate_password%';

create user 'user'@'localhost' identified by '12345678';
grant all privileges on *.* to 'user'@'localhost' with grant option;
flush privileges;

create user 'user1'@'localhost' identified by 'user1234';
grant all privileges on *.* to 'user1'@'localhost' with grant option;
flush privileges;

select * from mysql.user;