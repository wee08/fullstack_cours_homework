-- create table
create table if not exists product (
pro_id varchar (10) primary key not null ,
pro_name varchar(100) not null,
pro_price decimal(10,2) not null,
import_date date not null
)

-- insert data into table
-- select \* from product p;
-- insert into product (pro_id,pro_name,pro_price,import_date)
-- values
-- ("P01","Volley Ball",15.99,"2025-01-10"),
-- ("P02","Basket Ball",15.99,"2025-01-10"),
-- ("P03","Tennis Ball",15.99,"2025-01-10"),
-- ("P04","BaseBall",150.99,"2025-01-10"),
-- ("P05","Goal keeper glove",20.09,"2025-01-10"),
-- ("P06","Boot",200.99,"2025-01-10"),
-- ("P07","Socker Ball",15.99,"2025-01-10"),
-- ("P08","Net",15.99,"2025-01-10"),
-- ("P09","Rocket",15.99,"2025-01-10"),
-- ("P10","Baseball glove",79.99,"2025-01-10");

-- update product
-- update product p
-- set import_date = "2026-10-29" where p.pro_id = "P01";
