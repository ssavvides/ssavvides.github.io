---
layout: post
title:  "An exploration of the snowflake data warehouse"
date: '2022-01-22'
category:
    - data warehouse
    - snowflake
permalink: /blog/exploring-snowflake-data-warehouse/
---

## Overview

Snowflake is a data warehouse tool.

- Snowflake stores its data in the cloud using a compressed columnar format
- Data is only accessible though SQL queries
- It supports a number of connectors, including Python, Spark, and others
- Supports importing/exporting data from various formats such as CSV, JSON, Avro, Parquet, XML, and many others
- Data is stored in the following structure: Database --> Schema --> Table

### Snowflake Connector for Python

#### Install snowflake connector

You can follow the instructions here to install the connector:
[Install python snowflake connector](https://docs.snowflake.com/en/user-guide/python-connector-install.html)

The basic steps are:

A. Install the python package

If you want to use snowflake with pandas use

```bash
pip install snowflake-connector-python[pandas]
```

else

```bash
pip install snowflake-connector-python
```

B. Verify connector works by running

```python
import snowflake.connector

# Gets the version
ctx = snowflake.connector.connect(
    user='<user_name>',
    password='<password>',
    account='<account_identifier>'
    )
cs = ctx.cursor()
try:
    cs.execute("SELECT current_version()")
    one_row = cs.fetchone()
    print(one_row[0])
finally:
    cs.close()
ctx.close()
```

Replace `<user_name>` and `<password>` with the credentials you use to log in to your snowflake account.

The tricky part is the `<account_identifier>` which you can get as follows:
1. Login to your snowflake account at https://app.snowflake.com
2. Navigate to "Organization" tab
3. Copy the _entire_ Locator URL (e.g., `https://hu66291.us-east-1.aws.snowflakecomputing.com`) and 
remove the protocol and the snowflake domain to get the required account identifier (e.g., `hu66291.us-east-1.aws`)

If you only use `hu66291` then the `snowflake.connector.connect` function hangs. If you use the
entire `https://hu66291.us-east-1.aws.snowflakecomputing.com` you will get an error.


#### Load a snowflake table into a pandas dataframe

```python
import snowflake.connector

with snowflake.connector.connect(
        user='<user_name>',
        password='<password>',
        account='<account_identifier>',
        database='<database>',
        schema='<schema>',
        validate_default_parameters=True
) as snowflake_connection:
    table = '<table>'
    sql_query = f"SELECT * from {table}"
    df = snowflake_connection.cursor().execute(sql_query).fetch_pandas_all()
```

The `sql_query` shown above can be adjusted as needed.
