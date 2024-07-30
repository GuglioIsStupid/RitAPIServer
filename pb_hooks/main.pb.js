routerAdd("get", "/hello/:name", (c) => {
    const name = c.pathParam("name")

    const html = $template.loadFiles(
        `${__hooks}/views/layout.html`,
        `${__hooks}/views/hello.html`,
    ).render({
        "name": name,
    })

    return c.html(200, html)
})
