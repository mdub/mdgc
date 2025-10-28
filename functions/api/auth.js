export async function onRequest(context) {
    const {
        request,
        env,
    } = context;

    const client_id = env.GITHUB_CLIENT_ID;

    // Debug: check if client_id is available
    if (!client_id) {
        return new Response('GITHUB_CLIENT_ID environment variable not set', {
            status: 500,
        });
    }

    try {
        const url = new URL(request.url);
        const redirectUrl = new URL('https://github.com/login/oauth/authorize');
        redirectUrl.searchParams.set('client_id', client_id);
        redirectUrl.searchParams.set('redirect_uri', url.origin + '/api/callback');
        redirectUrl.searchParams.set('scope', 'repo user');
        redirectUrl.searchParams.set(
            'state',
            crypto.getRandomValues(new Uint8Array(12)).join(''),
        );
        return Response.redirect(redirectUrl.href, 301);

    } catch (error) {
        console.error(error);
        return new Response('Error: ' + error.message, {
            status: 500,
        });
    }
}
