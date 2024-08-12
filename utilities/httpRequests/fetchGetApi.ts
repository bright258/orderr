export async function GetOneUserDetailsFromAPIGetRoute(userId: string){
    const response = await fetch(`${process.env.EXPO_PUBLIC_BACKEND_URL}/auth/${userId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
      })
     return await response.json()
}