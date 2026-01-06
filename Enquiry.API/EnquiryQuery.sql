create database Enquiry

create table EnquiryStatus(
statusId int primary key identity(1,1),
status varchar(50)
)

create table EnquiryType(
typeId int primary key identity(1,1),
typeName varchar(50) not null)

create table Enquiry(
enquiryId int primary key identity(1,1),
enquiryTypeId int references EnquiryType(typeId) not null,
enquiryStatusId int references EnquiryStatus(statusId) not null,
customerName varchar(50) not null,
mobileNo varbinary(10) not null,
email varchar(50),
message varchar(2000) not null,
createdDate datetime not null,
resolution varchar(1000)
)

insert into  EnquiryType values('Wedding')
insert into  EnquiryType values('Birthday')