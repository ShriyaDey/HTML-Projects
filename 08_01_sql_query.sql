create table Students(
	studid int,
	firstname varchar(20),
	lastname varchar(20),
	address varchar(20),
	city varchar(10)
);
insert into Students(studid,firstname,lastname,address,city) values(1,'Ajay','Mishra','Talwade','Pune');
select * from Students;
update Students set city='Mumbai' where studid=1;
insert into Students(studid,firstname,lastname,address,city) values(2,'jeena','Maan','hinjewadi','Pune');
delete from Students where studid=2;
update Students set marks=80 where studid=2;
select max(marks) from Students; --Aggregate function
ALTER TABLE Students ADD Email varchar(255); --add new column
alter table Students drop column EMAIL; --drop column
select min(marks) from Students;

--where clause
select * from Students where marks>70;
--order by
select * from Students order by marks desc;





