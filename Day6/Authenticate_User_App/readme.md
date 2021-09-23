

# NO SQL
## DEFINITION
- NoSQL databases are purpose built for specific data models and have flexible schemas for building modern applications. NoSQL databases are widely recognized for their ease of development, functionality, and performance at scale
## HOW DOES IT WORK?
- NoSQL databases use a variety of data models for accessing and managing data.
- Optimized specifically for applications that require large data volume, low latency, and flexible data models
  * -->Achieved by relaxing some of the data consistency restrictions of other databases.

## WHY NoSQL?
- NoSQL databases are a great fit for many modern applications such as mobile, web, and gaming that require flexible, scalable, high-performance, and highly functional databases to provide great user experiences.
  + __Flexibility__: NoSQL databases generally provide flexible schemas that enable faster and more iterative development. The flexible data model makes NoSQL databases ideal for semi-structured and unstructured data.
  + __Scalability__: NoSQL databases are generally designed to scale out by using distributed clusters of hardware instead of scaling up by adding expensive and robust servers. Some cloud providers handle these operations behind-the-scenes as a fully managed service.
  + __High-performance__: NoSQL database are optimized for specific data models and access patterns that enable higher performance than trying to accomplish similar functionality with relational databases.
  + __Highly functional__: NoSQL databases provide highly functional APIs and data types that are purpose built for each of their respective data models.

# SQL
## DEFINITION
- SQL (Structured Query Language) is a standardized programming language that's used to manage relational databases and perform various operations on the data in them
- SQL is regularly used not only by database administrators, but also by developers writing to set up and run analytical queries:
  *  data integration scripts 
  *  data analysts looking
## USAGE
- The uses of SQL include modifying database table and index structures; adding, updating and deleting rows of data; and retrieving subsets of information from within a database for transaction processing and analytics applications. Queries and other SQL operations take the form of commands written as statements -- commonly used SQL statements include select, add, insert, update, delete, create, alter and truncate.

#  SQL & NoSQL
| Data Storage Model     | SQL Databases | NoSQL Databases   |
| :---        |    :----   |          :--- |
| Data Storage Model  | Tables with fixed rows and columns  | Document: JSON documents, <br>Key-value: key-value pairs, <br>Wide-column: tables with rows<br> and dynamic columns,<br> Graph: nodes and edges   |
| Development History   | Developed in the 1970s with a <br>focus on reducing data duplication | Developed in the late 2000s<br> with a focus on scaling and allowing for<br> rapid application change driven <br>by agile and DevOps practices.  |
| Examples  | Oracle, MySQL, Microsoft SQL Server, <br>and PostgreSQL  | Document: MongoDB and CouchDB,<br> Key-value: Redis and DynamoDB, <br>Wide-column: Cassandra and HBase,<br> Graph: Neo4j and Amazon Neptune |
| Primary Purpose |General purpose | Document: general purpose,<br> Key-value: large amounts of data <br>with simple lookup queries, <br>Wide-column: large amounts of data<br> with predictable query patterns,<br> Graph: analyzing and traversing<br> relationships between connected data |
| Schemas | Rigid | Flexible|
| Scaling | Vertical (scale-up with a larger server) | Horizontal (scale-out across <br>commodity servers)|
| Multi-Record ACID<br> Transactions | Supported | Most do not support<br> multi-record ACID transactions. <br>However, some—like MongoDB—do.|
| Joins| Typically required | Typically not required|
| Data to Object Mapping| Requires ORM (object-relational<br>  mapping) |Many do not require ORMs.<br> MongoDB documents map directly<br> to data structures in<br> most popular programming languages.
|

# Mongoose DB
