using System;
using MySql.Data.MySqlClient;
using Classes;

namespace Classes
{
    public class RepositoryContext
    {
        public string ConnectionString { get; set; }
        public RepositoryContext(string connectionString)
        {
            this.ConnectionString = connectionString;
        }

        public MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }
    }
}
