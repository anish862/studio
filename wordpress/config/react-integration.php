
<?php
/**
 * This file previously contained theme customization options.
 * These have been replaced by Advanced Custom Fields (ACF)
 * for more flexible content management.
 *
 * The `irismorphe_customize_register` function is kept
 * but intentionally left empty to avoid errors if other
 * parts of the theme (or plugins) still expect it.
 */
function irismorphe_customize_register($wp_customize) {
    // No customizer options needed here anymore.
    // Content is managed via ACF fields on pages or options pages.
}

add_action('customize_register', 'irismorphe_customize_register');

/**
 * Enable CORS for the REST API to allow requests from the Next.js frontend.
 * Adjust the origin '*' to your specific frontend URL in production for security.
 */
add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        // Define allowed origins
        $allowed_origins = [
            'http://localhost:9002', // Next.js dev server
            'http://localhost:3000', // Default Next.js port
            // Add your production frontend URL here:
            // 'https://your-frontend-domain.com',
        ];
        $origin = get_http_origin();

        // Check if the origin is allowed
        if ($origin && in_array($origin, $allowed_origins)) {
             header('Access-Control-Allow-Origin: ' . esc_url_raw($origin));
        } elseif (!$origin) {
             // Allow requests with no origin (e.g., server-side requests or tools like Postman)
             // In production, you might want to be stricter.
             header('Access-Control-Allow-Origin: *'); // Be cautious with '*' in production
        } else {
            // Origin not allowed
             // Optionally log disallowed origins or return an error
             // error_log('CORS rejected for origin: ' . $origin);
            // To block, simply don't set the header or explicitly deny:
             // header('Access-Control-Allow-Origin: null');
             // For now, let's allow '*' if not explicitly matched (adjust for production)
              header('Access-Control-Allow-Origin: *');
        }


        header('Access-Control-Allow-Methods: GET'); // Allow only GET requests for page data
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Headers: Authorization, Content-Type, X-WP-Nonce'); // Add any other headers your frontend might send
        return $value;
    });
}, 15); // Higher priority to potentially override other CORS settings
 
    