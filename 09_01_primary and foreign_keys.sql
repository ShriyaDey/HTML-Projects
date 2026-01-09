create table emp(
	emp_id int primary key, --using primary key 
	emp_name varchar(20),
	emp_address varchar(20),
	p_id int unique
);
insert into emp values(1,'Ajay','Talwade,Pune',11);
insert into emp values(2,'Amit','Talwade,Pune',12),(3,'Jyoti','BLR',20),(4,'Preeti','HYD',22),(5,'Hina','Bhopal',25);
-- insert into emp values(1,'Amit','Moshi,Pune',13); will give error as emp_id is primary key, cannot have duplicate.
-- insert into emp values(null,'amit','pune',13); will give error as primary key cannot contain hull value.

select * from emp;

-- dept table is child table of parent table emp
create table dept(
	dept_id int primary key,
	dept_name varchar(20),
	p_id int,
	foreign key (p_id) references emp(p_id)
);

insert into dept values(01,'IT',11),(02,'CPFG',22),(03,'Managemnet',20),(04,'DevOps',25);

select * from dept;