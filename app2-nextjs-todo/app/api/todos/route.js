let todos = [
  { id: 1, title: "Learn Next.js" },
  { id: 2, title: "Build a Todo App" },
  { id: 3, title: "Master React" }
];

export async function GET() {
    return Response.json(todos)
}

export async function POST(request) {
    const body = await request.json()
    const { title } = body;
    const newTodo = {
        id: Date.now(),
        title,
    }
    todos.push(newTodo);
    return Response.json(newTodo)
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const idParam = searchParams.get("id");
  if (!idParam) {
    return new Response(JSON.stringify({ error: "Missing id parameter" }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  const id = Number(idParam);
  if (isNaN(id)) {
    return new Response(JSON.stringify({ error: "Invalid id parameter" }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  const initialLength = todos.length;
  todos = todos.filter(todo => todo.id !== id);
  if (todos.length === initialLength) {
    return new Response(JSON.stringify({ error: "Todo not found" }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return Response.json({ success: true, todos });
}