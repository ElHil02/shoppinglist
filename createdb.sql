create database shoppinglist;

use shoppinglist;

create table item (
    id int primary key auto_increment,
    description varchar(225) not null,
    amount smallint unsigned not null
);

insert into item (description,amount) values ('Test item A', 1);
insert into item (description,amount) values ('Test item B', 2);
insert into item (description,amount) values ('Test item C', 3);