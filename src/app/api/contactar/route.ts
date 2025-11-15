export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Llamada a tu backend FastAPI
    const response = await fetch("http://localhost:8000/contactar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return Response.json(data, {
      status: response.status,
    });
  } catch (error) {
    return Response.json(
      {
        error: "Error conectando con FastAPI",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
