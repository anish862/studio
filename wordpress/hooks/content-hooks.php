<?php
/**
 * Registers a custom REST route to expose page data based on a page key.
 */
add_action('rest_api_init', 'irismorphe_register_page_data_route');

function irismorphe_register_page_data_route() {
    register_rest_route(
        'irismorphe/v1',
        '/page-data',
        array(
            'methods'  => 'GET',
            'callback' => 'irismorphe_get_page_data',
            'args'     => array(
                'page_key' => array(
                    'validate_callback' => function ($param, $request, $key) {
                        return is_string($param);
                    },
                    'sanitize_callback' => 'sanitize_text_field',
                    'required'          => true,
                ),
            ),
        )
    );
}

/**
 * Retrieves page data based on the provided page key.
 *
 * @param WP_REST_Request $request The REST request object.
 * @return WP_REST_Response The REST response containing the page data.
 */
function irismorphe_get_page_data(WP_REST_Request $request) {
    $page_key = $request->get_param('page_key');
    $data     = array();

    switch ($page_key) {
        default:
            return new WP_Error('no_data', 'No data found for this page key.', array('status' => 404));
    }

    $response = new WP_REST_Response($data);
    $response->set_status(200);

    return $response;
}
