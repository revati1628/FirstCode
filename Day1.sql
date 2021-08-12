create database studentDB;

create table student(
sid int auto_increment,
firstName VARCHAR(10),
lastName VARCHAR(20),
primary key(sid)
);

desc student;
select*from student;
select * from student where sid=1;
select * from student where firstName='Taruni';
insert into student(sid,firstName,lastName) values(1,'the','rock');
insert into student values(4,'Taruni','Redy');
insert into student values(6,'asdfg',null);