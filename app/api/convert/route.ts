import axios from "axios";

export async function POST(request: Request) {
    const data = await request.json()
    if (!data['svgData']) return Response.json({
        error: 'data is not valid',
        status: false,
    }, {status: 400,})

    const response = await axios.post(`${process.env.API_URL}/convert`, {
        svgData: data.svgData,
        name: data?.name ?? ''
    }, {
        headers: {
            // Overwrite Axios's automatically set Content-Type
            'Content-Type': 'application/json'
        }
    })

    return Response.json(response.data)
}
