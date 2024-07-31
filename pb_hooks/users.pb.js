routerAdd("get", "/api/users", async (c) => {
    try {
        // Fetch users from the database
        var result = []
        $app.dao().db()
            .newQuery("SELECT username FROM users LIMIT 100")
            .all(result) // throw an error on db failure

        console.log(JSON.stringify(result, null, 2))
    } catch (error) {
        console.error("Error fetching users:", error);

        // Send an error response
        c.json(400, {
            status: "error",
            message: "Failed to fetch users"
        });
    }
});