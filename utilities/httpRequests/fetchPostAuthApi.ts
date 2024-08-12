export async function apiFetcherForSignUpAndSignIn(payload: {}, route: string){
    const response = await fetch(`${process.env.EXPO_PUBLIC_BACKEND_URL}/auth/${route}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
        },
        body: JSON.stringify(payload),
    });
    return await response.json();
}