

# MYSQL SYNTAX

## Rename database:

```
RENAME DATABASE old_database_name TO new_database_name;   
```
 

## Create Database
```
CREATE DATABASE <db_name>;
```

## Alter Table

- Alter table (rename any columns, delete column, add new column, update data type of any column)
### Add Column

```
ALTER TABLE table_name
ADD column_name datatype;
```

### Rename column
```
ALTER TABLE tableName CHANGE oldcolname newcolname datatype(length);
```
### Delete column
```
ALTER TABLE table_name
DROP COLUMN column_name;
```
#### Drop multiple Column
```
ALTER TABLE table_name
DROP COLUMN column_name_1,
DROP COLUMN column_name_2,
...;
```
### Modify column data type
```
ALTER TABLE table_name    
MODIFY column_name datatype;  
```