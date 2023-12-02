create table user (
	id int not null primary key auto_increment,
    userid varchar(20) not null,
    name varchar(10) not null,
    pw varchar(20) not null
);

insert INTO user VALUES (NULL, 'cjleo', '최진', '1234');
insert into user values (null, 'coolman', '최시원', '1234');
insert into user values (null, 'cjdrnsdl', '청군', '1234');

select * from user;

select * from mysql.user;