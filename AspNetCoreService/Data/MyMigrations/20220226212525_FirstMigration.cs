using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AspNetCoreService.Data.MyMigrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    PostId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Content = table.Column<string>(type: "nvarchar(max)", maxLength: 100000, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.PostId);
                });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "PostId", "Content", "Title" },
                values: new object[,]
                {
                    { 1, "This is post 1 my interesting post", "post 1" },
                    { 2, "This is post 2 my interesting post", "post 2" },
                    { 3, "This is post 3 my interesting post", "post 3" },
                    { 4, "This is post 4 my interesting post", "post 4" },
                    { 5, "This is post 5 my interesting post", "post 5" },
                    { 6, "This is post 6 my interesting post", "post 6" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Posts");
        }
    }
}
