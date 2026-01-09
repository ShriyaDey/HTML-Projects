create table EmpInfo(
	emp_id int primary key,
	emp_name varchar(20),
	p_id int
);
create table PersInfo(
	p_id int primary key,
	p_name varchar(20) not null,--p_name is role 
	city varchar(20)
);
insert into EmpInfo values(1,'Ajay',10);
insert into EmpInfo values(5,'Jaya',30),(2,'Aman',20),(3,'Sheetal',15),(4,'Jay',25);
 
insert into PersInfo values(10,'Admin','Pune'),(30,'HR','BLR'),(20,'Tester','DL'),(15,'Developer','Pune'),(25,'Admin','HYD');
 
select * from EmpInfo;
select * from PersInfo;
 
--inner join
select e.emp_id,e.emp_name,p.p_id,p.p_name,p.city from EmpInfo e inner join PersInfo p on e.p_id=p.p_id;
select e.emp_name,p.p_id,p.p_name from EmpInfo e inner join PersInfo p on e.p_id=p.p_id;

--left join
select e.emp_name,p.p_id,p.p_name from EmpInfo e left join PersInfo p on e.p_id=p.p_id;

--right join
select e.emp_name,p.p_id,p.p_name from EmpInfo e right join PersInfo p on e.p_id=p.p_id;

--cross join
select e.emp_name,p.p_id,p.p_name from EmpInfo e cross join PersInfo p;
